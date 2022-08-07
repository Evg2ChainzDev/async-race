import { dataCar } from '../InterConst/interfaces';

export const getDataCars = async function (): Promise<dataCar[]> {
    const garagePage = sessionStorage.getItem('garagePage');
    const data = await fetch(`http://127.0.0.1:3000/garage?_page=${garagePage}&_limit=7`);
    const newCarData = await data.json();
    return newCarData;
};

export const getDataAllCars = async function (): Promise<dataCar[]> {
    const data = await fetch(`http://127.0.0.1:3000/garage`);
    const newCarData = await data.json();
    return newCarData;
};
