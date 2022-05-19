import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Formulario from "../components/Formulario";

const EditClient = () => {
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const url = `http://localhost:4000/clientes/${id}`;
    const getClient = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setClient(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getClient();
  }, []);
  return (
    <>
      <h1 className="font-black text-4xl text-[#161616]">Editar Cliente</h1>
      <p className="mt-3">Edita los datos de este cliente</p>
      {client?.nombre ? (
        <Formulario client={client} loading={loading} />
      ) : (
        <p>ID del cliente no valido</p>
      )}
    </>
  );
};

export default EditClient;
