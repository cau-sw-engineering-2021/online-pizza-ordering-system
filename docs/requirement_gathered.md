## Requirements by IEEE-830 Style

| Identifier | Priority | Requirement | Function/Non-Function |
| - | - | - | - |
| REQ-1 | 5 | The system shall show menus of pizzas. When showing menus, (price, size, naming) shall be shown. | F |
| REQ-2 | 3 | The system shall allow an orderer to choose toppings, size option and additional comments when an item of pizza menu is clicked. | F |
| REQ-3 | 1 | The system shall able to put items in the cart with all options selected. | F |
| REQ-4 | 3 | The system shall allow an orderer to order new pizza both as a member or non-member. | F |
| REQ-5 | 2 | The system shall allow an orderer to choose receiving options("take out", "delivery", "offline"). | F |
| REQ-6 | 2 | The system should give an Order ID to the orderer when ordering is completed, which used to track status of the order("ordered", "canceled", "order accepted", "order rejected", "cook completed", "served", "delivering", "delivery completed", "invalid"). | F |
| REQ-6-1 | TODO | The system should allow an orderer to cancel the order which of status is "ordered". | F |
| REQ-7 | 3 | The system shall allow access to admin page where "menu management", "sales breakdown", "member inquiry" menu is shown through seperately granted ID. | F |
| REQ-8 | 3 | The system shall allow retrieving, editing, deleting pizza menus on "menu management", viewing pizza sales amount and revenue on "sales breakdown", viewing member list and granting privilege on "member inquiry". | F |
| REQ-9 | 2 | The system should allow a casher to change order's status from "ordered" to ("order accepted" or "order rejected"). | F |
| REQ-9-1 | 2 | The system should allow a cook to change order's status from "order accepted" to "cook completed" | F |
| REQ-9-2 | 2 | The system should allow a delivery man and server to change order's status from "cook completed" to ("delivering" and "served"). | F |
| REQ-9-3 | 2 | The system should allow a delivery man to change order's status from "delivering" to "delivery complted". | F |
| REQ-9-4 | 2 | The system shall change the order status to "invalid" in an emergency. | NF |
| REQ-10 | 5 | The system shall provide allergy information for every menu. | F |
| REQ-11 | 3 | The system should allow customer to change and cancel the order before the order is accepted. | F |

### Stakeholder Lists
 * Orderer
 * Cook
 * Delivery man
 * Casher
 * Server
 * Manager
