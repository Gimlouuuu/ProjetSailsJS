document.querySelector('body').onload = init;

const pageTitle = document.getElementsByTagName('title')[0];
const name = 'Remy Aune';
const horloge = document.getElementById("horloge");

function hour() {
    var date = new Date();
    return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}

function init() {
    defTitre3();
    datemodif();
    horloge.innerHTML = hour();
}

function defTitre1() {
    var title = document.getElementById('titre');
    pageTitle.innerHTML = title.innerHTML;
}

function defTitre2() {
    var mes_h2 = document.getElementsByTagName('h2');
    mes_h2[0].innerText = "defTitre 2"
}

function defTitre3() {
    var mes_h2 = document.getElementsByTagName('h2');
    mes_h2[mes_h2.length-1].innerText = "defTitre 3"
}

function defTitre4() {
    var tags = document.querySelectorAll('.firstOfLast');

    if (tags.length === 0) {
        pageTitle.innerHTML = name;
    } else if (tags.length % 2 === 0) {
        // pair
        pageTitle.innerHTML = tags[0].innerHTML;
    } else {
        pageTitle.innerHTML = tags[tags.length - 1].innerHTML;
    }
}

function inverseTexte() {
    var tags = document.getElementsByTagName('p');
    var temp = tags[0].innerHTML;
    tags[0].innerHTML = tags[1].innerHTML;
    tags[1].innerHTML = temp;
}

function datemodif() {
    var days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    var months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

    var authors = document.querySelectorAll('meta[name=author]');

    if (authors.length === 0) {
        return;
    }
    var author = authors[0];

    var text = 'Dernière modification le {date} par ' + author.content;

    var curDate = new Date();
    let dateStr = days[curDate.getDay()]
        + ' ' + curDate.getDate()
        + ' ' + months[curDate.getMonth()]
        + ' ' + curDate.getFullYear();

    var res = text.replace('{date}', dateStr);
    document.getElementById('date_modif').innerHTML = res;
}

document.getElementById("nbJours").addEventListener('click', function (ev) {
    var target = ev.target;
    var currDate = new Date();
    var oldDate = new Date('2019-01-30');

    var diff = oldDate.getTime() - currDate.getTime();
    target.innerHTML = target.innerHTML.replace("....", Math.round(diff / 86400000));
});

function majHorloge1() {
    horloge.innerHTML = hour();
}
setInterval(majHorloge1, 200);

function majHorloge2() {
    horloge.innerHTML = hour();
}
setTimeout(majHorloge2, 1000);

function majGrafH() {
    var node = document.getElementById("grafHorloge");
    let currHour = hour();
    var chars = currHour.split('');

    node.innerHTML = '';
    for (var c in chars) {
        if (chars[c] === ':') {
            node.innerHTML += ':';
        } else node.innerHTML = node.innerHTML
            .concat('<img src="images/' + chars[c] + '.gif" />');
    }
}

function menu() {
    
}