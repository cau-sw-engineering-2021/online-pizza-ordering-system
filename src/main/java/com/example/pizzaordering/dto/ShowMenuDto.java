package com.example.pizzaordering.dto;

import com.example.pizzaordering.vo.Option;
import lombok.Data;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Data
public class ShowMenuDto {
    private Long id;
    private String name;
    private Map<String, Integer> price = new HashMap<String, Integer>();
    private List<String> size = new ArrayList<String>();
    private String detail;
    private String imgLocation;

    public void addSizeAndPrice(String size, Integer price) {
        if (!addSizeList(size)){
            return;
        }else{
            if(!this.price.containsKey(size)){
                this.price.put(size, price);
            } else {
                this.price.replace(size, price);
            }
        }

    }
    private boolean addSizeList(String size){
        if(!this.size.contains(size)){
            this.size.add(size);
            return true;
        } else return false;
    }
}
