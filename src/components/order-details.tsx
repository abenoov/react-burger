import React from 'react';

import styles from '../styles/order-details.module.css';

export type OrderDetailsProps = {}

export const OrderDetails: React.FC<OrderDetailsProps> = () => {

  return(
    <div className={styles.orderDetails}>
      <span className={styles.orderId}>
        <p className="text text_type_digits-large orderId">034536
        </p>
      </span>
      <p className={styles.orderTextSmall}>
        идентификатор заказа
      </p>
      <img 
        alt="success icon" 
        src="../../images/success-icon.svg" 
        className={styles.successIcon}
      />
      <p className={styles.orderTextLight}>
        Ваш заказ начали готовить
      </p>
      <p className={styles.orderTextPrimary}>
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );  
};

export default OrderDetails;