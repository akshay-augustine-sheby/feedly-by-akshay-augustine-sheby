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
            
            setData(dat["data"])
            

            
        }
        fetchData("national")
        setNational(data)
        setData([])

        fetchData("world")
        setWorld(data)
        setData([])
        
        fetchData("business")
        setBusiness(data)
        setData([])
        
        fetchData("sports")
        setSports(data)
        setData([])
    },[])
    
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
            {national.map((it)=>(
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