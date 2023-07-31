import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { DataService } from '../core/services/data.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-table-menu',
  templateUrl: './table-menu.component.html',
  styleUrls: ['./table-menu.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor, RouterModule]
})
export class TableMenuComponent {


  menuItems$: Observable<string[]> = this.dataservice.fetchSchemaClasses();
  menuItems: string[] = this.setMenuItems();;

  constructor(private dataservice: DataService) { }



  setMenuItems(): string[] {
    let tempArray: string[] = [];
    this.dataservice.fetchSchemaClasses()
      .pipe()
      .subscribe(schemaClasses => {
        this.menuItems = schemaClasses.sort((a, b) => a.localeCompare(b));
      })
    return tempArray;
  }

  ngOnInit() {


  }

}


