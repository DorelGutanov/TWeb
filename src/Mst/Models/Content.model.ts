import {getParentOfType, types} from "mobx-state-tree";
import rootStoreStore from "../Stores/RootStore.store";
import RootStore from "../Stores/RootStore.store";

export const  ContentModel = types.model('ContentModel',{
    id:types.identifier,
    title:'',
    description:'',
    seen:false,
    notite:'',
})
    .views((self) =>({
  get isSeen(){
      return self.seen
    },
    FindInTitle(param:any){
      self.title.includes(param)
    }
}))
    .actions((self) => ({
    changeNotes(value:string){
        self.notite =value
    },
        changeSeen(state:boolean){
            self.seen =state
        },
        addNoteValue(){
const rootStore=getParentOfType(self,RootStore)
rootStore.addNote(self.id)
        },
        removeNote(){
        const rootStore =getParentOfType(self,RootStore)
        rootStore.removeNote(self.id)
        }
}))