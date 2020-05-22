import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnrollService } from '../../services/enroll/enroll.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'ngx-esteps',
  templateUrl: './esteps.component.html',
  styleUrls: ['./esteps.component.scss'],
})
export class EstepsComponent implements OnInit {

  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  user: any = {};

  constructor(private fb: FormBuilder, private enrollService: EnrollService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.firstForm = this.fb.group({
      firstCtrl: ['', Validators.required],
    });

    this.secondForm = this.fb.group({
      secondCtrl: ['', Validators.required],
    });

    this.thirdForm = this.fb.group({
      thirdCtrl: ['', Validators.required],
    });
  }

  onFirstSubmit() {
    this.firstForm.markAsDirty();
  }

  onSecondSubmit() {
    this.secondForm.markAsDirty();
  }

  onThirdSubmit() {
    this.thirdForm.markAsDirty();
  }

  enrollOrganization(data: any) {
    this.enrollService.createAgency(data).subscribe(
      res => {
      alert('Created');
    },
    error => {

    },
    );
  }


}
