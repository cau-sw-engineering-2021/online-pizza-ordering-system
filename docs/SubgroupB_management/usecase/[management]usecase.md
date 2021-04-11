## UseCase

UC2: AuthenticateUser

UC3:ManageMenus extends UC4~UC6 includes UC2

UC4:AddPizza

UC5:UpdatePizza

UC6:DeletePizza

UC7:ManageUsers extends UC8~UC10 includes UC2

UC8:AddUser

UC9:UpdateUser

UC10:DeleteUser

UC11:DisplaySales extends UC12~UC13 includes UC2

UC12: DisplayByPizza

UC13: DisplayByPeriod

---
### Actors Generalization

![usergene](https://user-images.githubusercontent.com/46064193/114130788-459df780-993c-11eb-8c46-2c0eefc51e71.png)


| Actor | Actor's Goal(what the actor intends to accomplish) | Use Case name |
| - | - | - |
| Users | To check whether the user has right authorities for the system. | C-UC2 |
| Manager | To manage menus, add/remove/edit list | C-UC3 |
| Manager | To register new menu to menu list | C-UC4 |
| Manager | To edit data of menu item | C-UC5 |
| Manager | To delete items in menu list | C-UC6 |
| Manager | To add a new employee’s account who has particular authorities for the system | C-UC7 |
| Manager | To edit an user’s information or To endow privilege or role of the user | C-UC8 |
| Manager | Orderer wants to look user info page. | C-UC9 |
| Manager | To delete a User account | C-UC10 |
| Users | To use an affected(added, editted, removed) account | C-UC7~C-UC10 |
| Manager | To view sales of the store by some options. | C-UC11 |
| Manager | To view sales list of particular pizza. | C-UC12 |
| Manager | To view total sales list by period | C-UC13 |
| Manager | To open/close store by switch | C-UC14 |
