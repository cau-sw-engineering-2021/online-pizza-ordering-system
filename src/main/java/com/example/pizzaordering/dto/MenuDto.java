package com.example.pizzaordering.dto;

import lombok.Data;

@Data
public class MenuDto {
    private String name;
    private int price;
    private String size;
    private String detail;
}
