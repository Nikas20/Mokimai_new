import { useForm } from "react-hook-form";
import { postData } from "../services/post";
function NameAdd() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name:""
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
        <input type="text" name="name" placeholder="Add player name" {...register("name")}/>
        <input type="submit" />
      </form>
    </>
  );
}
export default NameAdd;
