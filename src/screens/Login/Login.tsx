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
            <div className='flex flex-col justify-center items-center gap-[12px]'>
                <button
                    className='login-button bg-kakao-color'>
                    <img className='absolute translate-x-[-140px]' src={KakaoIcon} alt='kakao'/>
                    카카오로 시작하기
                </button>
                <button
                    className='login-button bg-white border-black border-[1px]'>
                    <img className='absolute translate-x-[-140px]' src={GoogleIcon} alt='google' />
                    구글로 시작하기
                </button>
            </div>
        </div>
    );
}

export default LoginScreen;
