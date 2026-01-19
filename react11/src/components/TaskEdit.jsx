import { useEffect } from "react";
import { useForm } from "react-hook-form"
function TaskEdit({task}) {
    const{id ,taskName} = task
const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taskName: "",
    },
  });

  useEffect(() => {
    
    setValue("taskName", taskName);
  },[taskName,setValue]);


  const editTask = async (data) => {
    try {
        const requestObject = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    const response = await fetch(
        "http://localhost:3000/tasks/"+ id,
         requestObject);

         if (response.ok) {
        alert("Success");
    } else {
        throw new Error("Error in task edit");
        
    }
    } catch (error) {
        alert(error.message)
    }
    
  };
 




    return(
        <>
         <form onSubmit={handleSubmit(editTask)}>
      <div>
        <div className="grid grid-cols-1">
          <label htmlFor="taskName">Task</label>
          <input
            type="text"
            {...register("taskName", {
              maxLength: {
                value: 20,
                message: "To long",
              },
            })}
            placeholder="send article to editor"
            className="border "
          />
          {errors.taskName && <p role="alert">{errors.taskName.message}</p>}
<input
            type="submit"
            value="Edit task"
            className="float-end mr-5 bg-blue-600 text-white px-5 py-2 rounded-4xl"
          /> 
        </div>
      </div>
    </form>
 
        </>
    )
} 
export default TaskEdit