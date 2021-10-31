import React, { useState, useEffect } from "react"
import NewsPreview from "./NewsPreview"
import Check from "./Header/Check"
import FilterClick from "./Header/FilterClick"
import { Pane, Typography, Button,Checkbox } from "@bigbinary/neetoui/v2";
import { Filter } from "@bigbinary/neeto-icons";
import Header2 from "./Header/Header2";
import FilterEmpty from "./FilterEmpty";
import axios from "axios";
export const FunContext = React.createContext();
const LandingPage = ({data1}) => {
    
    
    const [data,setData] = useState(data1)
    const [national,setNational] = useState([])
    const [world,setWorld] = useState([])
    const [business, setBusiness] = useState([])
    const [sports, setSports] = useState([])
    const [all, setAll] = useState([])
    const [abcd, setAbcd] = useState([])
    const [abcd, setAbcd] = useState([])
    const [abcd, setAbcd] = useState([])
    const [abcd, setAbcd] = useState([])
    const [abcd, setAbcd] = useState([])
    const [abcd, setAbcd] = useState([])
    const [abcd, setAbcd] = useState([])

    const [checkNational,setCheckNational] = useState(true)
    const [checkWorld,setCheckWorld] = useState(true)
    const [checkBusiness, setCheckBusiness] = useState(true)
    const [checkSports, setCheckSports] = useState(true)
    const [checkAll, setCheckAll] = useState(true)
    const [checkAbcd, setCheckAbcd] = useState(true)
    const [checkAbcd, setCheckAbcd] = useState(true)
    const [checkAbcd, setCheckAbcd] = useState(true)
    const [checkAbcd, setCheckAbcd] = useState(true)
    const [checkAbcd, setCheckAbcd] = useState(true)
    const [checkAbcd, setCheckAbcd] = useState(true)
    const [checkAbcd, setCheckAbcd] = useState(true)

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
            setCheckAll(JSON.parse(localStorage.getItem("checkAll")))
            setCheckAbcd(JSON.parse(localStorage.getItem("checkAbcd")))
            setCheckAbcd(JSON.parse(localStorage.getItem("checkAbcd")))
            setCheckAbcd(JSON.parse(localStorage.getItem("checkAbcd")))
            setCheckAbcd(JSON.parse(localStorage.getItem("checkAbcd")))
            setCheckAbcd(JSON.parse(localStorage.getItem("checkAbcd")))
            setCheckAbcd(JSON.parse(localStorage.getItem("checkAbcd")))
            setCheckAbcd(JSON.parse(localStorage.getItem("checkAbcd")))

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
        localStorage.setItem("checkAll",JSON.stringify(checkAll))
        localStorage.setItem("checkAbcd",JSON.stringify(checkAbcd))
        localStorage.setItem("checkAbcd",JSON.stringify(checkAbcd))
        localStorage.setItem("checkAbcd",JSON.stringify(checkAbcd))
        localStorage.setItem("checkAbcd",JSON.stringify(checkAbcd))
        localStorage.setItem("checkAbcd",JSON.stringify(checkAbcd))
        localStorage.setItem("checkAbcd",JSON.stringify(checkAbcd))
        localStorage.setItem("checkAbcd",JSON.stringify(checkAbcd))

        localStorage.setItem("showPane",JSON.stringify(showPane))
        localStorage.setItem("showModalExtraSmall",JSON.stringify(showModalExtraSmall))
        localStorage.setItem("showModal",JSON.stringify(showModal))
    }
    
    /*localStorage.setItem("national",JSON.stringify(national))
    localStorage.setItem("world",JSON.stringify(world))
    localStorage.setItem("business",JSON.stringify(business))
    localStorage.setItem("abcd",JSON.stringify(abcd))*/
    fetchData("all")
        fetchData("politics")
        fetchData("technology")
        fetchData("startup")
        fetchData("entertainment")
        fetchData("miscellaneous")
        fetchData("science")
        fetchData("automobile")

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
        else if(data.category==="all"){
            setAll(data["data"])
        }
        else if(data.category==="abcd"){
            setAbcd(data["data"])
        }
        else if(data.category==="abcd"){
            setAbcd(data["data"])
        }
        else if(data.category==="abcd"){
            setAbcd(data["data"])
        }
        else if(data.category==="abcd"){
            setAbcd(data["data"])
        }
        else if(data.category==="abcd"){
            setAbcd(data["data"])
        }
        else if(data.category==="abcd"){
            setAbcd(data["data"])
        }
        else if(data.category==="abcd"){
            setAbcd(data["data"])
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
        if(checkall===false) setAll([])
        else {
            fetchAgain("all")
        }
        if(checkAbcd===false) setAbcd([])
        else {
            fetchAgain("abcd")
        }
        if(checkAbcd===false) setAbcd([])
        else {
            fetchAgain("abcd")
        }
        if(checkAbcd===false) setAbcd([])
        else {
            fetchAgain("abcd")
        }
        if(checkAbcd===false) setAbcd([])
        else {
            fetchAgain("abcd")
        }
        if(checkAbcd===false) setAbcd([])
        else {
            fetchAgain("abcd")
        }
        if(checkAbcd===false) setAbcd([])
        else {
            fetchAgain("abcd")
        }
        if(checkAbcd===false) setAbcd([])
        else {
            fetchAgain("abcd")
        }
    },[checkNational,checkWorld,checkBusiness,checkSports,checkAll,checkAbcd,checkAbcd,checkAbcd,checkAbcd,checkAbcd,checkAbcd,checkAbcd])

    const fetchAgain = async(category)=>{
            const res = await axios.get(`https://inshortsapi.vercel.app/news?category=${category}`)
            const dat = await res.data
            setData(dat)
        }

    return(
        <div>
            <FunContext.Provider value={{setShowPane, setShowModalExtraSmall, setShowModal, setCheckNational, setCheckWorld, setCheckBusiness, setCheckSports,setCheckAll,setCheckAbcd,setCheckAbcd,setCheckAbcd,setCheckAbcd,setCheckAbcd,setCheckAbcd,setCheckAbcd}}>
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
            <NewsPreview cat="All" news={all} 
                           showPane={showPane}
                           />
            <NewsPreview cat="Abcd" news={abcd} 
                           showPane={showPane}
                           />
            <NewsPreview cat="Abcd" news={abcd} 
                           showPane={showPane}
                           />
            <NewsPreview cat="Abcd" news={abcd} 
                           showPane={showPane}
                           />
            <NewsPreview cat="Abcd" news={abcd} 
                           showPane={showPane}
                           />
            <NewsPreview cat="Abcd" news={abcd} 
                           showPane={showPane}
                           />
            <NewsPreview cat="Abcd" news={abcd} 
                           showPane={showPane}
                           />
            <NewsPreview cat="Abcd" news={abcd} 
                           showPane={showPane}
                           />
            <FilterEmpty checkNational={checkNational}
                        checkWorld={checkWorld}
                        checkBusiness={checkBusiness}
                        checkSports={checkSports}
                        checkAll={checkAll}
                        checkAbcd={checkAbcd}
                        checkAbcd={checkAbcd}
                        checkAbcd={checkAbcd}
                        checkAbcd={checkAbcd}
                        checkAbcd={checkAbcd}
                        checkAbcd={checkAbcd}
                        checkAbcd={checkAbcd}

                         />
            </div>
            </FunContext.Provider>
            
        </div>
    )
}
export default LandingPage;