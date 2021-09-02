import React from "react";
import { useState, useMemo } from "react";

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Modal } from '../modal/modal';
import IngredientDetails from "../ingredient-details/ingredient-details";
import IngredientsCategory from "../ingredients-category/ingredients-category";
import styles from '../burger-ingredients/burger-ingredients.module.css';
import { DataProps } from '../app/app';

// import { data } from '../utils/data';

export type BurgerIngredientsProps = {
  data: DataProps[]
}

export const BurgerIngredients: React.FC<BurgerIngredientsProps> = ({ 
  data
}) => {
  const [current, setCurrent] = React.useState('one')
  // console.log(data);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DataProps | null>(null);
  const buns = useMemo(() => data.filter((item) => item.type === 'bun'), [data]);
  const mains = useMemo(() => data.filter((item) => item.type === 'main'), [data]);
  const sauces = useMemo(() => data.filter((item) => item.type === 'sauce'), [data]);
  const categories = [
    {
      name: "Булки",
      data: buns,
      id: "tab1"
    },
    {
      name: "Соусы",
      data: sauces,
      id: "tab2"
    },
    {
      name: "Начиники",
      data: mains,
      id: "tab3"
    }
  ]

  const setTab = (tab:any) => {
    setCurrent(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  }
  
  const handleOpenModal = (item: DataProps) => {
    setSelectedItem(item)
    setIsOpen(true);
  }
  return (
    <section className={styles.burgerIngredients}>
      <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
      <div style={{ display: 'flex' }} className="mb-10">
        <Tab value="one" active={current === 'tab1'} onClick={()=>setTab("tab1")}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'tab2'} onClick={()=>setTab("tab2")}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'tab3'} onClick={()=>setTab("tab3")}>
          Начинки
        </Tab>
      </div>
      <div className={styles.itemsWrapper}>
      {
        categories.map(category => (
          <IngredientsCategory
            name={category.name}
            categoryItem={category.data}
            onOpenModal={handleOpenModal}
            id={category.id}
            key={category.id}
          />
        ))
      }
      </div>
      {isOpen && (
      <Modal open title="Детали ингредиента" onCloseModal={handleCloseModal}>
        <IngredientDetails itemData={selectedItem}/>
      </Modal>
      )}    
    </section>
  );
};