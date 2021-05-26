package com.example.pizzaordering.dto;

import com.example.pizzaordering.vo.User;
import lombok.Data;

@Data
public class PureUserDto {
    private String name;
    private String nickname;
    private String phoneNum;
    private String address;
    private String email;
    public static PureUserDto of(User user){
        PureUserDto pureUserDto=new PureUserDto();
        pureUserDto.setName(user.getName());
        pureUserDto.setNickname(user.getNickname());
        pureUserDto.setAddress(user.getAddress());
        pureUserDto.setEmail(user.getEmail());
        pureUserDto.setPhoneNum(user.getPhoneNum());
        return pureUserDto;
    }
}
