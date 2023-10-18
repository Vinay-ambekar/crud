import { HttpClient } from '@angular/common/http'
import {Injectable} from '@angular/core'
import { User } from '../models/user.model'

@Injectable({
    providedIn:'root'
})
export class ApiService{
    private baseUrl:string="http://localhost:3000/enquiry"
    constructor(private http:HttpClient){

    }
    postRegistration(registerObj: User){
        return this.http.post<User>('http://localhost:3000/enquiry',registerObj)
    }
    getRegisterdUser(){
        return this.http.get<User[]>('http://localhost:3000/enquiry')
    }
    updateRegisterUser(registerObj: User, id:number){
        return this.http.put<User>('http://localhost:3000/enquiry/${id}', registerObj)
    }
    deleteRegistered(id:number){
        return this.http.delete<User>('http://localhost:3000/enquiry/${id}')
    }
    getRegisteredUserId(id:number){
        return this.http.get<User>('http://localhost:3000/enquiry/${id}')
    }
}