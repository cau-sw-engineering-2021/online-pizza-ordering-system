package com.example.pizzaordering.dto;

import lombok.Data;

@Data
public class MenuDto {
    private String name;
    private int largeprice;
    private int mediumprice;
    private int smallprice;
    private String detail;
    private String imgUrl;
}
