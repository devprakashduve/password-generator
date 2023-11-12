import UserContext from "@/app/context/userContext"
import { useContext } from "react"


const UserData=()=>{
    const {data}=useContext(UserContext);
    
return (
    <div className="user-data text-center font-bold py-4 "><p>You loggedin as : {data.email}</p>
    {/* <p>User Password: {data.password}</p> */}
    </div>
)
}
export default UserData