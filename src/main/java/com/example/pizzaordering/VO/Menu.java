package com.example.pizzaordering.VO;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name="menu")
public class Menu {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String name;
    private int price;
    private String size;
    private String detail;
    private String imgLocation;
}
