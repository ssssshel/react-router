import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const ApiCall = () => {

  const [equipo, setEquipo] = useState([])

  useEffect(() => {
    // console.log("Use Effect")
    // document.title = 'useEffect'
    obtenerDatos()

  }, [])

  const obtenerDatos = async () => {
    // const data = await fetch('https://jsonplaceholder.typicode.com/users')
    // const users = await data.json()
    // // console.log(users)
    // setEquipo(users)
    const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
    const users = await data.json()
    setEquipo(users.civilizations)
  }

  return ( 
    <div>
      <h1>Consumiendo una API</h1>
      <ul>
        {
          equipo.map(item => (
            <li key={item.id}> 
              <Link to={`/api/${item.id}`}>
                {item.name} - {item.expansion}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
   );
}
 
export default ApiCall;