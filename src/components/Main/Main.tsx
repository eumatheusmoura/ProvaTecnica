// Imports
import React, { useState, useEffect } from "react";
import { dataGet, dataDelete } from "../../services/api";
import { TbTrash } from "react-icons/tb";
// Estilos
import styles from "./Main.module.css";
import axios from "axios";

const Main = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [dados, setDados] = useState<string[]>([]);

  useEffect(() => {
    dataGet(setDados, dados, setLoading);
    console.log(dados);
  }, []);

  return (
    <div className={styles.MainContainer}>
      ​
      {loading ? (
        "Carregando dados..."
      ) : (
        <div className="mt-11 ml-72	flex flex-col items-center justify-center	">
          <div className="overflow-x-auto">
            <div className="p-1.5 w-full inline-block align-middle">
              <div className="overflow-hidden border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-800 uppercase "
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-800 uppercase "
                      >
                        NOME
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-800 uppercase "
                      >
                        CPF/CNPJ
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-800 uppercase "
                      >
                        AÇÕES
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-slate-100	 divide-y divide-gray-200">
                    {dados.length > 0 &&
                      dados.map((item: any, index: number) => {
                        return (
                          <tr key={index}>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                              {index}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              {item.Nome}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              {item.CpfCnpj}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                              <a
                                className="text-green-500 hover:text-green-700"
                                href="#"
                              >
                                <TbTrash
                                  onClick={() => {
                                    dataDelete(item.Id);
                                    setDados(
                                      dados.filter(
                                        (dado) => dado.Id !== item.Id
                                      )
                                    );
                                  }}
                                  size={25}
                                  color="black"
                                />
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
