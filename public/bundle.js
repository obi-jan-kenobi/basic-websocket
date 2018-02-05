(function(window) {
  window.WebSocket = window.WebSocket || window.MozWebSocket;
  const connection = new WebSocket("ws://127.0.0.1:3000");

  connection.onopen = () => {
    console.log("connection is open");
  };

  connection.onerror = () => {
    console.error("connection had error");
  };

  connection.onmessage = msg => {
    console.log(msg);
  };
})(window);
