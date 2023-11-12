import UserContext from "@/app/context/userContext"
import { useContext } from "react"


const UserData=()=>{
    const {data}=useContext(UserContext);
    
return (
    <div className="user-data text-center font-bold py-4 ">
        <h1>Profile Component</h1>
        <p className="text-green-500">{data.email? "Welcome "+data.email:""}</p>
    {/* <p>User Password: {data.password}</p> */}
    </div>
)
}
export default UserData