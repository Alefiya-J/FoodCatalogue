import { useEffect, useState } from 'react'
import Recipe from './Recipe'
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import RecipeDetails from './RecipeDetails'

function App() {
  const APP_ID = "9be5fdcd";
  const APP_KEY = "f9bd6cd6e2091b23bdd666a019837491";

  // const reqSyntax = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('chicken');
  const [value, setValue] = useState('chicken');
  const [current, setCurrent] = useState({})

  useEffect(() => {
    getRecipes();
    getRecipe();
  }, [value])

  const getRecipes = async () => {
    const res = await fetch(`https://api.edamam.com/search?q=${value}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=40`);
    const data = await res.json();
    console.log(data);
    setRecipes(data.hits);
  }
  const getRecipe = async () => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Chocolate`);
    const data = await res.json();
    console.log(data);
    // setRecipes(data.hits);
  }


  const handleChange = e => {
    setSearch(e.target.value);
  }

  const btnClick = e => {
    e.preventDefault();
    setValue(search);
    // setSearch('')
  }
  const viewDetails = (index) => {
    setCurrent(recipes[index].recipe)
    console.log(current)
  }

  return (
    <Router>
      <Route path="/" exact>
        <div className="App center-middle">
          <h1>Food Catalogue</h1>
          <h3>Home to the best recipes</h3>
          <Link to="/recipes"><button className="search-btn">Get started</button></Link>
        </div>
      </Route>
      <Route path='/recipes' exact >
        <div className="App">
          <form className="search-form" onSubmit={btnClick}>
            <input className="search-box" placeholder="search by name or ingredient" type="text"
              value={search} onChange={handleChange} />
            <button className="search-btn" type="submit" > Search</button>
          </form>
          {recipes.length !== 0 ?
            <div className="recipe">{recipes.map((recipe, index) => (
              <Recipe key={index} title={recipe.recipe.label} src={recipe.recipe.image} onclick={viewDetails} currentIndex={index} />
            ))}
            </div> :
            <h1 className="center">Sorry, no recipes available!</h1>}
        </div>
      </Route>
      <Route path='/details' exact component={() => <div className=" App details"><RecipeDetails title={current.label} source={current.image}
        calories={current.calories} ingredients={current.ingredients} /> </div>}>
      </Route>
    </Router>
  );

}
export default App;
