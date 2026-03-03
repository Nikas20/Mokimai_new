import aiofiles
from contextlib import asynccontextmanager
from fastapi import FastAPI, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy import text, Integer, String, Float, Boolean, select
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncSession  
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column

class Base(DeclarativeBase):
    pass

class UserProfile (Base):
    __tablename__ = "user_profiles"
 
    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True, index=True)
    first_name: Mapped[str] = mapped_column(String,  nullable=False)
    last_name: Mapped[str] = mapped_column(String,  nullable=False)
    email: Mapped[str] = mapped_column(String,  nullable=False)
    age: Mapped[int] = mapped_column(Integer,  nullable=False)
    city: Mapped[str] = mapped_column(String,  nullable=True)

class UserProfileCreate(BaseModel):
    first_name: str
    last_name: str
    email: str
    age: int
    city: str 

    model_config = {
        "from_attributes": True
    }

DATABASE_URL = "sqlite+aiosqlite:///./users.db"
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


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("index:app", reload=True)