import { dataWins } from '../InterConst/interfaces';

export const getWinnersCars = async function (): Promise<dataWins[]> {
    const data = await fetch('http://127.0.0.1:3000/winners');
    const newWinData = await data.json();
    return newWinData;
};
