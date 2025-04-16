// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/recipes');
        if (response.ok) {
          const data = await response.json();
          setRecipes(data);
        } else {
          console.error('Error fetching recipes');
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
