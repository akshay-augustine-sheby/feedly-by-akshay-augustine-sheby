import React from "react"
import Filter2 from "./Filter2";
import { Header } from "@bigbinary/neetoui/v2/layouts";
import { Button } from "@bigbinary/neetoui/v2";
import { Filter } from "@bigbinary/neeto-icons";
const Header2 = () => {
    return(
        <div>
            <Filter color="#1e1e20" size={24} />
            <Header
                actionBlock={<Button label="Filter" />}
                title="Layouts"
            />


            <Filter2 />
            
        </div>
    )
}
export default Header2;