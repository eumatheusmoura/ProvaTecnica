import axios from "axios";
export const api = axios.create();

// GET All
export async function dataGet(setDados: any, dados: any, setLoading: any) {
  try {
    setLoading(true);
    await api
      .get(
        "https://cnctesteapl.azurewebsites.net/Odata/Cliente?$select=id,cpfcnpj,nome&$filter=idEntidadeSindical/Id eq 6a8be2a2-2636-43d4-b9c0-002a50888604&$skip=1&$count=true&$expand=idEntidadeSindical($select=Id,Nome)"
      )
      .then((response) => {
        setDados(response.data.value);
        return dados;
      });
    setLoading(false);
  } catch (e) {
    console.log(e);
  }
}

// POST

export async function dataPost(dataForm: any) {
  try {
    api
      .post("https://cnctesteapl.azurewebsites.net/odata/Cliente", dataForm)
      .then((response) => {
        console.log(response.data);
      });
  } catch (e) {
    console.log(e);
  }
}

//DELETE
export async function dataDelete(id: any) {
  try {
    await api.delete(
      `https://cnctesteapl.azurewebsites.net/odata/Cliente(${id})`
    );
    console.log("Deletado com sucesso!");
  } catch (e) {
    console.log(e);
  }
}
