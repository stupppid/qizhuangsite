package site.qizhuang.document.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import site.qizhuang.document.domain.MongoDocument;

public interface MongoDocumentRepository extends MongoRepository<MongoDocument, String> {
}
