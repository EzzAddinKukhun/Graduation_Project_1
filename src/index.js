import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import User from './component/HomePage/JSXFiles/User';
import Home from './component/HomePage/JSXFiles/Home';
import Channel from './component/HomePage/JSXFiles/Channel.jsx';
import TopAdmin from './component/HomePage/JSXFiles/TopAdmin';

const root = ReactDOM.createRoot(document.getElementById('root'));

let accountString = localStorage.getItem("ACCOUNT");
console.log(accountString)
// let  account = JSON.parse(accountString) ;
if (accountString ==null || accountString == "") {
  console.log(accountString)
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
else {
  let account = JSON.parse(accountString); 
  if (account.type == "userPage") {
    root.render(
      <BrowserRouter>
        <User id={account.id} />
      </BrowserRouter>
    );
  }
  else if (account.type == "channelAdminPage" || account.type == "memAdminPage" || account.type == "uniAdminPage" ) {
    root.render(
      <BrowserRouter>
        <Channel id={account.id} type={account.type} />
      </BrowserRouter>
    );
  }
  else if (account.type == "tadminPage") {
    root.render(
      <BrowserRouter>
        <TopAdmin id={account.id} />
      </BrowserRouter>
    );
  }

  else {
    root.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
