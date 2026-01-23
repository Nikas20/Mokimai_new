import { useForm } from "react-hook-form";
import { postData } from "../service/post";
import { useState, useRef, useEffect } from "react";

function RecipeAdd() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      img: "",
      category: "",
      ingredients: [],
      instructions: [],
    },
  });

  const nextId = useRef(0);
  const nextId2 = useRef(0);

  const formSubmitHandler = async (FormData) => {
    try {
      const postedData = await postData(FormData);
      if (postedData) alert("Post successfull");
      reset();
      setIngredients([]);
      setInstructions([]);
    } catch (error) {
      console.log(error.message);
    }
  };

  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState("");

  const [instructions, setInstructions] = useState([]);
  const [instruction, setInstruction] = useState("");

  // 🔥 ВАЖНО: обновляем value формы только когда меняется список
  useEffect(() => {
    setValue("ingredients", ingredients);
  }, [ingredients, setValue]);

  useEffect(() => {
    setValue("instructions", instructions);
  }, [instructions, setValue]);

  return (
    <>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <div>
          <div>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Name"
            />
            <input
              type="text"
              {...register("img", { required: true })}
              placeholder="ImageUrl"
            />

            <input
              type="text"
              {...register("category")}
              placeholder="Category"
            />
          </div>

          <div className="grid grid-cols-2">
            <div>
              <input
                type="text"
                placeholder="Ingredients"
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}
              />
              <button
                type="button"
                onClick={() => {
                  setIngredients([
                    ...ingredients,
                    { id: nextId.current++, ingredient: ingredient },
                  ]);
                  setIngredient("");
                }}
              >
                Add
              </button>
              <ul>
                {ingredients.map((element) => (
                  <li key={element.id}>
                    {element.ingredient}
                    <button
                      type="button"
                      onClick={() => {
                        setIngredients(
                          ingredients.filter((i) => i.id !== element.id),
                        );
                      }}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <input
                type="text"
                placeholder="Instructions"
                value={instruction}
                onChange={(e) => setInstruction(e.target.value)}
              />
              <button
                type="button"
                onClick={() => {
                  setInstructions([
                    ...instructions,
                    { id: nextId2.current++, instruction: instruction },
                  ]);
                  setInstruction("");
                }}
              >
                Add
              </button>
              <ul>
                {instructions.map((element) => (
                  <li key={element.id}>
                    {element.instruction}
                    <button
                      type="button"
                      onClick={() => {
                        setInstructions(
                          instructions.filter((i) => i.id !== element.id),
                        );
                      }}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <input
          type="submit"
          value="submit"
          className="bg-violet-400 text-white p-2"
        />
      </form>
    </>
  );
}

export default RecipeAdd;
