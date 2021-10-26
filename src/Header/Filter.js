import React, { useState, useEffect } from "react"
const Filter = () => {
    const [data,setData] = useState([])
    const [national,setNational] = useState([])
    const [world,setWorld] = useState([])
    const [business, setBusiness] = useState([])
    const [sports, setSports] = useState([])

    useEffect(()=>{
        const fetchData = async(category)=>{
            const res = await fetch(`https://inshortsapi.vercel.app/news?category=${category}`)
            const dat = await res.json
            setData(dat)
        }
        fetchData(national)
        setNational(data)
        setData([])
        fetchData(world)
        setWorld(data)
        setData([])
        fetchData(business)
        setBusiness(data)
        setData([])
        fetchData(sports)
        setSports(data)
        setData([])

    })
    return(
        <div>
            <Check />
            
        </div>
    )
}
export default Filter;