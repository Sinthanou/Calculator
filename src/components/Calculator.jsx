import React, { useState } from 'react'

function Calculator() {
    const [displayData, setDisplayData] = useState("")

    const buttonData = [
        {
            id: 1,
            text: "%",
            color: "text-orange-500"
        },
        {
            id: 2,
            text: "/",
            color: "text-orange-500"
        },
        {
            id: 3,
            text: "7",
            color: "text-white",
        },
        {
            id: 4,
            text: "8",
            color: "text-white",
        },
        {
            id: 5,
            text: "9",
            color: "text-white",
        },
        {
            id: 6,
            text: "*",
            color: "text-orange-500"
        },
        {
            id: 7,
            text: "4",
            color: "text-white",
        },
        {
            id: 8,
            text: "5",
            color: "text-white",
        },
        {
            id: 9,
            text: "6",
            color: "text-white",
        },
        {
            id: 10,
            text: "-",
            color: "text-orange-500"
        },
        {
            id: 11,
            text: "1",
            color: "text-white",
        },
        {
            id: 12,
            text: "2",
            color: "text-white",
        },
        {
            id: 13,
            text: "3",
            color: "text-white",
        },
        {
            id: 14,
            text: "+",
            color: "text-orange-500"
        },
        {
            id: 15,
            text: "00",
            color: "text-white"
        },
        {
            id: 16,
            text: "0",
            color: "text-white",
        },
        {
            id: 17,
            text: ".",
            color: "text-white"
        },
    ]

    return (
        <>
            <div className="flex justify-center items-center w-full h-screen">
                <div className="bg-black text-white px-3 pt-1 pb-3 font-medium rounded-xl">
                    <p className='text-center text-xl mb-32'>Calculator</p>
                    <div className="">
                        <p></p>
                    </div>
                    <input type="text" name="" id="" className='bg-black outline-none text-right text-2xl mb-5 w-full' value={displayData} onChange={e => setDisplayData(e.target.value)} />
                    <div className="grid grid-cols-4 grid-rows-5 gap-2">
                        <button onClick={() => setDisplayData("")} className="bg-zinc-700 py-3.5 px-5 rounded-2xl text-xl font-bold flex justify-center items-center text-orange-500 active:scale-90 active:bg-zinc-600 transition duration-[40ms]">
                            <p>AC</p>
                        </button>
                        <button onClick={() => setDisplayData(displayData.slice(0, -1))} className="bg-zinc-700 py-3.5 px-5 rounded-2xl text-xl font-bold flex justify-center items-center text-orange-500 active:scale-90 active:bg-zinc-600 transition duration-[40ms]">
                            <p>DE</p>
                        </button>
                        {buttonData.map(button => (
                            <input type='button' value={button.text} key={button.id} onClick={(e) => setDisplayData(displayData + e.target.value)} 
                            className={`${button.color} active:scale-90 active:bg-zinc-600 transition duration-[40ms] cursor-pointer bg-zinc-700 py-3.5 px-5 rounded-2xl text-xl font-bold flex justify-center items-center`} />
                        ))}
                        <button onClick={() => setDisplayData(eval(displayData))} className="bg-orange-500 py-3.5 px-4 rounded-2xl text-3xl flex justify-center items-center active:scale-90 active:bg-zinc-600 transition duration-[40ms]">
                            <p>=</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator
