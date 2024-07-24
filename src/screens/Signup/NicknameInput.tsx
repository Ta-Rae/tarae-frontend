import {FC, useState} from "react";
import LoginHeader from "../../components/LoginHeader";
import CancelIcon from '../../assets/input_cancel.svg';
import NextButton from "./components/NextButton";


const NicknameInputScreen: FC = () => {
    const [nickname, setNickname] = useState<string | null>(null);

    const isNicknameValid = (name: string | null) => (name !== null && name !== undefined && name.length > 0);

    return (
        <div className='background'>
            <div className='w-full h-[177px]'></div>
            <LoginHeader/>
            <div className='w-full h-[84px]'></div>
            <p className='ml-[41px] font-pre font-bold text-text-color text-[30px]'>
                사용하실 이름을 적어주세요
            </p>
            <div className='w-full h-[73px]'>
            </div>
            <div className='flex flex-row justify-center items-center'>
                <input
                    type='text'
                    onChange={(event) => setNickname(event.target.value)}
                    placeholder='예) 홍길동'
                    className='w-[397px] pl-[3px] pb-[5px] focus:outline-0
                    font-pre font-bold placeholder:text-[#B6B6B6] text-text-color text-[28px]
                    border-t-0 border-l-0 border-r-0 border-b-[2px] border-b-input-color'
                />
                <img
                    className={(isNicknameValid(nickname)) ?
                        ('absolute translate-x-[178px] translate-y-[-4px]') : ('hidden')}
                    onClick={() => setNickname(null)}
                    src={CancelIcon}
                    alt='취소'
                />
            </div>
            <NextButton
                disabled={!isNicknameValid(nickname)}
                buttonText={'다음'}
                onClick={() => {}}
                moveTo='/register/country'
            />
        </div>
    );
}

export default NicknameInputScreen;
