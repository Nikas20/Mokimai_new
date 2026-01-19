import { useForm } from "react-hook-form";
function MovieAdd() {
    
    
    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title:"",
      genre:"",
      year:"",
      rating:1
    },
  });

  const formSubmitHandler = async (FormData) => {
    console.log(FormData);

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(FormData)
    }

    try {
        const response = await fetch(
            "http://localhost:3000/movies",
           requestOptions 
        )
        if (response.ok) {
        alert("Success");
        } else {
        throw Error("eerro");
    }
    } catch (error) {
        console.log(error.message);
    }
    
    
  }
  
  reset()
    return(
    <>
    <form onSubmit={handleSubmit(formSubmitHandler)}>
<label htmlFor="title">title</label>
        <input type="text" name="title" {...register("title")}/>
<label htmlFor="genre">genre</label>
        <input type="text" name="genre" {...register("genre")}/>
<label htmlFor="year">year</label>
        <input type="text" name="year" {...register("year")}/>
<label htmlFor="rating"></label>
        <input type="text" name="rating" {...register("rating")}/>

        <input type="submit" value="Add" className="float-end mr-5 bg-blue-600 text-white px-5 py-2 rounded-4xl"/>
    </form>
    </>
    )
} export default MovieAdd