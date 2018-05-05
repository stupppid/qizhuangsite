package site.qizhuang.web.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class testController {

    @GetMapping("/testYml")
    public String testYml(){
        return "ymlOK";
    }
}
