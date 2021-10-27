import React from "react"
import { Button } from "@bigbinary/neetoui/v2";
import { Link } from "react-router-dom";
const MAX_LENGTH=300


const NewsPreview = ({
    cat,
    news
}) => {
    if(news.length>0){
    return(
    <div className="px-36">
            <div className="text-xl text-left font-semibold">
                {`${cat} News`}
            </div>
            <div>
            
            {news.map((it,index)=>{
                if(index===0){
                return(
                
                <div className="py-6 flex gap-x-5">
                    <div className="w-full">
                        <img src="https://picsum.photos/526/263" alt="No image"/>
                    </div>
                    <div className="flex-col">
                        <div className="text-lg text-left font-semibold">
                            {it.title}
                        </div>
                        <div className="text-right text-xs">
                            {it.author} at {it.time} on {it.date}    
                        </div>
                        <div className="text-left text-sm">
                            {`${it.content.substring(0, MAX_LENGTH)}...`}
                        </div>
                        <div className="text-left text-indigo-600">
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
            <div className="grid grid-cols-2 justify-between gap-x-72 border-b border-t">
                {news.map((it,index)=>{
                    if(index>=1 && index<=4){
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
        <div className="flex flex-col space-y-16">
            <div> </div>
            <div> </div>
        </div>
            
    </div>
    )
    }
    else return(<div></div>)
}
export default NewsPreview;
