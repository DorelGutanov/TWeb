import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import { useLoginStore } from ".";
import {HeaderLayout} from "./Layouts/HeaderLayout";
import {Mycontent} from "./Layouts/Mycontent";
import {Footer} from "antd/es/layout/layout";
import {Layout} from "antd";
import {FormLayout} from "./Layouts/FormLayout";
<<<<<<< feature/lab7
import {FormLogin} from "./Layouts/FormLogin";
function App() {
    const loginS = useLoginStore();

    useEffect(() => {
        loginS.setInitialStorageContents()
    }, [])
=======
import {useRootStore} from "./index";

function App() {
    const roottoStore =useRootStore()
    useEffect(()=>{
        roottoStore.setInitialStorageValue()
        roottoStore.setDatainLocalStorage()
        roottoStore.getDatafromLocalStorage()
        // roottoStore.removemyLocalStorage()
    },[])
>>>>>>> main
  return (
      <div className="App">
      <Layout>
          <div style={{ padding: '100px 50px 50px 50px'
          }}>
<<<<<<< feature/lab7
          <FormLogin/>
              </div>
      {/*  <>*/}
      <HeaderLayout/>
      {/*    </>*/}
  {/*        <div style={{ padding: '100px 50px 50px 50px'*/}
  {/*        }}>*/}
  {/*<Mycontent />*/}
  {/*        </div>*/}
      {/*<h1 style={{textAlign:'center'}}>My Form</h1>*/}
          {/*<FormLayout/>*/}
=======
  <Mycontent />
          </div>
>>>>>>> main
  <Footer style={{ textAlign: 'center' }}>Guțanov Dorel</Footer>
        </Layout>
          </div>
  );
}

export default App;
