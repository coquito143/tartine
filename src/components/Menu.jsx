import React from 'react'

export default function Menu() {
  return (
    <div id="brunch-menu-div">
      <img id="brunch-hero-img" src="https://res.cloudinary.com/dcagc4c0j/image/upload/v1574110900/photo-title-brunch_vyktrk.jpg"></img>
      <div class="menu-description-div">
        <div class="menu-options-div">
          <a href="#brunch">Brunch</a>
          <a href="#lunch">Lunch</a>
          <a href="#dinner">Dinner</a>
        </div>
        <div class="menu-blurb-div">
          <p>From eggs Benedict to French toast, you'll enjoy our delicious brunch, which is a West Village favorite. Served Saturdays and Sundays from 10 AM to 4 PM.</p>
        </div>
      </div>

      <h2 class="dish-category-h2">Egg Dishes</h2>
      <div class="menu-items-div">
        <div class="menu-items-left-div">
          <div class="left-menu-item">
            <h3>Eggs Florentine</h3>
            <h3>$16</h3>
          </div>
          <p>poached egg, spinach, English muffins and hollandaise sauce</p>
          <div class="left-menu-item">
            <h3>Eggs Norvegienne</h3>
            <h3>$17</h3>
          </div>
          <p>poached egg, smoked salmon, English muffins and hollandaise sauce</p>
          <div class="left-menu-item">
            <h3>Tunisian Breakfast</h3>
            <h3>$16</h3>
          </div>
          <p>two poached eggs, semolina bread, chickpeas, roasted red peppers</p>
        </div>
        <div class="menu-items-right-div">
          <div class="right-menu-item">
            <h3>Eggs Benedict</h3>
            <h3>$16</h3>
          </div>
          <p>poached egg, spinach, English muffins and hollandaise sauce</p>
          <div class="right-menu-item">
            <h3>Eggs Norvegienne</h3>
            <h3>$17</h3>
          </div>
          <p>poached egg, smoked salmon, English muffins and hollandaise sauce</p>
          <div class="right-menu-item">
            <h3>Tunisian Breakfast</h3>
            <h3>$16</h3>
          </div>
          <p>two poached eggs, semolina bread, chickpeas, roasted red peppers</p>
        </div>

      </div>
      <h2 class="dish-category-h2">Sandwiches</h2>
      <div class="menu-items-div">
        <div class="menu-items-left-div">
          <div class="left-menu-item">
            <h3>Croque Monsieur</h3>
            <h3>$15</h3>
          </div>
          <p>home baked brioche with ham and cheese</p>
          <div class="left-menu-item">
            <h3>Roasted Salmon Sandwich</h3>
            <h3>$16</h3>
          </div>
          <p>on ciabatta, fennel slaw</p>
          <div class="left-menu-item">
            <h3>BLT</h3>
            <h3>$14</h3>
          </div>
          <p>bacon, lettuce and tomato on seven grain toast</p>
        </div>
        <div class="menu-items-right-div">
          <div class="right-menu-item">
            <h3>Croque Madame</h3>
            <h3>$17</h3>
          </div>
          <p>home backed brioche with ham, cheese and poached egg</p>
          <div class="right-menu-item">
            <h3>Chicken Sandwich</h3>
            <h3>$15</h3>
          </div>
          <p>on foccacia, bacon, cheddar, jalapeno, guacamole</p>
          <div class="right-menu-item">
            <h3>Marinated Chicken Paillard</h3>
            <h3>$18</h3>
          </div>
          <p>jus de poulet, petite salade, grape tomatoes</p>
        </div>


      </div>

      <h2 class="dish-category-h2">Sweet Dishes</h2>
      <div class="menu-items-div">
        <div class="menu-items-left-div">
          <div class="left-menu-item">
            <h3>French Toast</h3>
            <h3>$15</h3>
          </div>
          <p>home baked brioche and smoked bacon</p>
        
        </div>
        <div class="menu-items-right-div">
          <div class="right-menu-item">
            <h3>Apple Pancakes</h3>
            <h3>$15</h3>
          </div>
          <p>Apple Pancakes</p>
        </div>

      </div>
    </div>
  )
}
