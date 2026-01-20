import { useEffect } from "react";
import { useForm } from "react-hook-form";
function MovieEdit({movie}) {
    const {id, title, genre, year, rating} = movie
    const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      genre: "",
      year: "",
      rating: 1,
    },
  });

  const formSubmitHandler = async (FormData) => {
    console.log(FormData);

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(FormData),
    };

    try {
      const response = await fetch(
        "http://localhost:3000/movies" + id,
        requestOptions,
      );
      if (response.ok) {
        alert("Success");
        reset();

      } else {
        throw Error("eerro");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(()=> {
    setValue("title", title)
    setValue("genre", genre)
    setValue("year", year)
    setValue("rating", rating)
  },[title,genre,year,rating,setValue])

  return (
    <>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <label htmlFor="title">title</label>
            <input type="text" name="title" {...register("title")} />
          </div>
          <div>
            <label htmlFor="genre">genre</label>
            <input type="text" name="genre" {...register("genre")} />
          </div>
          <div>
            <label htmlFor="year">year</label>
            <input type="text" name="year" {...register("year")} />
          </div>
          <div>
            <label htmlFor="rating">Rating</label>
            <input type="text" name="rating" {...register("rating")} />
          </div>
        </div>

        <input
          type="submit"
          value="Add"
          className="float-end mr-5 bg-blue-600 text-white px-5 py-2 rounded-4xl"
        />
      </form>
    </>
  );
} 

export default MovieEdit