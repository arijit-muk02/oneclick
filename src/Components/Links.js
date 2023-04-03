import React from 'react'
import '../assets/Links.css'

const items1 = [
    {
        url: "images/hammer.png",
        name: "Carpenters"
    },
    {
        url: "images/tools.png",
        name: "Appliances Repair"
    },
    {
        url: "images/new idea light bulb.png",
        name: "Electrician"
    },
    {
        url: "images/paint bucket.png",
        name: "Painter"
    }
        
]
const items2 = [
    {
        url: "images/Mechanic.png",
        name: "Mechanics"
    },
    {
        url: "images/interior plants.png",
        name: "Gardening"
    },
    {
        url: "images/cleaning supplies.png",
        name: "househelp"
    },
    {
        url: "images/pipe with two bends.png",
        name: "Plumber"
    }
]

export default function Links() 
{
       const data = items1.map(
        (item) => {
            return (
               
                <div className="items">
                        <a href=""><img src={item.url} alt=""/><br/>{item.name}</a> <br/>
                </div>
            )
        }
    )
    const data1 = items2.map(
        (item1) => {
            return (
               
                <div className="items">
                        <a href=""><img src={item1.url} alt=""/><br/>{item1.name}</a> <br/>
                </div>
            )
        }
    )

    return (
        
        <div class="links">
        <div class="container" style={{paddingTop: "0px",bottom: "30px"}}>
            <div class="wrapper"
                style={{width: "562px",padding: "10px",margin: "auto",alignItems: "center",borderRadius: "6px"}}>
                <div class="item">
                    {data}  
                </div>
                <div class="item">
                {data1}
                </div>
                
            </div>
        </div>
        </div>
    )
}
 
