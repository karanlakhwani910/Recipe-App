// import Key and id
import './key'

// import Modules
import Axios from 'axios'
import { useState } from 'react';


// import CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

// import Components
import RecipeTile from './RecipeTile';



function App() {
  

  const [query, setQuery] = useState("")
  const [recipes, setRecipes] = useState([]) 
  const [healthLabel, setHealthLabel] = useState("vegan");

  let url = `https://api.edamam.com/search?q=${query}&app_id=b6d821d7&app_key=63b2013ffa4e2e73b8872cd3ba9bd8cb&health=${healthLabel}`;
  
   async function getRecipes () {
    let result = await Axios(url);
    console.log(result.data.hits);
    setRecipes(result.data.hits);
  }

  const submit = (e) => {
    e.preventDefault();
    getRecipes()
  }

  let id = -1;

  return (
    <div className='app'>
      <h1 onClick={getRecipes}>Recipe Food Plaza</h1>
      <form onSubmit={submit} className='app__searchForm'>
        <input className='ingridient' type="text" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder='enter ingridient'/>
        <input className='submit-button' type="submit"  value="Search" />
        <select className='health-label'>
          <option onClick={()=>setHealthLabel('vegan')}>Vegan</option>
          <option onClick={()=>setHealthLabel('vegetarian')}>vegetarian</option>
          <option onClick={()=>setHealthLabel('paleo')}>paleo</option>
          <option onClick={()=>setHealthLabel("low-sugar")}>low-sugar</option>
          <option onClick={()=>setHealthLabel('shellfish-free')}>shellfish-free</option>

        </select>
      </form>

      <div className='recipes'>
        {
          recipes.map((recipe)=>{
            id++;
            return (
              <RecipeTile key={id} recipe={recipe}></RecipeTile>
            )
          })
        }
      </div>

    </div>
  );
}

export default App;
