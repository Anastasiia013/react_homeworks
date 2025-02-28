import Greeting from '../Greeting'
import ShoppingList from '../ShoppingList'
import OrderStatus from '../OrderStatus';
import './App.css'

function App() {

  const items = ['eggs', 'toothpaste', 'oil', 'tomatoes', 'potatoes'];
  const ordersArray = [
    { orderId: 123, status: 'в пути' },
    { orderId: 111, status: 'принят' },
    { orderId: 122, status: 'доставлен' },
    { orderId: 133, status: 'отменен' },
  ];

  return (
    <>
      <Greeting name='Anastasiia' />
      <ShoppingList items={items} />

      <h2>Заказы:</h2>
      {ordersArray.map(order => (
        <OrderStatus key={order.orderId} orderId={order.orderId} status={order.status} />
      ))}
    </>
  )
}

export default App







