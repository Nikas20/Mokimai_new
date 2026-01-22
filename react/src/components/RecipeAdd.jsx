import { useForm } from "react-hook-form";
import { postData } from "../services/post";
function RecipeAdd() {
    
     const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      img: "",
      category: "",
      ingredients: "",
      instructions: "",
    },
  });

  const formSubmitHandler = async (FormData) => {
    try{
      const postedData = await postData(FormData) 
      if (postedData) alert("Post successfull")
        reset()
        // fetchData()
    } catch (error) {
      console.log(error.message);
    }

    
  }

    return (
        <>
        <form onSubmit={handleSubmit(formSubmitHandler)}>
            <input type="text" {...register("name", { required: true })} />
            <input type="text" {...register("img", { required: true })} />
            <input type="text" {...register("category", { required: true })} />
            <input type="text" {...register("ingredients", { required: true })} />
            <input type="text" {...register("instructions", { required: true })} />
        </form>
        </>
    )
}
export default RecipeAdd;