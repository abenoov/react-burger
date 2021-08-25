import React from "react";
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { data } from '../utils/data.js';

import styles from '../styles/burger-constructor.module.css';

export type BurgerConstructorProps = {}

export const BurgerConstructor: React.FC<BurgerConstructorProps> = () => {
  return (
    <section className={styles.burgerConstructor}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className={styles.constructorElement}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={200}
        thumbnail={"img"}
      />
      <ConstructorElement
        text="Краторная булка N-200i (верх)"
        price={50}
        thumbnail={"img"}
      />
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text="Краторная булка N-200i (низ)"
        price={200}
        thumbnail={"img"}
      />
    </div>
    </section>
  );
};
