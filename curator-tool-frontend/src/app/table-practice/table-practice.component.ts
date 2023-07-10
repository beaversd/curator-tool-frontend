import { Component, Input, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { HttpClient, HttpHeaders } from '@angular/common/http';



export interface PathwayData {
  identifier: string;
  name: string;

}

const PATHWAY_DATA: PathwayData[] = [
  {
    identifier: "140630 ",
    name: "(2S,3R)-3-hydroxyaspartic acid at 103"
  },

  {
    identifier: "10505062	 ",
    name: "(2S,3R)-3-hydroxyaspartic acid at 103 (in Homo sapiens)"
  },

  {
    identifier: "10603429	 ",
    name: "(2S,3R)-3-hydroxyaspartic acid at 103 (in Homo sapiens)"
  },

  {
    identifier: "10069161 ",
    name: "(2S,3R)-3-hydroxyaspartic acid at 103 (in Homo sapiens)"
  },

  {
    identifier: "10281528	 ",
    name: "(2S,3R)-3-hydroxyaspartic acid at 103 (in Homo sapiens)"
  },

  {
    identifier: "9959726	 ",
    name: "(2S,3R)-3-hydroxyaspartic acid at 103 (in Homo sapiens)"
  },

  {
    identifier: "10172147	 ",
    name: "(2S,3R)-3-hydroxyaspartic acid at 103 (in Homo sapiens)"
  },

  {
    identifier: "9844625	 ",
    name: "(2S,3R)-3-hydroxyaspartic acid at 103 (in Homo sapiens)"
  },

  {
    identifier: "10387245	 ",
    name: "(2S,3R)-3-hydroxyaspartic acid at 103 (in Homo sapiens)"
  },

  {
    identifier: "140818	 ",
    name: "(2S,3R)-3-hydroxyaspartic acid at 110"
  },

  {
    identifier: "10603567	 ",
    name: "(2S,3R)-3-hydroxyaspartic acid at 110 (in Homo sapiens)"
  },

  {
    identifier: "9844762	 ",
    name: "(2S,3R)-3-hydroxyaspartic acid at 110 (in Homo sapiens)"
  },

  {
    identifier: "10505174	 ",
    name: "(2S,3R)-3-hydroxyaspartic acid at 110 (in Homo sapiens)"
  }
]


@Component({
  selector: 'app-table-practice',
  templateUrl: './table-practice.component.html',
  styleUrls: ['./table-practice.component.scss'],
  standalone: true,
  imports: [MatTableModule, NgIf, NgFor],
})
export class TablePracticeComponent implements OnInit {
  displayedColumns: string[] = ['identifier', 'name'];
  dataSource = this.http
    .get<any>('http://localhost:8080/api/curation/getAttributes/Pathway');
  clickedRows = new Set<PathwayData>();
  constructor(private http: HttpClient) { }


  @Input() testInput: string = "Entries: AbstractModifiedResidue";


  ngOnInit() {
    // API Call
    this.http
      .get<any>('http://localhost:8080/api/curation/getAttributes/Pathway')
      .subscribe(data => {
        console.log(data);
      });
  }

}
