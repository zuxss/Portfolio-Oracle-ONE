//update this with your js_form selector
var form_id_js = "email_form";

var data_js = {
  access_token: "82y6jww0imwganifscxlrssf",
};

var sendButton = document.getElementById("enviar-button");

function js_send() {
  sendButton.value = "Enviando...";
  sendButton.disabled = true;
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      sendButton.value = "Mensaje Enviado";
    } else if (request.readyState == 4) {
      sendButton.value = "Error";
    }
  };

  var subject = document.querySelector(
    "#" + form_id_js + " [name='subjecto']"
  ).value;
  var message = document.querySelector(
    "#" + form_id_js + " [name='texto']"
  ).value;
  data_js["subject"] = subject;
  data_js["text"] = message;

  var params = toParams(data_js);

  request.open("POST", "https://postmail.invotes.com/send", true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  request.send(params);

  return false;
}

sendButton.onclick = js_send;

function toParams(data_js) {
  var form_data = [];
  for (var key in data_js) {
    form_data.push(
      encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key])
    );
  }

  return form_data.join("&");
}

var js_form = document.getElementById("email_form");
js_form.addEventListener("submit", function (e) {
  e.preventDefault();
});
