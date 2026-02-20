import { makeAutoObservable } from "mobx"
import {Contacts} from "./contactStore"
import {Groups} from "./groupStore"
import { useContext, createContext } from "react";
import {Favorites} from './favoritStore'

export class RootStore {
    contacts
    groups
    favorites
    
    constructor() {
        this.contacts =  new Contacts()
        this.groups =  new Groups()
        this.favorites =  new Favorites()
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