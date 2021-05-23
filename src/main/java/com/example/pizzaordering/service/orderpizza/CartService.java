package com.example.pizzaordering.service.orderpizza;

import com.example.pizzaordering.repository.*;
import com.example.pizzaordering.service.common.UserService;
import com.example.pizzaordering.vo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
public class CartService {
    @Autowired
    UserService userService;
    @Autowired
    CartRepository cartRepository;
    @Autowired
    ItemRepository itemRepository;
    @Autowired
    OptionRepository optionRepository;
    @Autowired
    MenuRepository menuRepository;

    public CartItem addToCart(Item item, List<Option> optionList){
        CartItem cartItem = new CartItem();

        for(Option option : optionList){
            option.setItem(item);
        }
        item.setOptionList(optionList);
        itemRepository.save(item);

        //String username = userService.getUsername();
        String username = "kjk";
        User user = userService.getUserByName(username);

        cartItem.setUser(user);
        cartItem.setItem(item);

        cartRepository.save(cartItem);

        return cartItem;
    }

    @Transactional
    public boolean removeFromCart(Long id){
        try {
            String username = userService.getUsername();
            User user = userService.getUserByName(username);
            user.removeCartItemByItemId(id);
            return true;
        } catch(Exception e){
            return false;
        }
    }

    @Transactional
    public List<Item> getCartItemList(){
        String username = userService.getUsername();
        User user = userService.getUserByName(username);

        List<Item> ret = new ArrayList<Item>();

        List<CartItem> cartList = user.getCartItemList();
        for (CartItem cartItem : cartList){
            ret.add(cartItem.getItem());
        }

        return ret;
    }

}
