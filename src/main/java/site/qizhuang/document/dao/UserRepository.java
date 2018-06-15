package site.qizhuang.document.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import site.qizhuang.document.domain.User;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    @Modifying
    @Query(value = "INSERT IGNORE INTO `user`(`mail`,`tel`,`pwd`) VALUES(:mail,:tel,MD5(:pwd))",nativeQuery = true)
     int insertIgnoreOne(@Param("mail") String mail,
                          @Param("tel") String tel,
                          @Param("pwd") String pwd);
    @Query
    Optional<User> findOneByMailAndPwd(String mail,String password);
    @Query
    Optional<User> findOneByTelAndPwd(String mail,String password);
    @Query
    Optional<User> findOneByMail(String mail);
    @Query
    Optional<User> findOneByTel(String tel);

}
