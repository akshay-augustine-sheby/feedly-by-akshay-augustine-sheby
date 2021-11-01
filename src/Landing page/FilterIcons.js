import React from "react"
import { Tag } from "@bigbinary/neetoui/v2";

const FilterIcons = ({
    checkNational,
    checkWorld,
    checkBusiness,
    checkSports,
    archieve
}) => {
    
    const categObj = {
        "National":checkNational,
        "World":checkWorld,
        "Business":checkBusiness,
        "Sports":checkSports,
        "Archived": archieve
    }
    const categ = Object.keys(categObj)
    
    return(
        <div className="flex gap-x-3">
            {categ.map((it)=>{
                if(categObj[it]===true) {
                    return(
                        <div>
                            <Tag
                                label={it}
                                onClose={function noRefCheck(){}}
                            />
                        </div>
                    )
                }
            })}
        </div>
    )
    
}
export default FilterIcons;