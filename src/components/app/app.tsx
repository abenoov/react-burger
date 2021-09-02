import React from 'react';
import { useState, useEffect } from 'react';

import {AppHeader} from '../header/app-header';
import {BurgerIngredients} from '../burger-ingredients/burger-ingredients';
import {BurgerConstructor} from '../burger-constructor/burger-constructor';
import styles from '../app/app.module.css';
import { checkReponse, apiURL } from '../../utils/burger-api';

export type AppProps = {}

export type DataProps = {
  _id: string,
  name: string,
  type: string,
  proteins: number,
  fat: number
  carbohydrates: number
  calories: number
  price: number
  image: string
  image_mobile: string
  image_large: string
}

export const App: React.FC<AppProps> = () => {
  const [ingredients, setIngredients] = useState<DataProps[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const fetchData = () => {
    fetch(`${apiURL}/ingredients`)
      .then((res) => checkReponse(res))
      .then((data) => {
        setIsLoading(false);
        
        if(data?.success) {
          setIsSuccess(true)
          setIngredients(data.data);
        }

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
    return (<div>Loading...</div>);
  }

  return (
    <>
      <AppHeader/>
        <main className={styles.main} >
          {isSuccess &&  <BurgerIngredients data={ingredients} /> }
          {isSuccess && <BurgerConstructor data={ingredients} />}
          {isError && <div>Error fetching data.</div>}
        </main>
    </>
  );
}

export default App;