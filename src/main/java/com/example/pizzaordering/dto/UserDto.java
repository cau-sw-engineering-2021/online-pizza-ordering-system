package com.example.pizzaordering.dto;

import lombok.Data;

@Data
public class UserDto {
    private String name;
    private String nickname;
    private String phoneNum;
    private String address;
    private String email;
    private String password;
}
