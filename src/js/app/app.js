'use strict';

import css from './app.scss';
import bikerscss from '../bikers/bikers.scss';
import Header from '../header/header';
import Bikers from '../bikers/bikers';
import Footer from '../footer/footer';

(new Header({
    target: document.getElementById('header')
})).run();

(new Bikers({
    target: document.getElementById('content')
})).fetchBikers();

(new Footer({
    target: document.getElementById('footer')
})).run();