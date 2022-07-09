import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const SLIDES = [
  {
    title: "title 1",
    text: "text 1"
  },
  {
    title: "title 2",
    text: "text 2"
  },
  {
    title: "title 3",
    text: "text 3"
  },
  {
    title: "title 4",
    text: "text 4"
  },
  {
    title: "title 5",
    text: "text 5"
  },
];

root.render(
  <React.StrictMode>
    <App slides={SLIDES} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
