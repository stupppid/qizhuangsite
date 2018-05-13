package site.qizhuang.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.session.config.annotation.web.http.EnableSpringHttpSession;

@SpringBootApplication
public class App {
    public static void main(String[] args){
        SpringApplication.run(App.class);
    }
}
