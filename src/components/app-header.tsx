import React from "react";
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../styles/app-header.module.css';

export type AppHeaderProps = {}

export const AppHeader: React.FC<AppHeaderProps> = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}> 
        <a href="#" className={styles.navItem}><BurgerIcon type="primary"/>Конструктор</a>
        <a href="#" className={styles.navItem}><ListIcon type="secondary" />Лента заказов</a>
        <div className={styles.logo}>
          <Logo />
        </div>
        <a href="#" className={styles.navItem}><ProfileIcon type="secondary" />Личный кабинет</a>
      </nav>
    </header>
  );
};
