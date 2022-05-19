import React, { useState, useEffect } from "react";
import Client from "../components/Client";

const Home = () => {
  const [clientes, setClientes] = useState([]);
  useEffect(() => {
    const obtenerClientesAPI = async () => {
      try {
        const url = "http://localhost:4000/clientes";
        const response = await fetch(url);
        const data = await response.json();
        setClientes(data);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerClientesAPI();
  }, []);

  const handleDelete = async (id) => {
    const eliminar = confirm("Deseas eliminar este cliente?");
    if (eliminar) {
      try {
        const url = `http://localhost:4000/clientes/${id}`;
        const response = await fetch(url, {
          method: "DELETE",
        });
        await response.json();
        const clientAct = clientes.filter((item) => item.id !== id);
        setClientes(clientAct);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <h1 className="font-black text-4xl text-[#161616]">Clientes</h1>
      <p className="mt-3">Administra tus clientes</p>

      <table className="w-full mt-5 table-auto shadow bg-white">
        <thead className="bg-gray-700 text-white">
          <tr>
            <th className="p-2">Nombre</th>
            <th className="p-2">Contacto</th>
            <th className="p-2">Empresa</th>
            <th className="p-2">Aciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <Client
              key={cliente.id}
              cliente={cliente}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
