package site.qizhuang.tool.service;

import com.alibaba.fastjson.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import javax.websocket.*;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.concurrent.CopyOnWriteArraySet;

@ServerEndpoint(value = "/mt4Data")
@Component
public class HandleDataService {

    private static boolean intiFlag = false;
    private static JSONObject allAsks;
    private static Logger logger =LoggerFactory.getLogger(HandleDataService.class);
    private static CopyOnWriteArraySet<HandleDataService> webSocketSet = new CopyOnWriteArraySet<HandleDataService>();
    private Session session;

    public static void handle(JSONObject jsonObject){
        if(!intiFlag){
            allAsks = jsonObject;
            intiFlag = true;
        }
        for (HandleDataService s:webSocketSet) {
            try {
                s.session.getBasicRemote().sendText(jsonObject.toString());
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    @OnOpen
    public void onOpen(Session session) {
        this.session = session;
        webSocketSet.add(this);
        try {
            session.getBasicRemote().sendText(allAsks.toJSONString());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @OnClose
    public void onClose(Session session){
        webSocketSet.remove(this);
    }

    @OnError
    public void onError(Throwable t) {
        logger.info(session.getId() + t.getMessage());
    }

    @OnMessage
    public void onMessage(String message, Session session) {
    }
}
