import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, map } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { AttributeData } from 'src/app/core/models/schema-class-attribute-data.model';
import { Store } from '@ngrx/store';
import { selectAttributeData } from '../../state/attribute-table.selectors';
import { AttributeTableActions } from '../../state/attribute-table.actions';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  menuLoad = false;
  tableLoad = false;
  bothLoad = false;
  dataSource$: Observable<AttributeData[]> = EMPTY;
  className: any = "";

  constructor(private dataservice: DataService,
    private route: ActivatedRoute,
    private store: Store

  ) { }

  menuItems$: Observable<void> | undefined;
  menuItems: string[] = [];




  ngOnInit() {
    this.loadBoth();
  }

  loadBoth() {
    this.loadMenu();
    setTimeout(() => { this.loadTable() }, 3000)
  }



  //   loadMenu() {
  // console.log("loadMenu")
  //     this.menuItems$ = this.dataservice.fetchSchemaClasses().pipe(
  //       map((schemaClasses: any[]) => {
  //         this.menuItems = schemaClasses.sort((a, b) => a.localeCompare(b));
  //         console.log("main" + this.menuItems)
  //       })

  //     );

  //     this.menuLoad = true;

  //   }

  loadMenu(): string[] {
    let tempArray: string[] = [];
    this.dataservice.fetchSchemaClasses()
      .pipe()
      .subscribe(schemaClasses => {
        this.menuItems = schemaClasses.sort((a, b) => a.localeCompare(b));
      })
    this.menuLoad = true;
    return tempArray;

  }

  loadTable() {
    this.route.params.subscribe((className) => {
      this.className = className;
      this.dataSource$ = this.store.select(selectAttributeData(this.className.className));
      this.fetchAttributeTableByClassName(this.className.className);
      this.tableLoad = true;
      this.checkBothLoaded();
    });
  }




  checkBothLoaded() {
    if (this.menuLoad && this.tableLoad) {
      this.bothLoad = true;
    }
  }

  fetchAttributeTableByClassName(className:
    string) {

    this.store.dispatch({
      type: AttributeTableActions.GET_ATTRIBUTE_DATA,
      className: className
    });



  }


}

