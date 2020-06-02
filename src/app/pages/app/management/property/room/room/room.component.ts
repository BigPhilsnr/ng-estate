import { Component, OnInit } from '@angular/core';


interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'ngx-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomSingleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  statuses: Status[] = [
    {value: 'VACCANT', viewValue: 'VACCANT'},
    {value: 'BOOKED', viewValue: 'BOOKED'},
    {value: 'OCCUPIED', viewValue: 'OCCUPIED'},
  ];


}
