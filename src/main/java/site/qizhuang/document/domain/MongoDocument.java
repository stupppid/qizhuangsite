package site.qizhuang.document.domain;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.Collection;

@Document
public class MongoDocument {
    @Id
    private String id;
    private String content;
    private Collection<MongoComment> comments;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Collection<MongoComment> getComments() {
        return comments;
    }

    public void setComments(Collection<MongoComment> comments) {
        this.comments = comments;
    }
}
