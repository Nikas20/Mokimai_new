function Movie({ movie, fetchData }) {
  const deleteData = async (id) => {
    try {
      const response = await fetch("http://localhost:3000/movies/" + id, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Data deleted");
        fetchData();
      } else {
        throw new Error("Error deleting task");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <main>
        <div
          id="movie"
          key={movie.id}
          className="grid grid-cols-6 bg-white p-5 rounded-2xl"
        >
          <div>{movie.title}</div>
          <div>{movie.genre}</div>
          <div>{movie.year}</div>
          <div>{movie.rating}</div>
          <button className="bg-blue-600 text-white p-1 w-32 rounded-lg">
            Edit
          </button>
          <button
            onClick={() => deleteData(movie.id)}
            className="bg-blue-600 text-white p-1 w-32 rounded-lg"
          >
            Delite
          </button>
        </div>
      </main>
    </>
  );
}
export default Movie;
