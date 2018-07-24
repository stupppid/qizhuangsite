package site.qizhuang.tool.service;

import com.alibaba.fastjson.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.Socket;


public class MT4SocketDataService extends Thread{

    private static Logger logger = LoggerFactory.getLogger(MT4SocketDataService.class);
    private BufferedReader bf;
    private Socket socket;

    public MT4SocketDataService(Socket socket){
        this.socket = socket;
        try {
            this.bf = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void run() {
        while (true){
            String string = null;
            try {
                string = this.bf.readLine();
                logger.info(string);
            } catch (Exception e) {
                e.printStackTrace();
            }
            if(string == null){
                try {
                    this.socket.close();
                    break;
                } catch (IOException e) {
                    e.printStackTrace();
                }
                break;
            }
            JSONObject jsonObject = JSONObject.parseObject(string);
            if(jsonObject != null){
                HandleDataService.handle(jsonObject);
            }
        }
    }
}
