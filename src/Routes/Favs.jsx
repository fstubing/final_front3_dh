import Card from "../Components/Card";
import { useUserStates } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useUserStates();
  return (
    <main className="container mt-3 extra-m" data-bs-theme={state.theme}>
      <h1>Dentists Favs</h1>
      <div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {state.favs.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Favs;
