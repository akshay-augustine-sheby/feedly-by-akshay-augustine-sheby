import React, { useState, useEffect } from "react"
import NewsPreview from "./NewsPreview"
import Check from "../Header/Check"
import FilterClick from "../Header/FilterClick"
import { Pane, Typography, Button,Checkbox } from "@bigbinary/neetoui/v2";
import { Filter } from "@bigbinary/neeto-icons";
import Header2 from "../Header/Header2";
import FilterEmpty from "./FilterEmpty";
export const FunContext = React.createContext();
const LandingPage = ({data1}) => {
    
    
    const [data,setData] = useState(data1)
    const [national,setNational] = useState([])
    const [world,setWorld] = useState([])
    const [business, setBusiness] = useState([])
    const [sports, setSports] = useState([])
    const [checkNational,setCheckNational] = useState(true)
    const [checkWorld,setCheckWorld] = useState(true)
    const [checkBusiness, setCheckBusiness] = useState(true)
    const [checkSports, setCheckSports] = useState(true)
    const [showPane, setShowPane] = useState(false)
    const [showModalExtraSmall, setShowModalExtraSmall] = useState(false);
    const [showModal, setShowModal] = useState(false);

    console.log(data)
    //setData(fetchData1)
    if(data===undefined) 
            {setData(JSON.parse(localStorage.getItem("data")))
            setCheckNational(JSON.parse(localStorage.getItem("checkNational")))
            setCheckWorld(JSON.parse(localStorage.getItem("checkWorld")))
            setCheckBusiness(JSON.parse(localStorage.getItem("checkBusiness")))
            setCheckSports(JSON.parse(localStorage.getItem("checkSports")))
            setShowPane(JSON.parse(localStorage.getItem("showPane")))
            setShowModalExtraSmall(JSON.parse(localStorage.getItem("showModalExtraSmall")))
            setShowModal(JSON.parse(localStorage.getItem("showModal")))
        }
    else{
        localStorage.setItem("data",[JSON.stringify(data)])
        localStorage.setItem("checkNational",JSON.stringify(checkNational))
        localStorage.setItem("checkWorld",JSON.stringify(checkWorld))
        localStorage.setItem("checkBusiness",JSON.stringify(checkBusiness))
        localStorage.setItem("checkSports",JSON.stringify(checkSports))
        localStorage.setItem("showPane",JSON.stringify(showPane))
        localStorage.setItem("showModalExtraSmall",JSON.stringify(showModalExtraSmall))
        localStorage.setItem("showModal",JSON.stringify(showModal))
    }
    
    /*localStorage.setItem("national",JSON.stringify(national))
    localStorage.setItem("world",JSON.stringify(world))
    localStorage.setItem("business",JSON.stringify(business))
    localStorage.setItem("sports",JSON.stringify(sports))*/

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
            <FunContext.Provider value={{setShowPane, setShowModalExtraSmall, setShowModal, setCheckNational, setCheckWorld, setCheckBusiness, setCheckSports}}>
            <Header2 
                    showPane={showPane}
                    showModalExtraSmall={showModalExtraSmall}
                    showModal={showModal}

                            />
            <div className="mt-11">
            <NewsPreview cat="National" news={national} 
                            showPane={showPane} />
            <NewsPreview cat="World" news={world} 
                           showPane={showPane}
                           />
            <NewsPreview cat="Business" news={business} 
                           showPane={showPane}
                           />
            <NewsPreview cat="Sports" news={sports} 
                           showPane={showPane}
                           />
            <FilterEmpty checkNational={checkNational}
                        checkWorld={checkWorld}
                        checkBusiness={checkBusiness}
                        checkSports={checkSports}
                         />
            </div>
            </FunContext.Provider>
            
        </div>
    )
}
export default LandingPage;