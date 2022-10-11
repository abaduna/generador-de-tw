"use strict";
function createMainTw() {
    const id = self.crypto.randomUUID();
    const tweet = createtwitt();
    return {
        id,
        tweets: [tweet]
    };
}
function createtwitt() {
    const id = crypto.randomUUID();
    const mensaje = "";
    return {
        id,
        mensaje
    };
}
function renderview(tweetView) {
    var _a;
    let view = document.querySelector("#container" + tweetView.id);
    if (view) {
        view.innerHTML = "";
    }
    else {
        view = document.createElement("div");
        view.id = "contariner-" + tweetView.id;
        view.classList.add("maincontainer");
        (_a = document.querySelector("#tweets")) === null || _a === void 0 ? void 0 : _a.append(view);
    }
    for (let i = 0; i < tweetView.tweets.length; i++) {
        //renderTweet()
        renderTweet(tweetView, view, tweetView.tweets[i], i === tweetView.tweets.length - 1);
    }
}
function renderTweet(tweetView, view, tweet, last) {
    const tweetContainer = document.createElement("div");
    tweetContainer.id = "container-" + tweet.id;
    tweetContainer.classList.add("tweetContainer");
    const form = document.createElement("form");
    form.id = "form-" + tweet.id;
    tweetContainer.appendChild(form);
    const textarea = document.createElement("textarea");
    textarea.id = tweet.id;
    textarea.value = tweet.mensaje;
    textarea.maxLength = 240;
    const buttonAddMore = document.createElement("button");
    buttonAddMore.classList.add("button", "btn-new");
    buttonAddMore.value = "añada otro tw";
    buttonAddMore.append(document.createTextNode("añadir otro tw"));
    const counterContainer = document.createElement("div");
    counterContainer.classList.add("counterContainer");
    //lisenere
    buttonAddMore.addEventListener("click", e => {
        e.preventDefault();
        const anotttwitt = createtwitt();
        tweetView.tweets.push(anotttwitt);
        renderview(tweetView);
    });
    textarea.addEventListener("input", e => {
        const value = e.target.value;
        counterContainer.textContent = value.length.toString() + "/250";
        updatwit(tweetView, tweet, value);
    });
    form.append(textarea, counterContainer);
    if (last) {
        form.appendChild(buttonAddMore);
    }
    view.appendChild(tweetContainer);
}
function updatwit(tweetView, tweet, value) {
    let ref = null;
    for (let index = 0; index < tweetView.tweets.length; index++) {
        const t = tweetView.tweets[index];
        if (t.id === tweet.id) {
            ref = t;
        }
    }
    if (ref) {
        ref.mensaje = value;
    }
}
const btnnew = document.querySelector(".btnnew");
const twestCOntainer = document.querySelector("#twittes");
const twestDate = [];
btnnew.addEventListener("clik", e => {
    e.preventDefault();
    const newTeitView = createMainTw();
    renderview(newTeitView);
});
