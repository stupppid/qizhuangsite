package site.qizhuang.web.test.controller;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import site.qizhuang.web.domain.User;
import site.qizhuang.web.test.servicetest.UserServiceTest;
import java.util.List;

@RestController
@RequestMapping("/test")
public class testController {

    @Autowired
    private UserServiceTest userServiceTest;
    private static Log log = LogFactory.getLog(testController.class);

    @GetMapping("yml")
    public String testYml(){
        return "ymlOK";
    }

    @GetMapping("/findAll")
    public List<User> testFindAll(){
        return userServiceTest.findAllUsers();
    }

    @PostMapping("/saveUserA")
    public void saveUser(@RequestBody User user, Model model){
        log.info(user.toString());
        userServiceTest.saveUser(user);
    }

}
