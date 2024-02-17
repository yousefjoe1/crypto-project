import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Layout,Typography} from 'antd';

import {Navbar,Cryptocurrencies,HomePage,News,CryptoDetails } from './components'

function App() {


  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <main className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
              <Route path='/crypto/:coinId' element={<CryptoDetails />} />
            </Routes>
          </div>
        </Layout>
      <footer className='footer' >
        <Typography.Title style={{color: 'aliceblue'}} level={5}>
          Cryptocurrencies <br/>
          All rights reserved
        </Typography.Title>
      </footer>
      </main>
    </div>
  );
}

export default App;
