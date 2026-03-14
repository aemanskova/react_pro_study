import { Text } from "@mantine/core";
import { useEffect, useRef } from "react";

export function WebSocketLogger() {
  const socketRef = useRef<WebSocket>(null);

  useEffect(() => {
    socketRef.current = new WebSocket("wss://echo.websocket.org");

    socketRef.current.addEventListener("open", () => {
      if (socketRef.current) {
        socketRef.current.send("Hello, WebSocket Echo Server!");
        socketRef.current.send(
          JSON.stringify({
            type: "test",
            timestamp: Date.now(),
            message: "Testing echo functionality"
          })
        );
      }
    });

    socketRef.current.onmessage = (event) => {
      const message = event.data;
      console.log({ message });
    };

    return () => {
      if (socketRef.current) socketRef.current?.close();
    };
  }, []);

  return <Text>See console logs:)</Text>;
}
