import React, {ReactElement} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const StoreContext = React.createContext<any | null>(null)
export const useRootStore =()=>React.useContext(StoreContext)
const StoreProvider =({children }:{children:ReactElement})=>{
    return(
        <StoreContext.Provider value={StoreProvider}>
            {children}
        </StoreContext.Provider>
    )
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
