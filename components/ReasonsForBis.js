import Image from "next/image"
import check from "../public/Checkbox.svg"

export default function ReasonsForBis() {
    return (<div className="flex  flex-col items-center justify-center min-h-screen px-2 md:px-12 lg:px-16">

        <div><span className="text-3xl font-extrabold ">ПРИЧИНЫ ВЗАИМОДЕЙСТВИЯ С NFT ДЛЯ БИЗНЕСА</span></div>

        <div className="grid mt-8 font-bold max-w-6xl text-[18px] gap-4 grid-cols-1 md:grid-cols-3 grid-rows-2">
            <div className="flex  flex-row gap-x-3 items-center justify-center">
                <div><Image src={check} width={70} height={70}/></div>
                <div><span>NFT обеспечит устойчивую свяь между вами и вашим клиентом, клиент будет ассоцировать себя с вашим бизнесом.
</span></div>
            </div>
            <div className="flex flex-row gap-x-3  items-center justify-center">
                <div><Image src={check} width={70} height={70}/></div>
                <div><span>NFT обеспечит устойчивую свяь между вами и вашим клиентом, клиент будет ассоцировать себя с вашим бизнесом.
</span></div>
            </div>
            <div className="flex gap-x-3  flex-row items-center justify-center">
                <div><Image src={check} width={70} height={70}/></div>
                <div><span>NFT обеспечит устойчивую свяь между вами и вашим клиентом, клиент будет ассоцировать себя с вашим бизнесом.
</span></div>
            </div>
            <div className="flex flex-row gap-x-3  items-center justify-center">
                <div><Image src={check} width={70} height={70}/></div>
                <div><span>NFT обеспечит устойчивую свяь между вами и вашим клиентом, клиент будет ассоцировать себя с вашим бизнесом.
</span></div>
            </div>
            <div className="flex flex-row gap-x-3  items-center justify-center">
                <div><Image src={check} width={70} height={70}/></div>
                <div><span>NFT обеспечит устойчивую свяь между вами и вашим клиентом, клиент будет ассоцировать себя с вашим бизнесом.
</span></div>
            </div>
            <div className="flex flex-row gap-x-3  items-center justify-center">
                <div><Image src={check} width={70} height={70}/></div>
                <div><span>NFT обеспечит устойчивую свяь между вами и вашим клиентом, клиент будет ассоцировать себя с вашим бизнесом.
</span></div>
            </div>
        </div>


    </div>)
}