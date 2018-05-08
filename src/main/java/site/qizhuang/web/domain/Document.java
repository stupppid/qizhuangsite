package site.qizhuang.web.domain;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Document {
    @Id
    @GeneratedValue
    private Long id;

    private String objectId;
    private Date createTime;
    private Date changeTime;
    private String type;  //开头为#则是共享的

    private String group;
    private String title;
    private String profile;



}
