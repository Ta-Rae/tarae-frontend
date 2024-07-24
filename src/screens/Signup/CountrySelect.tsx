import {FC, useState} from "react";
import LoginHeader from "../../components/LoginHeader";
import CountryPicker from "./components/CountryPicker";
import NextButton from "./components/NextButton";

const CountrySelectScreen: FC = () => {
    const [country, setCountry] = useState<string | null>(null);

    return (
        <div className='background'>
            <div className='w-full h-[177px]'></div>
            <LoginHeader/>
            <div className='w-full h-[84px]'></div>
            <p className='ml-[41px] font-pre font-bold text-text-color text-[30px]'>
                어느 나라에서 오셨나요?
            </p>
            <div className='w-full h-[73px]'></div>
            <CountryPicker onChange={(value) => setCountry(value)} />
            <NextButton
                disabled={country === undefined || country === null || country === '국가'}
                buttonText={'시작하기'}
                onClick={() => {}}
            />
        </div>
    );
};

export default CountrySelectScreen;
