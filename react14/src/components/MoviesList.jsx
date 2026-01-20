import { useEffect, useState } from "react";
import Movie from "./Movie";
import MovieAdd from "./MovieAdd"

function MoviesList() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState("");

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3000/movies")
            if (!response.ok) {
              throw new Error("Eror in list");
            } 
            const result = await response.json();
            
      setMovies(result);
        } catch (error) {
            setError(error.message);
            
        }
    }

    useEffect(() => {   
    fetchData();
  }, []);

    return(
        <>
        <main>
            {error}
            <div className="ml-10 mb-10 border border-2"><MovieAdd fetchData= {fetchData}/></div>
            <div>
                <div className="grid grid-cols-6">
            <p>Title</p>
            <p>Genre</p>
            <p>Year</p>
            <p>Rating</p>
            <p></p>
            <p></p>
</div>
            {movies.map((movie) => (
            <Movie movie={movie} key={movie.id} fetchData= {fetchData}/>
            ))}
            </div>
        </main>
        </>
    )
} export default MoviesList