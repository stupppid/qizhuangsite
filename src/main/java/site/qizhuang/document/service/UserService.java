package site.qizhuang.document.service;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;
import site.qizhuang.document.dao.DocumentRepository;
import site.qizhuang.document.dao.UserRepository;
import site.qizhuang.document.domain.Document;
import site.qizhuang.document.domain.User;
import site.qizhuang.document.dto.SignUpAndInDto;
import site.qizhuang.document.dto.SignUpDto;
import site.qizhuang.document.dto.UserWithAllDto;

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
        Set<Document> rootDocuments = this.findRootDocumentsFromAll(user.getDocumentSet());
        userWithAllDto.setUser(user);
        userWithAllDto.setDocuments(rootDocuments);
        userWithAllDto.setErrorMsg("");
        return userWithAllDto;
    }

    public Set<Document> findRootDocumentsFromAll(Set<Document> documents){
        Set<Document> rootDocuments = new HashSet<>();
        try {
            for (Document d:documents) {
                if(d.isRoot()){
                    rootDocuments.add(d);
                }
            }
        }catch (Exception e){
            log.warn(e);
        }
        return rootDocuments;
    }
}
