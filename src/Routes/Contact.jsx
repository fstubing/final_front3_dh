import Form from "../Components/Form";
import { useUserStates } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state } = useUserStates();
  return (
    <div className="container mt-3" data-bs-theme={state.theme}>
      <h2 className="text-center">¿Quieres más información?</h2>
      <p className="text-center">
        Envíanos tus datos de contacto y nos comunicaremos contigo!
      </p>
      <Form />
    </div>
  );
};

export default Contact;
