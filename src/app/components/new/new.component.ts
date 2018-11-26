import { Component } from '@angular/core';
import { StorageService } from '../../services/storage.service';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  constructor(private storageService:StorageService){}

  hebWord:string;
  engWord:string;

  add(){
    if(this.hebWord!="" && this.engWord!=""){
      this.storageService.addNew(this.hebWord,this.engWord);
      this.hebWord="";
      this.engWord="";
    }
  }
}
