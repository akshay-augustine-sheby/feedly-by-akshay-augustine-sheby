import React,{useState,useEffect} from "react"
const NewsPreview = ({
    news
}
) => {
    return(
        <div>
            {news.map((it)=>{
                <div className="text-gray-800">
                    {it.content}
                </div>
            })}
        </div>
    )
}
export default NewsPreview;
