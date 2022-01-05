import { useParams } from "react-router-dom";

const UserPage = () => {

  const params = useParams()

  console.log(params)

  return ( 
    <div>
      User <h1> {params.id} </h1>
    </div>
   );
}
 
export default UserPage;