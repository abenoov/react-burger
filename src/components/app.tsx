import React from 'react';
import { useState, useEffect } from 'react';

import {AppHeader} from './app-header';
import {BurgerIngredients} from './burger-ingredients';
import {BurgerConstructor} from './burger-constructor';
import styles from '../styles/app.module.css';

const apiURL = "https://norma.nomoreparties.space/api/ingredients";

export type AppProps = {}

export const App: React.FC<AppProps> = () => {
  const [state, setState] = useState({
    isLoading: false,
    hasError: false,
    data: []
  })

  useEffect(() => {
    getingredients();
  }, []);

  const getingredients = () => {
    setState({ ...state, hasError: false, isLoading: true });
    fetch(apiURL)
      .then(res => res.json())
      .then(data => setState({ ...state, data, isLoading: false }))
      .catch(e => {
        setState({ ...state, hasError: true, isLoading: false });
      });
  };

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