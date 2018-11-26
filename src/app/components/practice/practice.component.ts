import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { UtilitiesService } from '../../services/utilities.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})

export class PracticeComponent {

  constructor(private storageService: StorageService,private utilitiesService: UtilitiesService) { }
  numToSelect:number=5;
  allList = [];
  wordToTranslate: any;
  wordsToChoose = [];
  msgCanNotPlay: boolean;
  showBoard: boolean;
  success=false;
  failure=false;
  maxRange:number;
  ngOnInit(){
    this.allList = this.storageService.getAllList()
    this.maxRange= this.allList.length-1;
  }
  play() {
    if (this.allList.length < 5) {
      this.msgCanNotPlay = true;
    } else {
      this.showBoard = true;
      this.wordToTranslate = this.allList[Math.floor(Math.random() * this.allList.length)];
      this.fillWordsToChooseArr();
    }
  }

  fillWordsToChooseArr() {
    this.wordsToChoose = [];
    var exist;
    for (var i = 0; i < this.allList.length; i++) {
      exist = false;
      for (var j = 0; j < this.wordsToChoose.length; j++) {
        if (this.allList[i].id == this.wordsToChoose[j].id) {
          exist = true;
        }
      }
      if (exist == false && this.wordToTranslate.id != this.allList[i].id) {
        this.wordsToChoose.push(this.allList[i]);
        if (this.wordsToChoose.length == this.numToSelect-1) {
          i = this.allList.length + 1;  //=break
        }
      }
    }
    this.wordsToChoose.push(this.wordToTranslate);
    this.wordsToChoose=this.utilitiesService.shuffle(this.wordsToChoose);
  }
  
  userChooseWord(id) {
    if (this.wordToTranslate.id == id) {
     this.success=true;
     this.failure=false;
     setTimeout(()=>{
      this.success=false;
      this.play();
      },2000)

    } else {
      this.failure=true;
      this.success=false;
      setTimeout(()=>{
        this.failure=false;
      },1500)
    }
  }

}
