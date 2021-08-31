import React from 'react';

import styles from '../styles/ingredient-details.module.css';

export type IngredientDetailsProps = {
  itemData: any
}

export const IngredientDetails: React.FC<IngredientDetailsProps> = ({
  itemData
}) => {
  return(
    <div className={styles.ingredientDetails}>
      <img 
        alt="ingredient avatar" 
        src={itemData.image_large} 
        className={styles.itemImage}  
      />
      <p className="text text_type_main-medium">{itemData.name}</p>
      <div className={styles.descriptionWrapper}>
        <div className={styles.itemDescription}>
          <p>Калории,ккал</p>
          <p>{itemData.calories}</p>
        </div>
        <div className={styles.itemDescription}>
          <p>Белки, г</p>
          <p>{itemData.proteins}</p>
        </div>
        <div className={styles.itemDescription}>
          <p>Жиры, г</p>
          <p>{itemData.fat}</p>
        </div>
        <div className={styles.itemDescription}>
          <p>Углеводы, г</p>
          <p>{itemData.carbohydrates}</p>
        </div>
      </div>
    </div>
  );  
};

export default IngredientDetails;