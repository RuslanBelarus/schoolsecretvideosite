var ipList = new Array("37.214.4.223", "37.213.145.164", "37.214.16.40");
var verifPressed = false;
var betaMod = false;

function videoLoader(val) {
	var str = "";
	for (var i = 1; i < val; i++) {
		str = str + '<video src="source/video' + i + '.mp4" controls></video>';
	}
	return str
}

function getId(id) {
	alert(id);
}

function pageLoad() {
	document.getElementById('wml').remove();
	document.getElementById('wmd').remove();
	document.getElementById('wmb').remove();
	document.getElementById('label').textContent = 'Заметки котакбаса';
	document.getElementById('sublabel').textContent = 'уникальные видео';
	document.getElementById('chapter').textContent = 'Важно';
	document.getElementById('chapter').style.color = 'red';
	document.getElementById('describe').textContent = 'Снятие и распростаранение данных видео автор данной платформы не поддерживает. Как же, как и их происходящее. Видео сняты и выложены с разрешения участвующих в них лиц.';
	document.getElementById('dsc').innerHTML = 'Операторы: <button onclick=\'alert("Discord: 0lalka0")\'>Dreamer</button> <button onclick=\'alert("Discord: dr.dexideb")\'>Lixpan4ik</button> <button onclick=\'alert("Discord: alexvern324")\'>_AlexMain_</button> Создатель: <button onclick=\'alert("Discord: dr.dexideb")\'>Lixpan4ik</button>';
	document.getElementsByClassName('hr')[0].innerHTML = '<hr>';
	document.getElementsByClassName('hr')[1].innerHTML = '<hr>';
	document.getElementsByClassName('hr')[2].innerHTML = '<hr>';
	document.getElementById('videos').innerHTML = videoLoader(11);

}

function betaIp() {
	document.getElementById('wml').textContent = 'IP verifing';
	document.getElementById('wmd').textContent = 'Сайт в разработке';
	document.getElementById('wmd').style.color = 'darkred';
	document.getElementById('wmb').remove();
	console.log(document.getElementById('wmd').textContent);
}

function suffecultIp() {
	document.getElementById('wml').textContent = 'IP verifing';
	document.getElementById('wmd').textContent = 'Ваш IP подтвержден';
	document.getElementById('wmd').style.color = 'green';
	document.getElementById('wmb').textContent = 'Загрузить страницу';
	console.log(document.getElementById('wmd').textContent);
}

function cancelIp() {
	document.getElementById('wml').textContent = 'IP verifing';
	document.getElementById('wmd').textContent = 'Ваш IP не подтвержден';
	document.getElementById('wmd').style.color = 'red';
	document.getElementById('wmb').remove();
	console.log(document.getElementById('wmd').textContent);
}

function verifIp2(ip) {
	var ver = false;
	for (var i = 0; i <= ipList.length; i++) {
		console.log(ipList[i]);
		if (ip == ipList[i]) {
			suffecultIp();
			ver = true;
		}
	}
	if (!ver) {
		cancelIp();
	}
}

function verifIp() {
	fetch('https://api.ipify.org?format=json')
		.then(response => response.json())
		.then(data => {
			verifIp2(data.ip);
		})
		.catch(error => {
			cancelIp();
		});
}

function buttonBuffer() {
	if (!betaMod) {
		if (verifPressed) {
			pageLoad();
		} else {
			verifPressed = true;
			verifIp();
		}
	} else {
		betaIp();
	}


}
