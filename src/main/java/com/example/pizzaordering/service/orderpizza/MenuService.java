package com.example.pizzaordering.service.orderpizza;

import com.example.pizzaordering.config.security.JwtTokenProvider;
import com.example.pizzaordering.dto.ShowMenuDto;
import com.example.pizzaordering.dto.UserDto;
import com.example.pizzaordering.repository.MenuRepository;
import com.example.pizzaordering.repository.UserRepository;
import com.example.pizzaordering.vo.Menu;
import com.example.pizzaordering.vo.Role;
import com.example.pizzaordering.vo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MenuService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    MenuRepository menuRepository;

    public List<Menu> getMenuList(){
        return menuRepository.findAll();
    }

    public Menu getMenuDetailById(Long id){
        return menuRepository.findMenuById(id);
    }

    public ShowMenuDto getMenuDetailByName(String name){
        ShowMenuDto ret = new ShowMenuDto();
        List<Menu> menus = menuRepository.findAllByName(name);

        ret.setDetail(menus.get(0).getDetail());
        ret.setName(menus.get(0).getName());

        for(Menu menu : menus){
            ret.addSizeAndPrice(menu.getSize(), menu.getPrice());
        }

        return ret;
    }

}
