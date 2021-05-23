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
        smallMenu.setPrice(menuDto.getSmallprice());
        smallMenu.setDetail(menuDto.getDetail());
        smallMenu.setImgLocation(menuDto.getImgUrl());

        mediumMenu.setName(menuDto.getName());
        mediumMenu.setPrice(menuDto.getMediumprice());
        mediumMenu.setDetail(menuDto.getDetail());
        mediumMenu.setImgLocation(menuDto.getImgUrl());

        largeMenu.setName(menuDto.getName());
        largeMenu.setPrice(menuDto.getLargeprice());
        largeMenu.setDetail(menuDto.getDetail());
        largeMenu.setImgLocation(menuDto.getImgUrl());
        menuRepository.save(smallMenu);
        menuRepository.save(mediumMenu);
        menuRepository.save(largeMenu);
        return true;
    }
}
