package site.qizhuang.web.domain;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.Date;

@Document
public class MongoComment {
    @Id
    private String id;
    private Date createTime;
    private Long userId;
    private Long toUserId;
}
