import logo from './logo.svg';
import './App.css';
import Pokecard from './Pokecard';

function App() {
  return (
    <>
      
      <Pokecard name="Bulbasaur" id={1} type="Grass" />
      <Pokecard name="Charmander" id={4} type="Fire" />
      <Pokecard name="Squirtle" id={7} type="Water" />

    </>
  );
}

export default App;
