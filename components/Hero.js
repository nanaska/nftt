export default function Hero() {
    return (<>

        <div className="px-2 md:px-24  min-h-screen flex flex-col md:flex-row items-center gap-4 justify-center">
            <div
                className="w-full md:w-1/2 flex flex-col items-center justify-center font-extrabold text-[2.5rem] leading-10 max-w-lg md:text-6xl lg:text-9xl md:w-1/2">ELLER
                GROUP NFT
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center  justify-center max-w-[40rem]  md:w-1/2"><span
                className="text-center md:text-left  text-3xl  md:text-4xl lg:text-5xl">Погурзись в мир NFT
                Вместе с нашими специалистами</span>
                <button className="btn btn-md rounded-[90px] md:mr-auto mt-4 bg-[#EFAC00]">Узнать больше</button>
            </div>
        </div>


    </>)
}