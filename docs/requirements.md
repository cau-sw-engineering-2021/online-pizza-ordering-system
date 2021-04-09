## Requirements by IEEE-830 Style

| Identifier | Priority | Requirement | Function/Non-Function |
| - | - | - | - |
| 1 | orderer | |
| REQ-1 | 1 | The system should show menus of pizzas in the first page | F |
| REQ-2 | 3 | The system shall show size, price by size, name with menus. | F |
| REQ-3 | 1 | The system should display "go to cart", "login"/"logout" buttons on every pages | F |
| REQ-4 | 5 | The system shall provide allergy information for every menu. | F |
| REQ-5 | 5 | The system shall allow an orderer to choose toppings and size option when an item of pizza menu is clicked. | F |
| REQ-6 | 3 | The system should allow orderer to type additional comments before completing order. | F |
| REQ-7 | 5 | The system shall be able to put items in the cart with options(size, topping, side menu, ...). | F |
| REQ-8 | 4 | The system shall allow an orderer to remove item in the cart. | F |
| REQ-9 | 5 | The system shall allow an orderer to order a list of items in the cart. | F |
| REQ-10 | 4 | The system shall allow an orderer to choose receiving options("take out", "delivery", "offline"). | F |
| REQ-11 | 4 | The system shall allow an orderer to choose payment methods("online", "offline")| F |
| REQ-12 | 4 | The system shall receive card number when an orderer selects "online payment" | F |
| REQ-13 | 1 | The system should ask if an orderer wants to go to cart page after adding item to cart | F |
| REQ-14 | 3 | The system should allow an orderer to go to individual menu page of an item in the cart page. | F |
| REQ-15 | 3 | Todo... | F |
| REQ-16 | 3 | The system should allow an orderer to move to order decision phase only from shopping cart page. | F |
| REQ-17 | 2 | The system should alert a notification saying, "If you are not logged in, you will proceed as a non-member.", before entering the order decision stage.| NF |
| REQ-18 | 1 | The system maintains the contents of the cart that added when he or she is not a member, even if the user logs in| F |
| REQ-19 | 2 | The system should give an Order ID to the orderer when ordering is completed. | F |
| REQ-20 | 1 | The system shall allow orderers to check their own order list. | F |
| REQ-21 | 5 | The system shall not accept orders outside of the opening hours | NF |
| REQ-22 | 1 | The system should allow an orderer to change address before ordering. | F |
| REQ-23 | 1 | The system should take address from stored user information in DB during the order decision phase, if orderer is logged in | F |
| REQ-24 | 4 | The system shall allow an orderer to type address if "delivery" option choosen. | F |
| REQ-25 | 1 | The system should allow an orderer to cancel or change the order before "order accepted". | F |
| REQ-26 | 1 | The system should allow an orderer to adjust the quantity of pizza in the cart| F |
| REQ-27 | 4 | The system should shows all items in the cart. | F |
| REQ-28| 3 | The System should allow an orderer to move to the order decision stage only if there is more than one in orderer's cart. | NF |
| 2 | 매 | 니 | 저 |
| REQ-29 | 1 | The system should allow selecting view options(by arbitrary period, by pizza) on "sales breakdown". | F |
| REQ-30 | 5 | The system shall allow access to admin page where "open switch", "menu management", "sales breakdown", "member management" are shown through manager account. | F |
| REQ-31 | 5 | The system shall allow manager to open/close store by switch. | F |
| REQ-32 | 2 | The system shall display total menu list first on "menu management". | F |
| REQ-33 | 2 | The system shall display total member list first on "member management". | F |
| REQ-34 | 1 | The system should allow selecting view option(by role) of member list on "member management" | F |
| REQ-35 | 3 | The system shall allow viewing, adding, editing, deleting pizza menus on "menu management" | F |
| REQ-36 | 3 | The system shall allow viewing pizza sales list and revenue on "sales breakdown"| F |
| REQ-37 | 3 | The system shall allow viewing, adding, editing, deleting members on "member management". | F |
| REQ-38 | 2 | The system shall allow adding privileged-member only on "member management. | NF |
| 시 | 스 | 템 | |
| REQ-39 | 3 | The system should allow an orderer to create an user account by receiving phone number, address, email, id, password, name. | F |
| REQ-40 | 3 | The system shall provide a signup page. | F |
| REQ-41 | 2 | The system should provide a page to find ID using its email. | F |
| REQ-42 | 2 | The system should provide a page to send resetted PW using its ID and email. | F |
| REQ-43 | 1 | The system should redirect to management page when logged as manager. | F |
| REQ-44 | 1 | The system should redirect to order status page when logged as clerk. | F |
| REQ-45 | 2 | The system shall allow users to be granted only when they have appropriate authorities. | NF |
| REQ-46 | 4 | The system shall allow an orderer to track status("ordered", "canceled", "order accepted", "order rejected", "cook completed", "served", "delivering", "delivery completed", "invalid") by using the Order ID. | F |
| REQ-48 | 1 | The system should maintain only one managmer account. | NF |
| REQ-49 | 2 | The system shall maintain a history log of all orders. | NF |
| REQ-50 | 3 | The system shall be shut down if essential information is absent before starting the system. | NF |
| REQ-51 | 3 | The system should restrict to create orderer account via signup. | NF |
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
| REQ-66 | 1 | The system should get the password when the user try to enter user info page. | F |
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
