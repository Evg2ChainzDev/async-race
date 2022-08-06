// import { getDataCars } from './getDataCars';
import { drawGarage, drawWinners } from '../view/view';

export const addListenersToHeader = function (): void {
    const garageLnk = document.querySelector('.garage-link') as HTMLElement;
    garageLnk.addEventListener('click', () => {
        drawGarage();
    });
    const winnersLnk = document.querySelector('.winners-link') as HTMLElement;
    winnersLnk.addEventListener('click', () => {
        drawWinners();
    });
};

export const initSessionStor = function () {
    sessionStorage.setItem('garagePage', '1');
};
