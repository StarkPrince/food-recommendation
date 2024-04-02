import React from "react";
import "./Diet.css";

const Dietcv = () => {
  return (
    <div className="diet-container">
      <h1 className="page-title">Cardiovascular Meal Plan</h1>

      <div className="meal">
        <h2> </h2>
        <h2>Breakfast:</h2>
        <ul>
          <li>Oatmeal topped with fresh berries (such as blueberries or strawberries) and a sprinkle of ground flaxseeds or chopped nuts (like almonds or walnuts).</li>
          <li>A serving of low-fat or non-fat Greek yogurt with a drizzle of honey or a handful of unsweetened granola.</li>
          <li>A slice of whole-grain toast with a thin spread of almond butter or avocado.</li>
        </ul>
      </div>
      
      <div className="meal">
        <h2>Lunch:</h2>
        <ul>
          <li>Grilled or baked salmon with a squeeze of lemon juice, served alongside a mixed green salad with a variety of colorful vegetables (such as spinach, kale, bell peppers, carrots, and cucumbers).</li>
          <li>Quinoa or brown rice pilaf with diced vegetables (like bell peppers, onions, and zucchini) and a sprinkle of fresh herbs (such as parsley or basil).</li>
          <li>A side of steamed broccoli or asparagus spears.</li>
        </ul>
      </div>
      
      <div className="meal">
        <h2>Dinner:</h2>
        <ul>
          <li>Baked chicken breast seasoned with herbs (like rosemary or thyme) and a light drizzle of olive oil, served with roasted sweet potatoes and Brussels sprouts.</li>
          <li>A side of whole-grain dinner rolls or a small portion of whole-grain pasta tossed with marinara sauce and sautéed vegetables (such as mushrooms and spinach).</li>
          <li>A leafy green salad with a vinaigrette dressing made from extra-virgin olive oil and balsamic vinegar.</li>
        </ul>
      </div>

      <div className="snacks">
        <h2>Snacks (optional):</h2>
        <ul>
          <li>Fresh fruit (such as apple slices, orange segments, or grapes).</li>
          <li>Raw vegetables (like baby carrots, cherry tomatoes, or cucumber slices) with hummus or guacamole.</li>
          <li>A handful of unsalted nuts (such as almonds, walnuts, or pistachios).</li>
          <li>Greek yogurt or cottage cheese with sliced fruit or a sprinkle of cinnamon.</li>
        </ul>
      </div>
    </div>
  );
};

export default Dietcv;
