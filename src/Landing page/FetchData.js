import axios from "axios"
import React, { useEffect, useState } from "react"
import LandingPage from "./LandingPage"
const FetchData = () => {
    const [data,setData] = useState([])
    useEffect(()=>{

        const fetchData = async(category)=>{
            const res = await axios.get(`https://inshortsapi.vercel.app/news?category=${category}`)
            const dat = await res.data
            
            setData(dat)
            
    
            
        }
        fetchData("national")
        fetchData("world")
        fetchData("business")
        fetchData("sports")
        
    },[])


    return(
        <div>
            <LandingPage data1={data}/>
        </div>
    )
    
}
export default FetchData;