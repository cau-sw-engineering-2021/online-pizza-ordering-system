package com.example.pizzaordering.vo;

import lombok.Getter;

@Getter
public enum Role {
    MANAGER("ROLE_MANAGER"),
    CLERK("ROLE_CLERK"),
    DELIVERYMAN("ROEL_DELIVERYMAN"),
    USER("ROLE_USER");
    public String value;

    Role(String role) {
        this.value=role;
    }
}
