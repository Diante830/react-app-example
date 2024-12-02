import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import Main from './components/Main'
import Header from './components/Header'

import { useState } from 'react';

function App() {
  const [products] = useState([
    {
      id:1,
      name: 'Laptop',
      price: 1200,
      image: 'https://via.placeholder.com/150'
    },
    {
      id:2,
      name: 'Headphones',
      price: 800,
      image: 'https://via.placeholder.com/150'
    },
    {
      id:3,
      name: 'Tablet',
      price: 1100,
      image: 'https://via.placeholder.com/150'
    },
    {
      id:4,
      name: 'Watch',
      price: 1600,
      image: 'https://via.placeholder.com/150'
    },
    {
      id:5,
      name: 'Car',
      price: 11200,
      image: 'https://via.placeholder.com/150'
    },
    {
      id:6,
      name: 'Tshirt',
      price: 70,
      image: 'https://via.placeholder.com/150'
    },
    {
      id:7,
      name: 'Table',
      price: 500,
      image: 'https://via.placeholder.com/150'
    },
  ])

  return (
    <div className="flex min-h-screen">
        <Header />
        <div className='flex-1 flex flex-col'>
          <Main products={products} />
          <Footer />
        </div>

    </div>
  );
}

export default App;
