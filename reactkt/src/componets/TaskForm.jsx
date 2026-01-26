import { useForm } from "react-hook-form";
import { postData } from "../service/post";
import { useState, useEffect } from "react";
import { putData } from "../service/put";
import { useParams } from "react-router";
import { getOne } from "../service/get";
import { useNavigate } from "react-router";
export const TaskAdd = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      dueDate: "",
      priority: "",
      category: "",
      status: "",
    },
  });
  const navigate = useNavigate();

  const formSubmitHandler = async (FormData) => {
    try {
      const postedData = await postData(FormData);
      if (postedData) alert("Post successfull");
      reset();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <div>
          <input
            type="text"
            name="title"
            {...register("title", {
              required: "title required",
              minLength: {
                value: 3,
                message: "3 chars are min",
              },
              maxLength: {
                value: 50,
                message: "50 chars are max",
              },
            })}
            placeholder="title"
          />
          <input
            type="text"
            name="description"
            {...register("description", {
              maxLength: {
                value: 200,
                message: "200 chars are max",
              },
            })}
            placeholder="description"
          />
          <input
            type="date"
            name="dueDate"
            {...register("dueDate", {
              required: "date required",
            })}
            placeholder="dueDate"
          />

          <div>Priority</div>
          <div>
            <label className="bg-red-200 has-checked:bg-red-700  text-black has-checked:text-white px-2 py-1 mr-2 border-black">
              <input
                type="radio"
                value="hight"
                {...register("priority", {})}
                className="hidden"
              />
              Hight
            </label>
            <label className="bg-yellow-200 has-checked:bg-yellow-700 text-black has-checked:text-white px-2 py-1 mr-2 border-black">
              <input
                type="radio"
                value="medium"
                {...register("priority")}
                className="hidden"
              />
              Medium
            </label>
            <label className="bg-green-200 has-checked:bg-green-700 text-black has-checked:text-white px-2 py-1 mr-2 border-black">
              <input
                type="radio"
                value="low"
                {...register("priority")}
                className="hidden"
              />
              Low
            </label>
          </div>

          <div>
            <label htmlFor="category">
              Categy select <br />
            </label>
            <select
              name="category"
              {...register("category", {
                required: "category required",
              })}
            >
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Trade">Trade</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="category">
              Status select <br />
            </label>
            <select
              name="status"
              {...register("status", {
                required: "status required",
              })}
            >
              <option value="ToDo">ToDo</option>
              <option value="InProgress">InProgress</option>
              <option value="Done">Done</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <input
          type="submit"
          value="submit"
          className="bg-violet-400 text-white p-2 mt-10"
        />
      </form>
    </>
  );
};

export const TaskEdit = () => {
  const { id } = useParams();
  const [task, setTask] = useState({});
  const [error, setError] = useState(null);
  const fetchTask = async () => {
    try {
      const result = await getOne(id);
      setTask(result);
    } catch (error) {
      setError(error.message);
    }
  };

  const { title, description, dueDate, priority, category, status } = task;

  useEffect(() => {
    fetchTask();
  }, [id]);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      dueDate: "",
      priority: "",
      category: "",
      status: "",
    },
  });

  useEffect(() => {
    setValue("title", title);
    setValue("description", description);
    setValue("dueDate", dueDate);
    setValue("priority", priority);
    setValue("category", category);
    setValue("status", status);
  }, [title, description, dueDate, priority, category, status, setValue]);

  const navigate = useNavigate();
  const formSubmitHandler = async (FormData) => {
    try {
      const postedData = await putData(id, FormData);
      if (postedData) alert("Post successfull");
      reset();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <div>
          <input
            type="text"
            name="title"
            {...register("title", {
              required: "title required",
              minLength: {
                value: 3,
                message: "3 chars are min",
              },
              maxLength: {
                value: 50,
                message: "50 chars are max",
              },
            })}
            placeholder="title"
          />
          <input
            type="text"
            name="description"
            {...register("description", {
              maxLength: {
                value: 200,
                message: "200 chars are max",
              },
            })}
            placeholder="description"
          />
          <input
            type="date"
            name="dueDate"
            {...register("dueDate", {
              required: "date required",
            })}
            placeholder="dueDate"
          />

          <div>Priority</div>
          <div>
            <label className="bg-red-200 has-checked:bg-red-700  text-black has-checked:text-white px-2 py-1 mr-2 border-black">
              <input
                type="radio"
                value="hight"
                {...register("priority", {})}
                className="hidden"
              />
              Hight
            </label>
            <label className="bg-yellow-200 has-checked:bg-yellow-700 text-black has-checked:text-white px-2 py-1 mr-2 border-black">
              <input
                type="radio"
                value="medium"
                {...register("priority")}
                className="hidden"
              />
              Medium
            </label>
            <label className="bg-green-200 has-checked:bg-green-700 text-black has-checked:text-white px-2 py-1 mr-2 border-black">
              <input
                type="radio"
                value="low"
                {...register("priority")}
                className="hidden"
              />
              Low
            </label>
          </div>

          <div>
            <label htmlFor="category">
              Categy select <br />
            </label>
            <select
              name="category"
              {...register("category", {
                required: "category required",
              })}
            >
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Trade">Trade</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="category">
              Status select <br />
            </label>
            <select
              name="status"
              {...register("status", {
                required: "status required",
              })}
            >
              <option value="ToDo">ToDo</option>
              <option value="InProgress">InProgress</option>
              <option value="Done">Done</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <input
          type="submit"
          value="submit"
          className="bg-violet-400 text-white p-2 mt-10"
        />
      </form>
    </>
  );
};
