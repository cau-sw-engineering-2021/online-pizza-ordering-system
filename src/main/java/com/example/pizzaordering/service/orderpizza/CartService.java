package com.example.pizzaordering.service.orderpizza;

import com.example.pizzaordering.repository.CartRepository;
import com.example.pizzaordering.repository.ItemRepository;
import com.example.pizzaordering.repository.MenuRepository;
import com.example.pizzaordering.repository.UserRepository;
import com.example.pizzaordering.service.common.UserService;
import com.example.pizzaordering.vo.CartItem;
import com.example.pizzaordering.vo.Item;
import com.example.pizzaordering.vo.Menu;
import com.example.pizzaordering.vo.User;
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

    public CartItem addToCart(Item item){
        CartItem cartItem = new CartItem();

        itemRepository.save(item);

        String username = userService.getUsername();
        User user = userService.getUserByName(username);

        cartItem.setUser(user);
        cartItem.setItem(item);

        cartRepository.save(cartItem);

        return cartItem;
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
