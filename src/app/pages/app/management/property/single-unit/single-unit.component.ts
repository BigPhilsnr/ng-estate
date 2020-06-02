import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  id: number;
  unit: number;
  location: string;
  rooms: number;
  baths: number;
  rent: number;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Jutin Oliech', unit: 10, location: '+254728138643', rooms: 2, baths: 0, rent: 5000, status: 'VACCANT'},
  {id: 2, name: 'Elizabeth Ndanu', unit: 5, location: '+254728138643', rooms: 2, baths: 100, rent: 5000, status: 'TAKEN'},
  {id: 3, name: 'Alex kioko', unit: 20, location: '+254728138643', rooms: 2, baths: 3000, rent: 4500, status: 'TAKEN'},
  {id: 4, name: 'Benard Kamau', unit: 8, location: '+254728138643', rooms: 2, baths: 400, rent: 5000, status: 'TAKEN'},
  {id: 5, name: 'John patel', unit: 19, location: '+254728138643', rooms: 2, baths: 300, rent: 5000, status: 'TAKEN'},
  {id: 6, name: 'Nelson Wesonga', unit: 12, location: '+254728138643', rooms: 2, baths: 0, rent: 5000, status: 'TAKEN'},
  {id: 7, name : 'Alice Njeri', unit : 14, location : '+254728138643', rooms : 2, baths : 0, rent : 5000, status : 'TAKEN'},
  {id: 8, name : 'Sylia Owondo', unit : 15, location : '+254728138643', rooms : 2, baths : 2000, rent: 5000, status: 'TAKEN'},
  {id: 9, name : 'Fairview Kademe', unit : 18, location : '+254728138643', rooms : 2, baths : 400, rent : 5000, status : 'TAKEN'},
  {id: 10, name : 'Neon Wetangula', unit : 20, location : '+254728138643', rooms : 2, baths : 0, rent : 5000, status : 'TAKEN'},
];

@Component({
  selector: 'ngx-single-unit',
  templateUrl: './single-unit.component.html',
  styleUrls: ['./single-unit.component.scss'],
})
export class SingleUnitComponent implements OnInit {

  constructor(private router: Router) { }
  public displayedColumns: string[] = ['id', 'name', 'status', 'location', 'rent', 'unit', 'rooms', 'baths'   ];
  public  dataSource: PeriodicElement[];

  ngOnInit(): void {
      this.dataSource = ELEMENT_DATA;
  }

  getRecord(period: any) {
    const url = '/pages/management/properties/housingunits/unit/room';
    this.router.navigateByUrl(url).then(e => {

    });

  }

}

