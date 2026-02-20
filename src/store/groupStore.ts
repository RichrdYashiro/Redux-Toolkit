import { GroupContactsDto } from './../types/dto/GroupContactsDto';
import { makeAutoObservable, runInAction } from "mobx"


export class Groups {
    groups: GroupContactsDto[] = []

    constructor() {
        makeAutoObservable(this)
    }

   async getGroups(): Promise<void> {

        try {
            const response = await fetch('https://mocki.io/v1/03859bbe-a18d-4ec9-86c4-96bb07d37341', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const json: GroupContactsDto[] = await response.json()

            runInAction(() => {
                this.groups = [...this.groups, ...json]
            })

        } finally {
       
        }
    }
}

