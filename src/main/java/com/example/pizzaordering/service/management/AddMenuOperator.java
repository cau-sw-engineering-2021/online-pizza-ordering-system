package com.example.pizzaordering.service.management;

import com.example.pizzaordering.dto.MenuDto;
import com.example.pizzaordering.repository.MenuRepository;
import com.example.pizzaordering.vo.Menu;
import com.example.pizzaordering.vo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class AddMenuOperator {
    @Autowired
    MenuRepository menuRepository;
    public boolean addMenu(MenuDto menuDto, String img){
        if(menuDto==null)
            return false;
        Menu newMenu=new Menu();
        newMenu.setName(menuDto.getName());
        newMenu.setPrice(menuDto.getPrice());
        newMenu.setSize(menuDto.getSize());
        newMenu.setDetail(menuDto.getDetail());
        newMenu.setImgLocation(img);
        menuRepository.save(newMenu);
        return true;
    }
}
