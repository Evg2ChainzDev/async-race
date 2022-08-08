// если из промиса надо что-то достать. то надо использовать евеит.

import { svgPath } from '../InterConst/constants';
import { getDataCars, getDataAllCars } from '../utils/getDataCars';
import { getWinnersCars } from '../utils/getWinnersCars';
import {
    addListenersToGarageMenu,
    addListenersToCarMenu,
    addListenersToGarageArrows,
} from '../utils/addListenersToGarage';

export const drawHeader = async function () {
    const body = document.querySelector('body') as HTMLElement;
    body.innerHTML = `<header><button class="garage-link">To Garage</button><button href="#" class="winners-link">To Winners</button></header>
  <main></main>`;
};

export const drawGarage = async function () {
    const dataCar = await getDataCars();
    const dataAllCar = await getDataAllCars();
    const garagePage = sessionStorage.getItem('garagePage');
    const selectedCarId = sessionStorage.getItem('selectedCarId');

    const main = document.querySelector('main') as HTMLElement;

    //draw garage menu
    main.innerHTML = `<div class="garage-menu">
                        <div class="create-section">
                          <input type="text" id="createCarName" required minlength="4" maxlength="12" size="12">
                          <input type="color" id="createCarColor" value="#e66465">
                          <button class="create-car-btn">create car</button>
                        </div>
                        <div class="update-section">
                          <input type="text" id="updateCarName" minlength="4" maxlength="12" size="12" disabled>
                          <input type="color" id="updateCarColor" value="#e66465">
                          <button class="update-car-btn">update car</button>
                        </div>
                        <div class="rrg-section">
                          <button class="generate-cars-btn">generate cars</button>
                        </div>
                      </div>
                      <div class="cars-container"><span>Garage (${dataAllCar.length}) </span><span>Page № ${garagePage}</span></div>`;
    const carsContainer = document.querySelector('.cars-container') as HTMLElement;
    if (selectedCarId !== (null || '')) {
        const inputUpdateCarName = document.querySelector('#updateCarName') as HTMLInputElement;
        inputUpdateCarName.removeAttribute('disabled');
    }

    // draw cars list
    dataCar.forEach((el) => {
        const appendedCar = document.createElement('div');
        appendedCar.dataset.carId = `${el.id}`;
        appendedCar.innerHTML = `<button class="select-car-btn">select</button><button class="remove-car-btn">remove</button><span class="car-name">${el.name}</span>
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="60">
                                  <g style="fill: ${el.color}">${svgPath}</g>      
                                  
                               </svg>   `;
        carsContainer.append(appendedCar);
    });
    // console.log(selectedCar);
    const selectCarDiv = document.querySelector(`[data-car-id = "${selectedCarId}"]`) as HTMLElement;
    selectCarDiv?.classList.add('selected');
    // console.log(selectCarDiv);

    if (selectCarDiv !== null) {
        const selectedCarName = (selectCarDiv.querySelector('.car-name') as HTMLElement).innerText;
        const updateCarName = document.querySelector('#updateCarName') as HTMLInputElement;
        updateCarName.value = selectedCarName;
    }

    // draw garage arrows
    const paginationContainer = document.createElement('div');
    paginationContainer.className = 'garage-pagination-container';
    main.append(paginationContainer);
    paginationContainer.innerHTML =
        '<div> <button class="garage-left-btn"> < </button><button class="garage-right-btn"> > </button> </div>';

    addListenersToGarageMenu();
    addListenersToCarMenu();
    addListenersToGarageArrows();
};

export const drawWinners = async function () {
    const dataWinners = await getWinnersCars();
    console.log(dataWinners);

    const main = document.querySelector('main') as HTMLElement;
    main.innerHTML = `<div class="winners-container"></div>`;
    const winnersContainer = document.querySelector('.winners-container') as HTMLElement;

    dataWinners.forEach((el) => {
        const appendedWinner = document.createElement('div');
        appendedWinner.innerHTML = `<span class="winner-name">winner id: ${el.id} wins: ${el.wins} time: ${el.time}</span>`;
        winnersContainer.append(appendedWinner);
    });
};
