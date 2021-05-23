package com.example.pizzaordering.controller.management;
import com.example.pizzaordering.dto.MenuDto;
import com.example.pizzaordering.service.management.AddMenuOperator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import lombok.RequiredArgsConstructor;

import java.io.File;
import java.io.IOException;
import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;

import com.example.pizzaordering.vo.Menu;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class MenuManagementController {
    @Autowired
    AddMenuOperator addMenuOperator;
    /* TODO : Implement */
    @PostMapping("/menu/add")
    public ResponseEntity<Object> addMenu(HttpServletRequest body, @RequestPart MultipartFile file, Map<String, Object> item) throws IOException {
        ResponseEntity<Object> retval = null;
        String savedname="";
        Map<String, Object> result = new HashMap<String, Object>();
        if(!file.isEmpty()){
            savedname=file.getOriginalFilename();
            String up=body.getSession().getServletContext().getRealPath("/")+"menuimgstorage";
            File target=new File(up,savedname);
            FileCopyUtils.copy(file.getBytes(),target);
        }
        if(addMenuOperator.addMenu((MenuDto)item.get("menu"),savedname))
            result.put("msg", "success");
        else
            result.put("msg","fail");
        retval = new ResponseEntity<Object>(result, HttpStatus.OK);
        return retval;
    }
}
