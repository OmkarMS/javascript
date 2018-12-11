new Promise(function(resolve, reject){
    var img = document.createElement('img');
    img.src = 'image.jpg';
    img.onload = resolve;
    img.onerror = reject;
    document.body.appendChild(img);
}).then(finishLoading).catch(showAlternateImage);