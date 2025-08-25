
// VARIABLES
let download_button = document.getElementById('mouseover-download')


let download_section = document.getElementById('entry-download');
let close_download_window = document.getElementById('close-download-window');

let snd_dh = new Audio('audio/hover_download.wav'); // buffers automatically when created
let snd_db = new Audio('audio/download.wav')
let snd_i = new Audio('audio/click.wav'); // buffers automatically when created

snd_db.volume = 0.05;
snd_dh.volume = 0.05;
snd_i.volume = 0.05;


// DOWNLOAD SECTION SOUNDS
download_button.addEventListener('mouseover', (e) => {
    snd_dh.play();
});

close_download_window.addEventListener('click', (e) => {
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