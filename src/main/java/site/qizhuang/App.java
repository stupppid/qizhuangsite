package site.qizhuang;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.scheduling.annotation.EnableScheduling;
import site.qizhuang.tool.service.MT4SocketDataThread;

@SpringBootApplication
@EnableScheduling
@EnableCaching
public class App {
    public static void main(String[] args){
        SpringApplication.run(App.class);
        new MT4SocketDataThread().link();
    }
}
