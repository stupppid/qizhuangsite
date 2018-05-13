package site.qizhuang.web.service;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import site.qizhuang.web.dao.DocumentRepository;
import site.qizhuang.web.dao.UserRepository;
import site.qizhuang.web.domain.Document;
import site.qizhuang.web.domain.User;

import javax.print.Doc;
import javax.transaction.Transactional;
import javax.validation.constraints.Null;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Service
@Transactional
public class DocumentService {
    private static Log log = LogFactory.getLog(Document.class);
    @Autowired
    private DocumentRepository documentRepository;

    void test(User user){
        log.info(this.documentRepository == null);
        Document doc = new Document();
        HashSet<User> users1 = new HashSet<User>();
        users1.add(user);
        doc.setUserSet(users1);
        doc.setObjectId("abcasdsadsad");
        Date date = new Date();
        doc.setChangeTime(date);
        doc.setCreateTime(date);
        doc.setRoot(true);
        doc.setTitle("title");
        doc.setProfile("profile");
        Document doc1 = new Document();
        doc1.setRoot(false);
        HashSet<Document> documents = new HashSet<Document>();
        documents.add(doc1);
        doc1.setUserSet(users1);
        doc.setChildDocuments(documents);
        Document dc = this.documentRepository.save(doc);
//        doc.setPid(dc.getId());
//        this.documentRepository.save(doc);
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
