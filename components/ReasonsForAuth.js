import Image from "next/image";
import first from "../public/1.svg"

export default function ReasonsForAuth() {
    return (<div className="flex mt-7 flex-col items-center justify-center min-h-screen px-2 md:px-12 lg:px-16">

        <div><span className=" px-2 text-2xl md:text-3xl font-extrabold ">ПРИЧИНЫ ВЗАИМОДЕЙСТВИЯ С NFT ДЛЯ БИЗНЕСА</span></div>

        <div
            className="grid mt-8 font-bold max-w-6xl text-[18px] gap-4 grid-cols-1 md:grid-cols-3 place-items-center  md:grid-rows-3">

            <div className="grid md:col-start-1 md:col-end-1 md:row-start-1 md:row-end-1  grid-cols-1 text-center p-10">
                <Image src={first} width={90} height={90}/>
                <span>1Свобода творчества (выражения мысли)</span>
            </div>
            <div className="grid md:col-start-1 md:col-end-1 md:row-start-2 md:row-end-2 grid-cols-1 text-center p-10">
                <Image src={first} width={90} height={90}/>
                <span>2Свобода творчества (выражения мысли)</span>
            </div>
            <div className="grid md:col-start-1 md:col-end-1 md:row-start-3 md:row-end-3  grid-cols-1 text-center p-10">
                <Image src={first} width={90} height={90}/>
                <span>3Свобода творчества (выражения мысли)</span>
            </div>
            <div className="grid md:col-start-2 md:col-end-2 md:row-start-2 md:row-end-2 grid-cols-1 text-center p-10">
                <Image src={first} width={90} height={90}/>
                <span>4Свобода творчества (выражения мысли)</span>
            </div>


            <div className="grid grid-cols-1 md:col-start-3 md:col-end-3 md:row-start-1 md:row-end-1 text-center p-10">
                <Image  src={first} width={90} height={90}/>
                <span>5Свобода творчества (выражения мысли)</span>
            </div>

            <div className="grid md:col-start-3 md:col-end-3 md:row-start-2 md:row-end-2 grid-cols-1 text-center p-10">
                <Image  src={first} width={90} height={90}/>
                <span>6Свобода творчества (выражения мысли)</span>
            </div>

            <div className="grid grid-cols-1 md:col-start-3 md:col-end-3 md:row-start-3 md:row-end-3 text-center p-10">
                <Image  src={first} width={90} height={90}/>
                <span>7Свобода творчества (выражения мысли)</span>
            </div>

        </div>


    </div>)
}