import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  sortingByAlphanumeric(arr) {
    arr.sort(function (a, b) {
      if(a.eng.toLowerCase() === b.eng.toLowerCase() ){
        return 0;
      }
      return a.eng.toLowerCase() < b.eng.toLowerCase() ? -1 : 1;
    });
    return arr;
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
}


