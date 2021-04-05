## Requirements by IEEE-830 Style

| Identifier | Priority | Requirement | Function/Non-Function |
| - | - | - | - |
| 1 | orderer | |
| REQ-1 | 1 | The system should show menus of pizzas in the first page | NF |
| REQ-2 | 3 | The system shall show size, price by size, name with menus. | NF |
| REQ-3 | 1 | The system should display "go to cart", "login"/"logout" buttons on every pages | NF |
| REQ-4 | 5 | The system shall provide allergy information for every menu. | NF |
| REQ-5 | 5 | The system shall allow an orderer to choose toppings and size option when an item of pizza menu is clicked. | F |
| REQ-6 | 3 | The system should allow orderer to type additional comments before completing order. | F |
| REQ-7 | 5 | The system shall be able to put items in the cart with options(size, topping, side menu, ...). | F |
| REQ-8 | 4 | The system shall allow an orderer to remove item in the cart. | F |
| REQ-9 | 5 | The system shall allow an orderer to order a list of items in the cart. | F |
| REQ-10 | 4 | The system shall allow an orderer to choose receiving options("take out", "delivery", "offline"). | F |
| REQ-11 | 4 | The system shall allow an orderer to choose payment methods("online", "offline")| F |
| REQ-12 | 4 | The system shall receive card number when an orderer selects "online payment" | F |
| REQ-13 | 1 | The system should ask if an orderer wants to go to cart page. | NF |
| REQ-14 | 3 | The system should allow an orderer to move from the shopping cart page to the menu page. | |
| REQ-15 | 3 | The system should allow an orderer to move from the menu page to the shopping cart page. | |
| REQ-16 | 3 | The system should allow an orderer to move to order decision phase only from shopping cart page. | |
| REQ-17 | 2 | The system should alert a notification saying, "If you are not logged in, you will proceed as a non-member.", before entering the order decision stage.| |
| REQ-18 | 1 | The system maintains the contents of the cart that added when he or she is not a member, even if the user logs in| |
| REQ-19 | 2 | The system should give an Order ID to the orderer when ordering is completed. | F |
| REQ-20 | 1 | The system shall allow orderers to check their own order list. | F |
| REQ-21 | 5 | The system shall not accept orders outside of the opening hours | NF |
| REQ-22 | 1 | The system should allow an orderer to change address before ordering. | F |
| REQ-23 | 1 | The system should take address from stored user information in DB during the order decision phase, if orderer is logged in | |
| REQ-24 | 4 | The system shall allow an orderer to type address if "delivery" option choosen. | F |
| REQ-25 | 1 | The system should allow an orderer to cancel or change the order before "order accepted". | F |
| REQ-26 | 1 | The system should allow an orderer to adjust the quantity of pizza in the cart| |
| REQ-27 | 4 | The system should shows all items in the cart. | |
| REQ-28| 3 | The System should allow an orderer to move to the order decision stage only if there is more than one in orderer's cart. | NF |
| 3 | 직 | 원 |  |
| REQ-52 | 4 | The system shall allow an orderer to order new pizza both as a member or non-member. | NF |
| REQ-53 | 5 | The system shall allow an orderer to see status("ordered" as "cooking", "cook completed") on a simple page. | F |
| REQ-54 | 5 | The system should allow a clerk to change order's status from "ordered" to ("order accepted" or "order rejected"). | F |
| REQ-55 | 5 | The system should allow a clerk to change order's status from "order accepted" to "cook completed". | F |
| REQ-56 | 3 | The system shall change the order status to "invalid" in an emergency by clerk. | F |
| REQ-57 | 5 | The system should allow a delivery man and server to change order's status from "cook completed" to ("delivering" and "served"). | F |
| REQ-58 | 5 | The system should allow a delivery man to change order's status from "delivering" to "delivery completed". | F |
| REQ-59 | 1 | The system should record the last time when order's status has changed. | NF |
| REQ-60 | 3 | The system should return to the initial screen when the user logs out. | F |
| REQ-61 | 5 | The system shall deny the access to user's info when the user logs out. | NF |
| REQ-62 | 3 | The system should check that the password length is more than 8 characters. | NF |
| REQ-63 | 2 | The system should check that the password contains at least one number, upper/lower case and special character. | NF |
| REQ-64 | 5 | The system should maintain an unique user's ID and email. | NF |
| REQ-65 | 3 | The system should provide user info page. | F |
| REQ-66 | 1 | The system should get the password when the user try to enter user info page. | NF |
| REQ-67 | 4 | The system should allow password mistakes up to 5 times. | NF |
| REQ-68 | 4 | The system shall encrypt and store orderer pw. | NF |
| REQ-69 | 2 | The system should provide the page that "ordered completed" and "cook completed" can't rewrite(Readonly). | NF |

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
