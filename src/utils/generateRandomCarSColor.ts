import { carBrands, carModels } from '../db/DataCar';

export function generateRandomColor(): string {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
}

export function generateRandomName(): string {
    const randomBrand = carBrands[Math.floor(Math.random() * carBrands.length)];
    const randomColor = carModels[Math.floor(Math.random() * carModels.length)];
    return `${randomBrand} ${randomColor}`;
}
