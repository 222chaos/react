import "./index.css";
import React from "react";
// TODO: Import RecipeTitle
import RecipeTitle from "./RecipeTitle";
// TODO: Import IngredientList
import IngredientList from "./IngredientList";
function App() {
  // TODO: Add recipe object
  const recipe = {
    title: "Mashed potatoes",
    feedback: {
      rating: 4.8,
      reviews: 20,
    },
    challenges: [
      { name: "将切好的土豆加入一锅浓盐水中。", prepared: false },
      { name: "把锅烧开。", prepared: false },
      {
        name: "将土豆煮至叉子可以轻松戳入的程度，大约 15-20 分钟。",
        prepared: false,
      },
      { name: "将土豆的水沥干。", prepared: true },
      { name: "把土豆再倒回锅里。", prepared: true },
    ],
    ingredients: [
      { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
      { name: "4 Tbsp butter", prepared: false },
      { name: "1/8 cup heavy cream", prepared: false },
      { name: "Salt", prepared: true },
      { name: "Pepper", prepared: true },
    ],
  };
  return (
    <article>
      <h1>Recipe Manager</h1>
      {/* TODO: Add RecipeTitle component */}
      <RecipeTitle title={recipe.title} feedback={recipe.feedback} />
      {/* TODO: Add IngredientList component */}
      <IngredientList ingredients={recipe.challenges} />
      <IngredientList ingredients={recipe.ingredients} />
    </article>
  );
}

export default App;
