import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Categories from './components/Categories/Categories';
import RandomMeal from './components/RandomMeal/RandomMeal';
import HomePage from './components/HomePage/HomePage';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/categories" component={Categories}/>
        <Route exact path="/random" component={RandomMeal}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
