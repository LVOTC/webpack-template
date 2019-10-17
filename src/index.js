import './assets/style/style.scss';
import Icon from './assets/images/menu.svg';

const section = document.createElement('div');
document.body.appendChild(section);

const img = new Image()
img.src = Icon
section.appendChild(img);
