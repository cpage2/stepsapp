
import './App.css';
import shoeOne from './assets/frontendfriday-shoe 1.png';
import shoeTwo from './assets/pexels-ray-piedra-1464625 1.png';

function App() {

  return (
    <>
    
    
    {/* Menu */}
    <div className = "container">
      <div className="row">

          <div className = "col">
          <p id='logo' style={{color: "white"}}>STEPS</p>
          </div>


          <div className="col">
              <ul className="menu">
                <li><a href='#'>About</a></li>
                <li><a href='#'>Shop</a></li>
                <li><button type='button'>Cart</button></li>
              </ul>
          </div>


        </div>


    </div>
   
    
    <div className='statement'>
          <h1 id='stattext'>SHOES FOR EVERY DAY</h1>
      </div>

      <div className='shoes'>
         <img src={shoeOne} alt='Shoe'/>
         <img src = {shoeTwo} alt= 'Shoe 2'/>
      </div>
      
      </>
  );
}

export default App;


//menu (hamburger - logo - about - shop - cart button)
//statement
//images