import { ContactDto } from '../types/dto/ContactDto';
import { makeAutoObservable, runInAction } from "mobx"


export class Contacts {
    contacts: ContactDto[] = []

    constructor() {
        makeAutoObservable(this)
    }

   async getContacts(): Promise<void> {

        try {
            const response = await fetch('https://mocki.io/v1/96b46f3d-e1a2-4648-88b7-4b47d44652d5', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const json: ContactDto[] = await response.json()

            runInAction(() => {
                this.contacts = [...this.contacts, ...json]
            })

        } finally {
       
        }
    }
}

