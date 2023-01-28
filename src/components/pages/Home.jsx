import { Button } from "@mui/material"

function Navbar(){
  return (
    <>
      <div className="p-3 text-center">
        HandMadeBYEIB
      </div>
    </>
  )
}

function FirstSection(){
  return (
    <>
      <div className="description flex justify-center mt-[40px] h-screen">
        <p className="text-gray-600 text-lg">
          <div className="flex justify-center mr-[30%]">
            <p className="flex-col text-center">
              SAY HELLO TO <br/>
              <span className="font-bold">
                HandMadeBYEIB <br/>
              </span>
            </p>
          </div>
          
          <div className="flex">
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
      <FirstSection />
      {/* home */}
      {/* <a href='home'>home</a> */}
      {/* store */}
      {/* <a href='store' className='mx-2'>store</a> */}
      {/* contact */}
      {/* <a href='contact'>contact</a> */}
    </>
  )
}