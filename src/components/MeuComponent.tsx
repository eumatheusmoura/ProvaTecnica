import React from "react";

type Props = {
  nome: string;
  idade?: number;
};

const MeuComponent = ({ nome }: Props) => {
  return <div>{nome}</div>;
};

export default MeuComponent;
