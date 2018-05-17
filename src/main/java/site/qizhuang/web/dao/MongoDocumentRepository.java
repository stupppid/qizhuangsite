package site.qizhuang.web.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import site.qizhuang.web.domain.MongoDocument;

public interface MongoDocumentRepository extends MongoRepository<MongoDocument, String> {
}
