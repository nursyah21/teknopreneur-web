import { Button } from "@mui/material"

function CardItem(props){
  const wa = `https://api.whatsapp.com/send/?phone=6282341113971&text=hai kak saya ingin membeli ${props.name} - ${props.price}`
  const routeChange = () =>{
    window.location = wa
  }

  return (
    <>
      <div className="bg-white w-[200px] p-2 rounded-xl text-slate-600 mx-3 mb-5 shadow-xl">
        <img src={props.img} className="w-[200px]"/>
        <p>{props.name}</p>
        <p className="text-green-700 font-semibold">{props.price}</p>
        <Button onClick={routeChange} variant="contained" color="success" className="!my-1 w-full">Beli</Button>
      </div>
    </>
  )
}

function Shop(){
  const listItems = data.map((i)=>
    <CardItem img={i.image} name={i.name} price={i.price}/>
  )
  const name = data[0].name
  const img = data[0].image
  const price = data[0].price
  const wa = 'https://api.whatsapp.com/send/?phone=082341113971&text=haiaac'
  const shopee = 'https://shopee.co.id/inggrid_riwu'
  

  return (
    <>
      <div className="grid grid-cols-2 mobile:grid-cols-3 desktop:grid-cols-5">
        {listItems}
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
      {/* home */}
      {/* <a href='home'>home</a> */}
      {/* store */}
      {/* <a href='store' className='mx-2'>store</a> */}
      {/* contact */}
      {/* <a href='contact'>contact</a> */}
    </>
  )
}