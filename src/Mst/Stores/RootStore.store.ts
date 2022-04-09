import {types} from "mobx-state-tree";
import {ContentModel} from "../Models/Content.model";

const RootStore =types.model('RootStore',{
    contents:types.array(ContentModel),
    })
    .actions(()=>({
        setDatainLocalStorage(value:any={}){
            localStorage.setItem('StringState',JSON.stringify(value))
        },
        getDatafromLocalStorage(key:string ='StringState'){
            return localStorage.getItem(key)
        },
        removemyLocalStorage(key:string ='StringState'){
            localStorage.removeItem(key)
            console.log(`>>${key} a fost sters`)
        }
    }))

export default RootStore