import { FavoriteContactsDto } from './../types/dto/FavoriteContactsDto';
import { makeAutoObservable } from "mobx"


export class Favorite  {

    favorites:FavoriteContactsDto  = []

    constructor(){
        makeAutoObservable(this)
    }


    addFavorites(id:string){
        this.favorites.push(id)
    }


   removeFavorites(id:string){
    this.favorites = this.favorites.filter(favorite => favorite !== id)
    }

}


