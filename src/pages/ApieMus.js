import React, { Component } from 'react';
import './ApieMus.css';
import ribos from './ribu_zemelapis.png';


class ApieMus extends Component {

  render() {

    return (
      <div className="content">
        <section class="history-section">
          <h2 class="title-yellow">Istorija</h2>
          <div class="white-text">
            <p>Siauliu rajono medziotoju burelis LYGUDAI ikurtas...........     ...</p>
          </div>
        </section>

        <section class="nariai-section">
          <h2 class="title">Veikla</h2>
          <div class="black-text">
            <p>Burelio tikslai - ...</p>
          </div>
        </section>

        <section class="map-section">
          <h2 class="title-yellow">Ribos</h2>
          <div class="white-text">
            <p>Burelio ribos driekiasi nuo ... iki ...</p>
          </div>
          <img src={ribos} className="ribu-zemelapis" alt="ribu-zemelapis" />
        </section>
      </div>
    )
  }
}

export default ApieMus
