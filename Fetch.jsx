import React,{useState,useEffect} from 'react'
const userDetails="https://jsonplaceholder.typicode.com/posts"
const Fetch = () => {
    const [user,setUser]=useState([])
    const userHandling=async()=>{
        const response=await fetch(userDetails)
        const newData=await response.json()
        setUser(newData)
    }
    useEffect(()=>{
     console.log(userHandling())
    },[])
  return (
       user.map((item)=>{
            return(
               <div className="userSection">
                <h2 style={{color:"yellow"}}>{item.title}</h2>
                <h3 style={{color:"blue"}}>{item.body}</h3>
               </div> 
            )
        })
  )
}

export default Fetch
