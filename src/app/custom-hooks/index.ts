import React from "react"

const useApi=(apiLink:string)=>{

    const [data, setData]=React.useState<any>({})
    const [loading,setLoading]=React.useState(true)
    const [error,setError]=React.useState("")
        React.useEffect(()=>{
            async function fetchData(){
               
                try{
                    const responce = await fetch(apiLink);
                    if(!responce.ok){
                        setError("Network error")
                        throw new Error("Network error");
                    
                    }
                    const result=await responce.json()
                    setData(result)
                }
                catch(err:any){
                    setError(err)
                } finally{
                    setLoading(false)
                }
            }
            
            fetchData()
        },[apiLink])
        
        return  [data,loading,error]
    }
    export default useApi