import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef, Directive } from '@angular/core';
import { Router } from '@angular/router';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Observable, Subject, Subscription, merge } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { GlobalState } from '../../../../../../store/states/global.state';
// tslint:disable-next-line: max-line-length
import { selectAllAdmin, selectAdminTotal, selectAdminLoading, selectAdminError } from '../../store/admin.selectors';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { AdminLoadAction, AdminInsertAction, AdminUpdateAction } from '../../store/admin.actions';
import { AdminParams } from '../../models/admin-params';
import { Admin } from '../../models/admin';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormComponentBase } from '../../utils/formbase';
import { User } from '../../models/user';

@Component({
  selector: 'ngx-admin-people',
  templateUrl: './admin-people.component.html',
  styleUrls: ['./admin-people.component.scss'],
})
export class AdminPeopleComponent extends FormComponentBase  implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @Directive({
    selector: '[disableControl]',
  })

  public displayedColumns: string[] = ['Name', 'Phone', 'CreatedAt', 'Actions'];
  public dataSource: MatTableDataSource<Admin>;
  public adminTotal: number;
  public noData: Admin[] = [<Admin>{}];
  public loading: boolean;
  public error$: Observable<boolean>;
  public filterSubject = new Subject<string>();
  public defaultSort: Sort = { active: 'name', direction: 'asc' };

  private filter: string = '';
  private admin: Admin = <Admin>{};
  private subscription: Subscription = new Subscription();


  public options: any[] = [
    {value: 'ACTIVE', viewValue: 'ACTIVE'},
    {value: 'DEACTIVATED', viewValue: 'DEACTIVATED'},

  ];

  public currentAdmin: Admin;
  public form: FormGroup;
  public hidePassword: boolean = true;

  @ViewChild('email') firstItem: ElementRef;

  constructor(public store: Store<GlobalState>, private formBuilder: FormBuilder) {
    super();
    this.validationMessages = {
      fullName: {
        required: 'User name is required.',
        minlength: 'User name minimum length is 6.',
        maxlength: 'User name maximum length is 15.',
        pattern: 'User name minimum length 6, allowed characters letters, numbers only. No spaces.',
      },
      email: {
        required: 'Email is required.',
        email: 'Email is not properly formatted.',
      },
      phone: {
        required: 'Phone number  is required.',
        email: 'Phone number is not properly formatted.',
      },
    };

    this.formErrors = {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      passwordsGroup: '',
    };

    this.form = this.formBuilder.group({
      fullName: ['', { disabled: true }, [
        Validators.required,

       ]],
      email: ['', [
        Validators.required,
        Validators.email]],
        phone: ['', [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(13),
         ]],
         status: ['', [
          Validators.required,

         ]],
         dob: ['', [
          Validators.required,

         ]],
         gender: ['', [
          Validators.required,

         ]],
    });

   }


  public ngOnInit(): void {
    this.store.pipe(select(selectAllAdmin)).subscribe(admins => this.initializeData(admins));
    this.store.pipe(select(selectAdminTotal)).subscribe(total => this.adminTotal = total);
    this.subscription.add(this.store.pipe(select(selectAdminLoading)).subscribe(loading => {
      if (loading) {
        this.dataSource = new MatTableDataSource(this.noData);
      }
      this.loading = loading;
    }));
    this.error$ = this.store.pipe(select(selectAdminError));

  }

  public selectAdmin(admin: Admin): void {
    this.currentAdmin = admin;
    this.form.patchValue(admin.user);
  }

  public clearForm() {
    this.form.reset();
    this.currentAdmin = null;
  }

  public ngAfterViewInit(): void {
    setTimeout(() => {
      this.firstItem.nativeElement.focus();
    }, 250);
    this.startControlMonitoring(this.form);
    this.loadAdmins();
    const filter$ = this.filterSubject.pipe(
      debounceTime(150),
      distinctUntilChanged(),
      tap((value: string) => {
        this.paginator.pageIndex = 0;
        this.filter = value;
      }),
    );

    const sort$ = this.sort.sortChange.pipe(tap(() => this.paginator.pageIndex = 0));
    this.subscription.add(merge(filter$, sort$, this.paginator.page).pipe(
      tap(() => this.loadAdmins()),
    ).subscribe());
  }

  public updateAdmin() {
    if (this.currentAdmin) {
      this.store.dispatch(new AdminUpdateAction(
        <AdminParams>{
          admin: {_id: this.currentAdmin._id, status: this.form.value.status},
        },
      ));

      return;
    }
  }

  public deleteAdmin() {
    if (this.currentAdmin) {
      this.admin._id = this.currentAdmin._id;
      this.store.dispatch(new AdminUpdateAction(
        <AdminParams>{
          admin: this.admin,
        },
      ));

      return;
    }
  }

  registerAdmin(): void {
    if (this.form.invalid) {
      return;
    }
   const user = this.form.value;
   user.password = 'RandomPassord';

    this.admin = <Admin>{
      description: 'Admin',
      user: user,
    };

    this.store.dispatch(new AdminInsertAction(
      <AdminParams>{
        filter: this.filter.toLocaleLowerCase(),
        pageIndex: this.paginator.pageIndex,
        pageSize: this.paginator.pageSize,
        sortDirection: this.sort.direction,
        sortField: this.sort.active,
        admin: this.admin,
      },
    ));

  }

  private loadAdmins(): void {
    this.store.dispatch(new AdminLoadAction(
      <AdminParams>{
        filter: this.filter.toLocaleLowerCase(),
        pageIndex: this.paginator.pageIndex,
        pageSize: this.paginator.pageSize,
        sortDirection: this.sort.direction,
        sortField: this.sort.active,
      },
    ));
  }

  private initializeData(admins: Admin[]): void {
    this.dataSource = new MatTableDataSource(admins.length ? admins : this.noData);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public retry(): void {
    this.loadAdmins();
  }
}
