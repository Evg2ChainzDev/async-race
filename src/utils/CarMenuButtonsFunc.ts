export const removeCarBtnFunc = async function (target: HTMLElement) {
    const dataCarId = target.parentElement?.dataset.carId;
    await fetch(`http://127.0.0.1:3000/garage/${dataCarId}`, {
        method: 'DELETE',
    });
};

export const selectCarBtnFunc = function (target: HTMLElement) {
    const dataCarId = target.parentElement?.dataset.carId;
    if (dataCarId == sessionStorage.selectedCarId) {
        sessionStorage.selectedCarId = '';
    } else {
        sessionStorage.selectedCarId = dataCarId;
    }
};

export const ABtnFunc = async function (target: HTMLElement) {
    const divCarContainer = target.closest('.car-container') as HTMLElement;
    const dataCarId = divCarContainer.dataset.carId;
    const ABtn = divCarContainer.querySelector('.a-btn') as HTMLElement;
    const BBtn = divCarContainer.querySelector('.b-btn') as HTMLElement;
    ABtn.setAttribute('disabled', '');
    BBtn.removeAttribute('disabled');

    const carStartedResponse = await fetch(`http://127.0.0.1:3000/engine?id=${dataCarId}&status=started`, {
        method: 'PATCH',
    });

    const carResp = await carStartedResponse.json();
    const time = Math.round(carResp.distance / carResp.velocity);

    const animatedSvg = divCarContainer.querySelector('svg') as SVGSVGElement;
    animatedSvg.style.animationName = 'carAnimation';
    animatedSvg.style.animationDuration = `${time.toString()}ms`;
    const engineResponse = await fetch(`http://127.0.0.1:3000/engine?id=${dataCarId}&status=drive`, {
        method: 'PATCH',
    });

    if (!engineResponse.ok) { 
        console.log('car broken');
        animatedSvg.style.animationPlayState = 'paused';
    };

};

export const BBtnFunc = async function (target: HTMLElement) {
    const divCarContainer = target.closest('.car-container') as HTMLElement;
    const dataCarId = divCarContainer.dataset.carId;
    const ABtn = divCarContainer.querySelector('.a-btn') as HTMLElement;
    const BBtn = divCarContainer.querySelector('.b-btn') as HTMLElement;
    BBtn.setAttribute('disabled', '');
    ABtn.removeAttribute('disabled');
    const ddd = await fetch(`http://127.0.0.1:3000/engine?id=${dataCarId}&status=stoped`, {
        method: 'PATCH',
    });
    const animatedSvg = divCarContainer.querySelector('svg') as SVGSVGElement;
    animatedSvg.style.animationName = '';
};
