package com.example.pizzaordering.dto;

import com.example.pizzaordering.vo.Item;
import com.example.pizzaordering.vo.Order;
import com.example.pizzaordering.vo.User;
import lombok.Data;

import java.sql.Timestamp;
import java.util.List;

@Data
public class OrderDto {
    private Long id;
    private Timestamp lastUpdateTime;
    private int totalPrice;
    private PureUserDto user;
    private List<Item> itemList;
    public static OrderDto of(Order order){
        OrderDto orderDto=new OrderDto();
        orderDto.setId(order.getId());
        orderDto.setTotalPrice(order.getTotalPrice());
        orderDto.setUser(PureUserDto.of(order.getUser()));
        orderDto.setLastUpdateTime(order.getLastUpdateTime());
        orderDto.setItemList(order.getItemList());
        return orderDto;
    }
}
