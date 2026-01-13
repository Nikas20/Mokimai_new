import { useForm } from "react-hook-form";
function PokemonAdd() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      hp: "",
      frontImgURL: "",
      backImgURL: "",
    },
  });

  const formSubmintHandler = async (name, hp, frontImgURL, backImgURL) => {
    console.log(name, hp, frontImgURL, backImgURL);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(name, hp, frontImgURL, backImgURL),
    };
    try {
      const response = await fetch(
        "http://localhost:3000/pokemon",
        requestOptions
      );
      if (response.ok) {
        alert("Success");
      } else {
        throw Error("eerro");
      }
    } catch (error) {
      console.log(error);
    }

    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(formSubmintHandler)} noValidate>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              {...register("name", {
                required: "User name required",
                maxLength: {
                  value: 20,
                  message: "Too long",
                },
              })}
            />
            <p>{errors.name?.message}</p>
          </div>

          <div>
            <label htmlFor="name">hp</label>
            <br />
            <input
              type="number"
              id="hp"
              {...register("hp", {
                required: "User name required",
              })}
            />
            <p>{errors.hp?.message}</p>
          </div>
          <div>
            <label htmlFor="frontImgURL">Front Image URL</label>
            <input type="text" id="frontImgURL" {...register("frontImgURL")} />
            <p>{errors.frontImgURL?.message}</p>
          </div>
          <div>
            <label htmlFor="backImgURL">Back Image URL</label>
            <input type="text" id="backImgURL" {...register("backImgURL")} />
            <p>{errors.backImgURL?.message}</p>
          </div>
        </div>

        <input type="submit" value="Submit" className="mt-6 w-50" />
      </form>
    </>
  );
}
export default PokemonAdd;
