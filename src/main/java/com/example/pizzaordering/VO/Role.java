package com.example.pizzaordering.VO;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum Role {
    MANAGER("ROLE_MANAGER"),
    CLERK("ROLE_CLERK"),
    DELIVERYMAN("ROEL_DELIVERYMAN"),
    USER("ROLE_USER");
    private String value;
}
