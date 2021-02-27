import React, { Component } from "react";
import {Link} from 'react-router-dom';

export class Navigation extends Component {
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
            <Link to={'/'}>
            <a className="navbar-brand page-scroll" href="#page-top">
              Lensmak
            </a>{" "}
            </Link>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              
              <li>
                <a href="#features" className="page-scroll">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  За нас
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
                  Сервиси
                </a>
              </li>
              <li>
                <a href="#portfolio" className="page-scroll">
                  Производи
                </a>
              </li>
              <li>
                <a href="#testimonials" className="page-scroll">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#team" className="page-scroll">
                  Тим
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Контакт
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
