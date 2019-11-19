// BACKGROUND SELECTION
var textArr = ['Hilly Terrain', 'Midnight City', 'Desert Plains', 'Ranger Forest'];
var imageArray = new Array('Resources/background.jpg', 'Resources/background2.png', 'Resources/background3.jpg', 'Resources/background4.png');

var i = 0;
var img = 0;
document.getElementById('output').textContent = textArr[0];
document.getElementsByTagName('body')[0];
function Next() {
    i += 1; // increase i by one
    img += 1;
    i = i % textArr.length; // if we've gone too high, start from `0` again
    img = img % imageArray.length;
    document.getElementById('output').textContent = textArr[i];
    document.body.style.backgroundImage = "url('"+ imageArray[img]+"')";
  return imageArray[img]; // returns the current item of where we are now
}

function Previous() {
    if (i === 0) { // i would become 0
        i = textArr.length; // so put it at the other end of the array
        img = imageArray.length;
    }
    i -= 1; // decrease by one
    img -= 1;
    document.getElementById('output').textContent = textArr[i];
    document.body.style.backgroundImage = "url('"+ imageArray[img]+"')";
    return imageArray[img]; // returns the current item of where we are now
}