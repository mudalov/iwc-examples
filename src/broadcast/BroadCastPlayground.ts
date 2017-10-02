
declare var BroadcastChannel;

// Connect to the channel named "my_channel".
const channel = new BroadcastChannel('my_channel');

// Send a message on "my_channel".
channel.postMessage('Message');

// Listen for messages on "my_channel".
channel.onmessage = function(e) {
  console.log('Received', e.data);
};

// Close the channel when you're done.
channel.close();