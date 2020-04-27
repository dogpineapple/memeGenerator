const form = document.querySelector('form');
const section = document.querySelector('#meme-collection');

// Once submitted, create the meme with the provided information.
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const imageURL = document.querySelector('#imageURL').value;
    const topText = document.querySelector('#topText').value;
    const bottomText = document.querySelector('#bottomText').value;

    if(imageURL.length === 0) return alert("Please add an image URL.");
   
    const wrapper = document.createElement('div');
    const memeDiv = document.createElement('div');
    const image = document.createElement('img');
    const top = document.createElement('div');
    const bottom = document.createElement('div');
    const deleteIcon = document.createElement('img');
    const deleteButton = document.createElement('button');

    memeDiv.className = "meme";
    top.className = "text";
    bottom.className = "text";
    wrapper.className = 'wrapper';
    deleteButton.className = 'delete';
    image.setAttribute('src', imageURL);
    image.setAttribute('class', 'memeImage')
    top.setAttribute('id', 'top');
    bottom.setAttribute('id', 'bottom');
    deleteIcon.setAttribute('src', 'https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/14965250021536572523-256.png');

    top.innerText = topText.toUpperCase();
    bottom.innerText = bottomText.toUpperCase();

    deleteButton.append(deleteIcon);
    wrapper.append(top, bottom, deleteButton);
    memeDiv.append(image, wrapper);
    section.append(memeDiv);
    console.log(section);

    // Clears textfield after submitting the meme info. 
    const textFields = document.querySelectorAll('input');
    for (var i=0; i<textFields.length-1; i++) {
        textFields[i].value = "";   
    }    
}); 

section.addEventListener('click', function(event) {
    const btns = document.querySelectorAll('.delete');
    for (var btn of btns) {
        if (event.target.parentElement === btn) {
            event.target.parentElement.parentElement.parentElement.remove();
        }
    }   
});

const scrollBtn = document.querySelector('.scroll-up');

// When the scroll button is clicked, the page will return to the top. 
scrollBtn.addEventListener('click', function(event) {
    document.documentElement.scrollTop = 0;
});

