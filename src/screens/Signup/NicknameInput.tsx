import {FC, useState} from "react";
import LoginHeader from "../../components/LoginHeader";
import CancelIcon from '../../assets/input_cancel.svg';


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
                    src={CancelIcon}
                    alt='취소'
                />
            </div>
            <div className='flex justify-center items-center'>
                <button
                    disabled={!isNicknameValid(nickname)}
                    className='w-[397px] h-[63px] rounded-[22px]
                            absolute bottom-0 translate-y-[-63px]
                            font-pre font-bold text-[22px]
                            bg-[#242933] text-white disabled:bg-button-disabled disabled:text-text-disabled'
                >
                    다음
                </button>
            </div>
        </div>
    );
}

export default NicknameInputScreen;
