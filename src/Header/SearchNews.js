import React, { useEffect, useState } from "react"
import { Modal,Button,Typography,Input } from "@bigbinary/neetoui/v2";
import { Link } from "react-router-dom";
import { Check } from "@bigbinary/neeto-icons";
import Debounce from "./Debounce";
import axios from "axios";
const SearchNews = ({
    showModal,
    setShowModal
}) => {
const [searchVal,setSearchVal] = useState('')
const [debouncedValue, setDebouncedValue] = useState('');

const [checkNational,setCheckNational] = useState(true)
const [checkWorld,setCheckWorld] = useState(true)
const [checkBusiness, setCheckBusiness] = useState(true)
const [checkSports, setCheckSports] = useState(true)

const [fetchData, setFetchData] = useState([])
const [national,setNational] = useState([])
const [world,setWorld] = useState([])
const [business, setBusiness] = useState([])
const [sports, setSports] = useState([])
//const [fetchCategory, setFetchCategory] = useState([])
const fetchCategory = []
const categoryData = []

useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(searchVal);
    }, 800);
    setCheckNational(JSON.parse(localStorage.getItem("checkNational")))
    setCheckWorld(JSON.parse(localStorage.getItem("checkWorld")))
    setCheckBusiness(JSON.parse(localStorage.getItem("checkBusiness")))
    setCheckSports(JSON.parse(localStorage.getItem("checkSports")))
    /*if(checkNational) setFetchCategory([...fetchCategory,"national"])
    if(checkWorld) setFetchCategory("world")
    if(checkBusiness) setFetchCategory("business")
    if(checkSports) setFetchCategory("sports")*/
    return () => {
      clearTimeout(handler);
    };
  }, [searchVal]);

const handleChange = (e) => {
    setSearchVal(e.target.value)
}
console.log(`SearchVal: ${searchVal}`)
console.log(`Debounced value: ${debouncedValue}`)


useEffect(()=>{
  const fetchSearchData = async(category)=>{
    const res = await axios.get(`https://inshortsapi.vercel.app/news?category=${category}`)
    const dat = await res.data
    setFetchData(dat)
  }
  fetchSearchData("national")
  fetchSearchData("world")
  fetchSearchData("business")
  fetchSearchData("sports")

},[])


if(checkNational) {
  fetchCategory.push("national")
  categoryData.push(national)
  }
if(checkWorld) {
  fetchCategory.push("world")
  categoryData.push(world)
}
if(checkBusiness) {
  fetchCategory.push("business")
  categoryData.push(business)
}
if(checkSports) {
  fetchCategory.push("sports")
  categoryData.push(sports)
}



useEffect(()=>{
  if(fetchData.category==="national"){
    setNational(fetchData["data"])
}
else if(fetchData.category==="world"){
    setWorld(fetchData["data"])
}
else if(fetchData.category==="business"){
    setBusiness(fetchData["data"])
}
else if(fetchData.category==="sports"){
    setSports(fetchData["data"])
}
},[fetchData])


console.log(fetchCategory)


return (
  <div className="w-full">
    <Modal isOpen={showModal} onClose={() => {
        setShowModal(false)
        setSearchVal('')}}>
      <Modal.Body>
        <Input label="" size="large" value={searchVal} onChange={handleChange} placeholder="Search for an article." prefix={<i className="ri-search-line pr-2" />} />
        <div className="flex flex-col">
          {categoryData.map((cat)=>{
            return(
            cat.map((it)=>{
              //console.log(it.title)
              if((it.title.toLowerCase().includes(debouncedValue.toLowerCase()) && debouncedValue!=""))
              {
                return(
                <div className="bg-gray-200 mt-3 mb-3 p-2 text-indigo-600">
                  <Link to={{
                            pathname: `/ArticlePage/${it.title}`,
                            state: {
                                currentNews: {...it},
                                newsData: cat,
                                showPane: false
                            }
                        }}>{`->> ${it.title}`}</Link>
                </div>
                )
              }
              else return(<div></div>)
            }
            
            )

          )})}
        </div>
        
      </Modal.Body>
    </Modal>
    
  </div>
);
}
export default SearchNews;