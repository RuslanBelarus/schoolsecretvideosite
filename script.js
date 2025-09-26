whitelist = new Array("37.213.160.172", "37.214.19.180"); //Ilya++
global_ip = ""
function setIpLabel(send) {
  if (send) { document.getElementById("iplabel").textContent=global_ip; }
  else if (!send) { document.getElementById("iplabel").textContent='**************'; }
}
function pageJoin(ip) {
  accept = false;
  for (var i = 0; i <= whitelist.length; i++) {
    if (ip == whitelist[i]) {
      accept = true;
      console.log(whitelist, ip);
    }
  }
  if (!accept) {
    while (true) { alert("Ошибка запроса ip. Вы не состоите в белом списке."); }
  }
}
function buffer(ip) {
  global_ip = ip;
  if (ip == 'err') {
    while (true) { alert("Ошибка запроса ip. Ip не найден."); }
  } else {
    pageJoin(ip)
  }
}
function videoLoader(val) {
  for (var i = 1; i <= val; i++)
    document.write('<video src="video' + i + '.mp4" controls></video>');
}
fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => { buffer(data.ip); })
  .catch(err => buffer("err"));

videoLoader(5)





