package com.example.pizzaordering.vo;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Data
@Table(name="item")
public class Item {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "item_id")
    @JsonIgnore
    private List<Option> optionList;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="menu_id")
    private Menu menu;
    private int count;
}
