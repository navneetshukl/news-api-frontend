import React, { useEffect, useState } from "react";
import CardDesign from "./CardDesign";

const Socket = () => {
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const websocket = new WebSocket("ws://localhost:8080/ws");

    websocket.onopen = () => {
      console.log("Connected to the server");
    };

    websocket.onmessage = (event) => {
      const message = JSON.parse(event.data); // Parse the incoming JSON
      setMessages(message);

      console.log("messages is ", messages);
    };

    websocket.onclose = () => {
      console.log("Disconnected from the server");
    };

    setWs(websocket);

    return () => {
      websocket.close();
    };
  }, []);
  return (
    <div>
      {/* {messages.map((value, index) => {
        return (
          <div key={index}>
            <CardDesign data={value} />
          </div>
        );
      })} */}
    </div>
  );
};

export default Socket;
