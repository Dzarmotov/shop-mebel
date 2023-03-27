import React from "react";
import "./App.css";
import Categories from "./components/categories";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import ShowItem from "./components/showItem";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Мягкое кресло',
          desc: "Lorem ipsum dolor sit amet",
          img: "chairsFurnitor.jpg",
          category: 'upholstered furniture',
          price: '9800 ₽'
        },
        {
          id: 2,
          title: 'Диван',
          desc: "Lorem ipsum dolor sit amet",
          img: 'sofas.jpg',
          category: 'Sofas',
          price: '10100 ₽'
        },
        {
          id: 3,
          title: 'Кресла',
          desc: "Lorem ipsum dolor sit amet",
          img: 'chairs.jpg',
          category: 'Chairs',
          price: '5500 ₽'
        },
        {
          id: 4,
          title: 'Банкетка',
          desc: "Lorem ipsum dolor sit amet",
          img: 'banquettes.jpg',
          category: 'banquettes',
          price: '12000 ₽'
        },
        {
          id: 5,
          title: 'Мебель в гостиную',
          desc: "Lorem ipsum dolor sit amet",
          img: 'furnitureLivingRoom.jpg',
          category: 'furnitureLivingRoom',
          price: '22220 ₽'
        },
        {
          id: 6,
          title: 'Стенка для гостиной',
          desc: "Lorem ipsum dolor sit amet",
          img: 'wallsLivingRoom.jpg',
          category: 'allsLivingRoom',
          price: '23000 ₽'
        },
        {
          id: 7,
          title: 'Тумба для ТВ',
          desc: "Lorem ipsum dolor sit amet",
          img: 'tv-cabinet.jpg',
          category: 'tvСabinet',
          price: '33000 ₽'
        },
        {
          id: 8,
          title: 'Журнальный столик',
          desc: "Lorem ipsum dolor sit amet",
          img: 'coffee-table.jpg',
          category: 'cofeeTable',
          price: '23220 ₽'
        },
        {
          id: 9,
          title: 'Кровати',
          desc: "Lorem ipsum dolor sit amet",
          img: 'beds.jpg',
          category: 'Beds',
          price: '45200 ₽'
        }
      ],
      showitem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategories = this.chooseCategories.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }

  deleteOrder(id) {
    this.setState({
      orders: this.state.orders.filter(el => el.id !== id)
    })
  }

  // Работа с категориями
  chooseCategories(category) {
    if(category === 'all') {
      this.setState({
        currentItems: this.state.items
      })
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }


  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategories={this.chooseCategories}/>
        <Home onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
        {this.state.showitem && <ShowItem onShowItem={this.onShowItem} item={this.state.fullItem} onAdd={this.addToOrder} />}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({
      showitem: !this.state.showitem,
      fullItem: item
    })
  }

  addToOrder(item) {
    let isAnArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id) {
        isAnArray = true
      }
    })
    if(!isAnArray) {

      this.setState({ orders: [...this.state.orders, item ] })
    }

}
}
export default App;
