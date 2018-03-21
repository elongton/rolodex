import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//make sure you inject the contact service

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient) {}

  storeContact() {
    return this.httpClient.put('path_to_json', this.)

  }



}
