const rootEl = document.getElementById('root');
rootEl.style.display = 'flex'
rootEl.style.flexDirection = 'column';
rootEl.style.alignItems = 'center';
rootEl.style.backgroundColor = '#b8cfe2'
rootEl.style.height = '100%';


const header = document.createElement('h1');
header.innerText = 'Jeremy Marx';

const portraitPhoto = document.createElement('img');
portraitPhoto.src = './portraitPhoto.jpg';
portraitPhoto.alt = 'portrait photo';
portraitPhoto.width = 200;
portraitPhoto.height = 200;

const bio = document.createElement('p');
bio.innerText =
    'After several years of freelance music performance and instruction in the New Orleans area, I have begun my journey as a JavaScript Web Developer. I have completed the curriculum of Web Development on Codecademy, gone through the bootcamp phase of the program at Operation Spark, and recently completed the JavaScript App Development course at Tech Talent South. ';
bio.style.margin = '25px';
const contactButton = document.createElement('button');
contactButton.innerText = 'Contact Me'
contactButton.style.height = '50px';
contactButton.style.width = '100px';
contactButton.onclick = function() {
    console.log('button clicked')
}

rootEl.append(header);
rootEl.append(portraitPhoto);
rootEl.append(bio);
rootEl.append(contactButton);
