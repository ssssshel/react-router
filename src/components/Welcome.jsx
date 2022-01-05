import { Link } from "react-router-dom";

const userId = 10

const Welcome = () => {
  return ( 
    <div>
      <h2>Bienvenido</h2>
      <Link to="/users">Lista de usuarios</Link>
      <br></br>
      <Link to={`/users/${userId}`}>Usuario</Link>
    </div>
   );
}
 
export default Welcome;