import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUserStates } from "../Context/Context";

const Detail = () => {
  const { state } = useUserStates();
  const [user, setUser] = useState({});
  const params = useParams();
  console.log(params);
  const url = "https://jsonplaceholder.typicode.com/users/" + params.id;

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setUser(res.data);
    });
  }, [params.id]);

  return (
    <div className="container mt-3" data-bs-theme={state.theme}>
      <h1>Dentista {user.username}</h1>
      <div className="card">
        <div className="card-header">{user.name}</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">EMAIL: {user.email}</li>
          <li className="list-group-item">TELÉFONO: {user.phone}</li>
          <li className="list-group-item">SITIO WEB: {user.website}</li>
        </ul>
      </div>
    </div>
  );
};

export default Detail;
