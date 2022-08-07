import { generateRandomColor, generateRandomName} from './generateRandomCarSColor';

export const generateRandom100Cars = async function () {
    console.log('function generateRandom100Cars works');
    const randomCarColor = generateRandomColor();
    console.log(randomCarColor);
    const randomCarName = generateRandomName();
    console.log(randomCarName);
};
