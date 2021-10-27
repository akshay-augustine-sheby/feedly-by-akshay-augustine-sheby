import React from "react"
import { Link, useLocation, useParams } from "react-router-dom";
import { Button } from "@bigbinary/neetoui/v2";
const ArticlePage = () => {
    const {title} = useParams();
    const location = useLocation();
    const { currentNews, newsData } = location.state
    //console.log(title)
    return(
        <div className="px-36">
            <div className="py-6 flex-col">
                    <div className="text-4xl text-left font-semibold mb-3">
                            {currentNews.title}
                    </div>
                    <div className="text-left text-xs text-gray-500 mb-5">
                            {currentNews.author} at {currentNews.time} on {currentNews.date}    
                    </div>
                    <div>
                        <img className="object-none object-right-top" src="https://picsum.photos/526/263" alt="No image"/>
                    </div>
                    <div className="flex-col mt-5">
                        <div className="text-left text-sm">
                            {`${currentNews.content}`}
                        </div>

                    </div>

            </div>
            <div className="grid grid-cols-2 justify-between gap-x-72 border-t">
                {newsData.map((it,index)=>{
                    if(index>=5 && index<=8){
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
                            pathname: `/ArticlePage/${it.title}`,
                            state: {
                                currentNews: {...it},
                                newsData: newsData
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
}
export default ArticlePage;
