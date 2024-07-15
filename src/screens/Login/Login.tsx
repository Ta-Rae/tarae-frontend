import {FC} from "react";
import KakaoIcon from '../../assets/kakao.svg';
import GoogleIcon from '../../assets/google.svg';
import LoginHeader from "../../components/LoginHeader";

const LoginScreen: FC = () => {
    return (
        <div className='background'>
            <div className='w-full h-[177px]'></div>
            <LoginHeader />
            <div className='w-full h-[395px]'></div>
            <div className='flex flex-col justify-center items-center'>
                <button
                    className='flex flex-row justify-center items-center w-[397px] h-[74px] mb-[12px] bg-kakao-color rounded-[28px] font-pre font-bold text-black text-[22px]'>
                    <img className='absolute translate-x-[-140px]' src={KakaoIcon} alt='kakao'/>
                    카카오로 시작하기
                </button>
                <button
                    className='flex flex-row justify-center items-center w-[397px] h-[74px] bg-white rounded-[28px] border-black border-[1px] font-pre font-bold text-black text-[22px]'>
                    <img className='absolute translate-x-[-140px]' src={GoogleIcon} alt='google' />
                    구글로 시작하기
                </button>
            </div>
        </div>
    );
}

export default LoginScreen;
