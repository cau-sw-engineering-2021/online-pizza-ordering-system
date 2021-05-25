package com.example.pizzaordering.dto;

import lombok.Data;

@Data
public class MenuDto {
    private String name;
    private String largePrice;
    private String mediumPrice;
    private String smallPrice;
    private String imgUrl;
}
