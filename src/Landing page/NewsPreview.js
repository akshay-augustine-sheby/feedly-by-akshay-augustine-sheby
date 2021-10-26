import React from "react"
const MAX_LENGTH=300
const NewsPreview = ({
    cat,
    news
}) => {
    return(
        <div className="px-36">
            <div className="text-xl text-left font-semibold">
                {cat}
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
                        <div className="text-right">
                            {it.author} at {it.time} on {it.date}    
                        </div>
                        <div className="text-left">
                            {`${it.content.substring(0, MAX_LENGTH)}...`}
                        </div>
                        <div className="text-left text-indigo-600">
                            <a href="#">Read more</a>
                        </div>

                    </div>      
                </div>
                )
                }
                else if(index<=4) {
                    return(
                <div className="py-6 flex gap-x-5">
                    <div className="w-full">
                        <img src="https://picsum.photos/84/84" alt="No image"/>
                    </div>
                    <div className="flex-col">
                        <div className="text-md text-left font-semibold">
                            {it.title}
                        </div>
                        <div className="text-right text-sm">
                            {it.author} at {it.time} on {it.date}    
                        </div>
                        <div className="text-left text-sm text-indigo-600">
                            <a href="#">Read more</a>
                        </div>

                    </div>      
                </div>
                    )
                }
                
                
            })}
            </div>
        </div>
    )
}
export default NewsPreview;
