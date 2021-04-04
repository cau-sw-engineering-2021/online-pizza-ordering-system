## UseCase

UC1: OrderStatus page includes UC7

UC2: Update status extends UC3~UC6

UC3: Updated by cashier

UC4: Updated by cook

UC5: Updated by server

UC6: Updated by delivery man

UC7: AuthenticateUser

UC8: History log includes UC7

| Actor | Actor's Goal(what the actor intends to accomplish) | Use Case name |
| Orderer | To see stautus of orders | UC1(OrderStatus page) |
| Orderer | To see history log of past orders | UC8(History log) |
| cashier | To change order's status from "ordered" to ("order accepted" or "order rejected") | UC3(Updated by cashier) |
| cashier | To change order status to "invalid" in an emergency | UC3(Updated by cashier) |
| cook | To change order's status from "order accepted" to "cook completed" | UC4(Updated by cook) |
| server | To change order's status from "cook completed" to "served" | UC5(Updated by server) | 
| delivery man | To change order's status from "cook completed" to "delivering" | UC6(Updated by delivery man |
| delivery man | To change order's status from "delivering" to "delivery completed" | UC6(Updated by delivery man |
| Manager | To see history log of all orders | UC8(History log) | 