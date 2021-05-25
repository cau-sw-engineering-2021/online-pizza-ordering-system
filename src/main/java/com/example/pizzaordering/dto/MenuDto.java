package com.example.pizzaordering.dto;

import lombok.Data;

@Data
public class MenuDto {
    private String name;
    private String largeprice;
    private String mediumprice;
    private String smallprice;
    private String imgUrl;
}
