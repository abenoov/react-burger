import React from "react";
import { Tab, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { data } from '../utils/data.js';

import styles from '../styles/burger-ingredients.module.css';


export type BurgerIngredientsProps = {}

export const BurgerIngredients: React.FC<BurgerIngredientsProps> = () => {
  const [current, setCurrent] = React.useState('one')

  return (
    <section className={styles.burgerIngredients}>
      <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
      <div style={{ display: 'flex' }} className="mb-10">
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={styles.itemsWrapper}>
        <p className="text text_type_main-medium mb-6">Булки</p>
        <div className={styles.bunsWrapper}>
          {
            data.filter(item => item.type === "bun").map(filteredItems => (
              <div
                key={filteredItems._id} 
                className={styles.buns}
              >
                <img src={filteredItems.image} className="pl-4 pr-4" />
                <p className={styles.price}>{filteredItems.price} <CurrencyIcon type="primary" /></p>
                <p className={styles.name}>{filteredItems.name}</p>
              </div>
            ))
          }
        </div>
        <p className="text text_type_main-medium mb-6">Соусы</p>
        <div className={styles.bunsWrapper}>
          {
            data.filter(item => item.type === "sauce").map(filteredItems => (
              <div
                key={filteredItems._id} 
                className={styles.buns}
              >
                <img src={filteredItems.image} className="pl-4 pr-4" />
                <p className={styles.price}>{filteredItems.price} <CurrencyIcon type="primary" /></p>
                <p className={styles.name}>{filteredItems.name}</p>
              </div>
            ))
          }
        </div>
        <p className="text text_type_main-medium mb-6">Начиники</p>
        <div className={styles.bunsWrapper}>
          {
            data.filter(item => item.type === "main").map(filteredItems => (
              <div
                key={filteredItems._id} 
                className={styles.buns}
              >
                <img src={filteredItems.image} className="pl-4 pr-4" />
                <p className={styles.price}>{filteredItems.price} <CurrencyIcon type="primary" /></p>
                <p className={styles.name}>{filteredItems.name}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};