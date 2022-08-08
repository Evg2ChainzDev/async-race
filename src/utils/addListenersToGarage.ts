import { drawGarage } from '../view/view';
import { getDataAllCars } from './getDataCars';
import { generateRandom100Cars } from './generateRandom100Cars';
import { removeCarBtnFunc, selectCarBtnFunc, ABtnFunc, BBtnFunc } from './CarMenuButtonsFunc';

export const addListenersToGarageMenu = function (): void {
    const createCarBtn = document.querySelector('.create-car-btn') as HTMLElement;
    createCarBtn.addEventListener('click', async () => {
        const newCarName = (document.querySelector('#createCarName') as HTMLInputElement).value || 'New Car';
        const newCarColor = (document.querySelector('#createCarColor') as HTMLInputElement).value;
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

        drawGarage();
    });

    const updateCarBtn = document.querySelector('.update-car-btn') as HTMLElement;
    updateCarBtn.addEventListener('click', async () => {
        console.log('update click');
        if (sessionStorage.selectedCarId == '') {
            return;
        }
        const updateCarName = (document.querySelector('#updateCarName') as HTMLInputElement).value;
        const updateCarColor = (document.querySelector('#updateCarColor') as HTMLInputElement).value;
        const car = { name: updateCarName, color: updateCarColor };

        const updateSelectedCar = async function () {
            const selectedCarId = sessionStorage.getItem('selectedCarId');
            console.log(selectedCarId);
            await fetch(`http://127.0.0.1:3000/garage/${selectedCarId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(car),
            });
        };
        await updateSelectedCar();
        drawGarage();
    });

    const generateCarsBtn = document.querySelector('.generate-cars-btn') as HTMLElement;
    generateCarsBtn.addEventListener('click', async () => {
        generateRandom100Cars();
    });
};

export const addListenersToCarMenu = function (): void {
    const carsContainer = document.querySelector('.cars-container') as HTMLElement;
    carsContainer.addEventListener('click', async (ev) => {
        const target = ev.target as HTMLElement;
        const clickedClass = target.className;
        switch (clickedClass) {
            case 'remove-car-btn': {
                await removeCarBtnFunc(target);
                drawGarage();
                break;
            }
            case 'select-car-btn': {
                selectCarBtnFunc(target);
                drawGarage();
                break;
            }
            case 'a-btn': {
                ABtnFunc(target);
                break;
            }
            case 'b-btn': {
                BBtnFunc(target);
            }
        }
    });
};

export const addListenersToGarageArrows = function (): void {
    const garagePageContainer = document.querySelector('.garage-pagination-container') as HTMLElement;
    garagePageContainer.addEventListener('click', async (ev) => {
        const target = ev.target as HTMLElement;
        let currPage = Number(sessionStorage.garagePage);
        // console.log(currPage);
        const clickedClass = target.className;
        switch (clickedClass) {
            case 'garage-left-btn': {
                if (currPage > 1) {
                    currPage -= 1;
                    sessionStorage.garagePage = currPage;
                }
                break;
            }
            case 'garage-right-btn': {
                const allCars = await getDataAllCars();
                const maxPage = Math.ceil(allCars.length / 7);
                if (currPage < maxPage) {
                    currPage += 1;
                    sessionStorage.garagePage = currPage;
                }
            }
        }
        drawGarage();
    });
};
