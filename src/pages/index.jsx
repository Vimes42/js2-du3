import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/header/header';
import { Estate } from '../components/estate/estate';


    const WhatPage = window.location.pathname;
    const PageName = WhatPage.slice(0, 6);

    const response = await fetch(`https://apps.kodim.cz/daweb/trening-api/apis/realitka${PageName}`);
    const data = await response.json();
    console.log(data);



document.querySelector('#root').innerHTML = render(
  <div className="container">
    <Header />
    <Estate title={data.title} text={data.text} city={data.city} price={data.price} contact={data.contact} photo={data.photo} />
  </div>
);

