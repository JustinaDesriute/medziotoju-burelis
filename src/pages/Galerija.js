import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// toliau - foto failai
import tryspirmininkai from './tryspirmininkai.jpg';
import meisteris from './meisteris.jpg';
import meska from './meska.jpg';
import nariai from './nariai.jpg';


class Galerija extends Component
{
  render() {
      return (
        <Carousel width="50%">
            <div className="galerijos-nuotrauka">
              <img src={tryspirmininkai} alt="tryspirmininkai" />
              <p className="legend">Trys pirmininkai</p>
            </div>
            <div className="galerijos-nuotrauka">
              <img src={meisteris} alt="meisteris" />
              <p className="legend">Meisteris ir Margarita</p>
            </div>
            <div className="galerijos-nuotrauka">
              <img src={meska} alt="meska" />
              <p className="legend">Meska</p>
            </div>
          <div className="galerijos-nuotrauka">
            <img src={nariai} alt="burelio-nariai" />
            <p className="legend">Meska</p>
          </div>
          </Carousel>
      );
    }
};

export default Galerija
