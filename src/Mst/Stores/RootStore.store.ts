import {types} from "mobx-state-tree";
import {ContentModel} from "../Models/Content.model";

const RootStore =types.model('RootStore',{
    contents:types.array(ContentModel),
    })
    .actions(()=>({
        setDatainLocalStorage(){
            localStorage.setItem('StringState','string')
        },
        getDatafromLocalStorage(key:string ='StringState'){
            const mystorage=localStorage.getItem(key)
            console.log(mystorage)
            return mystorage
        },
        removemyLocalStorage(key:string ='StringState'){
            localStorage.removeItem(key)
            console.log(`>>${key} a fost sters`)
        }
    }))

export default RootStore