export default function Navbar(){
    return(<>

    <div className="flex justify-between items-center justify-center h-[100px] p-2 md:px-24 flex-row">
        <div className="text-3xl font-extrabold">Eller NFT</div>
        <ul className="flex hidden md:flex flex-row gap-x-6 text-[18px]">
            <li className="hover:scale-95 select-none hover:text-[#EFAC00B2]">Главная</li>
            <li className="hover:scale-95 select-none hover:text-[#EFAC00B2]">Услуги</li>
            <li className="hover:scale-95 select-none hover:text-[#EFAC00B2]">О Сервисе</li>
            <li className="hover:scale-95 select-none hover:text-[#EFAC00B2]">Контакты</li>
        </ul>


    </div>


    </>)
}