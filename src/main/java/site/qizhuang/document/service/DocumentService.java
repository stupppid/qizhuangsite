package site.qizhuang.document.service;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import site.qizhuang.document.config.DocumentType;
import site.qizhuang.document.dao.DocumentRepository;
import site.qizhuang.document.domain.MongoComment;
import site.qizhuang.document.domain.MongoDocument;
import site.qizhuang.document.dao.MongoDocumentRepository;
import site.qizhuang.document.domain.Document;
import site.qizhuang.document.dto.BasicDto;
import site.qizhuang.document.dto.FileDto;
import site.qizhuang.document.dto.SaveNewFileDto;
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

    public SaveNewFileDto saveNewFile(Document document, FileDto fileDto){
        Long pid = fileDto.getPid();
        String title = fileDto.getTitle();
        Document t = this.documentRepository.save(document);
        String objectId = null;
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
            objectId = m.getId();
            documentRepository.setObjectId(doc.getId(),m.getId());
        }
        Optional<Document> opt = documentRepository.findById(t.getId());
        if(opt.isPresent()){
            Document dc = opt.get();
            if(!fileDto.getType().equals(DocumentType.FOLDER)){
                while(true){
                    if(dc.getChildren() == null || dc.getChildren().isEmpty()){
                        dc.setObjectId(objectId);
                        break;
                    }else {
                        dc = (Document) dc.getChildren().toArray()[0];
                    }
                }
            }
            return new SaveNewFileDto("",fileDto.getPid(),opt.get());
        }else {
            return null;
        }
    }

    public MongoDocument getDoc(String objectId){
        Optional<MongoDocument> mg = this.mongoDocumentRepository.findById(objectId);
        if(mg.isPresent()){
            return mg.get();
        }else {
            return null;
        }
    }

    public BasicDto saveDoc(MongoDocument mongoDocument){
        this.mongoDocumentRepository.save(mongoDocument);
        return new BasicDto("");
    }

    private void getIdList(List<Long> idList,Document doc){
        if(doc.getChildren() != null && doc.getChildren().size() != 0){
            for(Document d:doc.getChildren()){
                getIdList(idList,d);
            }
        }
        idList.add(doc.getId());
    }

    public BasicDto deleteDoc(Long id){
        boolean flag = true;
        Optional<Document> document = this.documentRepository.findById(id);
        List<Long> idList = new ArrayList<Long>();
        if(document.isPresent()){
            Document doc = document.get();
            idList.add(id);
            if(doc.getType().equals(DocumentType.FOLDER)){
                getIdList(idList,doc);
            }
        }
        for(Long i:idList){
            if(this.documentRepository.setDeletedById(i) <= 0){
                flag = false;
            }
        }
        if(flag)
            return new BasicDto("");
        else
            return new BasicDto("删除失败了");
    }

    public void changePid(long id, long pid) {
        if(pid == 0){
            this.documentRepository.setPidAndRoot(id);
        }else {
            this.documentRepository.setPid(id,pid);
        }
    }

    public void changeNameAndPid(long id, long pid, String s) {
        if(pid == 0){
            this.documentRepository.setPidAndRootAndText(id,s);
        }else {
            this.documentRepository.setPidAndText(id,pid,s);
        }
    }
}
