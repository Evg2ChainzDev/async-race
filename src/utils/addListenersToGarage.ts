import { drawGarage } from '../view/view';
import { getDataAllCars } from './getDataCars';

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
        // console.log('click2');
        drawGarage();
    });
};

export const addListenersToCarMenu = function (): void {
    const carsContainer = document.querySelector('.cars-container') as HTMLElement;
    carsContainer.addEventListener('click', async (ev) => {
        const target = ev.target as HTMLElement;
        const clickedClass = target.className;
        switch (clickedClass) {
            case 'remove-car-btn': {
                const dataCarId = target.parentElement?.dataset.carId;
                // console.log(dataCarId);
                await fetch(`http://127.0.0.1:3000/garage/${dataCarId}`, {
                    method: 'DELETE',
                });
                break;
            }
            case 'select-car-btn': {
                console.log('this btn select');
                const dataCarId = target.parentElement?.dataset.carId;
                console.log(dataCarId);
                if (dataCarId == sessionStorage.selectedCar) {
                    sessionStorage.selectedCar = '';
                } else { 
                    sessionStorage.selectedCar = dataCarId;
                }
                
            }
        }
        drawGarage();
    });
};

export const addListenersToGarageArrows = function (): void {
    const garagePageContainer = document.querySelector('.garage-pagination-container') as HTMLElement;
    garagePageContainer.addEventListener('click', async (ev) => {
        const target = ev.target as HTMLElement;
        let currPage = Number(sessionStorage.garagePage);
        console.log(currPage);
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
