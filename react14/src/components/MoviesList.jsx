import { useEffect, useState } from "react";

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
            <div><MovieAdd/></div>
            <div>{movies.map((movie) => {
                <Movie movie={movie} key={movie.id} fetchData={fetchData}/>
            })}</div>
        </main>
        </>
    )
} export default MoviesList