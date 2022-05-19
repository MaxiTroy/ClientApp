import Formulario from "../components/Formulario";

const NewClient = () => {
  return (
    <>
      <h1 className="font-black text-4xl text-[#161616]">Nuevo Cliente</h1>
      <p className="mt-3">Completa los campos para agregar un cliente nuevo</p>

      <Formulario />
    </>
  );
};

export default NewClient;
