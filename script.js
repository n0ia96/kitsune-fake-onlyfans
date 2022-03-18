function clickToCopy() {    
    /* Get the text field */
    var copyText = document.getElementById("OFLink");

    const sleepSync = (ms) => {
        const end = new Date().getTime() + ms;
        while (new Date().getTime() < end) { /* do nothing */ }
    }
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    const sleep = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

    const toolTip = async() => {
        document.getElementById("tooltiptext").innerHTML = "Link copiado!";
        document.getElementById("tooltiptext").style.cssText ="width:80px;left:-17px;";

        await sleep(900);
        document.getElementById("tooltiptext").innerHTML = "Copiar link para o perfil";
        document.getElementById("tooltiptext").style.cssText ="width:135px;left:-44px;";
    };
    toolTip();
}

window.onload = function() {
    var punho = new XMLHttpRequest();
    punho.open("GET", "https://api.countapi.xyz/get/kitsune.manzl.pt/punhetas");
    punho.responseType = "json";
    punho.onload = function() {
        let punheteiros = fetch("https://api.countapi.xyz/get/kitsune.manzl.pt/punhetas")
        punheteiros.responseType = "json";
        document.getElementById("punheteiros-num").innerHTML = this.response.value;
    }
    punho.send();
}

function onlyfans() {
    window.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ";

    var punho = new XMLHttpRequest();
    punho.open("GET", "https://api.countapi.xyz/hit/kitsune.manzl.pt/punhetas");
    punho.responseType = "json";    
    punho.onload = function() {
        let punheteiros = fetch("https://api.countapi.xyz/get/kitsune.manzl.pt/punhetas")
        punheteiros.responseType = "json";
        document.getElementById("punheteiros-num").innerHTML = this.response.value;
    }
    punho.send();
}

function instagram() {
    window.location.href="https://instagram.com/imkiitsune";
}

function twitter() {
    window.location.href="https://twitter.com/imkiitsune";
}

function twitch() {
    window.location.href="https://twitch.tv/kitsune";
}