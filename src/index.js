import './sass/main.scss';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getImg } from './js/imgAPI';

let query = 'cat';
let page = 1;
const perPage = 40;

getImg().then(console.log);
