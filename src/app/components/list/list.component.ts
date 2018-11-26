import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { UtilitiesService } from '../../services/utilities.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private storageService:StorageService,private utilitiesService:UtilitiesService){}
  allList=[];
  ngOnInit() {
     this.allList= this.storageService.getAllList();
     this.allList=this.utilitiesService.sortingByAlphanumeric(this.allList);
  }

  delete(id){
    this.storageService.deleteById(id);
    this.allList= this.storageService.getAllList();
    this.allList=this.utilitiesService.sortingByAlphanumeric(this.allList);
  }
}
