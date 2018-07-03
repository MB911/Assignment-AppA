import Vue from "vue";

var connection = new WebSocket('ws://127.0.0.1:1337');


const emitter = new Vue({
  methods: {
    send(message) {
      if (1 === connection.readyState)
        connection.send(message)
    }
  }
});

connection.onopen = function() {
  console.log('connected');
  connection.send(JSON.stringify({
    data: 'Mayank'
  }, undefined, 2));
};
connection.onmessage = function(data) {
  console.log(data.data);
  emitter.$emit("message", data.data)
}

export default emitter
