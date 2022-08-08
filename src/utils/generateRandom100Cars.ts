import { generateRandomColor, generateRandomName } from './generateRandomCarSColor';
import { drawGarage } from '../view/view';

export const generateRandom100Cars = async function () {
    console.log('function generateRandom100Cars works');
    for (let i = 0; i < 100; i++) {
        const randomCarColor = generateRandomColor();
        const randomCarName = generateRandomName();
        const car = { name: randomCarName, color: randomCarColor };

        const postNewCar = async function () {
            fetch(`http://127.0.0.1:3000/garage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(car),
            });

            // fetch возвращает промис
        };
        await postNewCar();
    }
    drawGarage();
};
