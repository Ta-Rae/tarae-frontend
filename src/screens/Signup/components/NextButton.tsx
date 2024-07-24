import {FC} from "react";
import {useNavigate} from "react-router-dom";

interface NextButtonProps {
    disabled: boolean;
    buttonText: string;
    moveTo?: string;
    onClick: () => void;
}

const NextButton: FC<NextButtonProps> = ({ disabled, buttonText, onClick, moveTo }: NextButtonProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        onClick();
        if (moveTo !== null && moveTo !== undefined) {
            navigate(moveTo);
        }
    }

    return (
        <div className='flex justify-center items-center'>
            <button
                disabled={disabled}
                className='w-[397px] h-[63px] rounded-[22px]
                            absolute bottom-0 translate-y-[-63px]
                            font-pre font-bold text-[22px]
                            bg-[#242933] text-white disabled:bg-button-disabled disabled:text-text-disabled'
                onClick={() => handleClick()}
            >
                {buttonText}
            </button>
        </div>
    );
}

export default NextButton;
