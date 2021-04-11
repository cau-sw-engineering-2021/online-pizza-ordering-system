## UseCase

UC1: AuthenticateUser

UC2:ManageMenus extends UC4~UC6 includes UC2

UC3:AddPizza

UC4:UpdatePizza

UC5:DeletePizza

UC6:ManageUsers extends UC8~UC10 includes UC2

UC7:AddUser

UC8:UpdateUser

UC9:DeleteUser

UC10:DisplaySales extends UC12~UC13 includes UC2

UC11: DisplayByPizza

UC12: DisplayByPeriod

---
### Actors Generalization

![usergene](https://user-images.githubusercontent.com/46064193/114130788-459df780-993c-11eb-8c46-2c0eefc51e71.png)


| Actor | Actor's Goal(what the actor intends to accomplish) | Use Case name |
| - | - | - |
| Users | To check whether the user has right authorities for the system. | C-UC1 |
| Manager | To manage menus, add/remove/edit list | C-UC2 |
| Manager | To register new menu to menu list | C-UC3 |
| Manager | To edit data of menu item | C-UC4 |
| Manager | To delete items in menu list | C-UC5 |
| Manager | To add a new employee’s account who has particular authorities for the system | C-UC6 |
| Manager | To edit an user’s information or To endow privilege or role of the user | C-UC7 |
| Manager | Orderer wants to look user info page. | C-UC8 |
| Manager | To delete a User account | C-UC9 |
| Users | To use an affected(added, editted, removed) account | C-UC6~C-UC9 |
| Manager | To view sales of the store by some options. | C-UC10 |
| Manager | To view sales list of particular pizza. | C-UC11 |
| Manager | To view total sales list by period | C-UC12 |
| Manager | To open/close store by switch | C-UC13 |
