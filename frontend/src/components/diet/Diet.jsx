import React from "react";
import "./Diet.css";

const Diet = () => {
  return (
    <div className="diet-container">
      <h1 className="page-title">Diabetes Meal Plan</h1>

      <div className="meal">
        <h2>   </h2>
        <h2>Breakfast:</h2>
        <ul>
          <li>Scrambled eggs with spinach and tomatoes</li>
          <li>1 slice of whole-grain toast (choose bread with higher fiber content)</li>
          <li>1 small apple or a half cup of berries</li>
          <li>Unsweetened almond milk or herbal tea</li>
        </ul>
      </div>
      
      <div className="meal">
        <h2>Lunch:</h2>
        <ul>
          <li>Grilled chicken or tofu salad with mixed greens, cherry tomatoes, cucumber, and bell peppers</li>
          <li>Dressing made with olive oil, lemon juice, and herbs</li>
          <li>1 small whole-grain roll or a serving of quinoa</li>
          <li>A handful of raw almonds or walnuts</li>
          <li>Sparkling water with a slice of lemon or lime</li>
        </ul>
      </div>
      
      <div className="meal">
        <h2>Dinner:</h2>
        <ul>
          <li>Baked salmon or codseasoned with herbs and lemon</li>
          <li>Steamed or roasted non-starchy vegetables such as broccoli, cauliflower, and asparagus</li>
          <li>Half a cup of cooked quinoa or brown rice</li>
          <li>Mixed green salad with vinaigrette dressing (avoid creamy dressings)</li>
          <li>Sparkling water or herbal tea</li>
        </ul>
      </div>
    </div>
  );
};

export default Diet;
