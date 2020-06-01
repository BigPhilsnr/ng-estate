import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-contractor',
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.scss'],
})
export class ContractorComponent implements OnInit {

  constructor(private router: Router) { }
  public displayedColumns: string[] = ['id', 'name', 'location', 'unit' ];
  public  dataSource: PeriodicElement[];

  ngOnInit(): void {
      this.dataSource = ELEMENT_DATA;
  }

  getRecord(period: any) {
    const url = 'pages/management/properties/housingunits/unit';
    this.router.navigateByUrl(url).then(e => {
      if (e) {
        alert('navigated');
      }else {
       alert('navigation failed');
      }

    });

  }

}


export interface PeriodicElement {
  name: string;
  id: number;
  unit: number;
  location: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Shalom Apartments', unit: 10, location: 'Nairobi, Kasarani'},
  {id: 2, name: 'Yadah Court', unit: 5, location: 'Nairobi, Thika Road Mall'},
  {id: 3, name: 'Royal Court', unit: 20, location: 'Pipeline, Stage II'},
  {id: 4, name: 'Mgori Apartments', unit: 8, location: 'Weithe'},
  {id: 5, name: 'Dimitiri Apartments', unit: 19, location: 'Block B Nakuru'},
  {id: 6, name: 'Comfy', unit: 12, location: 'Umoja '},
  {id: 7, name: 'Highland hills', unit: 14, location: 'N'},
  {id: 8, name: 'Open Gardens', unit: 15, location: 'O'},
  {id: 9, name: 'Fairview', unit: 18, location: 'F'},
  {id: 10, name: 'Neon', unit: 20, location: 'Ne'},
];

