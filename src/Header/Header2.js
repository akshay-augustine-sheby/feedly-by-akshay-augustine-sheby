import React, { useContext, useState } from "react"
import Filter2, { FunContext } from "../Landing page/LandingPage";
import { Header } from "@bigbinary/neetoui/v2/layouts";
import { Link } from "react-router-dom";
import { Button,Tooltip } from "@bigbinary/neetoui/v2";
import { Filter,Notification,Search } from "@bigbinary/neeto-icons";
import FilterClick from "./FilterClick";
import Subscribe from "./Subscribe";
import SearchNews from "./SearchNews";
const Header2 = ({
    showPane,
    showModalExtraSmall,
    showModal
    
}) => {
    const checkNational = JSON.parse(localStorage.getItem("checkNational"))
    const checkWorld = JSON.parse(localStorage.getItem("checkWorld"))
    const checkBusiness = JSON.parse(localStorage.getItem("checkBusiness"))
    const checkSports = JSON.parse(localStorage.getItem("checkSports"))

    const { setShowPane, setShowModalExtraSmall, setShowModal, setCheckNational, setCheckWorld, setCheckBusiness, setCheckSports} = useContext(FunContext);
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
                            onClick={() => setShowModal(true)}
                            size="large"
                            style="text"
                            icon={Search}
                        />
                    </Tooltip>
                    <SearchNews
                        showModal={showModal}
                        setShowModal={setShowModal}
                    />

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
                            setShowModalExtraSmall={setShowModalExtraSmall} 
                    />

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