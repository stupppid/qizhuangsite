package site.qizhuang.web.test.servicetest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import site.qizhuang.web.dao.UserRepository;
import site.qizhuang.web.domain.User;

import java.util.List;

@Service
public class UserServiceTest {

    @Autowired
    private UserRepository userRepository;

    public List<User> findAllUsers(){
        return userRepository.findAll();
    }
}
