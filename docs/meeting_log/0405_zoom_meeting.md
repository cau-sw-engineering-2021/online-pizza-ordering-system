## 4월 5일 회의록

* 전체적으로 다시 요구사항 분석

| Identifier | Priority | Requirement | Function/Non-Function |
| - | - | - | - |
| REQ-1 | TODO | 첫 화면은 피자 메뉴 선택화면이다. | |
| REQ-2 | TODO | 모든화면에서 장바구니와 (로그인 또는 로그아웃) 버튼이 보여야한다. | |
| REQ-3 | 5 | The system shall show menus of pizzas. When showing menus, (size with price, name) shall be shown. | F |
| REQ-4 | 5 | The system shall provide allergy information for every menu. | F |
| REQ-5 | 3 | The system shall allow an orderer to choose toppings and size option when an item of pizza menu is clicked. | F |
| REQ-6 | TODO | The system should allow orderer to type additional comments before completing order. | F |
| REQ-7 | 1 | The system shall be able to put items in the cart with all options selected. | F |
| REQ-8 | 3 | The system shall allow an orderer to remove item in the cart. | F |
| REQ-9 | | The system shall allow an orderer to order a list of items in the cart. | F |
| REQ-10 | 2 | The system shall allow an orderer to choose receiving options("take out", "delivery", "offline"). | F |
| REQ-11 | TODO | 결재를 온라인 결재를 할지, 방문 결재를 할지 선택할 수 있다. | |
| REQ-12 | | 온라인 결재를 선택했다면, 카드정보를 입력하여 결제를 마무리할 수 있다. | |
| REQ-13 | TODO | 아이템을 담았을 때 장바구니 페이지로 이동할지 물어본다. | NF |
| REQ-14 | TODO | 카트페이지에서 메뉴페이지로 이동할수 있다. | |
| REQ-15 | TODO | 메뉴페이지에서 카트페이지로 이동할수 있다. | |
| REQ-16 | TODO | 카트 페이지에서만 주문 결정 단계로 이동할 수 있다. | |
| REQ-17 | TODO | 주문 결정 단계로 진입하기 전, 로그인이 되어 있지 않다면 비회원으로 진행됩니다라는 안내문구를 띄운다. | |
| REQ-18 | TODO | 비회원상태에서 카트에 물건이 담겨져 있을 때, 로그인을 하게 된다고 해도 카트 내용물을 유지한다. | |
| REQ-19 | 2 | The system should give an Order ID to the orderer when ordering is completed. | F |
| REQ-20 | TODO | The system shall allow orderers to check their own order list. | F |
| REQ-21 | 5 | The system shall not accept orders outside of the opening hours | NF |
| REQ-22 | TODO | The system should allow an orderer to change address before ordering. | F |
| REQ-23 | | 로그인 시에는 기본적으로 유저 정보에서 주소를 가져와야 한다. | |
| REQ-24 | TODO | The system shall allow an orderer to type address if "delivery" option choosen. | F |
| REQ-25 | TODO | The system should allow an orderer to cancel or change the order before "order accepted". | F |
| REQ-26 | TODO | 카트 안에 들어있는 피자 아이템은 수량 조정이 가능하다.| |
| REQ-27 | TODO | The system should shows all items in the cart. | |
| REQ-28| TODO | 카트에 1개 이상 담겨져 있을 때에만 주문 결정 단계로 이동할 수 있다. | NF |
| 2 | 매 | 니 | 저 |
| REQ-29 | TODO | The system should provide display options(by arbitrary period, by pizza) on "sales breakdown". | F |
| REQ-30 | 3 | The system shall allow access to admin page where "toggle opening state", menu management", "sales breakdown", "member inquiry" menu is shown through separately granted ID. | F |
| REQ-31 | TODO | Manager가 가게 오프닝 클로징을 할수 있다. | |
| REQ-32 | TODO | menu management 에서는 현재 존재하는 피자의 리스트를 보여줘야한다. | |
| REQ-33 | TODO | 현재 존재하는 모든 유저의 리스트를 보여줘야 한다. | |
| REQ-34 | TODO | 역할별로 검색하여 리스트를 확인 가능해야 한다. | NF |
| REQ-35 | 3 | The system shall allow retrieving, editing, deleting pizza menus on "menu management" | |
| REQ-36 | | viewing pizza sales list and revenue on "sales breakdown"| |
| REQ-37 | | managing member list(add/remove/edit list) on "member inquiry". | F |
| REQ-38 | TODO | 인증된 사용자는 manager 화면에서만 생성가능하다 | NF |
| 시 | 스 | 템 | |
| REQ-39 | TODO | The system should allow an orderer to create an user account by receiving phone number, address, email, id, password, name. | F |
| REQ-40 | TODO | The system shall provide a signup page. | |
| REQ-41 | TODO | The system shall provide a page to find ID using its email. | |
| REQ-42 | TODO | The system shall provide a page to send resetted PW using its ID and email. | |
| REQ-43 | TODO | 매니저 로그인 시 매니저 페이지로 간다. | |
| REQ-44 | TODO | Clerk 로그인 시 Clerk 페이지로 간다. | |
| REQ-45 | TODO | The system shall allow users to be granted only when they have appropriate authorities. | NF |
| REQ-46 | TODO | The system shall allow an orderer to track status("ordered", "canceled", "order accepted", "order rejected", "cook completed", "served", "delivering", "delivery completed", "invalid") by using the Order ID. | F |
| REQ-47 | TODO | 시스템은 설정파일에서 Manager에 대한 아이디와 패스워드 목록을 받아야한다. | NF |
| REQ-48 | TODO | manager 1개만 존재가능하다 | NF |
| REQ-49 | TODO | The system shall maintain a history log of all orders. | NF |
| REQ-50 | TODO | 시스템이 시작되기 전 필요한 값들이 명시되어 있지않다면, 시스템이 중지되어야한다. | NF |
| REQ-51 | TODO | Orderer는 회원 가입으로만 생성가능하다 | |
| 3 | 직 | 원 |  |
| REQ-52 | TODO | The system shall allow an orderer to order new pizza both as a member or non-member. | NF |
| REQ-53 | TODO | The system shall allow an orderer to see status("ordered" as "cooking", "cook completed") on a simple page. | F |
| REQ-54 | 2 | The system should allow a clerk to change order's status from "ordered" to ("order accepted" or "order rejected"). | F |
| REQ-55 | 2 | The system should allow a clerk to change order's status from "order accepted" to "cook completed" | F |
| REQ-56 | 2 | The system shall change the order status to "invalid" in an emergency by clerk. | NF |
| REQ-57 | 2 | The system should allow a delivery man and server to change order's status from "cook completed" to ("delivering" and "served"). | F |
| REQ-58 | 2 | The system should allow a delivery man to change order's status from "delivering" to "delivery completed". | F |
| REQ-59 | TODO | 상태변화 시 마지막 시각을 기록한다. | NF |
| REQ-60 | TODO | 로그아웃하면 초기화면으로 이동해야한다. | |
| REQ-61 | TODO | 로그아웃 시 유저가 가진 정보를 조회할 수 없어야 한다. | |
| REQ-62 | TODO | 패스워드 형식은 특수문자와 영소문자 숫자를 반드시 1개 이상 포함한 8자 이상으로 이루어져야한다. | |
| REQ-63 | TODO | 아이디와 이메일은 각각 유일해야 한다. | |
| REQ-64 | TODO | 회원정보를 수정하는 페이지를 제공해야한다. | |
| REQ-65 | TODO | 회원정보 수정 페이지에 들어갈 때 패스워드를 다시 맞춰야한다. | NF |
| REQ-66 | TODO | 패스워드 5회 연속 실패시 잠김 | NF |
| REQ-67 | TODO | The system shall encrypt and store orderer pw . | NF |
| REQ-68 | TODO | Ordered completed 와 Cook completed를 표기해주는 Readonly 페이지를 제공한다. -> 2개로 분리해주세요. 하나는 표기하는 내용, 두번째는 Readonly 여부 | |


## Priority 기준
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
