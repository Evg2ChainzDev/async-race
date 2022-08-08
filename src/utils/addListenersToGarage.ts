import { drawGarage } from '../view/view';
import { getDataAllCars } from './getDataCars';
import { generateRandom100Cars } from './generateRandom100Cars';

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
                const dataCarId = target.parentElement?.dataset.carId;
                await fetch(`http://127.0.0.1:3000/garage/${dataCarId}`, {
                    method: 'DELETE',
                });
                break;
            }
            case 'select-car-btn': {
                const dataCarId = target.parentElement?.dataset.carId;
                if (dataCarId == sessionStorage.selectedCarId) {
                    sessionStorage.selectedCarId = '';
                } else {
                    sessionStorage.selectedCarId = dataCarId;
                }
                break;
            }
            case 'a-btn': {
                console.log('this is a btn');
                const dataCarId = (target.closest('.car-container') as HTMLElement).dataset.carId;
                console.log(dataCarId);
                const carStartedResponse = await fetch(`http://127.0.0.1:3000/engine?id=${dataCarId}&status=started`, {
                    method: 'PATCH',
                });
                console.log(carStartedResponse);
                const carResp = await carStartedResponse.json();
                const speed = Math.round(carResp.distance / carResp.velocity);
                console.log(speed);
                
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
