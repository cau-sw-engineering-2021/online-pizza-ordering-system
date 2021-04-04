## Requirements by IEEE-830 Style

| Identifier | Priority | Requirement | Function/Non-Function |
| - | - | - | - |
| REQ-1 | 5 | The system shall show menus of pizzas. When showing menus, (price, size, naming) shall be shown. | F |
| REQ-2 | 3 | The system shall allow an orderer to choose toppings, size option and additional comments when an item of pizza menu is clicked. | F |
| REQ-3 | 1 | The system shall be able to put items in the cart with all options selected. | F |
| | 3 | The system shall allow an orderer to remove item in the cart. | F |
| | | The system shall allow an orderer to order a list of items in the cart. | F |
| REQ-4 | 3 | The system shall allow an orderer to order new pizza both as a member or non-member. | F |
| REQ-5 | 2 | The system shall allow an orderer to choose receiving options("take out", "delivery", "offline"). | F |
| REQ-6 | 2 | The system should give an Order ID to the orderer when ordering is completed. | F |
| REQ-6-1 | TODO | The system should allow an orderer to cancel or change the order before "order accepted". | F |
| REQ-7 | 3 | The system shall allow access to admin page where "menu management", "sales breakdown", "member inquiry" menu is shown through separately granted ID. | F |
| REQ-8 | 3 | The system shall allow retrieving, editing, deleting pizza menus on "menu management", viewing pizza sales amount and revenue on "sales breakdown", managing member list(granting privilege, add/remove/edit list) on "member inquiry". | F |
| REQ-9 | 2 | The system should allow a cashier to change order's status from "ordered" to ("order accepted" or "order rejected"). | F |
| REQ-9-1 | 2 | The system should allow a cook to change order's status from "order accepted" to "cook completed" | F |
| REQ-9-2 | 2 | The system should allow a delivery man and server to change order's status from "cook completed" to ("delivering" and "served"). | F |
| REQ-9-3 | 2 | The system should allow a delivery man to change order's status from "delivering" to "delivery completed". | F |
| REQ-9-4 | 2 | The system shall change the order status to "invalid" in an emergency. | NF |
| REQ-10 | 5 | The system shall provide allergy information for every menu. | F |
| | TODO | The system shall maintain a history log of all orders. | NF |
| | TODO | The system shall give pages to see the ordering lists. | F |
| | TODO | The system should allow an orderer to create an user account by receiving address, name, id, password information. | F |
| | TODO | The system shall allow an orderer to track status("ordered", "canceled", "order accepted", "order rejected", "cook completed", "served", "delivering", "delivery completed", "invalid") by using the Order ID. | F |
| | TODO | The system shall allow an orderer to see status("ordered", "cooking", "accept available") on a simple page. | F |
| | TODO | The system should allow an orderer to type an extra requirement before completing order. | F |
| | TODO | The system shall allow an orderer to type address if "delivery" option choosen. | F |
| | 5 | The system allow a manager to set opening hours
| | 5 | The system shall not accept orders outside of the opening hours

### Stakeholder Lists
 * Orderer
 * Cook
 * Delivery man
 * Cashier
 * Server
 * Manager
