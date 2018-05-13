package site.qizhuang.web.dto;

import site.qizhuang.web.domain.Document;
import site.qizhuang.web.domain.User;

import java.util.List;
import java.util.Set;

public class UserWithAllDto {
    User user;
    Set<Document> documents;
    String errorMsg = "";

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<Document> getDocuments() {
        return documents;
    }

    public void setDocuments(Set<Document> documents) {
        this.documents = documents;
    }

    public String getErrorMsg() {
        return errorMsg;
    }

    public void setErrorMsg(String errorMsg) {
        this.errorMsg = errorMsg;
    }
}
