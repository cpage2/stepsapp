
import './App.css';
import statementImg from './assets/statement.png';
import shoeOne from './assets/frontendfriday-shoe 1.png';
import shoeTwo from './assets/pexels-ray-piedra-1464625 1.png';

function App() {




  return (
    <><div className="top">
      <p id='logo' style={{color: "white"}}>STEPS</p>


      <ul className="menu">
        <li><a href='#'>About</a></li>
        <li><a href='#'>Shop</a></li>
        <li><button>Cart</button></li>
      </ul>

    </div>
    
    <div className='statement'>
          <img src={statementImg}alt='img'/>

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