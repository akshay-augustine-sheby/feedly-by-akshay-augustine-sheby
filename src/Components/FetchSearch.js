import { data } from "autoprefixer"
import React, { useEffect, useState } from "react"
const FetchSearch = (debouncedValue) => {
    const [checkNational,setCheckNational] = useState(true)
    const [checkWorld,setCheckWorld] = useState(true)
    const [checkBusiness, setCheckBusiness] = useState(true)
    const [checkSports, setCheckSports] = useState(true)
    //const [fetchCategory, setFetchCategory] = useState([])
    let fetchCategory = []
    const [fetchData2, setFetchData2] = useState([])
    let fetchData = []
    const [data, setData] = useState([])

    /*setCheckNational(JSON.parse(localStorage.getItem("checkNational")))
    setCheckWorld(JSON.parse(localStorage.getItem("checkWorld")))
    setCheckBusiness(JSON.parse(localStorage.getItem("checkBusiness")))
    setCheckSports(JSON.parse(localStorage.getItem("checkSports")))*/


    const checkNational2 = JSON.parse(localStorage.getItem("checkNational"))
    const checkWorld2 = JSON.parse(localStorage.getItem("checkWorld"))
    const checkBusiness2 = JSON.parse(localStorage.getItem("checkBusiness"))
    const checkSports2 = JSON.parse(localStorage.getItem("checkSports"))

    if(checkNational!==checkNational2) setCheckNational(checkNational2)
    if(checkWorld!==checkWorld2) setCheckWorld(checkWorld2)
    if(checkBusiness!==checkBusiness2) setCheckBusiness(checkBusiness2)
    if(checkSports!==checkSports2) setCheckWorld(checkSports2)

    useEffect(()=>{
    if(checkNational) fetchCategory.push("national")
    if(checkWorld) fetchCategory.push("world")
    if(checkBusiness) fetchCategory.push("business")
    if(checkSports) fetchCategory.push("sports")

    console.log(fetchCategory)

    fetchCategory.map(
        async(categ)=>{
            const res = await fetch(`https://inshortsapi.vercel.app/news?category=${categ}`)
            const dat = await res.json()
            setData(dat["data"])
            fetchData.push(data)
            //setFetchData([...fetchData, dat["data"]])
            //fetchData.push(dat["data"])
        }
        
    ) 
    setFetchData2(fetchData)

    },[])

    useEffect(()=>{

    //setFetchCategory([])
    fetchCategory = []
    
    if(checkNational) fetchCategory.push("national")
    if(checkWorld) fetchCategory.push("world")
    if(checkBusiness) fetchCategory.push("business")
    if(checkSports) fetchCategory.push("sports")

    console.log(fetchCategory)
    fetchData = []
    setFetchData2([])
    console.log(`Data0: ${fetchData2}`)

    

    fetchCategory.map(
        async(categ)=>{
            const res = await fetch(`https://inshortsapi.vercel.app/news?category=${categ}`)
            const dat = await res.json()
            setData(dat["data"])
            fetchData.push(data)
            //setFetchData([...fetchData, dat["data"]])
            //fetchData.push(dat["data"])
        }
        
    )
    
    
    setFetchData2(fetchData)
    console.log(`Data1: ${fetchData2}`)
},[checkNational, checkWorld, checkBusiness, checkSports])

    console.log(`Data2: ${fetchData2}`)
    

    return(
        <div>
            AKSHAY
        </div>
    )
}
export default FetchSearch;
