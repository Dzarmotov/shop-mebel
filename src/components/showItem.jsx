import React, { Component } from "react";
import canCelIcon from './cancel.png'

export class ShowItem extends Component {
  render() {
    return (
      <div className="full-name">
        <div className="full-items">
        <button onClick={() => this.props.onShowItem(this.props.item)}>
          
        <img src={canCelIcon} className="cancel-icon"/>

        </button>
        <img className="content-img"
          src={"./img/" + this.props.item.img}
        />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price}</b>
        <div
          className="addToCart"
          onClick={() => this.props.onAdd(this.props.item)}
        >
          +
        </div>
        </div>
      </div>
    );
  }
}

export default ShowItem;
