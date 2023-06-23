
import './App.css';
import shoeOne from './assets/frontendfriday-shoe 1.png';
import shoeTwo from './assets/pexels-ray-piedra-1464625 1.png';
import hamMenu from './assets/hamMenu2.png';

function App() {

  return (
    <>
    
    
    {/* Menu */}
    <div className = "container" style={{maxWidth:'100%', marginTop:'30px'}}>
      <div className="row">

          <div className = "col" style={{display:'block ruby', textAlign:'center'}}>
          <img src={hamMenu} alt='Hamburger Menu'  style={{width:"50px", verticalAlign:'baseline', float:'left'}}/>
          <p id='logo' style={{color: "white"}}>STEPS</p>
          </div>


          <div className="col">
              <ul className="menu">
                <li><a href='#'>About</a></li>
                <li><a href='#'>Shop</a></li>
                <button type='button' style={{float:'right'}}>Cart</button>
              </ul>
          </div>


        </div>


    </div>
   
    {/*Text Statement */}
    <div className='statement'>
          <h1 id='stattext'>SHOES FOR EVERY DAY</h1>
      </div>

     {/*Shoe Images */}
      <div className='shoes'>
         <img src={shoeOne} alt='Shoe' id='shoeOne'/>
         <img src = {shoeTwo} alt= 'Shoe 2'/>
      </div>
      
      </>
  );
}

export default App;


//menu (hamburger - logo - about - shop - cart button)
//statement
//images