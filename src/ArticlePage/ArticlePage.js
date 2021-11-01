import React from "react"
import { Link, useHistory, useLocation } from "react-router-dom";
import { Button, Tooltip } from "@bigbinary/neetoui/v2";
import { Header } from "@bigbinary/neetoui/v2/layouts";
import { Copy,Filter,Notification,Search,Home } from "@bigbinary/neeto-icons";
import img from "../Group 2.svg"

const ArticlePage = () => {
    const location = useLocation();
    const history = useHistory();
    
    try {
        const { currentNews, newsData, showPane } = location.state
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
                            onClick={()=>{
                                localStorage.setItem("showModal",JSON.stringify(true))
                                history.push("/LandingPage")
                            }}
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
                            onClick={()=>{
                                localStorage.setItem("showModalExtraSmall",JSON.stringify(true))
                                history.push("/LandingPage")
                            }}
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
                                    onClick={()=>{
                                        localStorage.setItem("showPane",JSON.stringify(true))
                                        history.push("/LandingPage")
                                    }
                                    }
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
                        <img className="object-contain h-56 w-full" src="https://picsum.photos/526/263" alt="No image"/>
                    </div>
                    <div className="flex-col mt-5 mb-9">
                        <div className="text-left text-sm">
                            <div>
                                {`${currentNews.content}`}
                            </div><br />
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare felis non magna imperdiet viverra. Duis ipsum elit, varius nec neque eu, blandit ullamcorper ipsum. Quisque magna eros, tristique a consectetur in, venenatis eget urna. Curabitur quam lectus, laoreet egestas vestibulum eu, ornare in tellus. Vivamus sodales ullamcorper egestas. Morbi egestas hendrerit felis sed lobortis. Sed et ullamcorper libero, id rutrum nunc.
                            </div><br />
                            <div>
                                Vestibulum dapibus placerat varius. Sed interdum justo tempus, pulvinar mi vel, aliquam enim. Sed pretium maximus purus eu maximus. Donec id quam vitae lectus gravida scelerisque. Fusce ornare massa ac justo varius, eget tristique sem convallis. Quisque fringilla tincidunt sapien id fringilla. Integer auctor nisl non turpis elementum, sed sollicitudin est placerat. Curabitur scelerisque auctor orci, non auctor mauris molestie ut. In et rutrum magna, eget molestie nisi. Curabitur ultricies eget elit ac feugiat. Curabitur congue, odio a dapibus blandit, turpis ipsum pretium risus, vel facilisis magna eros imperdiet nisl. Praesent vulputate nunc vitae arcu pellentesque interdum.
                            </div><br />
                            <div>
                                Phasellus vitae quam ac ligula lacinia egestas. Praesent auctor neque in justo maximus, id mollis felis commodo. Aenean id neque vel mauris ullamcorper vehicula quis ut leo. Fusce semper eleifend orci, id ullamcorper felis condimentum ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin aliquam blandit turpis et laoreet. Aenean velit dui, iaculis non accumsan pharetra, pulvinar sed felis. Integer tortor ante, aliquam a vulputate in, aliquet vel nisi.
                            </div><br />
                        </div>

                    </div>

            
            <div className="grid grid-cols-2 justify-between gap-x-72 border-t">
                {newsData.map((it,index)=>{
                    if(index>=5 && index<=8){
                        return(
                <div className="py-6 flex">
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
                            pathname: `/ArticlePage/${it.title.replace(/[% ]/g,"")}`,
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
} catch (error) {
    console.log(error)
    return(
        <div className="mt-52">
                <img className="object-none h-56 w-full" src={img} alt="No image" />
                <h1 className="mt-7 mb-7">You have landed somewhere unknown.</h1>
                <Button
                                    iconPosition="left"
                                    size="large"
                                    label="Take me home"
                                    icon={Home}
                                    onClick={() => {history.push("/LandingPage")}}
                                    style="secondary"
                                />
            </div>
    )
}
            //}
}
export default ArticlePage;
