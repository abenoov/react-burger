import React from 'react';
import { useState, useEffect } from 'react';

import {AppHeader} from './app-header';
import {BurgerIngredients} from './burger-ingredients';
import {BurgerConstructor} from './burger-constructor';
import styles from '../styles/app.module.css';

const apiURL = "https://norma.nomoreparties.space/api/ingredients";

export type AppProps = {}

export const App: React.FC<AppProps> = () => {
  const [ingredients, setIngredients] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const fetchData = () => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setIngredients(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log("ingredients", ingredients)

  return (
    <>
      <AppHeader/>
        <main className={styles.main} >
          {ingredients.success && <BurgerIngredients data={ingredients.data} />}
          {ingredients.success && <BurgerConstructor data={ingredients.data} />}
          {isError && <div>Error fetching data.</div>}
        </main>
    </>
  );
}

export default App;