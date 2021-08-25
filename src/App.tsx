import React from 'react';

import {AppHeader} from './components/app-header';
import {BurgerIngredients} from './components/burger-ingredients';
import {BurgerConstructor} from './components/burger-constructor';
import styles from './styles/app.module.css';

function App() {
  return (
    <>
      <AppHeader/>
        <main className={styles.main} >
          <BurgerIngredients/>
          <BurgerConstructor/>
        </main>
    </>
  );
}

export default App;
