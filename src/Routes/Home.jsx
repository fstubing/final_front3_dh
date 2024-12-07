import Card from "../Components/Card";
import { useUserStates } from "../Context/Context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useUserStates();
  console.log(state.users);

  return (
    <main className="container mt-3 extra-m" data-bs-theme={state.theme}>
      <h1>Home</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {state.users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </main>
  );
};

export default Home;
