import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class SneakerService{
    apiRoot: string ="https://sneakers-901e3.firebaseio.com/Sneakers";
    jsonAddon: string =".json";

    constructor(private http: HttpClient){}

    getSneakers(){
        return this.http.get(`${this.apiRoot}${this.jsonAddon}`);
    }
    saveSneakers(sneakers:any[]){
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.put(`${this.apiRoot}${this.jsonAddon}`, sneakers, {headers})
        .subscribe(
            res=>{console.log(res)},
            (err: HttpErrorResponse) => {
                console.log(err.error);
                console.log(err.name);
                console.log(err.message);
                console.log(err.status);
              }
        );

    }
    updateSneakers(index, sneaker){
        const headers = new HttpHeaders({'Content-Type':'application/json'});
        return this.http.patch(`${this.apiRoot}/${index}/${this.jsonAddon}`, sneaker, {headers});
        

    }
    deleteSneaker(index){
        return this.http.delete(`${this.apiRoot}${index}/${this.jsonAddon}`)
    }
    searchSneaker(searchIndex){
        return this.http.get(`${this.apiRoot}${searchIndex}${this.jsonAddon}`)
    }
}

export let cart = [];
export let a:number = 1;