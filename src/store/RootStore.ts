import { makeAutoObservable } from "mobx"
import {Contacts} from "./contacStore"
import {Groups} from "./groupStore"

class RootStore {
    contacts
    groups
    
    constructor() {
        this.contacts =  new Contacts()
        this.groups =  new Groups()
        makeAutoObservable(this)
    }
}

export default new RootStore()