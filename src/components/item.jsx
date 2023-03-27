import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
        <main className="item-wrap">
            
            <div className="item-content">
                <img src={'./img/' + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)}/>
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.desc}</p>
                <b>{this.props.item.price}</b>
                <div className='addToCart' 
                onClick={() => this.props.onAdd(this.props.item)}>+</div>
            </div>
        
        </main>
    )
  }
}

export default Item