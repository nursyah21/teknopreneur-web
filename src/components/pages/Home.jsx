import { Button } from "@mui/material"

function CardItem(props){
  const wa = `https://api.whatsapp.com/send/?phone=6282341113971&text=hai kak saya ingin membeli ${props.name} - ${props.price}`
  const routeChange = () =>{
    window.location = wa
  }

  return (
    <>
      <div className="flex flex-col bg-white w-[160px] tablet:w-[200px] p-2 rounded-xl text-slate-600 mx-3 mb-5 shadow-xl">
        <p className="flex-1">
          <img src={props.img} className="w-[160px] tablet:w-[200px]"/>
          <p>{props.name}</p>
          <p className="text-green-700 font-semibold">{props.price}</p>
        </p>
        <p className="">
          <Button onClick={routeChange} variant="contained" color="success" className="!my-1 w-full">Beli</Button>
        </p>
      </div>
    </>
  )
}

function Shop(){
  const listItems = data.map((i)=>
    <CardItem img={i.image} name={i.name} price={i.price}/>
  )

  return (
    <>
      <div className="hidden bg-[rgb(238,225,206)] desktop:flex justify-center mt-3 mb-5">
        <img src="/handmadewithlove.webp" />
      </div>
      
      <div className="grid grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-5">
        {listItems}
      </div>
    </>
  )
}

function Footer(){
  return (
    <>
      <hr className="text-slate-50"></hr>
      <div className="flex justify-center m-2 text-slate-700">
        <div>
          <div className="flex">
            <a href='https://shopee.co.id/inggrid_riwu' className="flex items-center">
              <img src="/shopee.png" className="w-[36px]"/> Shopee
            </a>
            <p className="ml-4"></p>
            <a href='https://wa.me/6282341113971' className="flex items-center">
              <img src="/whatsapp.webp" className="w-[36px]"/> Whatsapp
            </a>
          </div>
          <p className="flex justify-center">
            Copyright 2023
          </p>
        </div>
      </div>
    </>
  )
}

function About(){
  return (
    <>
      <div className="description flex justify-center mt-[40px] ">
        <p className="text-gray-600 text-lg">
          <div className="flex justify-center mr-[30%]">
            <p className="flex-col text-center">
              SAY HELLO TO <br/>
              <span className="font-bold">
                HandMadeBYEIB <br/>
              </span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row">
            <p className="w-[300px]">
              sebuah olshop yang bergerak dalam bidang pakaian dan
              aksesoris. kami menjual berbagai macam pakaian rajut dan aksesoris rajut. 
              lama pengerjaan produk kami tergantung bentuk dan 
              ukuran rata-rata pengerjaan antara1 minggu - 1 bulan.
            </p>
            <div className="flex ml-4 mt-2">
              <img src="/owner.webp" className="w-[200px]"/>
            </div>
          </div>  
        </p>
      </div>
    </>
  )
}

export default function Home(){
  return (
    <>
      <About />
      <Shop />
      <Footer />
    </>
  )
}