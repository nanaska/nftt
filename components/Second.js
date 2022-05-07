import logo from "../public/ellnew6 1 (2).svg"
import Image from "next/image"
export default function Second() {
    return (<div className="min-h-screen  px-2 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-center">


        <div className="w-full md:w-1/2 flex max-w-lg flex-col items-center justify-center">
            <span className="md:mr-auto font-extrabold">О нас</span>
            <span className="font-bold mt-2">Мы - компания, которая связывает юриспруденцию и цифровые технологии. В цифровцю эпоху  всё популярнее становятся невзаимозаменяемые токены известные как Nft.
Наша компания одна из немногих, связывает юриспруденцию и цифровые технологии. В эпоху глобализации криптоактивы становятся всё более популярны. Они очень эффективны в применении, безопасны, и конфиденциальны.
Наша миссия заключается в переосмыслении невзаимозаменяемых токенов, использованию юридических механизмов для защиты исключительных прав авторов nft картин.
</span>
        </div>
        <div className="w-full max-w-lg md:w-1/2"><Image src={logo} width={700} height={700}/></div>


    </div>)
}