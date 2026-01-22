function RecipeCard({ recipe }) {
    return (
        <div>
            <div>
                <h2>{recipe.name}</h2>
                <img src={recipe.img} alt={recipe.name} />
            </div>
            <div>
                <h3>Category: {recipe.category}</h3>
                <h4>Ingredients</h4>
                <ul>
                    {recipe.ingredients}
                </ul>
                <h4>Instructions</h4>
                <p>{recipe.instructions}</p>
            </div>
        </div>
    )
}