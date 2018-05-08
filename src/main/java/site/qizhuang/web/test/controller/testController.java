package site.qizhuang.web.test.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import site.qizhuang.web.domain.User;
import site.qizhuang.web.test.servicetest.UserServiceTest;

import java.util.List;

@RestController
public class testController {

    @Autowired
    private UserServiceTest userServiceTest;

    @GetMapping("/testYml")
    public String testYml(){
        return "ymlOK";
    }

    @GetMapping("/testFindAll")
    public List<User> testFindAll(){
        return userServiceTest.findAllUsers();
    }

}
