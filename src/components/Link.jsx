import React, {memo} from "react";


export const Link = memo(({link, title}) => {
    console.log(link)
    return (
        <li>
            <a href={link}>{title}</a>
        </li>
    )
})