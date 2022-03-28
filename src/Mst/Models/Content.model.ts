import {types} from "mobx-state-tree";

export const  ContentModel = types.model('ContentModel',{
    id:types.identifier,
    title:'',
    description:'',
    seen:false,
    notite:'',
}).actions((self) => ({
    changeNotes(value:string){
        self.notite =value
    }
}))