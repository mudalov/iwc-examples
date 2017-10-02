
var messageChannel = new MessageChannel();
    
var iFrame = document.querySelector('iframe');
var otherWindow = iFrame.contentWindow;

iFrame.addEventListener("load", iframeLoaded, false);
    
function iframeLoaded() {
  otherWindow.postMessage('Hello from the main page!', '*', [messageChannel.port2]);
}

messageChannel.port1.onmessage = handleMessage;
function handleMessage(e) {
  console.log("Received", e.data);
}