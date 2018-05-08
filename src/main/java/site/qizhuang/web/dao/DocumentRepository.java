package site.qizhuang.web.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import site.qizhuang.web.domain.Document;

public interface DocumentRepository extends JpaRepository<Document,Long> {
}
