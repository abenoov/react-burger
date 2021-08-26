import React from 'react';

import {AppHeader} from './app-header';
import {BurgerIngredients} from './burger-ingredients';
import {BurgerConstructor} from './burger-constructor';
import styles from '../styles/app.module.css';

export type AppProps = {}

export const App: React.FC<AppProps> = () => {
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