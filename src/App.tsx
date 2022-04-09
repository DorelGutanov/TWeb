import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'

import {HeaderLayout} from "./Layouts/HeaderLayout";
import {Mycontent} from "./Layouts/Mycontent";
import {Footer} from "antd/es/layout/layout";
import {Layout} from "antd";
import {FormLayout} from "./Layouts/FormLayout";
import {useRootStore} from "./index";

function App() {
    const roottoStore =useRootStore()
    useEffect(()=>{
        roottoStore.setDatainLocalStorage()
        roottoStore.getDatafromLocalStorage()
        roottoStore.removemyLocalStorage()
    },[])
  return (
      <Layout>
        <>
      <HeaderLayout/>
          </>
          <div style={{ padding: '100px 50px 50px 50px'
          }}>
  <Mycontent />
          </div>
      {/*<h1 style={{textAlign:'center'}}>My Form</h1>*/}
          {/*<FormLayout/>*/}
  <Footer style={{ textAlign: 'center' }}>Guțanov Dorel</Footer>
        </Layout>
  );
}

export default App;
