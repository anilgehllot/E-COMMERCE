import React from 'react'
import { Productcard } from '../component/Productcart'

const productdetails=[
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr9tp0ApdAfSF_fvwMhLVk1TfEaQLKWU-PhQ&s",
        name:"Product1",
        price:1000,
        description:"This is a product1"
    },
    {
        image:"https://www.google.com/imgres?q=scenery&imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F517188688%2Fphoto%2Fmountain-landscape.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3DA63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Flandscape-scenery&docid=PcaQ84GrRQRomM&tbnid=oa7_1poSvrt70M&vet=12ahUKEwjr1oC3pZqLAxWhSWwGHcokCSkQM3oECFQQAA..i&w=612&h=384&hcb=2&ved=2ahUKEwjr1oC3pZqLAxWhSWwGHcokCSkQM3oECFQQAA&safe=active&ssui=on",
        name:"Product2",
        price:2000,
        description:"This is a product2"
    },
    {
        image:"https://www.google.com/imgres?q=scenery&imgurl=https%3A%2F%2Fplus.unsplash.com%2Fpremium_photo-1668024966086-bd66ba04262f%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MXx8c2NlbmVyeXxlbnwwfHwwfHx8MA%253D%253D&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fscenery&docid=gOGDQqwKI7yNFM&tbnid=tQQ9qeTO6KKFwM&vet=12ahUKEwjr1oC3pZqLAxWhSWwGHcokCSkQM3oECFwQAA..i&w=3000&h=1951&hcb=2&ved=2ahUKEwjr1oC3pZqLAxWhSWwGHcokCSkQM3oECFwQAA&safe=active&ssui=on",
        name:"Product3",
        price:3000,
        description:"This is a product3"
    }
]

export const Home = () => {
  return (
    <div>
        <div className='w-full min-h-screen bg-neutral-800'>
        <div className="grid grid-cols-5 gap-4 p-4">
        {
            productdetails.map((product,index)=>{
                return(
                    <>
                    <Productcard key={index}  {...product}/>
                    </>
                )
            })
        }
        </div>
        </div>
    </div>
  )
}