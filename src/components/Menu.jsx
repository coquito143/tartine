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
          <div class="menu-item">
            <h3>Eggs Florentine</h3>
            <h3>$16</h3>
          </div>
          <p>poached egg, spinach, English muffins and hollandaise sauce</p>
          <div class="menu-item">
            <h3>Eggs Norvegienne</h3>
            <h3>$17</h3>
          </div>
          <p>poached egg, smoked salmon, English muffins and hollandaise sauce</p>
          <div class="menu-item">
            <h3>Tunisian Breakfast</h3>
            <h3>$16</h3>
          </div>
          <p>two poached eggs, semolina bread, chickpeas, roasted red peppers</p>
        </div>
        <div class="menu-items-right-div">
          <div class="menu-item">
            <h3>Eggs Benedict</h3>
            <h3>$16</h3>
          </div>
          <p>poached egg, spinach, English muffins and hollandaise sauce</p>
          <div class="menu-item">
            <h3>Eggs Norvegienne</h3>
            <h3>$17</h3>
          </div>
          <p>poached egg, smoked salmon, English muffins and hollandaise sauce</p>
          <div class="menu-item">
            <h3>Tunisian Breakfast</h3>
            <h3>$16</h3>
          </div>
          <p>two poached eggs, semolina bread, chickpeas, roasted red peppers</p>
        </div>
      </div>
    </div>
  )
}
