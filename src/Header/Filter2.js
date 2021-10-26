import React, { useState, useEffect } from "react"
import NewsPreview from "../Landing page/NewsPreview"
import Check from "./Check"
const Filter2 = () => {
    const [data,setData] = useState([])
    const [national,setNational] = useState([])
    const [world,setWorld] = useState([])
    const [business, setBusiness] = useState([])
    const [sports, setSports] = useState([])
    const [checkNational,setCheckNational] = useState(true)
    const [checkWorld,setCheckWorld] = useState(true)
    const [checkBusiness, setCheckBusiness] = useState(true)
    const [checkSports, setCheckSports] = useState(true)

    useEffect(()=>{
        const fetchData = async(category)=>{
            const res = await fetch(`https://inshortsapi.vercel.app/news?category=${category}`)
            const dat = await res.json()
            
            setData(dat)
            

            
        }
        fetchData("national")
        fetchData("world")
        fetchData("business")
        fetchData("sports")
        
    },[])
    useEffect(()=>{
        console.log(data)
        if(data.category==="national"){
            setNational(data["data"])
        }
        else if(data.category==="world"){
            setWorld(data["data"])
        }
        else if(data.category==="business"){
            setWorld(data["data"])
        }
        else if(data.category==="sports"){
            setWorld(data["data"])
        }
    },[data])
    const fetchAgain = async(category)=>{
            const res = await fetch(`https://inshortsapi.vercel.app/news?category=${category}`)
            const dat = await res.json()
            return dat["data"]
        }

    return(
        <div>
            <Check    
                name="National"
                checked={checkNational}
                onChange={e => {
                    setCheckNational(e.target.checked)
                    if(checkNational===false) setNational([])
                    else {
                        setNational(fetchAgain("national"))
                    }
                }
                } 
            />
            <Check    
                name="World"
                checked={checkWorld}
                onChange={e => setCheckWorld(e.target.checked)} 
            />
            <Check    
                name="Business"
                checked={checkBusiness}
                onChange={e => setCheckBusiness(e.target.checked)} 
            />
            <Check    
                name="Sports"
                checked={checkSports}
                onChange={e => setCheckSports(e.target.checked)} 
            />
            {national!==[] &&
            national.map((it)=>(
                <div>
                    {it.content}
                </div>
            )
                
            )
        }
            
        </div>
    )
}
export default Filter2;