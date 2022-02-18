import { useState } from "react";

export const Form = () => {
  const [values, setValues] = useState({
    nombre: "",
    email: "",
  });

  const handlerInputChange = (e) => {
    console.log(e.target.name);
    setValues({
      ...values,
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
    });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    console.log("Submit");
    console.log(values);
  };

  //validar react formic

  return (
    <div className="row">
      <form onSubmit={handlerSubmit}>
        <br />
        <br />
        <input
          className="form-control"
          type="text"
          placeholder="Nombre"
          value={values.nombre}
          onChange={handlerInputChange}
          name="nombre"
        />
        <br />

        <input
          className="form-control"
          type="email"
          placeholder="email"
          value={values.email}
          onChange={handlerInputChange}
          name="email"
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

// const [nombre, setNombre] = useState(" ");
// const [email, setEmail] = useState(" ");

// const handlerNombre = (e) => {
//   setNombre(e.target.value);
// };
// const handlerEmail = (e) => {
//   setEmail(e.target.value);
// };

// const handlerSubmit = (e) => {
//   e.preventDefault();

//   console.log("Submit");
//   console.log({ nombre, email });
// };
