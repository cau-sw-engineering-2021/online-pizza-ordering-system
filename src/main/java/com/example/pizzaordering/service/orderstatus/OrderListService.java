package com.example.pizzaordering.service.orderstatus;

import com.example.pizzaordering.dto.MenuDto;
import com.example.pizzaordering.repository.ItemRepository;
import com.example.pizzaordering.repository.MenuRepository;
import com.example.pizzaordering.repository.OrderRepository;
import com.example.pizzaordering.repository.LogRepository;
import com.example.pizzaordering.service.common.UserService;
import com.example.pizzaordering.vo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.sql.Timestamp;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;

@Service
public class OrderListService {
    @Autowired
    OrderRepository orderRepository;
    @Autowired
    LogRepository logRepository;

    @Autowired
    ItemRepository itemRepository;
    @Autowired
    MenuRepository menuRepository;

    @Autowired
    UserService userService;

    boolean isUpdated;
    public boolean updateOrderStatus(Long orderId, String nextState){
        Order order = orderRepository.findById(orderId).get();
        Log log = createLog(orderId, order.getOrderStatus(), nextState);
        logRepository.save(log);
        order.setOrderStatus(nextState);
        orderRepository.save(order);
        isUpdated = true;
        return true;
    }

    protected Log createLog(Long orderId, String currentState, String nextState) {
        Log retval = new Log();
        retval.setLoggingTime(new Timestamp(System.currentTimeMillis()));
        retval.setNickname(userService.getUsername());
        retval.setDetail(currentState + " -> " + nextState);
        return retval;
    }

    public List<Order> getOrderList() {
        List<Order> retval = new ArrayList<Order>();
        orderRepository.findAll().forEach(order -> {
            retval.add(order);
        });
        return retval;
    }

    public List<Order> getOrderDisplayList() {
        List<Order> retval = new ArrayList<Order>();
        List<String> status = new ArrayList<String>();
        status.add("ACCEPTED");
        status.add("COOK_COMPLETED");
        orderRepository.findAllByOrderStatusIn(status)
            .forEach(order -> {
                retval.add(order);
            });
        return retval;
    }

    public Boolean isUpdated() {
        Boolean retval = isUpdated;
        isUpdated = false;
        return retval;
    }

    @Transactional
    public boolean createOrder(Order orderInformation, List<Map<String, Integer>> itemDataList){
        List<Item> itemList = new ArrayList<Item>();
        // add menu in context
        for(Map<String, Integer> map : itemDataList){
            Item item = new Item();
            item.setMenu(menuRepository.findMenuById(Long.valueOf(map.get("menuId"))));
            item.setCount(map.get("count"));
            itemList.add(item);
        }

        itemRepository.saveAll(itemList);
        // order - item mapping
        orderInformation.setItemList(itemList);
        orderInformation.setOrderStatus("ordered");

        // user - order mapping
        User user = userService.getUserByName(userService.getUsername());
        orderInformation.setUser(user);
        orderRepository.save(orderInformation);

        Log log = createLog(orderInformation.getId(), "created", "ordered");
        logRepository.save(log);
        return true;
    }

}
