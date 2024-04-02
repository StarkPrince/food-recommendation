import React from "react";
import "./Diet.css";

const Dietp = () => {
  return (
    <div className="diet-container">
      <h1 className="page-title">Liver Disease Meal Plan</h1>

      <div className="meal">
        <h2>  </h2>
        <h2>Breakfast:</h2>
        <ul>
          <li>Oatmeal: Cooked oatmeal made with water or low-fat milk. Avoid adding sugar. You can sweeten it slightly with a small amount of honey or fresh fruits like berries or sliced banana.</li>
          <li>Boiled Eggs: Eggs are a good source of protein. Have one or two boiled eggs alongside your oatmeal.</li>
          <li>Whole Grain Toast: One slice of whole grain toast with a thin spread of avocado or a small amount of unsalted almond butter.</li>
          <li>Herbal Tea or Water: Drink herbal tea or plain water to stay hydrated. Avoid caffeinated beverages and sugary drinks.</li>
        </ul>
      </div>
      
      <div className="meal">
        <h2>Lunch:</h2>
        <ul>
          <li>Grilled Chicken Salad: Grilled chicken breast slices on a bed of mixed greens (spinach, kale, arugula) with cherry tomatoes, cucumber slices, and bell peppers. Dress with a light vinaigrette made with olive oil and lemon juice.</li>
          <li>Quinoa: Cooked quinoa can be served as a side dish for added protein and fiber.</li>
          <li>Steamed Vegetables: A side of steamed vegetables such as broccoli, carrots, and zucchini seasoned with herbs like thyme or rosemary.</li>
          <li>Fresh Fruit: A serving of fresh fruit like apple slices or a small bowl of mixed berries for dessert.</li>
          <li>Water or Herbal Tea: Again, hydrate with water or herbal tea throughout the meal.</li>
        </ul>
      </div>
      
      <div className="meal">
        <h2>Dinner:</h2>
        <ul>
          <li>Baked Salmon: A serving of baked or grilled salmon seasoned with herbs like dill or parsley. Salmon provides healthy omega-3 fatty acids.</li>
          <li>Brown Rice: Serve with a portion of brown rice for complex carbohydrates.</li>
          <li>Stir-Fried Vegetables: Stir-fry a mix of colorful vegetables such as bell peppers, snap peas, and mushrooms in a small amount of olive oil.</li>
          <li>Lentil Soup: A warm bowl of lentil soup seasoned with herbs and spices like turmeric, cumin, and coriander. Lentils are a good source of protein and fiber.</li>
          <li>Herbal Tea or Water: Conclude with herbal tea or water.</li>
        </ul>
      </div>
    </div>
  );
};

export default Dietp;
