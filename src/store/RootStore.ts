import { makeAutoObservable } from "mobx"
import {Contacts} from "./contactStore"
import {Groups} from "./groupStore"
import { useContext, createContext } from "react";


export class RootStore {
    contacts
    groups
    
    constructor() {
        this.contacts =  new Contacts()
        this.groups =  new Groups()
        makeAutoObservable(this)
    }
}

export const StoreContext = createContext<RootStore | null>(null)


export const useStore = () => {
    const store = useContext(StoreContext)
    if (!store) {
        throw new Error("ОШИБКА")
    }
    return store 
}