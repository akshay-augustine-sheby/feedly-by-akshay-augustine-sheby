import React, { useEffect, useState } from "react"
import { Button } from "@bigbinary/neetoui/v2";
import { Edit } from "@bigbinary/neeto-icons";
const FilterEmpty = ({
    checkNational,
    checkWorld,
    checkBusiness,
    checkSports,
}) => {
    const [data,setData] = useState([])
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
        <div className="flex-col space-y-7 px-36">
            <div>

            </div>
            <div className="text-black text-xl font-semibold">
                No New Articles Found
            </div>
            <div className="py-11 border-b">
            <Button
                iconPosition="left"
                size="large"
                label="Write to us"
                icon={Edit}
                onClick={() => {}}
                style="secondary"
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
                        <Button
                                label="Read more"
                                onClick={() => {}}
                                style="link"
                            />
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
