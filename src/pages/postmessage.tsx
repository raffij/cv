<html>
  <body>
    <script>
      window.addEventListener("message", (event) => {
        window.alert(event.origin);

        const port = event?.ports[0];

        if (!port) {
          window.alert("message ignored");
          return;
        }

        port.onmessage = (event) => {
          window.alert(event);
        };
      });
    </script>
    <h1>Post Message Testing</h1>

    <button onClick="javascript:port.postMessage('getStoreId');">Get StoreID</button>
    <button onClick="javascript:port.postMessage('getDeviceId');">Get DeviceID</button>
  </body>
</html>
 
