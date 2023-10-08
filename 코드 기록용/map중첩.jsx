import { recipes } from "./data.js";

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        // 중괄호로 코드 감싸기
        <>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li>{ing}</li>
            ))}
          </ul>
        </>
      ))}
    </div>
  );
}
