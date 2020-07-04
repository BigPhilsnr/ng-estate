import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'ngx-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.scss'],
})
export class AdminDetailComponent implements OnInit {
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  constructor() { }

  ngOnInit(): void {
  }

}
