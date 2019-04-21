import React, {Fragment, Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



//<App/> == <App></App> // 자식요소가 필요  없을때 사용하는 태그

// <img></img> == <img/>

ReactDOM.render(<App></App>, document.getElementById('root')); // index app.js redenring




////////////// *** 콜백 ***////////////////

function myTestfunc(cb){
    console.log("myTestfunc")
    cb();
}


var printA = function(){
    console.log('a')
};

myTestfunc(printA);




