package site.qizhuang.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import site.qizhuang.web.config.DocumentType;
import site.qizhuang.web.domain.Document;
import site.qizhuang.web.domain.User;
import site.qizhuang.web.dto.BasicDto;
import site.qizhuang.web.dto.FileDto;
import site.qizhuang.web.service.DocumentService;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/api")
public class DocumentController {
    @Autowired
    private DocumentService documentService;

    @RequestMapping("/createNewFile")
    public Document createNewFile(@RequestBody FileDto fileDto){
        Document document = new Document();
        Document lastDocument = document;
        Document rootDocument = document;
        Date date = new Date();
        int len = fileDto.getPath().length;
        User u = new User();
        u.setId(fileDto.getUserId());
        Set<User> us = new HashSet<User>();
        us.add(u);
        for (int i = 0;i<len;i++) {
            Set<Document> documentSet = new HashSet<Document>();
            documentSet.add(document);
            document.setText(fileDto.getPath()[i]);
            document.setUserSet(us);
            document.setCreateTime(date);
            document.setChangeTime(date);
            document.setType(DocumentType.FOLDER);
            if(i == (len - 1)){
                document.setType(fileDto.getType());
                if(!fileDto.getType().equals(DocumentType.FOLDER)){
                    document.setText(fileDto.getTitle());
                    document.setProfile(fileDto.getProfile());
                }
            }
            if(i != 0){
                lastDocument.setChildren(documentSet);
                document.setRoot(false);
                lastDocument = document;
            }
            document = new Document();
        }
        rootDocument.setRoot(fileDto.getPid() == 0);
        Document doc = this.documentService.saveNewFile(rootDocument,fileDto);
        return doc;
    }

}
