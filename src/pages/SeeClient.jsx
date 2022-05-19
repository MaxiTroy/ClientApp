import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spiner from "../components/Spiner";

const SeeClient = () => {
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const url = `${import.meta.env.VITE_API_URL}/${id}`;
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
  return loading ? (
    <Spiner />
  ) : Object.keys(client).length === 0 ? (
    <p>El usuario no existe</p>
  ) : (
    <div>
      <>
        <h1 className="font-black text-4xl text-[#161616]">{client.nombre}</h1>
        <p className="mt-3">Informacion del Cleinte</p>
        <p className="text-3xl text-gray-600 mt-10">
          <span className="uppercase font-bold text-gray-800">Cliente:</span>
          {client.nombre}
        </p>
        <p className="text-2xl text-gray-600 mt-4">
          <span className="uppercase font-bold text-gray-800">Telefono:</span>
          {client.telefono}
        </p>
        <p className="text-2xl text-gray-600 mt-4">
          <span className="uppercase font-bold text-gray-800">Email:</span>
          {client.email}
        </p>
        <p className="text-2xl text-gray-600 mt-4">
          <span className="uppercase font-bold text-gray-800">Empresa:</span>
          {client.empresa}
        </p>
        {client.notas && (
          <p className="text-2xl text-gray-600 mt-4">
            <span className="uppercase font-bold text-gray-800">Notas:</span>
            {client.notas}
          </p>
        )}
      </>
    </div>
  );
};

export default SeeClient;
