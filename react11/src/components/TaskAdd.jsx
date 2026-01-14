import { useForm } from "react-hook-form";
function TaskAdd() {

const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taskName: "",
      priority: ""
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
        <div>
            <h2>Add Task</h2>
            <button>X</button>
        </div>
        <form onSubmit={handleSubmit(formSubmitHandler)}>
            <div>
            <div>
            <label htmlFor="taskName"></label>
            <input type="text" {...register("taskName",{
                maxLength:{
                    value:20,
                    message:"To long"
                }
            })}/>
            {/* <p>{errors.taskName.message}</p> */}
            </div>
            <div>
            <div>Choose your favorite color:</div>
          <label>
            <input type="radio" value="hight" {...register("priority")} />
            Hight
          </label>
          <label>
            <input type="radio" value="medium" {...register("priority")} />
            Medium
          </label>
          <label>
            <input type="radio" value="low" {...register("priority")} />
            Low
          </label>
        </div>
</div>
            <label >
            <input type="submit" value="Submit"/>
            Add
            </label>
        </form>
        </>
    )
}
export default TaskAdd