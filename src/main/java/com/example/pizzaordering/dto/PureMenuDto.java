package com.example.pizzaordering.dto;

import com.example.pizzaordering.vo.Menu;
import lombok.Data;

@Data
public class PureMenuDto {
    private String name;
    private int price;
    private String size;
    private String detail;
    private String imgLocation;
    public static PureMenuDto of(Menu menu){
        PureMenuDto pureMenuDto=new PureMenuDto();
        pureMenuDto.setName(menu.getName());
        pureMenuDto.setPrice(menu.getPrice());
        pureMenuDto.setSize(menu.getSize());
        pureMenuDto.setDetail(menu.getDetail());
        pureMenuDto.setImgLocation(menu.getImgLocation());
        return pureMenuDto;
    }
}
