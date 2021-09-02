import React from "react";
import { useState } from "react";

import { ConstructorElement, 
         DragIcon, 
         CurrencyIcon, 
         Button 
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Modal } from '../modal/modal';
import styles from '../burger-constructor/burger-constructor.module.css';
import OrderDetails from "../order-details/order-details";
import { DataProps } from '../app/app';
// import { data } from '../utils/data';

export type BurgerConstructorProps = {
  data: DataProps[]
}

export const BurgerConstructor: React.FC<BurgerConstructorProps> = ({
  data,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const totalCost = data.reduce((total, index) =>  total = total + index.price, 0 );

  function handleCloseModal() {
    setIsOpen(false);
  }
  
  function handleOpenModal() {
    setIsOpen(true);
  }

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
            {totalCost}
            <CurrencyIcon type="primary" />
          </p>
          <Button onClick={handleOpenModal} type="primary" size="large">Оформить заказ</Button>
          {isOpen && (
          <Modal open title="" onCloseModal={handleCloseModal}>
            <OrderDetails />
          </Modal>)}
        </div>
    </section>
  );
};