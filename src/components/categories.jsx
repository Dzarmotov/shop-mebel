import React, { Component } from 'react'

export class Categories extends Component {

    state = {
        categories: [
            {
                key: 'all',
                name: 'Всё'
            }, 
            {
                key: 'upholstered furniture',
                name: 'Мягкое кресло'
            },
            {
                key: 'Sofas',
                name: 'Диваны'
            },
            {
                key: 'Chairs',
                name: 'Кресла'
            },
            {
                key: 'banquettes',
                name: 'Банкетки'
            },
            {
                key: 'furnitureLivingRoom',
                name: 'Мебель в гостиную'
            },
            {
                key: 'allsLivingRoom',
                name: 'Стенка для гостиной'
            },
            {
                key: 'tvСabinet',
                name: 'Тумбы для ТВ'
            },
            {
                key: 'cofeeTable',
                name: 'Журнальные столики'
            },
            {
                key: 'Beds',
                name: 'Кровати'
            }
        ]
    }

  render() {
    return (
      <div className="categories">
        {
            this.state.categories.map(el => {
                return(

                    <div className='items' key={el.key} onClick={() => this.props.chooseCategories(el.key)}>{el.name}</div>
                )
            })
        }
      </div>
    )
  }
}

export default Categories