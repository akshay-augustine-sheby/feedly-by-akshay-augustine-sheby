import React from "react"
import { Checkbox } from "@bigbinary/neetoui/v2";
const Check = ({
    name,
    checked,
    onChange
}) => {
    return(
        <div className="py-4">
            <Checkbox
                checked={checked}
                id="checkbox_name"
                label={name}
                onChange={onChange}
            />
        </div>
    )
}
export default Check;