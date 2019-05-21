import React, { Component } from 'react'
import ribos from './ribu_zemelapis.png';

class Ribos extends Component
{

  render()
  {

    return (
      <div className="main-content">
        <p>uzkraunamas puslapis: RIBOS</p>
        <div>
          <img src={ribos} className="ribu-zemelapis" alt="ribu-zemelapis" />
        </div>
      </div>
    )
  }
}

export default Ribos