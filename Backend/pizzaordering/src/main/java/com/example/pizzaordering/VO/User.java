package com.example.pizzaordering.VO;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name="user")
public class User {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String nickname;
    private String phoneNum;
    private String address;
    private String email;
    private Role role;
    @OneToMany(mappedBy ="user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Order> orderList;
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private List<CartItem> cartItemList;
}
