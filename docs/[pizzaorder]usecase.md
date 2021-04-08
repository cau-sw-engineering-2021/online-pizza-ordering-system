## UseCase

UC1 : Add Menu To Cart

UC2 : Manage Cart - generalize UC3, UC4

UC3 : Edit Menu In Cart

UC4 : Delete Menu From Cart

UC5 : Order

UC6 : View Order History

UC7 : Cancel Order - include UC6

UC8 : PayOnline


---

| Actor | Actor's Goal(what the actor intends to accomplish) | Use Case name |
|---|---|---|
| Orderer |  |  |
---
 ###UC-5 - order
|Use Case - UC-5 : | Order |
|---|---|
|Related Requirements| Include “Add to cart”, REQ-6, REQ-9, REQ10, REQ-11,REQ-12, REQ-17, REQ-18, REQ-19 |
|Initiating Actor| Order |
|Actor's Goal| Order pizzas |
|Participating Actors| System |
|Preconditions| There must be pizza in cart |
|PostConditions| Orderer get the order id |  

####Flow of Events for | Main Success Scenario

| -> | 1. | User move to order page from cart page |
|---|---|---|
| <- | 2. | System shows the order page  |
| -> | 3. | User select receiving option (REQ-10) |
| -> | 4. | User type extra requirements (REQ-6) |
| -> | 5. | User type payment information (REQ-11, REQ-12) |
| -> | 6. | Orderer get order Id. (REQ-19) |

####Extends

| 3.1 | -- | If User select delivery option |
|---|---|---|
| -- | 3.1.1 | User type address if not logged in, also can change |


#Frame
|Use Case - UC-# : | type |
|---|---|
|Related Requirements| type |
|Initiating Actor| type |
|Actor's Goal| type |
|Participating Actors| type |
|Preconditions| type |
|PostConditions| type |  

####Flow of Events for | Main Success Scenario

| -> | 1. | type here |
|---|---|---|
| <- | 2. | type here |

####Extends

| 2.1 | -- | here |
|---|---|---|
| -- | 2.1.1 | type here |

---
