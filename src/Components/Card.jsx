import { Link } from "react-router-dom";
import { useUserStates } from "../Context/Context";

const Card = ({ user }) => {
  const { dispatch, state } = useUserStates();
  const findFav = state.favs.find((fav) => fav.id === user.id);

  const addFav = () => {
    dispatch({ type: findFav ? "DELETE_FAV" : "ADD_FAV", payload: user });
  };
  return (
    <div className="col">
      <div className="card h-100">
        <Link className="card-body" to={`/dentista/${user.id}`}>
          <img
            src="/images/doctor.jpg"
            className="card-img-top"
            alt="foto_doc"
          />
        </Link>
        <h5 className="card-header">ID: {user.id}</h5>
        <Link className="card-body" to={`/dentista/${user.id}`}>
          <h5 className="card-title">Nombre: {user.name}</h5>
          <p className="card-text">Usuario: {user.username}</p>
        </Link>
        <div className="card-footer">
          <button className="btn" onClick={addFav}>
            {findFav ? "🌟" : "⭐"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
