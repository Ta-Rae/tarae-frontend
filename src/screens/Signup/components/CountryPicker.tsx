import {FC, Fragment, useCallback, useMemo, useState} from "react";
import {Dialog, DialogPanel, DialogTitle, Transition, TransitionChild} from "@headlessui/react";
import Picker, {PickerValue} from "react-mobile-picker";
import {CountryItem} from "../../../utils/country";
import countries from "i18n-iso-countries";
import korean from "i18n-iso-countries/langs/ko.json";
import english from "i18n-iso-countries/langs/en.json";
import PickerArrowIcon from "../../../assets/picker_arrow.svg";

interface CountryPickerProps {
    onChange: (country: string) => void;
}

const CountryPicker: FC<CountryPickerProps> = ({ onChange }: CountryPickerProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [pickerValue, setPickerValue] = useState<PickerValue>({
        country: '국가'
    });

    const countryItems: Array<CountryItem> = useMemo(() => {
        countries.registerLocale(korean);
        countries.registerLocale(english);
        const items = Object.values(countries.getNames('ko'))
            .map((name: string) => {
                const code = countries.getAlpha2Code(name, 'ko');
                return {
                    code: code,
                    name: name,
                } as CountryItem;
            });
        return items;
    }, []);

    const handlePickerChange = useCallback((newValue: PickerValue, key: string) => {
        setPickerValue(newValue);
        onChange(newValue.country);
    }, []);

    return (
        <div className='flex justify-center items-center'>
            <button
                type='button'
                className='w-[397px] pl-[3px] pb-[5px]
                flex justify-start items-center
                font-pre font-bold text-text-color text-[28px]
                border-b-[2px] border-b-input-color'
                onClick={() => setIsOpen(true)}
            >
                {pickerValue.country}
                <img
                    className='ml-auto mr-[10px]'
                    src={PickerArrowIcon}
                    alt='pickerArrow'
                />
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as='div' className='relative z-10' onClose={() => setIsOpen(false)}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25"/>
                    </TransitionChild>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <TransitionChild
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <DialogPanel
                                    className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <DialogTitle
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        국가를 선택해주세요
                                    </DialogTitle>
                                    <div className="mt-2">
                                        <Picker
                                            value={pickerValue}
                                            onChange={(value, key) => handlePickerChange(value, key)}
                                            wheelMode="natural"
                                        >
                                            <Picker.Column name="country">
                                                {countryItems.map((item: CountryItem) => (
                                                    <Picker.Item key={item.code} value={item.name}>
                                                        {({selected}) => (
                                                            <div
                                                                className={selected ? 'font-pre font-semibold text-neutral-900' : 'font-pre font-normal text-neutral-400'}>
                                                                {item.name}
                                                            </div>
                                                        )}
                                                    </Picker.Item>
                                                ))}
                                            </Picker.Column>
                                        </Picker>
                                    </div>
                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            확인
                                        </button>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
};

export default CountryPicker;
