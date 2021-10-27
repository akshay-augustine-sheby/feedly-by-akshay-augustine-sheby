import React, { useState, useEffect } from "react"
import NewsPreview from "../Landing page/NewsPreview"
import Check from "./Check"
import FilterClick from "./FilterClick"
import { Pane, Typography, Button,Checkbox } from "@bigbinary/neetoui/v2";
import { Filter } from "@bigbinary/neeto-icons";
import Header2 from "./Header2";
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
    const [showPane, setShowPane] = useState(false);

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
        //console.log(data)
        if(data.category==="national"){
            setNational(data["data"])
        }
        else if(data.category==="world"){
            setWorld(data["data"])
        }
        else if(data.category==="business"){
            setBusiness(data["data"])
        }
        else if(data.category==="sports"){
            setSports(data["data"])
        }
    },[data])
    useEffect(()=>{
        if(checkNational===false) setNational([])
        else {
            fetchAgain("national")
        }
        if(checkWorld===false) setWorld([])
        else {
            fetchAgain("world")
        }
        if(checkBusiness===false) setBusiness([])
        else {
            fetchAgain("business")
        }
        if(checkSports===false) setSports([])
        else {
            fetchAgain("sports")
        }


    },[checkNational,checkWorld,checkBusiness,checkSports])

    const fetchAgain = async(category)=>{
            const res = await fetch(`https://inshortsapi.vercel.app/news?category=${category}`)
            const dat = await res.json()
            setData(dat)
        }

    return(
        <div>
            <Header2 
                            showPane={showPane}
                            setShowPane={setShowPane}
                            checkNational={checkNational}
                            setCheckNational={setCheckNational}
                            checkWorld={checkWorld}
                            setCheckWorld={setCheckWorld}
                            checkBusiness={checkBusiness}
                            setCheckBusiness={setCheckBusiness}
                            checkSports={checkSports}
                            setCheckSports={setCheckSports}/>
            <NewsPreview cat="National" news={national} />
            <NewsPreview cat="World" news={world} />
            <NewsPreview cat="Business" news={business} />
            <NewsPreview cat="Sports" news={sports} />
        
            
        </div>
    )
}
export default Filter2;