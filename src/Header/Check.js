import React from "react"
const Check = ({
    name,
    checked,
    onChange
}) => {
    return(
        <div>
            <form>
                <input className="text-gray-800"
                    type="checkbox"
                    name={name}
                    checked={checked}
                    onChange={onChange}
                />
                {name}
            </form>
        </div>
    )
}
export default Check;