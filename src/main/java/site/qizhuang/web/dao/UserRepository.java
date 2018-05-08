package site.qizhuang.web.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import site.qizhuang.web.domain.User;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

}
