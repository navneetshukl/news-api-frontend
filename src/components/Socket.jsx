import React, { useEffect, useState } from "react";
import CardDesign from "./CardDesign";

const Socket = () => {
  const [message, setMessage] = useState(null); // Initialize as an empty string
  const [ws, setWs] = useState(null);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const websocket = new WebSocket("ws://localhost:8080/ws");

    websocket.onopen = () => {
      console.log("Connected to the server");
    };

    websocket.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data);
        setMessage(msg);
        setTotalUsers(msg.total_connected_users);

        console.log("msg is ", msg);
        console.log("message is ", message);
      } catch (error) {
        console.error("Error parsing message:", error);
      }
    };

    websocket.onerror = (error) => {
      console.error("WebSocket Error:", error);
    };

    websocket.onclose = () => {
      console.log("Disconnected from the server");
    };

    setWs(websocket);

    return () => {
      websocket.close();
    };
  }, []);

  const renderArticles = () => {
    let newArticles = [];
    if (message && message.articles) {
      let articles = message.articles;
      let len = articles.length;
      for (let i = 0; i < len; i++) {
        if (articles[i].author.length > 0) {
          newArticles.push(articles[i]);
        }
      }
    }

    return newArticles.map((article, index) => (
      <div key={index}>
        <CardDesign data={article} users={totalUsers} />
      </div>
    ));
    return null;
  };

  return (
    <div>
      <h1
        style={{
          position: "fixed",
        }}
      >
        Total Connected Users: {totalUsers}
      </h1>
      {renderArticles()}
    </div>
  );
};

export default Socket;
