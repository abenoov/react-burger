import React from 'react';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../ingredients-category/ingredients-category.module.css';
import { DataProps } from '../app/app'

export type IngredientsCategoryProps = {
  name: string
  categoryItem: DataProps[]
  onOpenModal: (item: DataProps) => void
  id: string
}

export const IngredientsCategory: React.FC<IngredientsCategoryProps> = ({
  name,
  categoryItem,
  onOpenModal,
  id
}) => {
  return(
    <>
      <p id={id} className="text text_type_main-medium mb-6">{name}</p>
      <div className={styles.bunsWrapper}>
        {
          categoryItem.map((filteredItems: DataProps) => (
            <div
              key={filteredItems._id} 
              className={styles.buns}
              onClick={() => onOpenModal(filteredItems)}
            >
              <img alt="bun avatar" src={filteredItems.image} className="pl-4 pr-4" />
              <p className={styles.price}>{filteredItems.price} <CurrencyIcon type="primary" /></p>
              <p className={styles.name}>{filteredItems.name}</p>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default IngredientsCategory;