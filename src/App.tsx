import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'

import {useLoginStore, useRootStore} from ".";
import {HeaderLayout} from "./Layouts/HeaderLayout";
import {Mycontent} from "./Layouts/Mycontent";
import {Footer} from "antd/es/layout/layout";
import {Layout} from "antd";
import {FormLayout} from "./Layouts/FormLayout";

import {FormLogin} from "./Layouts/FormLogin";
import {Route, Routes} from "react-router-dom";
import {ROUTES} from "./Routes/Routes";
import {Home} from "./Layouts/Home";
function App() {
    const loginS = useLoginStore();

    useEffect(() => {
        loginS.setInitialStorageContents()
    }, [])

        const roottoStore = useRootStore()
        useEffect(() => {
            roottoStore.setInitialStorageValue()
            roottoStore.setDatainLocalStorage()
            roottoStore.getDatafromLocalStorage()
            // roottoStore.removemyLocalStorage()
        }, [])

        return (
            <div className="App">
                <Layout>
                    {/*<div style={{*/}
                    {/*    padding: '100px 50px 50px 50px'*/}
                    {/*}}>*/}
                    {/*    <FormLogin/>*/}
                    {/*</div>*/}
                    {/*  <>*/}

                    <HeaderLayout/>
                    {/*    </>*/}
                    {/*        <div style={{ padding: '100px 50px 50px 50px'*/}
                    {/*        }}>*/}
                    {/*<Mycontent />*/}
                    {/*        </div>*/}
                    {/*<h1 style={{textAlign:'center'}}>My Form</h1>*/}
                    {/*<FormLayout/>*/}
                    <div className='site-layout-content'>

                        <Routes>
                            <Route path={ ROUTES[0].path } element={ <Home /> } />

                        </Routes>
                    </div>
                    {/*<Mycontent/>*/}
                    <Footer style={{textAlign: 'center'}}>Guțanov Dorel</Footer>
                </Layout>
            </div>
        );
    }


export default App;
