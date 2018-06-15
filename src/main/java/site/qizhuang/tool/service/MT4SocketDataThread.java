package site.qizhuang.tool.service;

import site.qizhuang.tool.config.mt4Config;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

public class MT4SocketDataThread{

    private int port = mt4Config.mt4Port;

    private ServerSocket serverSocket;

    public MT4SocketDataThread(){
        try {
            this.serverSocket = new ServerSocket(port);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void link(){
        MT4SocketDataService mt4SocketDataService;
        while(true){
            Socket socket = null;
            try {
                socket = this.serverSocket.accept();
            } catch (IOException e) {
                e.printStackTrace();
            }
            try {
                mt4SocketDataService = new MT4SocketDataService(socket);
                mt4SocketDataService.start();
            } catch (Exception e) {
                try {
                    socket.close();
                } catch (IOException e1) {
                    e1.printStackTrace();
                }
                e.printStackTrace();
            }
        }

    }
}
