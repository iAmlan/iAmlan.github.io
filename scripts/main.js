var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bdayinvite.jpg') {
      myImage.setAttribute ('src','images/bdaycake.jpg');
    } else {
      myImage.setAttribute ('src','images/bdayinvite.jpg');
    }
}

