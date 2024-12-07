import { useUserStates } from "../Context/Context";
const Footer = () => {
  const { state } = useUserStates();
  return (
    <footer
      className="navbar fixed-bottom bg-body-tertiary"
      data-bs-theme={state.theme}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Desarrollado por FSA
        </a>
      </div>
    </footer>
  );
};

export default Footer;
