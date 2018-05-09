package site.qizhuang.web.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import site.qizhuang.web.domain.Document;

@Repository
public interface DocumentRepository extends JpaRepository<Document,Long> {
}
