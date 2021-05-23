package com.example.pizzaordering.vo;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.transaction.Transactional;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
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
    private String password;
    private Role role;
    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Order> orderList;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval=true)
    @JoinColumn(name = "user_id")
    private List<CartItem> cartItemList;

    public User(String name, String nickname, String phoneNum, String address, String email, String password,Role role) {
        this.name = name;
        this.nickname = nickname;
        this.phoneNum = phoneNum;
        this.address = address;
        this.email = email;
        this.password = password;
        this.role=role;
    }

    public void removeCartItemByItemId(Long id){
        for(CartItem cartItem : this.getCartItemList()){
            if(cartItem.getId().equals(id)){
                this.cartItemList.remove(cartItem);
                break;
            }
        }
    }
}
