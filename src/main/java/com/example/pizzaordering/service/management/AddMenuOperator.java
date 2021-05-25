package com.example.pizzaordering.service.management;

import com.example.pizzaordering.dto.MenuDto;
import com.example.pizzaordering.repository.MenuRepository;
import com.example.pizzaordering.vo.Menu;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddMenuOperator {
    @Autowired
    MenuRepository menuRepository;
    public boolean addMenu(MenuDto menuDto){
        if(menuDto==null)
            return false;
        Menu smallMenu=new Menu();
        Menu mediumMenu=new Menu();
        Menu largeMenu=new Menu();
        smallMenu.setName(menuDto.getName());
        smallMenu.setPrice(Integer.parseInt(menuDto.getSmallprice()));
        smallMenu.setSize("small");
        smallMenu.setImgLocation(menuDto.getImgUrl());

        mediumMenu.setName(menuDto.getName());
        mediumMenu.setPrice(Integer.parseInt(menuDto.getMediumprice()));
        mediumMenu.setSize("medium");
        mediumMenu.setImgLocation(menuDto.getImgUrl());

        largeMenu.setName(menuDto.getName());
        largeMenu.setPrice(Integer.parseInt(menuDto.getLargeprice()));
        largeMenu.setSize("large");
        largeMenu.setImgLocation(menuDto.getImgUrl());
        menuRepository.save(smallMenu);
        menuRepository.save(mediumMenu);
        menuRepository.save(largeMenu);
        return true;
    }
}
