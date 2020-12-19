import React from 'react';
import { render } from 'react-dom';
import D2J from './../lib/index';

import './styles.css';

var dat = D2J(document.querySelector('.app'));
console.log(dat);
function Demo() {
	return <>{JSON.stringify(dat)}</>;
}

render(<Demo />, document.querySelector('.app'));
