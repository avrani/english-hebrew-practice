import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  addNew(heb, eng) {
    var dictionaryArr;
    var availableId=this.getAvailableId();
    var newWord = {
      "id": availableId,
      "heb": heb,
      "eng": eng,
    }
    var dictionaryFromStorage = localStorage.getItem('dictionary');
    if (dictionaryFromStorage != null) {
      dictionaryArr = JSON.parse(dictionaryFromStorage);
    } else {
      dictionaryArr = [];
    }
    dictionaryArr.push(newWord);
    localStorage.dictionary = JSON.stringify(dictionaryArr);
  }

  getAvailableId() {
    var dictionaryArr, availableId;
    var dictionaryFromStorage = localStorage.getItem('dictionary');
    if (dictionaryFromStorage != null) {
        dictionaryArr = JSON.parse(dictionaryFromStorage);
      if(dictionaryArr.length>0){
        availableId = parseInt(dictionaryArr[dictionaryArr.length - 1].id)+1;
      }else{
        availableId=1;
      }
    }
    else {
      availableId = 1;
    }
    return availableId
  }

  getAllList(){
    var dictionaryArr;
    var dictionaryFromStorage = localStorage.getItem('dictionary');
    if (dictionaryFromStorage != null) {
      dictionaryArr = JSON.parse(dictionaryFromStorage);
    }else{
      dictionaryArr=[];
    }
    return dictionaryArr;
  }
  
  deleteById(ID){
    var dictionaryArr=[];
    var dictionaryFromStorage = localStorage.getItem('dictionary');
    if (dictionaryFromStorage != null) {
      dictionaryArr = JSON.parse(dictionaryFromStorage);
      for(let i in dictionaryArr){
        if(dictionaryArr[i].id==ID){
          dictionaryArr.splice(parseInt(i),1);
          localStorage.dictionary = JSON.stringify(dictionaryArr);
        }
      }
    }
    

  }
}
