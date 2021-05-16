package com.example.pizzaordering.VO;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name="cart_item")
public class CartItem {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    @OneToOne
    @JoinColumn(name = "item_id")
    private Item item;
}
