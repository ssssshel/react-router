import { useNavigate, Outlet, Link } from "react-router-dom";


const Dashboard = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/")
  }

  return ( 
    <div>
      <h1>
        Dashboard
      </h1>

      <Link to="welcome">Say welcome</Link>
      <br />
      <Link to="goodbye">Say goodbye</Link>
      <br />
      {/* <Routes>
        <Route path="welcome" element={<p>Welcome!!!</p>} />
      </Routes> */}

      <Outlet/>
      <button onClick={handleClick}>Salir</button>
    </div>
   );
}
 
export default Dashboard;