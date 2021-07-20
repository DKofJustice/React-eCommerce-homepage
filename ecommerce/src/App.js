import React, {useState} from 'react'
import './App.css';
import Header from './Header.js';
import SearchBar from './SearchBar.js';
import HamMenu from './HamMenu.js';
import ProductIcon from './ProductIcon.js';
import nintendoBkg from "./SVG Assets/nintendoBkg.svg";

function App() {
  /*Making the side menu appear and disappear on click*/

  const [sideMenuDisplay, setSideMenuDisplay] = useState(false);
  const [isSideBtnClicked, setisSideBtnClicked] = useState(false);


    let sideMenuToggle = () => {
      setisSideBtnClicked(true);
      if (sideMenuDisplay === false) {
        setSideMenuDisplay(true);

      } else {

        setSideMenuDisplay(false);
      }
    };

  /*Adding CSS classes to the side menu, related to the transition*/
    
    let setDisplay
    
    if (sideMenuDisplay === false && isSideBtnClicked === false) {
      setDisplay = undefined;
    } else if (sideMenuDisplay === false && isSideBtnClicked 
      === true) {
        setDisplay = "side-menu-hide";
      } else if (sideMenuDisplay === true && isSideBtnClicked 
        === true) {
          setDisplay = "side-menu-show";
        }
    
  /*Make the side menu disappear on outside click*/      

    let sideMenuExit = () => {
      if (sideMenuDisplay === true) {
        sideMenuToggle();
      }
    }
    
  /*Make the seach bar appear and disappear*/

    const [searchBar, setSearchBar] = useState(false);
    let setSearchBarClass

    let showSearchBar = () => {
      if (searchBar === false) {
        setSearchBar(true);
        
      } else {
        setSearchBar(false);
      }
    }

    if (searchBar === false) {
      setSearchBarClass = "search-bar-hide";
    } else {
      setSearchBarClass = "search-bar-show";
    }
    
  return (
    <div className="App">
      <div className="container">

        <Header sideMenuToggle={sideMenuToggle} 
                showSearchBar={showSearchBar}/>

        <SearchBar showSearchBar={showSearchBar}
                    setSearchBarClass={setSearchBarClass}/>

        <HamMenu sideMenuToggle={sideMenuToggle} 
                 setDisplay={setDisplay}/>

        <body onClick={sideMenuExit}>
         <div className="Homepage homepage-mobile">
          <h2>Spring Sales on the horizon!! 45% off!!</h2>
          <h2>Enjoy sales on a wide range of our 
              selected merchandise</h2>
          <img src={nintendoBkg} alt="nintendoBkg" />
          <button className="ProductPageLink">
            <h2>Check our offers</h2>
          </button>
         </div>

         <div className="FavoritesSection favorites-mobile">

          <h2>Here are also some of the products our 
              customers have appreciated the most</h2>

          <div className="product-slider">
            <ProductIcon />
            <ProductIcon />
            <ProductIcon />
          </div>   
         </div>

         <footer className="footer footer-mobile">
          <div className="links-div">
            <div className="site-map">
              <h1>Site Map</h1>
              <h2><a href="http://">Homepage</a></h2>
              <h2><a href="http://">Returns Policy</a></h2>
              <h2><a href="http://">Consumer Protection</a></h2>
              <h2><a href="http://">Warranty Policies</a></h2>
            </div>

            <div className="social-media">
              <h1>Social Media</h1>
              <h2><a href="http://">Facebook</a></h2>
              <h2><a href="http://">Twitter</a></h2>
              <h2><a href="http://">Youtube</a></h2>
            </div>

            <div className="contact-form">
              <h1>Contact</h1>
              <input type="email" name="email" id="email"
              placeholder="Insert Email"/>
              <textarea name="email-messag" id="email-message" 
              cols="30" rows="10" placeholder="Insert Text"
              maxlength="200"></textarea>
            </div>
           </div>

            <p className="madeByText">Alex Benta 2021</p> 
          </footer>
        </body>
      </div>
    </div>
  );
}

export default App;
 