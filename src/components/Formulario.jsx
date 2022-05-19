import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alerta from "./Alerta";
import { useNavigate } from "react-router-dom";
import Spiner from "./Spiner";

const Formulario = ({ client, loading }) => {
  const navigate = useNavigate();
  const nuevoClienteSchema = Yup.object().shape({
    nombre: Yup.string().min(2, "el nombre es demasiado corto").required(),
    empresa: Yup.string().required(),
    email: Yup.string().email().required(),
    telefono: Yup.number().integer().positive(),
    notas: Yup.string(),
  });

  const handleSubmit = async (values) => {
    try {
      let response;
      if (client.id) {
        //Editar un cliente
        const url = `http://localhost:4000/clientes/${client.id}`;
        response = await fetch(url, {
          method: "PUT",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        //Agregar un nuevo clietne
        const url = "http://localhost:4000/clientes";

        response = await fetch(url, {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }

      const resultado = await response.json();

      navigate("/clientes");
    } catch (error) {
      console.log(error);
    }
  };
  return loading ? (
    <Spiner />
  ) : (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-center text-gray-600 uppercase font-bold text-xl">
        {client?.nombre ? "Editar Cliente" : "Agregar Cleinte"}
      </h1>
      <Formik
        initialValues={{
          nombre: client?.nombre ?? "",
          empresa: client?.empresa ?? "",
          email: client?.email ?? "",
          telefono: client?.telefono ?? "",
          notas: client?.notas ?? "",
        }}
        enableReinitialize={true}
        className="mt-5"
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values);

          resetForm();
        }}
        validationSchema={nuevoClienteSchema}
      >
        {({ errors, touched }) => {
          return (
            <Form>
              <div className="mb-2">
                <label className="text-[#161616]" htmlFor="nombre">
                  Nombre:
                </label>
                <Field
                  id="nombre"
                  type="text"
                  placeholder="Nombre del cliente"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  name="nombre"
                />
                {errors.nombre && touched.nombre ? (
                  <Alerta messaje={errors.nombre} />
                ) : null}
              </div>
              <div className="mb-2">
                <label className="text-[#161616]" htmlFor="empresa">
                  Empresa:
                </label>
                <Field
                  id="empresa"
                  type="text"
                  placeholder="Empresa del cliente"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  name="empresa"
                />
                {errors.empresa && touched.empresa ? (
                  <Alerta messaje={errors.empresa} />
                ) : null}
              </div>
              <div className="mb-2">
                <label className="text-[#161616]" htmlFor="emial">
                  Emial:
                </label>
                <Field
                  id="emial"
                  type="email"
                  placeholder="Emial del cliente"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  name="email"
                />
                {errors.email && touched.email ? (
                  <Alerta messaje={errors.email} />
                ) : null}
              </div>
              <div className="mb-2">
                <label className="text-[#161616]" htmlFor="telefono">
                  Telefono:
                </label>
                <Field
                  id="telefono"
                  type="tel"
                  placeholder="Telefono del cliente"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  name="telefono"
                />
              </div>
              <div className="mb-2">
                <label className="text-[#161616]" htmlFor="notas">
                  Notas:
                </label>
                <Field
                  as="textarea"
                  id="notas"
                  type="text"
                  placeholder="Notas del cliente"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  name="notas"
                />
              </div>
              <input
                type="submit"
                value={client?.nombre ? "Editar Cliente" : "Agregar Cleinte"}
                className="mt-5 w-full font-bold bg-[#161616] text-white uppercase text-lg p-3"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

Formulario.defaultProps = {
  client: {},
  loading: false,
};

export default Formulario;
