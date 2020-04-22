import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let UsersService = class UsersService {
    constructor(http) {
        this.http = http;
        this.API_URI = "http://localhost:8081/api";
    }
    getUsers() {
        return this.http.get(`${this.API_URI}/users`);
    }
    getUser(id) {
        return this.http.get(`${this.API_URI}/users/${id}`);
    }
    saveUser(user) {
        return this.http.post(`${this.API_URI}/users`, user);
    }
    deleteUser(id) {
        return this.http.delete(`${this.API_URI}/users/${id}`);
    }
    updateUser(id, User) {
        return this.http.post(`${this.API_URI}/users`, user);
    }
};
UsersService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UsersService);
export { UsersService };
//# sourceMappingURL=users.service.js.map