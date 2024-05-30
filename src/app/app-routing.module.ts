import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import {UserListComponent} from "./user-list/user-list.component";
import {DepositComponent} from "./deposit/deposit.component";
import {TransferComponent} from "./transfer/transfer.component";
import {WithdrawComponent} from "./withdraw/withdraw.component";
import {BalanceComponent} from "./balance/balance.component";

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'deposit', component: DepositComponent },
  { path: 'transfer', component: TransferComponent },
  { path: 'withdraw', component: WithdrawComponent },
  { path: 'transactions', component: TransactionListComponent },
  { path: 'balance', component: BalanceComponent },
  { path: 'users', component: UserListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
