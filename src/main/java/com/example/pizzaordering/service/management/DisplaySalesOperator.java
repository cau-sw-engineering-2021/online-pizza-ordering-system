package com.example.pizzaordering.service.management;


import com.example.pizzaordering.repository.OrderRepository;
import com.example.pizzaordering.vo.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
public class DisplaySalesOperator {
    @Autowired
    OrderRepository orderRepository;
    public List<Order> displaySales(String start, String end) throws ParseException {
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Date startdate = dateFormat.parse(start);
        Date enddate=dateFormat.parse(end);
        Calendar cal = Calendar.getInstance();
        cal.setTime(enddate);
        cal.add(Calendar.DAY_OF_WEEK, 1);
        enddate.setTime(cal.getTime().getTime());
        Timestamp startLocalDateTime = new Timestamp(startdate.getTime());
        Timestamp endLocalDateTime=new Timestamp(enddate.getTime());
        List<Order> orderList=orderRepository.findAllByLastUpdateTimeBetweenOrderByLastUpdateTime(startLocalDateTime,endLocalDateTime);
        return orderList;
    }
}
