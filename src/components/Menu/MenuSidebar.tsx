// Imports
import React from "react";
import { Link } from "react-router-dom";

// Estilos
import styles from "./MenuSidebar.module.css";
import style from "./MenuItem.module.css";
import { TbPlus, TbHome, TbUserCircle } from "react-icons/tb";
import MenuItem from "./MenuItem";

const MenuSidebar = () => {
  return (
    <div className={styles.MenuContainerPrimary}>
      <h1>
        <Link to="/">Fecomércio</Link>
      </h1>

      <div className={styles.MenuContainerList}>
        <Link to="/cadastrar">
          <span className={style.ItemList1}>
            <TbPlus size={25} color="223134" />
            <MenuItem className={style.MenuItem} nome="Cadastrar Cliente" />
          </span>
        </Link>
        <Link to="/">
          <span className={style.ItemList}>
            <TbHome size={25} color="white" />
            <MenuItem className={style.MenuItem} nome="Início" />
          </span>
        </Link>
        <Link to="/">
          <span className={style.ItemList}>
            <TbUserCircle size={25} color="white" />
            <MenuItem className={style.MenuItem} nome="Categ. Clientes" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MenuSidebar;
