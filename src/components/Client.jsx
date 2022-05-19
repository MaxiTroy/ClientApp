import { useNavigate } from "react-router-dom";

const Client = ({ cliente, handleDelete }) => {
  const navigate = useNavigate();
  return (
    <tr className="border-b hover:bg-gray-100">
      <td className="p-3">{cliente.nombre}</td>
      <td className="p-3">
        <p>
          <span className="text-[#161616] uppercase font-bold">Email: </span>
          {cliente.email}
        </p>
        <p>
          <span className="text-[#161616] uppercase font-bold">Tel: </span>
          {cliente.telefono}
        </p>
      </td>
      <td className="p-3">{cliente.empresa}</td>
      <td className="p-3">
        <button
          type="button"
          className="bg-blue-700 hover:bg-blue-900 block text-white w-full p-2 uppercase font-bold text-xs mt-3"
          onClick={() => navigate(`/clientes/${cliente.id}`)}
        >
          Ver
        </button>
        <button
          type="button"
          className="bg-gray-700 hover:bg-[#161616] block text-white w-full p-2 uppercase font-bold text-xs mt-3"
          onClick={() => navigate(`/clientes/edit/${cliente.id}`)}
        >
          Editar
        </button>
        <button
          type="button"
          className="bg-red-700 hover:bg-red-900 block text-white w-full p-2 uppercase font-bold text-xs mt-3"
          onClick={() => handleDelete(cliente.id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Client;
