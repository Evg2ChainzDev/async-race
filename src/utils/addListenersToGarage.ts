import { drawGarage } from '../view/view';

export const addListenersToGarageMenu = function (): void {
    const createCarBtn = document.querySelector('.create-car-btn') as HTMLElement;
    createCarBtn.addEventListener('click', async () => {
        console.log('add car click');
        const newCarName = (document.querySelector('#createCarName') as HTMLInputElement).value || 'New Car';
        const newCarColor = (document.querySelector('#createCarColor') as HTMLInputElement).value;
        console.log(newCarName, newCarColor);
        const car = { name: newCarName, color: newCarColor };

        const postNewCar = async function () {
            await fetch(`http://127.0.0.1:3000/garage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(car),
            });
        };
        await postNewCar(); // перед любой асинхронной функцией могу ставить евеит если надо
        console.log('click2');
        drawGarage();
    });
};

export const addListenersToCarMenu = function (): void {
    const carsContainer = document.querySelector('.cars-container') as HTMLElement;
    carsContainer.addEventListener('click', () => {
        console.log('click in car container');
    });
};
