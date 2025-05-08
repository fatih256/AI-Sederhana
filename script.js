function appendMessage(sender, message) {
  const chatBox = document.getElementById("chat-box");
  const messageElement = document.createElement("div");
  messageElement.classList.add(sender);
  messageElement.innerHTML = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function appendImage(src, alt) {
  const chatBox = document.getElementById("chat-box");
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  chatBox.appendChild(img);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function handleKey(event) {
  if (event.key === "Enter") {
    processInput();
  }
}

function processInput() {
  const inputField = document.getElementById("user-input");
  const userInput = inputField.value.trim();
  if (userInput === "") return;

  appendMessage("user", userInput);

  let message = "";
  let imagePath = "";
  const provinsi = userInput.toLowerCase();

  if (provinsi === "jakarta") {
    message = "TMII, Ancol, Monas, Kota Tua, Ragunan.";
    imagePath = "images/jakarta.png";
  } else if (provinsi === "jawa barat") {
    message = "Kawah Putih, Tangkuban Perahu, The Lodge Maribaya, Situ Patenggang, Green Canyon.";
    imagePath = "images/jawabarat.png";
  } else if (provinsi === "jawa tengah") {
    message = "Borobudur, Dieng, Lawang Sewu, Umbul Ponggok, Kota Lama Semarang.";
    imagePath = "images/jawatengah.png";
  } else if (provinsi === "jawa timur") {
    message = "Bromo, Jatim Park, Papuma, Safari Prigen, Tumpak Sewu.";
    imagePath = "images/jawatimur.png";
  } else if (provinsi === "banten") {
    message = "Ujung Kulon, Anyer, Sangiang, Carita, Tanjung Lesung.";
    imagePath = "images/banten.png";
  } else if (provinsi === "bali") {
    message = "Tanah Lot, Kuta, Ubud, Besakih, Taman Ayun.";
    imagePath = "images/bali.png";
  } else {
    message = "Maaf, provinsi tidak dikenali. Coba lagi.";
  }

  appendMessage("bot", message);

  if (imagePath !== "") {
    appendImage(imagePath, provinsi);
  }

  inputField.value = "";
}
