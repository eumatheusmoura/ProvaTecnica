import React, { useState } from "react";
import styles from "./Cadastro.module.css";
import { dataPost } from "../../services/api";

const Cadastro = () => {
  const [dataForm, setDataForm] = useState<{}>({
    Nome: "",
    CpfCnpj: "",
    _IdEntidadeSindical: "6a8be2a2-2636-43d4-b9c0-002a50888604",
    CapitalSocial: "5000.00",
    Contatos: [{ Tipo: "C", Contato: "11-234567" }],
    Categorias: [
      {
        Id: "b44ab830-faac-461c-91c7-16f471188f49",
        Nome: "INATIVO",
        Selecionado: true,
      },
    ],
    Produtos: [
      {
        Produto: "dc57989e-92d0-4fac-9b97-7effa2fdee77",
        CategoriaProduto: "33e9923f-b0f0-44f8-96a5-cefe4060fbc7",
        Quantidade: "0",
        DataAdesao: "2022-08-23T15:38:11.227-03:00",
        DataDesativacao: "0001-01-01T00:00:00-02:00",
        Ativo: "true",
        StatusLinha: "I",
      },
    ],
  });

  function handleChange(e: any, nomeDaChave: string) {
    setDataForm({ ...dataForm, [nomeDaChave]: e.target.value });
  }

  function handleClick(e: any) {
    e.preventDefault();
    dataPost(dataForm);
    console.log(dataForm);
  }

  return (
    <div className={styles.MainContainer}>
      <form className={styles.FormContainer}>
        <h1>Cadastrar Cliente</h1>
        <p>Preencha os campos abaixo para cadastrar um cliente.</p>
        <fieldset className={styles.FieldItem}>
          <label htmlFor="nome">Nome</label>
          <input
            className="pl-2"
            onChange={(e) => handleChange(e, "Nome")}
            type="text"
            id="nome"
          />
        </fieldset>
        <fieldset className={styles.FieldItem}>
          <label htmlFor="cpf">CPF/CNPJ</label>
          <input
            className="pl-2"
            onChange={(e) => handleChange(e, "CpfCnpj")}
            type="text"
            id="cpf"
          />
        </fieldset>
        <button onClick={handleClick} className={styles.Btn}>
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default Cadastro;
