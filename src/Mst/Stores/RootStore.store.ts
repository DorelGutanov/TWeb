import {types} from "mobx-state-tree";
import {ContentModel} from "../Models/Content.model";

const RootStore =types.model('RootStore',{
    contents:types.array(ContentModel),
    content_notes_array:types.array(types.safeReference(ContentModel))

    })
    .actions((self)=>({
        setDatainLocalStorage(value:any={}){
            localStorage.setItem('StringState',JSON.stringify(value))
        },
        getDatafromLocalStorage(key:string ='StringState'){
            return localStorage.getItem(key)
        },
        removemyLocalStorage(key:string ='StringState'){
            localStorage.removeItem(key)
            console.log(`>>${key} a fost sters`)
        },

    }))

    .actions((self)=>({
        setInitialStorageValue(){
            self.setDatainLocalStorage(self.contents)
        },
        addNote(id:string){
            self.content_notes_array.push(id)
        }
    }))

export default RootStore