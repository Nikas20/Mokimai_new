import aiofiles
from contextlib import asynccontextmanager
from fastapi import FastAPI, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy import text, Integer, String, Float, Boolean, select
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncSession  
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column

class Base(DeclarativeBase):
    pass

class Book(Base):
    __tablename__ = "books"
 
    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    title: Mapped[str] = mapped_column(String, nullable=False)
    author: Mapped[str] = mapped_column(String, nullable=False)
    year: Mapped[int] = mapped_column(Integer, nullable=False)
    genre: Mapped[str] = mapped_column(String, nullable=False)
    description: Mapped[str] = mapped_column(String, nullable=True)
    pages: Mapped[int] = mapped_column(Integer, nullable=False)
    price: Mapped[float] = mapped_column(Float, nullable=False)
    in_stock: Mapped[bool] = mapped_column(Boolean, nullable=False, default=True)

class BookCreate(BaseModel):
    title: str
    author: str
    year: int
    genre: str
    description: str | None = None
    pages: int
    price: float
    in_stock: bool = True


    model_config = {
        "from_attributes": True
    }

DATABASE_URL = "sqlite+aiosqlite:///./app.db"
engine = create_async_engine(DATABASE_URL, connect_args={"check_same_thread": False})

AsyncSessionLocal = async_sessionmaker(
    bind=engine,
    autoflush=False,
    expire_on_commit=False
)

@asynccontextmanager
async def lifespan(app: FastAPI):
    async with engine.begin() as conn:

        await conn.run_sync(Base.metadata.create_all) 

        result = await conn.execute(
            text("SELECT name FROM sqlite_master WHERE type='table' ORDER BY name;")
        )
        tables = result.all()
        print(f"Database initialized. Tables: {tables}")
        
    yield
    await engine.dispose()
    print("Database connection closed.")

async def get_db():
    async with AsyncSessionLocal() as db:
        yield db

app = FastAPI(lifespan=lifespan)

@app.post("/books", response_model=BookCreate, status_code=201)
async def create_book(book: BookCreate, db: AsyncSession = Depends(get_db)):
    """
    Sukuriamas naujas knygos įrašas. 
    Naudojamas response_model, kad išvengtume ResponseValidationError.
    """
    new_book = Book(**book.model_dump())

    db.add(new_book)
    await db.commit()
    await db.refresh(new_book)

    return new_book

@app.get("/books", response_model=list[BookCreate])
async def list_books(db: AsyncSession = Depends(get_db)):
    """Grąžina visų knygų sąrašą."""
    result = await db.execute(select(Book))
    books = result.scalars().all()
    return books

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", reload=True)
