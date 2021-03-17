import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <header id="site-header">
        <section class="header-top-bar">
          <article class="header-top-bar-left">
            <i class="far fa-question-circle header-top-bar-icon"> </i>
            <span class="header-top-bar-left-item">
              <a href="#"> Can we help you ? </a>
            </span>
            <i class="fas fa-phone-alt header-top-bar-icon"> </i>
            <span class="header-top-bar-left-item"> +359 333 555 999 </span>
          </article>
          <ul class="header-top-bar-right">
            <li class="header-top-bar-right-item">
              <a href="#"> Store Location </a>
            </li>
            <li class="header-top-bar-right-item"> Hello, User! </li>
            <li class="header-top-bar-right-item">
              <a href="#"> Profile </a>
            </li>
            <li class="header-top-bar-right-item">
              <a href="#"> Login </a>
            </li>
            <li class="header-top-bar-right-item">
              <a href="#"> Register </a>
            </li>
          </ul>
        </section>
        <section class="header-top-block">
          <a href="#">
            <img src="./logo.jpg" alt="Book Store" />
          </a>
          <article class="header-top-block-site-search">
            <input
              type="text"
              class="header-top-block-site-search-input"
              name="s"
              placeholder="Search site"
            />
            <i class="fas fa-search header-top-block-site-search-input-icon">
              
            </i>
          </article>
          <ul class="header-top-block-right">
            <li class="header-top-block-right-item">
              <a href="#"> Wishlist </a>
            </li>
            <li class="header-top-block-right-item">
              <a href="#"> Orders </a>
            </li>
            <li class="header-top-block-right-item">
              <a href="#"> Profile </a>
            </li>
            <li class="header-top-block-right-item">
              <a href="#"> Cart </a>
            </li>
          </ul>
        </section>
        <nav class="header-top-navigation">
          <ul class="header-top-navigation-menu">
            <li class="header-top-navigation-menu-item">
              <a href="#"> Home </a>
            </li>
            <li class="header-top-navigation-menu-item">
              <a href="#"> News </a>
            </li>
            <li class="header-top-navigation-menu-item">
              <a href="#"> Books </a>
            </li>
            <li class="header-top-navigation-menu-item">
              <a href="#"> Authors </a>
            </li>
            <li class="header-top-navigation-menu-item">
              <a href="#"> About Us </a>
            </li>
          </ul>
        </nav>
      </header>

      <showcase class="home-main-sliders">
        <section class="home-main-sliders-left">
          <article class="home-main-sliders-big">
            <div class="main-carousel">
              <img
                src="slide1.jpg"
                class="crousel-image"
                style={{
                  height: "530px",
                }}
                alt=""
              />
            </div>
          </article>
        </section>
        <section class="home-main-sliders-right">
          <article class="home-main-sliders-small">
            <a href="#">
              <img src="slide-small-1.jpg" class="crousel-image" alt="" />
            </a>
          </article>
          <article class="home-main-sliders-small">
            <a href="#">
              <img src="slide-small-2.jpg" class="crousel-image" alt="" />
            </a>
          </article>
        </section>
      </showcase>

      <section class="home-info-boxes">
        <article class="home-info-boxes-item">
          <h4> Free Delivery </h4> <p> For orders over $50 </p>
        </article>
        <article class="home-info-boxes-item">
          <h4> Secure Payment </h4> <p> 100 % Secure Payment </p>
        </article>
        <article class="home-info-boxes-item">
          <h4> Money Back Guarantee </h4> <p> Within 30 Days </p>
        </article>
        <article class="home-info-boxes-item">
          <h4> 24 / 7 Support </h4> <p> Within 1 Business Day </p>
        </article>
      </section>

      <section class="home-weekly-deals">
        <section class="home-weekly-deals-header">
          <article class="home-weekly-deals-header-title">
            <h2> Deals of the week </h2>
          </article>
          <article class="home-weekly-deals-header-viewall">
            <a href="#">
              <span> View All </span>
            </a>
          </article>
        </section>
        <section class="home-weekly-deals-items">
          <article class="home-weekly-deals-items-item">
            <a href="#">
              <img
                src="./books/book-1.jpg"
                class="home-weekly-deals-items-item-img"
                alt="Under a Firefly Moon (Firefly Lake Book 1)"
              />
            </a>
            <article class="home-weekly-deals-items-item-info">
              <h3>
                <a href="#"> Under a Firefly Moon(Firefly Lake Book 1) </a>
              </h3>
              <h5>
                <a href="#"> Nora Roberts </a>
              </h5>
              <p> $29 .99 </p>
            </article>
          </article>
          <article class="home-weekly-deals-items-item">
            <a href="#">
              <img
                src="./books/book-1.jpg"
                class="home-weekly-deals-items-item-img"
                alt="Under a Firefly Moon (Firefly Lake Book 1)"
              />
            </a>
            <article class="home-weekly-deals-items-item-info">
              <h3>
                <a href="#"> Under a Firefly Moon(Firefly Lake Book 1) </a>
              </h3>
              <h5>
                <a href="#"> Nora Roberts </a>
              </h5>
              <p> $29 .99 </p>
            </article>
          </article>
        </section>
      </section>

      <section class="home-best-sellers">
        <article class="home-best-sellers-item-big">
          <a href="#">
            <img src="thrillers-banner.jpg" alt="Thrillers" />
            <h2> Featured Category </h2> <h3> Thrillers </h3>
          </a>
        </article>
        <article class="home-best-sellers-items-small">
          <article class="home-best-sellers-items-item">
            <a href="#">
              <img
                src="./books/book-1.jpg"
                class="home-best-sellers-items-item-img"
                alt="Under a Firefly Moon (Firefly Lake Book 1)"
              />
            </a>
            <h3>
              <a href="#"> Under a Firefly Moon(Firefly Lake Book 1) </a>
            </h3>
            <h5>
              <a href="#"> Nora Roberts </a>
            </h5>
            <p> $29 .99 </p>
          </article>
          <article class="home-best-sellers-items-item">
            <a href="#">
              <img
                src="./books/book-1.jpg"
                class="home-best-sellers-items-item-img"
                alt="Under a Firefly Moon (Firefly Lake Book 1)"
              />
            </a>
            <h3>
              <a href="#"> Under a Firefly Moon(Firefly Lake Book 1) </a>
            </h3>
            <h5>
              <a href="#"> Nora Roberts </a>
            </h5>
            <p> $29 .99 </p>
          </article>
          <article class="home-best-sellers-items-item">
            <a href="#">
              <img
                src="./books/book-1.jpg"
                class="home-best-sellers-items-item-img"
                alt="Under a Firefly Moon (Firefly Lake Book 1)"
              />
            </a>
            <h3>
              <a href="#"> Under a Firefly Moon(Firefly Lake Book 1) </a>
            </h3>
            <h5>
              <a href="#"> Nora Roberts </a>
            </h5>
            <p> $29 .99 </p>
          </article>
          <article class="home-best-sellers-items-item">
            <a href="#">
              <img
                src="./books/book-1.jpg"
                class="home-best-sellers-items-item-img"
                alt="Under a Firefly Moon (Firefly Lake Book 1)"
              />
            </a>
            <h3>
              <a href="#"> Under a Firefly Moon(Firefly Lake Book 1) </a>
            </h3>
            <h5>
              <a href="#"> Nora Roberts </a>
            </h5>
            <p> $29 .99 </p>
          </article>
        </article>
      </section>

      <section class="newsletter">
        <h3> Join Our Newsletter </h3>
        <p>
          Signup to be the first to hear about exclusive deals, special offers
          and upcoming collections
        </p>
        <article class="newsletter-form">
          <input
            type="text"
            class="newsletter-input"
            placeholder="Enter your email to recieve newsletter"
          />
          <button type="submit" name="subscribe" class="newsletter-button">
            Subscribe
          </button>
        </article>
      </section>

      <section class="footer">
        <article class="footer-top">
          <article class="footer-address">
            <h5> Address </h5> <p> Sofia, Oborishte Street 35 </p>
            <p>
              Find us
              <a href="#" class="footer-address-map-link">
                HERE
              </a>
            </p>
          </article>
          <article class="footer-contacts">
            <h5> Contact </h5> <p> contact.office @bookstore.com </p>
            <p> +359 333 555 999 </p>
          </article>
          <article class="footer-payments">
            <img src="payments.png" alt="payments" />
          </article>
          <article class="footer-share">
            <a href="#">
              <i class="fab fa-facebook-square"> </i>
            </a>
            <a href="#">
              <i class="fab fa-instagram-square"> </i>
            </a>
            <a href="#">
              <i class="fab fa-youtube-square"> </i>
            </a>
            <a href="#">
              <i class="fab fa-twitter-square"> </i>
            </a>
            <a href="#">
              <i class="fab fa-pinterest-square"> </i>
            </a>
          </article>
        </article>
        <article class="footer-bottom">
          &#169;2021 Book Store. All rights reserved.
        </article>
      </section>
    </div>
  );
}

export default App;
