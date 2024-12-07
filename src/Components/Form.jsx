import { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    nombre: "",
    email: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (user.nombre.trim().length > 5 && regex.test(user.email)) {
      console.log(
        `Nombre: ${event.target[0].value} // Email: ${event.target[1].value}`
      );
      setShow(true);
    } else {
      setError(true);
    }
  };
  return (
    <div className="container p-5">
      <h3 className="text-center">Contáctanos</h3>
      {show ? (
        <>
          <h2 className="text-center">
            Gracias {user.nombre}, te contactaremos cuando antes vía mail
          </h2>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <label className="form-label">Nombre:</label>
          <input
            className="form-control mb-3"
            placeholder="Ingrese su nombre (longitud mayor a cinco caracteres)"
            name="nombre"
            type="text"
            value={user.nombre}
            onChange={handleChange}
          />
          <label className="form-label">Email:</label>
          <input
            className="form-control mb-3"
            placeholder="Ingrese su correo electrónico"
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
          />
          <button className="btn btn-primary btn-lg">Enviar</button>
          {error && (
            <h4 className="text-danger my-3">
              Por favor verifique su información nuevamente
            </h4>
          )}
        </form>
      )}
    </div>
  );
};

export default Form;
