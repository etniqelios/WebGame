
// VARIABLES
let play_button = document.getElementById('playgame');
let game_browser = document.getElementById('game-browser');
let download_button = document.getElementById('download');
let close_game_window = document.getElementById('close-game-window');
let isGameBrowserActive = false;




let download_section = document.getElementById('entry-download');
let close_download_window = document.getElementById('close-download-window');

let snd_dh = new Audio('audio/hover_download.wav'); // buffers automatically when created
let snd_db = new Audio('audio/download.wav')
let snd_i = new Audio('audio/click.wav');
let snd_deny = new Audio('audio/deny.wav');
let snd_sel_bt = new Audio('audio/select_button.wav');

snd_db.volume = 0.05;
snd_dh.volume = 0.05;
snd_i.volume = 0.05;
snd_deny.volume = 0.05;
snd_sel_bt.volume = 0.05;


// DOWNLOAD SECTION SOUNDS
download_button.addEventListener('mouseover', (e) => {
    snd_dh.play();
});

play_button.addEventListener('mouseover', (e) => {
    if (!isGameBrowserActive){
        snd_dh.play();
    }
});

close_game_window.addEventListener('mouseover', (e) => {
    snd_sel_bt.play();
});

close_game_window.addEventListener('click', (e) => {
    snd_i.play();
    play_button.classList.remove("button-disabled")
    play_button.classList.add("button-enabled")
    game_browser.classList.add("close-game-animation")
    isGameBrowserActive = false;
});


play_button.addEventListener('click', (e) => {

    if (!isGameBrowserActive){
        snd_i.play();
        play_button.classList.remove("button-disable-animation")

        game_browser.classList.remove("close-game-animation")
        download_section.style.display = "none"
        game_browser.style.display = "block"
        isGameBrowserActive = true;
        play_button.classList.remove("button-enabled")
        play_button.classList.add("button-disable")
    } else {
        snd_deny.play();
        play_button.classList.remove("button-disable-animation")
        void play_button.offsetWidth; // Force reflow
        play_button.classList.add("button-disable-animation")
    }
});


close_download_window.addEventListener('click', (e) => {
    snd_i.play();
    download_section.style.display = "none"
});

download_button.addEventListener('click', (e) => {
    download_section.style.display = "block"
    snd_db.play();
});


// VARIABLES
let _Click_moreInformation = document.getElementById('click_toShowMoreInformation')
let moreInformation = document.getElementById('more-information')
let _Show_moreInformation = document.getElementById('information-content')
let showInformationBool = false;
// LISTER SECTION INFORMATION SOUNDS




_Click_moreInformation.addEventListener('click', (e) => {
    snd_i.play();
    if (!showInformationBool) {
        moreInformation.style.height = "auto";
        _Show_moreInformation.style.display = "block";
        showInformationBool = true;
    } else {
        moreInformation.style.height = "40px";
        _Show_moreInformation.style.display = "none";
        showInformationBool = false;
    }
});

// VARIABLES
let _Click_links = document.getElementById('click_toShowLinks')
let links = document.getElementById('show-links')
let _Show_links = document.getElementById('links-content')
let showLinksBool = false;

// LISTER SECTION LINKS SOUNDS


_Click_links.addEventListener('click', (e) => {
    snd_i.play();
    if (!showLinksBool) {
        links.style.height = "auto";
        _Show_links.style.display = "block";
        showLinksBool = true;
    } else {
        links.style.height = "40px";
        _Show_links.style.display = "none";
        showLinksBool = false;
    }
});