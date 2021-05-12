import { Injectable } from '@angular/core';
import {Plugins} from'@capacitor/core';

const { Storage} = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
}

  async store(storageKey: string, value: any) {
  await Storage.set({
    key: storageKey;
    value: value;
  });
}


