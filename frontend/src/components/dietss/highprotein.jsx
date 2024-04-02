import React from 'react';
import './mcss.css';
const HighProteinFoodsPage = () => {
  const foods = [
    {
      name: 'Grilled Chicken Breast',
      calories: 165,
      protein: 31,
      carbohydrates: 0,
      fat: 3.6,
      image: "../images/dietprotein/chickebrest.jpeg"
    },
    {
      name: 'Grilled Salmon ',
      calories: 208,
      protein: 20,
      carbohydrates: 0,
      fat: 13,
      image: "../images/dietprotein/salmonfish.jpeg"
    },
    {
      name: 'Eggs',
      calories: 52,
      protein: 11,
      carbohydrates: 1.4,
      fat: 9.9,
      image: "../images/dietprotein/eggs.jpeg"
    },
    {
      name: 'Cheakpeas',
      calories: 76,
      protein: 8,
      carbohydrates: 1.9,
      fat: 4.8,
      image: "../images/dietprotein/cheakpeas.jpeg"
    },
    {
      name: 'Dal',
      calories: 350,
      protein: 20,
      carbohydrates: 50,
      fat: 2,
      image: "../images/dietprotein/dal.jpeg"
    },
    {
      name: 'Paneer ',
      calories: 300,
      protein: 20,
      carbohydrates: 4,
      fat: 20,
      image: "../images/dietprotein/panner.jpg"
    },
    {
      name: 'Protein Powder',
      calories: 120,
      protein: 26,
      carbohydrates: 3,
      fat: 2,
      image: "../images/dietprotein/proteinpowder.jpeg"
    },
    {
      name: 'Shrimp',
      calories: 120,
      protein: 24,
      carbohydrates: 0.2,
      fat: 0.3,
      image: "../images/dietprotein/shrimp.jpeg"
    },
    {
      name: 'Soya Bean',
      calories: 350,
      protein: 40,
      carbohydrates: 30,
      fat: 0.4,
      image: "../images/dietprotein/soyabean.jpg"
    }
  ];
  return (
    <div className="container">
      <h1>High Protein Foods</h1>
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

export default HighProteinFoodsPage;
