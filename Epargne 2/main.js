import {Account} from "./Account.js"
const john = new Account(80)
john.balanceDisplay
john.withdrawal(50)
john.balanceDisplay
john.deposit(0)
john.balanceDisplay
john.historicDisplay