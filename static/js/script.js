function AgeInDays() {
    var YourYearBirth = prompt('Your Year of Birth');
    var AgeInDayss = (2021 - YourYearBirth) * 365;
    console.log(AgeInDayss);
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + AgeInDayss+ 'days')
    h1.setAttribute('id', 'Age');
    h1.appendChild(textAnswer);
    document.getElementById('result').appendChild(h1);
    
   
     

}
function Restore() {
    document.getElementById('Age').remove();
    
}

function CatGen() {

    var imgs = document.createElement('img');
    var td = document.getElementById('images');
    imgs.src= "https://cdn2.thecatapi.com/images/3v7.gif ";
    td.appendChild(imgs);
}





 
