## Requirements by IEEE-830 Style

| Identifier | Priority | Requirement | Function/Non-Function |
| - | - | - | - |
| REQ-1 | 5 | The system shall show menus of pizzas. When showing menus, (price, size, naming) shall be shown. | F |
| REQ-2 | 3 | The system shall allow an orderer to choose toppings, size option when an item of pizza menu is clicked. | F |
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
| REQ-9-4 | 2 | The system shall change the order status to "invalid" in an emergency. | F |
| REQ-10 | 5 | The system shall provide allergy information for every menu. | F |
| | TODO | The system shall maintain a history log of all orders. | NF |
| | TODO | The system shall give pages to see the ordering lists. | F |
| | TODO | The system should allow an orderer to create an user account by receiving address, name, id, password information. | F |
| | TODO | The system shall allow an orderer to track status("ordered", "canceled", "order accepted", "order rejected", "cook completed", "served", "delivering", "delivery completed", "invalid") by using the Order ID. | F |
| | TODO | The system shall allow an orderer to see status("ordered", "cooking", "accept available") on a simple page. | F |
| | TODO | The system should allow an orderer to type an extra requirement before completing order. | F |
| | TODO | The system shall allow an orderer to type address if "delivery" option choosen. | F |
| | 5 | The system should allow a manager to set opening hours. if not registered, default value is 00:00 ~ 24:00  | F |
| | 5 | The system shall not accept orders outside of the opening hours | NF |
| | TODO | The system should allow an orderer to change address before ordering. | F |
| | TODO | The system should allow an orderer to register and change their own personal information like phone-number, address, ... and so on | F |
| | TODO | The system should provide display options(by period, by pizza) on "sales breakdown". | F |
| | TODO | The system shall encrypt and store orderer pw . | NF |
| | TODO | The system should allow orderer to type additional comments before completing order. | F |
| | TODO | The system shall allow users to be granted only when they have appropriate authorities. | NF |
| 3 | 직 | 원 |  |
| REQ-52 | 4 | The system shall allow an orderer to order new pizza both as a member or non-member. | NF |
| REQ-53 | 5 | The system shall allow an orderer to see status("ordered" as "cooking", "cook completed") on a simple page. | F |
| REQ-54 | 5 | The system should allow a clerk to change order's status from "ordered" to ("order accepted" or "order rejected"). | F |
| REQ-55 | 5 | The system should allow a clerk to change order's status from "order accepted" to "cook completed" | F |
| REQ-56 | 3 | The system shall change the order status to "invalid" in an emergency by clerk. | NF |
| REQ-57 | 5 | The system should allow a delivery man and server to change order's status from "cook completed" to ("delivering" and "served"). | F |
| REQ-58 | 5 | The system should allow a delivery man to change order's status from "delivering" to "delivery completed". | F |
| REQ-59 | 1 | The system should record the last time when order's status has changed. | NF |
| REQ-60 | 3 | The system should display initial page when user logs out. | F |
| REQ-61 | 5 | The system shall denied the access to user's info when the user logs out. | NF |
| REQ-62 | 3 | The system should check that the password length is over 8 characters, including at least one number, upper/lower case, and special character each  | NF |
| REQ-63 | 5 | The system should maintain a unique user's ID and email. | NF |
| REQ-64 | 3 | The system should provide user info page. | F |
| REQ-65 | 1 | The system should get the password when the user try to enter user info page. | NF |
| REQ-66 | 4 | The system should allow password mistakes up to 5 times. | NF |
| REQ-67 | 4 | The system shall encrypt and store orderer pw . | NF |
| REQ-68 | 5 | The system shall provide the page that display status of order("Ordered completed", "Cook completed") | F |
| REQ-69 | 2 | The system should provide the page that "Ordered completed" and "Cook completed" can't rewrite(Readonly) | NF |

1 는 없어도 지장없음, 유저의 편의성만을 따짐
2 는 추적은 가능함
3 는 독립적으로 동작 가능함
4 는 주요 비지니스 로직
5 는 주요 필수 로직


Non-functional vs Functional 이 뭔지 좀더 찾아보고 느낀다음 작성을 매꿔주세요.

### Stakeholder Lists
 * Orderer
 * Delivery man
 * Clerk
 * Manager
