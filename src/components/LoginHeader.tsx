import {FC} from "react";
import Logo from "../assets/logo.svg";


const LoginHeader: FC = () => {
    return (
        <div className='flex flex-col justify-start'>
            <p className='ml-[46px] font-pre text-text-color text-[34px]'>
                맛의 새로운 기준
            </p>
            <img className='w-[144px] h-[90px] ml-[42px]' src={Logo} alt='로고'/>
            <p className='ml-[52px] font-pre text-text-color text-[28px]'>
                함께 시작할까요?
            </p>
        </div>
    );
}

export default LoginHeader;
