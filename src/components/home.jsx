import React, { Component } from 'react'
import Item from './item';

export class Home extends Component {
  render() {
    return (
      <main className='item-wrap'>
        {this.props.items.map(el => {
        return <Item 
        onShowItem={this.props.onShowItem} 
        key={el.id} 
        item={el} 
        onAdd={this.props.onAdd}/>
        })}
      </main>
    )
  }
}

export default Home