package site.qizhuang.web.domain;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class User {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private boolean gender;
    private int age;
    private int privilege;

    private Collection<Document> document;
//    @OneToMany(mappedBy = "user",fetch = FetchType.LAZY,cascade = { CascadeType.ALL })
//    private Collection<Document> document;

    public void setId(Long id) {
        this.id = id;
    }

    public User(Long id, String name, boolean gender, int age) {
        super();
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.age = age;

    }


    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isGender() {
        return gender;
    }

    public void setGender(boolean gender) {
        this.gender = gender;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }



}
