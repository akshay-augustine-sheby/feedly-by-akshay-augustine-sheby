import React, { useContext } from "react"
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import { Button, Tooltip } from "@bigbinary/neetoui/v2";
import { Header } from "@bigbinary/neetoui/v2/layouts";
import Header2 from "../Header/Header2";
import { FunContext } from "../Landing page/LandingPage";
import { Copy,Filter,Notification,Search } from "@bigbinary/neeto-icons";

const ArticlePage = () => {
    const {title} = useParams();
    const location = useLocation();
    const { currentNews, newsData, showPane } = location.state
    const history = useHistory();
    //const {setShowPane} = useContext(FunContext);
    

    
    //console.log(title)
    return(
        
        <div>
            
            <div className="px-6 h-auto border-b">
            <Header
                
                actionBlock={
                <div className="flex">
                    <Tooltip
                        content="Search"
                        followCursor="horizontal"
                        placement="bottom"
                        >
                        <Button
                            onClick={function noRefCheck(){}}
                            size="large"
                            style="text"
                            icon={Search}
                        />
                    </Tooltip>
                    <Tooltip
                        content="Subscribe"
                        followCursor="horizontal"
                        placement="bottom"
                        >
                        <Button
                            onClick={function noRefCheck(){}}
                            size="large"
                            style="text"
                            icon={Notification}
                        />
                    </Tooltip>
                    <div className="space-y-6">
                        <div className="w-1/2 space-y-8">
                            <div className="flex flex-row items-center justify-start space-x-6">
                                <Button
                                    iconPosition="right"
                                    size="large"
                                    label="Filter"
                                    icon={Filter}
                                    onClick={()=>history.push("/LandingPage")}
                                    style="secondary"
                                />
              
                            </div>
                        </div>
                    </div>

                </div>
                }    
                title="Feed.ly"
            />
            </div>
            <div className="py-6 mt-5 px-36 flex-col">

                    <div className="text-4xl text-left font-semibold mb-3">
                            {currentNews.title}
                            <Button
                            onClick={() => navigator.clipboard.writeText(currentNews.readMoreUrl)}
                            size="large"
                            style="text"
                            icon={Copy}
                        />
                    </div>
                    
                    <div className="text-left text-xs text-gray-500 mb-5">
                            {currentNews.author} at {currentNews.time} on {currentNews.date}    
                    </div>
                    <div>
                        <img className="object-none object-right-top" src="https://picsum.photos/526/263" alt="No image"/>
                    </div>
                    <div className="flex-col mt-5 mb-9">
                        <div className="text-left text-sm">
                            {`${currentNews.content}`}
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
                                newsData: newsData,
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
    </div>
    )
}
export default ArticlePage;
