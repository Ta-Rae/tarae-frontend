import countries from 'i18n-iso-countries';
import korean from 'i18n-iso-countries/langs/ko.json';
import english from 'i18n-iso-countries/langs/en.json';

export const loadCountryList = () => {
    countries.registerLocale(korean);
    countries.registerLocale(english);
}

export interface CountryItem {
    code: string;
    name: string;
};
