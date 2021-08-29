import React from "react";
import { useState } from "react";

import { ConstructorElement, 
         DragIcon, 
         CurrencyIcon, 
         Button 
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Modal } from './modal';
import styles from '../styles/burger-constructor.module.css';

export type BurgerConstructorProps = {
  data: any
  
}

export const BurgerConstructor: React.FC<BurgerConstructorProps> = ({
  data
}) => {
  const [isOpen, setIsOpen] = useState(false);
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
          data.map((item: any, index: any) => index !== 0 && (
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
            {data.reduce((total: any, index: any) =>  total = total + index.price, 0 )}
            <CurrencyIcon type="primary" />
          </p>
          <Button onClick={() => setIsOpen(true)} type="primary" size="large">Оформить заказ</Button>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            Fancy Modal
          </Modal>
        </div>
    </section>
  );
};