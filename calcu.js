let screen=document.getElementById('screen');
button = document.querySelectorAll('button');
for(item of buttons){
    item.addEventListener('click',(e){
        buttonText = e.target.innerText;
        console.log('button text is', buttonText)
    })
}