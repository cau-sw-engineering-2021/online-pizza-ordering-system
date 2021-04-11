## UseCase

C-UC1: Accept order

C-UC2: Complete Cook

C-UC3: Handle emergency

C-UC4: Start Delivery

C-UC5: Complete Delivery

C-UC6: Track order

C-UC7: Logout

C-UC8: Authenticate User

C-UC9: Sign up

C-UC10: Display user's info page

C-UC11: Display Orders

c-UC12: Login User

| Actor | Actor's Goal(what the actor intends to accomplish) | Use Case name |
| - | - | - |
| Clerk | Clerk decides whether receiving order or not. | C-UC1 |
| Clerk | Clerk changes the status of order from “order accepted” to “cook completed”. | C-UC2 |
| Clerk | In emergency senario, clerk refuses the order. | C-UC3 |
| Delivery man | After “cook completed”, delivery man receives it and start delivery or serving. | C-UC4 |
| Delivery man | When delivery is completed, delivery man changes the status from ”delivering” to “delivery completed”. | C-UC5 |
| Order Tracker | Older Tracker keeps updating the last status of order. | C-UC6 |
| Orderer | Remove user’s data from the device. Or Prepare to login with another user. | C-UC7 |
| Orderer | The orderer wants to access without privileges. The authorizer wants to block the orderer. | C-UC8 |
| Orderer | Signup the member. | C-UC9 |
| Orderer | Orderer wants to look user info page. | C-UC10 |
| Screen | Display order list with each condition. | C-UC11 |
| User | The user wants to authenticate by the system. | C-UC12
