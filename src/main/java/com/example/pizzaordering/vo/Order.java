package com.example.pizzaordering.vo;

import lombok.Data;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import java.sql.Timestamp;
import java.util.List;

@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@Entity
@Data
@Table(name="orders")
public class Order {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private Timestamp lastUpdateTime;
    private String orderStatus;
    private String DeliveryType;
    private int totalPrice;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @ManyToMany
    @JoinTable(name = "order_item",
        joinColumns = {
            @JoinColumn(name="order_id")
        }, inverseJoinColumns = {@JoinColumn(name="item_id")}
    )
    private List<Item> itemList;
}
