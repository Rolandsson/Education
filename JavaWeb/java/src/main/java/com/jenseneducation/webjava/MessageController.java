package com.jenseneducation.webjava;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class MessageController {
 
    @MessageMapping("/chat")
    @SendTo("/topic/chat")
    public UserMessage onMessage(UserMessage message) {
        var timestamp = new Timestamp(System.currentTimeMillis());
        var sdf = new SimpleDateFormat("HH:mm:ss");

        message.setUsername(message.getUsername() + " - " + sdf.format(timestamp));
        return message;
    }

    @MessageMapping("/join")
    @SendTo("/topic/join")
    public String onMessage(String message) {
        return message;
    }
}
