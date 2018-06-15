package site.qizhuang.document.dto;

import site.qizhuang.document.domain.Document;

public class SaveNewFileDto extends BasicDto{
    private Long pid;
    private Document document;

    public SaveNewFileDto(String errorMsg, Long pid, Document document) {
        super(errorMsg);
        this.pid = pid;
        this.document = document;
    }

    public Document getDocument() {
        return document;
    }

    public void setDocument(Document document) {
        this.document = document;
    }

    public Long getPid() {

        return pid;
    }

    public void setPid(Long pid) {
        this.pid = pid;
    }
}
