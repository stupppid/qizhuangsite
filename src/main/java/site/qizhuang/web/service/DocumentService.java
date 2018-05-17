package site.qizhuang.web.service;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import site.qizhuang.web.dao.DocumentRepository;
import site.qizhuang.web.domain.Document;
import site.qizhuang.web.domain.User;
import site.qizhuang.web.dto.BasicDto;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Service
@Transactional
public class DocumentService {
    private static Log log = LogFactory.getLog(Document.class);
    @Autowired
    private DocumentRepository documentRepository;

    public BasicDto saveNewFile(Document document,Long pid){
        Document t = this.documentRepository.save(document);
        if(!document.isRoot()){
            this.documentRepository.setPid(t.getId(),pid);
        }
        return new BasicDto();
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
