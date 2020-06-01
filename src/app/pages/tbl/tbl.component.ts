import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from '../customer-table/models/customer';
import { Observable, Subject, Subscription, merge } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { GlobalState } from '../../store/states/global.state';
import { selectAllCustomer, selectCustomerTotal, selectCustomerLoading, selectCustomerError } from '../../store/selectors/customer.selectors';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { CustomerLoadAction } from '../../store/actions/customer.actions';
import { CustomerParams } from '../customer-table/models/customer-params';

@Component({
  selector: 'ngx-tbl',
  templateUrl: './tbl.component.html',
  styleUrls: ['./tbl.component.scss'],
})
export class TblComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  public displayedColumns: string[] = ['id', 'role', 'firstName', 'lastName', 'amount'];
  public dataSource: MatTableDataSource<Customer>;
  public customerTotal: number;
  public noData: Customer[] = [<Customer>{}];
  public loading: boolean;
  public error$: Observable<boolean>;
  public filterSubject = new Subject<string>();
  public defaultSort: Sort = { active: 'role', direction: 'asc' };

  private filter: string = '';
  private subscription: Subscription = new Subscription();

  constructor(public store: Store<GlobalState>) { }

  public ngOnInit(): void {
    this.store.pipe(select(selectAllCustomer)).subscribe(customers => this.initializeData(customers));
    this.store.pipe(select(selectCustomerTotal)).subscribe(total => this.customerTotal = total);
    this.subscription.add(this.store.pipe(select(selectCustomerLoading)).subscribe(loading => {
      if (loading) {
        this.dataSource = new MatTableDataSource(this.noData);
      }
      this.loading = loading;
    }));
    this.error$ = this.store.pipe(select(selectCustomerError));
  }

  public getRecord(row): void{
    alert(JSON.stringify(row));
  }

  public ngAfterViewInit(): void {
    this.loadCustomers();
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
      tap(() => this.loadCustomers()),
    ).subscribe());
  }

  private loadCustomers(): void {
    this.store.dispatch(new CustomerLoadAction(
      <CustomerParams>{
        filter: this.filter.toLocaleLowerCase(),
        pageIndex: this.paginator.pageIndex,
        pageSize: this.paginator.pageSize,
        sortDirection: this.sort.direction,
        sortField: this.sort.active,
      },
    ));
  }

  private initializeData(customers: Customer[]): void {
    this.dataSource = new MatTableDataSource(customers.length ? customers : this.noData);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public retry(): void {
    this.loadCustomers();
  }
}
