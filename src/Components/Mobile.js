import React from 'react'
import '../assets/Mobile.css'

const arr1=[
    {
        url:"images/cleaning supplies.png",
        name:" Househelp"

    },
    {
        url:"images/hammer.png",
        name:"Carpenters"

    },
    {
        url:"images/Mechanic.png",
        name:"Mechanics"

    },
    {
        url:"images/tools.png",
        name:"Appliance Repair"

    },
    {
        url:"images/interior plants.png",
        name:"Gardening"

    }
]
const arr2=[
    {
        url:"images/new idea light bulb.png",
        name:" Electrician"

    },
    {
        url:"images/retro tape recorder with speakers.png",
        name:"Buy Electricals"

    },
    {
        url:"images/paint bucket.png",
        name:"Home Painting"

    },
    {
        url:"images/pipe with two bends.png",
        name:"Plumber"

    },
    {
        url:"images/image 1.png",
        name:"Hardware"

    }
]

export default function Mobile() {

const data=arr1.map((item)=>{
    return(

        <button className="mob-button">
            <img src={item.url} className="google"/>
            {item.name}
        </button>

    )
})
const data1=arr2.map((item)=>{
    return(

        <button className="mob-button">
            <img src={item.url} className="google"/>
            {item.name}
        </button>

    )
})


  return (
    <>
    <section className="view">
            <div className="mobile-view">
                <div className='text-center'>
                    <h2>Our Services</h2>

                </div>
                <div className="button-wrapper">
                    <div className="item">
                        {data}
                    </div>
                    <div className="item">
                    {data1}
                    </div>
                </div>
            </div>

    </section>
    </>
  )
}
