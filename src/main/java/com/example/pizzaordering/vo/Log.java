package com.example.pizzaordering.vo;

import lombok.Data;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Data
@Table(name="log")
public class Log {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private Timestamp loggingTime;
    String nickname;
    String detail;
}
