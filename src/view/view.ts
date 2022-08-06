// если из промиса надо что-то достать. то надо использовать евеит.

import { svgPath } from '../InterConst/constants';
import { getDataCars } from '../utils/getDataCars';
import { getWinnersCars } from '../utils/getWinnersCars';
import { addListenersToGarageMenu, addListenersToCarMenu } from '../utils/addListenersToGarage';

export const drawHeader = async function () {
    const body = document.querySelector('body') as HTMLElement;
    body.innerHTML = `<header><button class="garage-link">To Garage</button><button href="#" class="winners-link">To Winners</button></header>
  <main></main>`;
};

export const drawGarage = async function () {
    const dataCar = await getDataCars();
    const garagePage = sessionStorage.getItem('garagePage');

    const main = document.querySelector('main') as HTMLElement;
    main.innerHTML = `<div class="garage-menu">
                        <div class="create-section">
                          <input type="text" id="createCarName" required minlength="4" maxlength="8" size="10">
                          <input type="color" id="createCarColor" value="#e66465">
                          <button class="create-car-btn">create car</button>
                        </div>
                      </div>
                      <div class="cars-container"><span>Garage (${dataCar.length}) </span><span>Page № ${garagePage}</span></div>`;
    const carsContainer = document.querySelector('.cars-container') as HTMLElement;

    dataCar.forEach((el) => {
        const appendedCar = document.createElement('div');
        appendedCar.dataset.carId = `${el.id}`;
        appendedCar.innerHTML = `<button class="remove-car-btn">remove</button><span class="car-name">${el.name}</span>
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="100">
                                  <g style="fill: ${el.color}">${svgPath}</g>      
                                  
                               </svg>   `;
        carsContainer.append(appendedCar);
    });
    addListenersToGarageMenu();
    addListenersToCarMenu();
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
