import React from "react";

type Props = {
  className: string;
  nome: string;
};

const MenuItem = ({ className, nome }: Props) => {
  return (
    <div>
      <li className={className}>{nome}</li>
    </div>
  );
};

export default MenuItem;
