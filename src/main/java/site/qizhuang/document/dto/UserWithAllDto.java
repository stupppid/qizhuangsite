package site.qizhuang.document.dto;

import site.qizhuang.document.domain.Document;
import site.qizhuang.document.domain.User;

import java.util.Set;

public class UserWithAllDto extends BasicDto{
    private User user;
    private Set<Document> documents;

    public UserWithAllDto() { }

    public UserWithAllDto(String errorMsg, User user, Set<Document> documents) {
        super(errorMsg);
        this.user = user;
        this.documents = documents;
    }

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
}
