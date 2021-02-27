import React, { Component } from "react";
import {Link} from 'react-router-dom';
import './NasCss.css';

export class NavigacijaProizvodi extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            
          </div>

          <div
            className="navigacija-proizvodi"
            // id="bs-example-navbar-collapse-1"
          >
              <Link to={'/'}>
            <a className="navbar-brand" href="#page-top" >
              Lensmak
            </a>{" "}   
            </Link>
              <ul className='navigacija-proizvodi proba'>
                  <li className='lista-navigacija-proizvodi'>Оптички леќи</li>
                  <li className='lista-navigacija-proizvodi'>Контактни леќи</li>
                  <li className='lista-navigacija-proizvodi'>Течности</li>
                  <li className='lista-navigacija-proizvodi'>Антирефлексна заштита</li>
                  <li className='lista-navigacija-proizvodi'>Диоптриски рамки и сончеви наочари</li>
                  <li className='lista-navigacija-proizvodi'>Оптичка опрема и прибор</li>
              </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavigacijaProizvodi;
