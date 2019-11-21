import React from 'react'

export default function HomePageBottom() {
  return (
    <div id="bottom-homepage-div">
      <div id="bottom-left-div">
        <h2>A West Village institution</h2>
        <p class="bigger-p">Tartine Café — a quick trip to France in the heart of the West Village.</p>
        <p class="smaller-p desktop-only">French Chef Thierry Rochard created this French bakery bistro over 20 years ago serving simple and tasty dishes in a friendly neighborhood atmosphere. Whether you want coffee and croissants, a quick healthy lunch or a cozy dinner, Tartine offers three different menus. And homemade berry tarts and meringues remain a temptation at any time of the day!
<br></br><br></br>
Don’t miss the fabulous brunch that made its own reputation with our loyal customers lining up in the street for delicious Tartine’s unique and scrumptious fare.
          <br></br>
          <br></br>
          <i>BYOB</i><br></br>
          <i>We accept cash only. Merci.</i></p>
        <div id="delivery-info-div">
          <p class="bigger-p">
            We Deliver
            <br></br>
            <a class="delivery-link"
              href="https://www.seamless.com/menu/tartine-253-w-11th-st-new-york/275148" target="_blank">Seamless</a>
            <span class="desktop-only"> • </span>
            <a class="delivery-link"
              href="https://www.grubhub.com/restaurant/tartine-253-w-11th-st-new-york/275148" target="_blank">Grubhub</a>
            <span class="desktop-only"> • </span>
            <a class="delivery-link"
              href="https://www.delivery.com/cities/nyc/categories/restaurant/tartine?address="
              target="_blank">Delivery.com</a>
          </p>
        </div>
        <div id="copyright-info" class="desktop-only">© Copyright line. All rights reserved.</div>
      </div>
      <div id="bottom-right-div">
        <h2 id="hours-h2">Hours</h2>
        <p class="smaller-p">Mon 5:30 PM – 10 PM</p>
        <p class="smaller-p">Tues – Fri 9:30 AM – 10:30 PM</p>
        <p class="smaller-p">Sat 10 AM – 10:30 PM</p>
        <p class="smaller-p">Sun 10 AM – 10 PM</p>
        <h2 id="brunch-h2">Brunch Hours</h2>
        <p className="smaller-p">Sat &amp; Sun 10 AM – 4 PM</p>
      </div>
    </div>
  )
}
