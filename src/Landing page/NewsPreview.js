import React, { useContext, useEffect, useState } from "react"
import { Button } from "@bigbinary/neetoui/v2";
import { Link } from "react-router-dom";
import { FunContext } from "./LandingPage";
import ErrorBoundary from "../ErrorBoundary";
const MAX_LENGTH=300


const NewsPreview = ({
    cat,
    news,
    showPane,
    archieve
}) => {

   let news2 = []
        if(archieve===true){
            news.map((it)=>{
                let arr = it.date.split(",")
                const date = new Date(arr[0])
                const today = new Date()
                today.setHours(0,0,0,0);
                //console.log(`old: ${date}`)
                //console.log(`today: ${today}`)
                if((date < today) && (date != today)) {
                    news2.push(it)
                }
            })
        }
  
        else if(archieve===false){
            //setNews2(news)
            news2 = news
        }
        //console.log(`news2: ${news2}`)

    if(news.length>0){
    return(
        
    <div>
            <div className="text-xl text-left font-semibold">
                {`${cat} News`}
            </div>
            <div>
            
            {news2.map((it,index)=>{
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
                        <div className="text-right text-xs text-gray-500 mb-5">
                            {it.author} at {it.time} on {it.date}    
                        </div>
                        <div className="text-left text-sm">
                            {`${it.content.substring(0, MAX_LENGTH)}...`}
                        </div>
                        <div className="text-left text-indigo-600">

                            <Link to={{
                                pathname: `/ArticlePage/${it.title.replaceAll("%","")}`,
                                state: {
                                    currentNews: {...it},
                                    newsData: news2,
                                    showPane: showPane
                                }
                            }}>Read more</Link>
                        </div>
                    </div>      
                </div>
                )
                }
            })}
            <div className="grid grid-cols-2 justify-between gap-x-72 border-b border-t">
                {news2.map((it,index)=>{
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
                        <div className="text-right text-xs text-gray-500 mb-5">
                            {it.author} at {it.time} on {it.date}    
                        </div>
                        <div className="text-left text-xs text-indigo-600">
                        <Link to={{
                            pathname: `/ArticlePage/${it.title.replaceAll("%","")}`,
                            state: {
                                currentNews: {...it},
                                newsData: news2,
                                showPane: showPane
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
