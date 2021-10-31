import React, { useEffect, useState } from "react"
import { Button } from "@bigbinary/neetoui/v2";
import { Edit } from "@bigbinary/neeto-icons";
import WriteUs from "../Components/WriteUs";
import { Link } from "react-router-dom";
import image from "../Group.svg"
const FilterEmpty = ({
    checkNational,
    checkWorld,
    checkBusiness,
    checkSports
}) => {
    const [data,setData] = useState([])
    const [showModalMedium, setShowModalMedium] = useState(false);

    useEffect(()=>{
        const fetchAgain = async()=>{
            const res = await fetch("https://inshortsapi.vercel.app/news?category=national")
            const dat = await res.json()
            setData(dat["data"])
        }
        fetchAgain()
    },[])
    if(!checkNational && !checkWorld && !checkBusiness && !checkSports)
    return(
        <div className="flex-col space-y-5 px-36">
            <div className="px-80 ml-11">
                <img src={image} alt="Not found image" />
            </div>
            <div className="text-black text-xl font-semibold">
                No New Articles Found
            </div>
            <div className="pb-6 border-b">
            <Button
                iconPosition="left"
                size="large"
                label="Write to us"
                icon={Edit}
                onClick={() => setShowModalMedium(true)}
                style="secondary"
            />
            <WriteUs 
                showModalMedium={showModalMedium}
                setShowModalMedium={setShowModalMedium}
            />
            </div>
            <div className="grid grid-cols-2 justify-between gap-x-72">
                {data.map((it,index)=>{
                    if(index<6){
                        return(
                <div className="py-6 flex justify-around gap-x-3">
                    <div className="w-44">
                        <img src="https://picsum.photos/84/84" alt="No image"/>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-xs text-left font-semibold">
                            {it.title}
                        </div>
                        <div className="text-right text-xs">
                            {it.author} at {it.time} on {it.date}    
                        </div>
                        <div className="text-left text-xs text-indigo-600">
                        <Link to={{
                            pathname: `/ArticlePage/${it.title.replaceAll("%","")}`,
                            state: {
                                currentNews: {...it},
                                newsData: data,
                                showPane: false
                            }
                        }}>Read more</Link>

                        </div>

                    </div>      
                </div>
                        )
                    }
                })}

            </div>
            
        </div>
    )
    else return(<div></div>)
}
export default FilterEmpty;
