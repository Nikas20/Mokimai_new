import { useForm } from "react-hook-form";
import { postData } from "../services/post";
function MovieAdd({fetchData}) {
  const {
    register,
    handleSubmit,
    reset,
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

    try {
      const postedDate = await postData(FormData)

      if (postedDate) alert("Post successfull")
        
        reset()
        fetchData()
       
    } catch (error) {
      console.log(error.message);
    }
  };

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
export default MovieAdd;
