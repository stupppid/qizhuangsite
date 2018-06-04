package site.qizhuang.web.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import site.qizhuang.web.dao.DocumentRepository;
import site.qizhuang.web.dao.MongoDocumentRepository;
import site.qizhuang.web.domain.Document;
import java.util.List;

@Service
public class ScheduleService {

    private static long interval = 3600*24*7;
    private static Logger logger = LoggerFactory.getLogger(ScheduleService.class);

    @Autowired
    private DocumentRepository documentRepository;

    @Autowired
    private MongoDocumentRepository mongoDocumentRepository;

    @Scheduled(cron = "0 0 * * * *")
    public void permenentDeleteDocuments(){
        List<Document>documents = this.documentRepository.findAllByDeletedAndInterval(true,interval);
        for(Document d : documents){
            if(d.getObjectId() != null){
                this.mongoDocumentRepository.deleteById(d.getObjectId());
            }
            this.documentRepository.deleteById(d.getId());
        }
        logger.info(documents.toString());
    }
    
}
