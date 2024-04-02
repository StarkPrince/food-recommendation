import React from 'react';
import './mcss.css';
const WeightGain = () => {
    const foods = [
        {
          name: 'Avocado',
          calories: 322,
          protein: 4,
          carbohydrates: 17,
          fat: 29,
          image: "../images/weightgain/avocado.jpeg"
        },
        {
          name: 'Whole Milk',
          calories: 149,
          protein: 8,
          carbohydrates: 11,
          fat: 8,
          image: "../images/weightgain/wholemilk.jpeg"
        },
        {
          name: 'Nuts (Mixed)',
          calories: 607,
          protein: 15,
          carbohydrates: 21,
          fat: 54,
          image: "../images/weightgain/nuts.jpeg"
        },
        {
          name: 'Brown Rice',
          calories: 123,
          protein: 2,
          carbohydrates: 26,
          fat: 1,
          image: "../images/weightgain/brownrice.jpeg"
        },
        {
          name: 'Sweet Potatoes',
          calories: 86,
          protein: 1.6,
          carbohydrates: 20,
          fat: 0.1,
          image: "../images/weightgain/sweetpotatoes.jpeg"
        },
        {
          name: 'Bananas',
          calories: 105,
          protein: 1.3,
          carbohydrates: 27,
          fat: 0.4,
          image: "../images/weightgain/bananas.jpeg"
        },
        {
          name: 'Olive Oil',
          calories: 119,
          protein: 0,
          carbohydrates: 0,
          fat: 14,
          image: "../images/weightgain/oliveoil.jpeg"
        },
        {
          name: 'Potatoes',
          calories: 77,
          protein: 2,
          carbohydrates: 17,
          fat: 0.1,
          image: "../images/weightgain/potatoes.jpeg"
        },
        {
          name: 'Granola',
          calories: 471,
          protein: 11,
          carbohydrates: 65,
          fat: 19,
          image: "../images/weightgain/granola.jpeg"
        }
      ];
      
    
  return (
    <div className="container">
      <h1>Weight Gain Foods</h1>
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

export default WeightGain;
