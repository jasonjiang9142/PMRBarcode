import React from 'react'
import "tailwindcss"
import Qrcode from "../../../images/image-qr-code.png"


export default function Qr() {
    return (
        <div className="flex justify-center items-center bg-blue-200 shadow-md">

            <div className="bg-white rounded-2xl flex flex-col p-3 items-center w-1/5 mt-20 mb-20 shadow-md">
                <img src={Qrcode.src} alt="" className="rounded-2xl" />
                <div className='m-4'>
                    <h1 className="font-extrabold text-center text-xl m-2">
                        Improve your front-end skills by building projects </h1>
                    <p className="text-center text-gray-400">
                        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                </div>

            </div>

        </div >
    )
}