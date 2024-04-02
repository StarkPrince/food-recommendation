import React from 'react';
import './mcss.css';
const Demo = () => {
    const foods = [
        {
          name: 'Oats',
          calories: 389,
          protein: 16.9,
          carbohydrates: 66.3,
          fiber: 10.6,
          fat: 6.9,
          image: "../images/dietfiber/oats.jpeg"
        },
        {
          name: 'Lentils',
          calories: 353,
          protein: 25.8,
          carbohydrates: 60.1,
          fiber: 30.5,
          fat: 1.1,
          image: "../images/dietfiber/lentils.jpeg"
        },
        {
          name: 'Artichokes',
          calories: 47,
          protein: 3.3,
          carbohydrates: 10.5,
          fiber: 8.6,
          fat: 0.2,
          image: "../images/dietfiber/artichokes.jpeg"
        },
        {
          name: 'Broccoli',
          calories: 34,
          protein: 2.8,
          carbohydrates: 6.6,
          fiber: 2.6,
          fat: 0.4,
          image: "../images/dietfiber/broccoli.jpeg"
        },
        {
          name: 'Raspberries',
          calories: 52,
          protein: 1.5,
          carbohydrates: 11.9,
          fiber: 6.5,
          fat: 0.7,
          image: "../images/dietfiber/raspberries.jpeg"
        },
        {
          name: 'Chia Seeds',
          calories: 486,
          protein: 16.5,
          carbohydrates: 42.1,
          fiber: 34.4,
          fat: 30.7,
          image: "../images/dietfiber/chia_seeds.jpeg"
        },
        {
          name: 'Almonds',
          calories: 579,
          protein: 21.2,
          carbohydrates: 21.6,
          fiber: 12.5,
          fat: 49.9,
          image: "../images/dietfiber/almonds.jpeg"
        },
        {
          name: 'Avocado',
          calories: 160,
          protein: 2,
          carbohydrates: 8.5,
          fiber: 6.7,
          fat: 14.7,
          image: "../images/dietfiber/avocado.jpeg"
        },
        {
          name: 'Sweet Potatoes',
          calories: 86,
          protein: 1.6,
          carbohydrates: 20.1,
          fiber: 3,
          fat: 0.1,
          image: "../images/dietfiber/sweet_potatoes.jpeg"
        }
    ];
    
  return (
    <div className="container">
      <h1>High Fiver Foods</h1>
      <div className="food-container">
        {foods.map(food => (
          <div key={food.name} className="food-item">
            <img src={food.image} alt={food.name} />
            <div className="food-details">
              <h2>{food.name}</h2>
              <p>Calories: {food.calories}</p>
              <p>Protein: {food.protein}g</p>
              <p>Carbohydrates: {food.carbohydrates}g</p>
              <p>Fat: {food.fat}g</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Demo;
