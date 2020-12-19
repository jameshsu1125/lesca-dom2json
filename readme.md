[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/)

# Installation

```sh
$ npm install lesca-dom2json --save
```

# Usage

convert DOM element to JSON before react-dom render;

## in html

```html
<div class="app">
	<!--- { title:"Lorem Ipsum is simply" } -->
	<div class="title">Lorem Ipsum is simply</div>
	<!-- { img:'./img/1/png' } -->
	<div class="img">
		<img src="./img/1/png" />
	</div>
	<!-- { img_link:[ { url:'https://www.asus.com', img:'./update/img0.jpg' } ]} -->
	<div class="img_link">
		<a href="https://www.asus.com">
			<img src="./update/img0.jpg" />
		</a>
	</div>
	<!--- { list:[ 'Lorem Ipsum...', ..... ] }  -->
	<div class="list">
		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
	</div>
	<!-- { "buy-now": [ { name:'www.liverpool.com', url:'#liverpool' } ], .... }- -->
	<div class="buy-now">
		<a href="#liverpool">www.liverpool.com</a>
		<a href="#momoshop">momoshop</a>
		<a href="#pchome">pchome</a>
		<a href="#Costco">Costco</a>
		<a href="#pchome">pchome</a>
		<a href="#Costco">Costco</a>
	</div>
</div>
<script src="./boundle.js"></script>
```

## in react

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Apps from './app.js';

import Dom2json from 'lesca-dom2json';

const data = Dom2Json(document.querySelector('.app'));
ReactDOM.render(<Apps data={data} />, document.querySelector('.app'));
```
