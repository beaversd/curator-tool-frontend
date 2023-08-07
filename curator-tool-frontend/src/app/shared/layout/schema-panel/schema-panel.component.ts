import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';


@Component({
    selector: 'app-schema-panel',
    templateUrl: './schema-panel.component.html',
    styleUrls: ['./schema-panel.component.scss'],

})
export class SchemaPanelComponent implements OnInit {
    menuItems$: Observable<string[]> = this.dataservice.fetchSchemaClasses();
    menuItems: string[] = this.setMenuItems();

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