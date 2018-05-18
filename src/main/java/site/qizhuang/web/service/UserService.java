package site.qizhuang.web.service;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;
import site.qizhuang.web.dao.DocumentRepository;
import site.qizhuang.web.dao.UserRepository;
import site.qizhuang.web.domain.Document;
import site.qizhuang.web.domain.User;
import site.qizhuang.web.dto.SignUpAndInDto;
import site.qizhuang.web.dto.SignUpDto;
import site.qizhuang.web.dto.UserWithAllDto;

import javax.transaction.Transactional;
import java.util.*;

@Service
@Transactional
public class UserService {

    private static Log log = LogFactory.getLog(UserService.class);
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private DocumentRepository documentRepository;

    @Autowired
    private DocumentService documentService;

    public SignUpDto signUp(SignUpAndInDto signUpAndInDto){
        int check = -1;
        try {
            check = this.userRepository.insertIgnoreOne(signUpAndInDto.getMail(),
                    signUpAndInDto.getPhoneNumber(),
                    signUpAndInDto.getPassword());
        }catch (Exception e){
            return new SignUpDto("远程数据库出错");
        }
        if(check == 0){
            return new SignUpDto("该账号已被注册");
        }else if(check > 0){
            //RIGHT
        }
        return new SignUpDto("");
    }

    public UserWithAllDto signIn(SignUpAndInDto signUpAndInDto){
        Optional<User> optionalUser;
        UserWithAllDto userWithAllDto = new UserWithAllDto();
        String pwd = DigestUtils.md5DigestAsHex(signUpAndInDto.getPassword().getBytes());
        if(signUpAndInDto.getMail() != null){
            optionalUser = this.userRepository.findOneByMailAndPwd(signUpAndInDto.getMail(),pwd);
        }else {
            optionalUser = this.userRepository.findOneByTelAndPwd(signUpAndInDto.getPhoneNumber(),pwd);
        }
        userWithAllDto = new UserWithAllDto();
        if(!optionalUser.isPresent()){
            userWithAllDto.setErrorMsg("未找到该用户");
            return userWithAllDto;
        }
        User user = optionalUser.get();
        Set<Document> rootDocuments = DocumentService.findRootDocumentsFromAll(user.getDocumentSet());
        userWithAllDto.setUser(user);
        userWithAllDto.setDocuments(rootDocuments);
        userWithAllDto.setErrorMsg("");
        return userWithAllDto;
    }
}
