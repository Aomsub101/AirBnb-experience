import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
import "./style.css"

export default function App() {
    const cards = data.map(item => {
        return(
            <Card 
                key={item.id}
                {...item} //(spread syntax)
                //or use item={item} instead.
            />
        )
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>  
    )
}