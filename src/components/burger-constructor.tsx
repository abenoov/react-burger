import React from "react";
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { data } from '../utils/data.js';

import styles from '../styles/burger-constructor.module.css';

export type BurgerConstructorProps = {}

export const BurgerConstructor: React.FC<BurgerConstructorProps> = () => {
  return (
    <section className={styles.burgerConstructor}>
      <span className={styles.bunTop}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={1255}
          thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
        />
      </span>
      <div className={styles.element}>
        {
          data.map((item, index) => index !== 0 && (
            <div key={item._id} className={styles.ingredientWrapper}>
              <DragIcon type="primary" />
              <span className={styles.ingredient}>
                <ConstructorElement
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                />
              </span>
            </div>
          ))
        } 
        </div>
        <span className={styles.bunTop}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={1255}
            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
          />
        </span>
        <div className={styles.buttonWrapper}>
          <p className={styles.totalPrice}>
            {data.reduce((total, index) =>  total = total + index.price, 0 )}
            <CurrencyIcon type="primary" />
          </p>
          <Button type="primary" size="large">Оформить заказ</Button>
        </div>
    </section>
  );
};