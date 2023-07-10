import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface PathwayData {
  origin: string;
  definingType: string;
  category: string;
  name: string;
}

const PATHWAY_DATA: PathwayData[] = [
  {
    origin: "DatabaseObject ",
    definingType: "created",
    category: "1",
    name: "InstanceEdit"
  },
  {
    origin: "DatabaseObject",
    definingType: "dbld",
    category: "1",
    name: "Long"
  },

  {
    origin: "DatabaseObject",
    definingType: "displayName",
    category: "1",
    name: "String"
  },

  {
    origin: "DatabaseObject",
    definingType: "modified",
    category: "1",
    name: "InstanceEdit"
  },

  {
    origin: "DatabaseObject",
    definingType: "schemClass",
    category: "1",
    name: "String"
  },

  {
    origin: "DatabaseObject",
    definingType: "stld",
    category: "1",
    name: "String"
  }

]

@Component({
  selector: 'app-attribute-table1',
  templateUrl: './attribute-table1.component.html',
  styleUrls: ['./attribute-table1.component.scss'],
  standalone: true,
  imports: [MatTableModule, NgIf, NgFor],
})
export class AttributeTable1Component implements OnInit {
  displayedColumns: string[] = ['definingType', 'category', 'name', 'origin'];
  dataSource = PATHWAY_DATA;
  clickedRows = new Set<PathwayData>();
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // API Call
    this.http
      .get<any>('http://localhost:8080/api/curation/getAttributes/Pathway')
      .subscribe(data => {
        console.log(data);
      });
  }

}
