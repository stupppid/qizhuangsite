package site.qizhuang.document.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import site.qizhuang.document.dto.SignUpAndInDto;
import site.qizhuang.document.dto.SignUpDto;
import site.qizhuang.document.dto.UserWithAllDto;
import site.qizhuang.document.service.DocumentService;
import site.qizhuang.document.service.UserService;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private DocumentService documentService;

    @PostMapping("/signUp")
    public SignUpDto signUp(@RequestBody SignUpAndInDto signUpAndInDto){
        if(signUpAndInDto.getPassword() == null){
            return new SignUpDto("密码无效");
        }else if(signUpAndInDto.getMail() == null && signUpAndInDto.getPhoneNumber() == null){
            return new SignUpDto("账户无效");
        }
        return this.userService.signUp(signUpAndInDto);
    }

    @PostMapping("/signIn")
    public UserWithAllDto signIn(@RequestBody SignUpAndInDto signUpAndInDto){
        return this.userService.signIn(signUpAndInDto);
    }
}

