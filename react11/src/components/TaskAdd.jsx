import { useForm } from "react-hook-form";
function TaskAdd({fetchData, closeModal}) {

const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taskName: "",
      priority: "",
      status:0
    },
  });

  const formSubmitHandler = async (FormData) => {
    console.log(FormData);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(FormData),
    };

    try {
        const response = await fetch(
            "http://localhost:3000/tasks",
            requestOptions
        )
         if (response.ok) {
        alert("Success");
        fetchData();
        closeModal();
      } else {
        throw Error("eerro");
      }
    } catch (error) {
        console.log(error);
        
    }

    reset();
    
  }

    return(
        <>
        <div className="flex justify-between">
            <h2 className="text-2xl font-bold">Add Task</h2>
            <button>X</button>
        </div>
        <form onSubmit={handleSubmit(formSubmitHandler)}>
            <div>
            <div className="grid grid-cols-1">
            <label htmlFor="taskName">Task</label>
            <input type="text" {...register("taskName",{
                maxLength:{
                    value:20,
                    message:"To long"
                }
            })} placeholder="send article to editor" className="border "/>
            {/* <p>{errors.taskName.message}</p> */}
            </div>
            <div>
            <div>Priority</div>
            <div className="">
          <label className="bg-red-200 has-checked:bg-red-700  text-black has-checked:text-white px-2 py-1 mr-2 border-black">
            <input type="radio" value="hight" {...register("priority")} className="hidden"/>
            Hight
          </label>
          <label className="bg-yellow-200 has-checked:bg-yellow-700 text-black has-checked:text-white px-2 py-1 mr-2 border-black">
            <input type="radio" value="medium" {...register("priority")} className="hidden"/>
            Medium
          </label>
          <label className="bg-green-200 has-checked:bg-green-700 text-black has-checked:text-white px-2 py-1 mr-2 border-black">
            <input type="radio" value="low" {...register("priority")} className="hidden"/>
            Low
          </label >
          </div>
          <input type="hidden" name="status" value={0} {...register("status")} />
        </div>
</div>
            <input type="submit" value="Add" className="float-end mr-5 bg-blue-600 text-white px-5 py-2 rounded-4xl"/>
        </form>
        </>
    )
}
export default TaskAdd