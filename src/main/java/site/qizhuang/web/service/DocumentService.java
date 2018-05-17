package site.qizhuang.web.service;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import site.qizhuang.web.config.DocumentType;
import site.qizhuang.web.dao.DocumentRepository;
import site.qizhuang.web.domain.MongoComment;
import site.qizhuang.web.domain.MongoDocument;
import site.qizhuang.web.dao.MongoDocumentRepository;
import site.qizhuang.web.domain.Document;
import site.qizhuang.web.dto.FileDto;

import javax.transaction.Transactional;
import java.util.*;

@Service
@Transactional
public class DocumentService {
    private static Log log = LogFactory.getLog(Document.class);

    @Autowired
    private DocumentRepository documentRepository;

    @Autowired
    private MongoDocumentRepository mongoDocumentRepository;

    public Document saveNewFile(Document document, FileDto fileDto){
        Long pid = fileDto.getPid();
        String title = fileDto.getTitle();
        Document t = this.documentRepository.save(document);
        if(!document.isRoot()){
            this.documentRepository.setPid(t.getId(),pid);
        }
        if(!fileDto.getType().equals(DocumentType.FOLDER)){
            MongoDocument mongoDocument = new MongoDocument();
            StringBuilder sb = new StringBuilder();
            sb.append("#").append(title).append("\r\n");
            mongoDocument.setContent(sb.toString());
            mongoDocument.setComments(new ArrayList<MongoComment>());
            MongoDocument m = (MongoDocument) mongoDocumentRepository.save(mongoDocument);
            Document doc = t;
            while(true) {
                Set<Document> documents = doc.getChildren();
                if (documents != null && !documents.isEmpty()) {
                    try {
                        doc = (Document) documents.toArray()[0];
                    } catch (Exception e) {
                        log.warn(e.getMessage());
                    }
                } else {
                    break;
                }
            }
            documentRepository.setObjectId(doc.getId(),m.getId());
        }
        Optional<Document> opt = documentRepository.findById(t.getId());
        if(opt.isPresent()){
            return opt.get();
        }else {
            return null;
        }
    }


    public static Set<Document> findRootDocumentsFromAll(Set<Document> documents){
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
