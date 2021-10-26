import React from "react"
const NewsPreview = ({
    news
}) => {
    return(
        <div>
            {news.map((it)=>{
                <div>
                    {it.author}
                </div>
            })}
        </div>
    )
}
export default NewsPreview;
