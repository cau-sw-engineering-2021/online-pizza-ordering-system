package com.example.pizzaordering.VO;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name="option")
public class Option {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String name;
    private int price;
}