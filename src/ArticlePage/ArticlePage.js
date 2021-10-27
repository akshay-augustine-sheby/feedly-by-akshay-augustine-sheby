import React from "react"
import { useParams } from "react-router-dom";
const ArticlePage = () => {
    const {url} = useParams();
    console.log(url)
    return(
        <div>
            AKSHAY
            {url}
        </div>
    )
}
export default ArticlePage;
