package com.example.pizzaordering.vo;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name="options")
public class Option {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String name;
    private int price;
}
