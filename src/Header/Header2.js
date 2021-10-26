import React from "react"
import Filter2 from "./Filter2";
import { Header } from "@bigbinary/neetoui/v2/layouts";
import { Button,Tooltip } from "@bigbinary/neetoui/v2";
import { Filter,Notification,Search } from "@bigbinary/neeto-icons";
import FilterClick from "./FilterClick";
const Header2 = () => {
    return(
        <div>
            <div className="px-6 drop shadow">
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
                    <FilterClick />
                </div>
                }    
                title="Feed.ly"
            />
            </div>


            <Filter2 />
            
        </div>
    )
}
export default Header2;