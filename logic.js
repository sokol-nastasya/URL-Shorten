const userLink = document.getElementById('yourUrl');
const form = document.getElementById('form');
const resultUrls = document.getElementById('resultUrl');
const obj = {};
const buttonSbmt = document.getElementById('submitBtn');


const urlShortener = (longUrl = '') => {
    let shortUrl = 'shortly.ua/' + longUrl.replace(/[^a-z]/g, '').slice(-4);
    if(!obj[shortUrl]) {
        obj[shortUrl] = longUrl;
    };
    return shortUrl;
}

const urlRedirect = (shortUrl = '') => {
    return obj[shortUrl];
    
};

function CreateNewElement(urlVal, expectVal) {
    let link = document.createElement('li');
    let anchor = document.createElement('a');

    anchor.setAttribute('href', expectVal);
    anchor.textContent = urlVal;
    anchor.setAttribute('target', '_blanck');

    link.className = 'output';

    link.appendChild(anchor)
    resultUrls.appendChild(link);
};

buttonSbmt.addEventListener('click', function(e){
    e.preventDefault();
    let userValue = userLink.value;

    const short = urlShortener(userValue);
    const original = urlRedirect(short);

    if (obj[short]) {
        CreateNewElement(short, original);
    } else {
        console.log("Short URL doesn't exist")
    }
    
    
    
});

