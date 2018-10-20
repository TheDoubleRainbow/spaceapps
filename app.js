var express = require('express');
var bodyParser = require('body-parser');
var fetch = require('node-fetch');

var admin = require("firebase-admin");

var serviceAccount = require("./spaceapps-717b2-firebase-adminsdk-awch5-bd19764c3a");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://spaceapps-717b2.firebaseio.com"
});

const db = admin.database();

//db.ref("debug").push("test")

var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/felix/dist'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/cron', async (req, res) => {
    //const launches = await (await fetch('https://launchlibrary.net/1.4/launch/next/20')).json().data
    //console.log(launches[0]);
    const launches = (await (await fetch('https://launchlibrary.net/1.4/launch/next/50')).json()).launches;
    let launch = launches[getRandomInt(0, launches.length)];
    let description = (launch.missions[0] || {description: ""}).description;
    let text = `<b>Do not miss upcoming launch</b>\n
    <a href="https://space-apps.herokuapp.com/#/launch/${launch.id}">${launch.name}</a>\n
    <i>${description}</i>
    ${launch.hashtag || ""}
    <a href="${launch.rocket.imageURL}">photo</a>`
    return bot.sendMessage("@felix_space", text, {parse_mode: "HTML", disable_web_page_preview: false});   

})

//<code>inline fixed-width code</code>
//<pre>pre-formatted fixed-width code block</pre>

// async function func() {
//     const launches = (await (await fetch('https://launchlibrary.net/1.4/launch/next/50')).json()).launches;
//     let launch = launches[getRandomInt(0, launches.length)];
//     let description = (launch.missions[0] || {description: ""}).description;
//     let text = `<b>Do not miss upcoming launch</b>\n
//     <a href="https://space-apps.herokuapp.com/#/launch/${launch.id}">${launch.name}</a>\n
//     <i>${description}</i>
//     ${launch.hashtag || ""}
//     <a href="${launch.rocket.imageURL}">photo</a>`
//     return bot.sendMessage("@felix_space", text, {parse_mode: "HTML", disable_web_page_preview: false});   
// }
// func();

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});

var TelegramBot = require('node-telegram-bot-api');

// Устанавливаем токен, который выдавал нам бот.
var token = '765648997:AAE2Wcn8brYcKevs77zxPEUozmhwPCIzaX4';
// Включить опрос сервера
var bot = new TelegramBot(token, {polling: true});

// Написать мне ... (/echo Hello World! - пришлет сообщение с этим приветствием.)
bot.onText(/\/echo (.+)/, function (msg, match) {
    console.log(msg);
    var fromId = msg.from.id;
    var resp = match[1];
    bot.sendMessage(fromId, resp);
});

//bot.sendMessage("@felix_space", "Кусь!");

//Простая команда без параметров.
bot.on('message', function (msg) {
    console.log(msg);
    var chatId = msg.chat.id;
    // Фотография может быть: путь к файлу, поток(stream) или параметр file_id
    // var photo = 'cats.png';
    // bot.sendPhoto(chatId, photo, {caption: 'Милые котята'});
    bot.sendMessage(chatId, chatId);
});

bot.on('channel_post', function (msg) {
    console.log(msg);
    var chatId = msg.chat.id;
    // Фотография может быть: путь к файлу, поток(stream) или параметр file_id
    // var photo = 'cats.png';
    // bot.sendPhoto(chatId, photo, {caption: 'Милые котята'});
    bot.sendMessage(chatId, chatId);
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}