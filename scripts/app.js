// Obtén referencias a los elementos HTML que necesitas
const serverButton = document.getElementById("server-button");
const serverList = document.getElementById("server-list");

// Manejador de eventos para el botón "Servidor"
serverButton.addEventListener("click", () => {
    // Pregunta al usuario el nombre del servidor (esto puede variar según tus necesidades)
    const serverName = prompt("Ingrese el nombre del servidor:");

    // Crea un nuevo botón de servidor y agrega al servidor a la lista
    if (serverName) {
        const serverButton = document.createElement("button");
        serverButton.classList.add("server-button");
        serverButton.textContent = serverName;
        serverList.appendChild(serverButton);

        // Aquí puedes agregar más lógica, como manejar eventos de clic en los botones de servidor
        serverButton.addEventListener("click", () => {
            alert(`Has hecho clic en el servidor: ${serverName}`);
            // Agrega más lógica aquí según tus necesidades
        });
    }
});

//CANALES

// Obtén referencias a los elementos HTML que necesitas
const chanelButton = document.getElementById("channel-button");
const channelList = document.getElementById("channel-list");

// Manejador de eventos para el botón "Servidor"
chanelButton.addEventListener("click", () => {
    // Pregunta al usuario el nombre del servidor (esto puede variar según tus necesidades)
    const channelName = prompt("Ingrese el nombre del servidor:");

    // Crea un nuevo botón de canales y agrega al canal a la lista
    if (channelName) {
        const channelButton = document.createElement("button");
        channelButton.classList.add("channel-button");
        channelButton.textContent = channelName;
        channelList.appendChild(channelButton);

        channelButton.addEventListener("click", () => {
            alert(`Has hecho clic en el canal: ${channelName}`);
       
        });
    }
});










//MENSAJES
const chatDisplay = document.getElementById("chat-display");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", () => {
  const message = messageInput.value.trim();
  if (message !== "") {
    const newMessage = document.createElement("div");
    newMessage.className = "message";
    newMessage.textContent = message;
    chatDisplay.appendChild(newMessage);
    messageInput.value = "";
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
  }
});

messageInput.addEventListener("keyup", event => {
  if (event.key === "Enter") {
    sendButton.click();
  }
});

sendButton.addEventListener("click", () => {
    const message = messageInput.value.trim();
    if (message !== "") {
      addMessage("user", message);
      messageInput.value = " ";
      chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }
  });
  
