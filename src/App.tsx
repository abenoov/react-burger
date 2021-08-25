import React from 'react';

import {AppHeader} from './components/app-header';
import {BurgerIngredients} from './components/burger-ingredients';
import {BurgerConstructor} from './components/burger-constructor';
import './styles/App.css';

function App() {
  return (
    <>
      <AppHeader/>
        <main>
          <BurgerIngredients/>
          <BurgerConstructor/>
        </main>
    </>
  );
}

export default App;
