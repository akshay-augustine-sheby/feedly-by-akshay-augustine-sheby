import React, { useState } from "react"
import Filter2 from "./Filter2";
import { Header } from "@bigbinary/neetoui/v2/layouts";
import { Button,Tooltip } from "@bigbinary/neetoui/v2";
import { Filter,Notification,Search } from "@bigbinary/neeto-icons";
import FilterClick from "./FilterClick";
import Subscribe from "./Subscribe";
const Header2 = ({
    showPane,
    setShowPane,
    checkNational,
    setCheckNational,
    checkWorld,
    setCheckWorld,
    checkBusiness,
    setCheckBusiness,
    checkSports,
    setCheckSports
}) => {
    const [showModalExtraSmall, setShowModalExtraSmall] = useState(false);
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
                            onClick={() => setShowModalExtraSmall(true)}
                            size="large"
                            style="text"
                            icon={Notification}
                        />
                    </Tooltip>
                    <Subscribe 
                            showModalExtraSmall={showModalExtraSmall}
                            setShowModalExtraSmall={setShowModalExtraSmall} />
                    <div className="space-y-6">
                        <div className="w-1/2 space-y-8">
                            <div className="flex flex-row items-center justify-start space-x-6">
                                <Button
                                    iconPosition="right"
                                    size="large"
                                    label="Filter"
                                    icon={Filter}
                                    onClick={() => setShowPane(true)}
                                    style="secondary"
                                />
              
                            </div>
                        </div>
                    </div>
            
                    <FilterClick 
                            showPane={showPane}
                            setShowPane={setShowPane}
                            checkNational={checkNational}
                            setCheckNational={setCheckNational}
                            checkWorld={checkWorld}
                            setCheckWorld={setCheckWorld}
                            checkBusiness={checkBusiness}
                            setCheckBusiness={setCheckBusiness}
                            checkSports={checkSports}
                            setCheckSports={setCheckSports}



                    />
                    
                </div>
                }    
                title="Feed.ly"
            />
            </div>
            
        </div>
    )
}
export default Header2;