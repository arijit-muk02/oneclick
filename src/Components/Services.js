import React from 'react'
import '../assets/Services.css'
import Mobile from './Mobile'
const appl=[{
    url:"images/service.png",
    name:"Service & Repairing"
},
{
    url:"images/service2.png",
    name:"Installation & Uninstallation"
}]

const appl1=[{
    url:"images/cleaning1.png",
    name:"Cleaning"
},
{
    url:"images/cooking.png",
    name:"Cooking"
},
{
    url:"images/garden2.png",
    name:"Gardening"
},
{
    url:"images/painting.png",
    name:"Home Painting"
}
]

const appl2=[{
    url:"images/carpenter2.png",
    name:"Carpenter"
},
{
    url:"images/plumber2.png",
    name:"Plumber"
},
{
    url:"images/electro.png",
    name:"Electrician"
},
{
    url:"images/mechanic2.png",
    name:"Mechanics"
}
]

export default function Services() {

    const data=appl.map((item)=>{
        return(
            <div className="card" style={{width: "18rem"}}>
                    <img src={item.url} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <a style={{textDecoration: "none"}} href="#" className="btn-primary">{item.name}</a>
                    </div>
                </div>

        )
    }) 

    const data1=appl1.map(item=>{
        return(
            <div className="card" style={{width: "18rem"}}>
                    <img src={item.url} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <a style={{textDecoration: "none"}} href="#" className="btn-primary">{item.name}</a>
                    </div>
                </div>
        )
    })

    const data2=appl2.map(item=>{
        return(
            <div className="card" style={{width: "18rem"}}>
                    <img src={item.url} className="card-img-top" alt="..."/><br/>
                    <div classNameNameName="card-body">
                        <a style={{textDecoration: "none"}} href="#" className="btn-primary">{item.name}</a>
                    </div><br/>
                </div>
        )
    })

  return (
    <>
        <section className="container desktop-menu">
        <div className="text-center menu">
            <h1>Appliances Repair</h1>
            <h4><em style={{fontWeight: "lighter"}}>Washing Machine, AC, TV, Fridge, Mixer</em></h4> <br/>
            <div className="menuflex" style={{justifyContent: "center"}}>
                {data}
            </div>
         </div>
         <div className="text-center menu desktop-menu">
            <h1>House help, Gardening & Home-painting</h1>
            <br/>
            <div className="menuflex2" style={{justifyContent: "center"}}>
                    {data1}
            </div>
        </div>
        <div className="text-center menu desktop-menu">
            <h1>Carpenters, Plumbers, Electricians & Mechanics</h1>
            <br/>
            <div className="menuflex2" style={{justifyContent: "center",paddingBottom: "100px"}}>
                {data2}
            </div>
        </div>
        </section>
        <Mobile/>

    </>
  )
}
