import React from "react"
import star from "../images/star.png"

export default function Card(props){
    let badgeText
    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if(props.location === "Online"){
        badgeText = "ONLINE"
    }
        return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
                <img 
                    className="card--image" 
                    src={`../images/${props.coverImg}`}
                    alt="Main card image."
                />
            <div className="card--stats">
                <img 
                    src={star}
                    className="card--star"
                    alt="Star icon."
                />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>  
                <span className="gray">{props.location}</span>
            </div>
            <h2>{props.title}</h2>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}