import { drawHeader, drawGarage } from './view/view';
import { addListenersToHeader, initSessionStor } from './controller/controller';
import './style.scss';

initSessionStor();

drawHeader();

drawGarage();

addListenersToHeader(); // add event listeners
