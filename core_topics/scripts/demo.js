var outobj={}
outobj.show = function(){
    console.log('hello')
}

outobj.addHeader = function(){
    var headerElement = document.createElement('h1')
    headerElement.textContent="Javascript Ninja"
    var headerRef = document.getElementById('header')
    headerRef.appendChild(headerElement)
}

outobj.trial = function(arg){
    return function(){
        console.log("Click Event");
        var imgElement = document.createElement("img")
        var imageRef = './images/' + arg + '.jpg';

        imgElement.setAttribute('src', imageRef);

        var headRef = document.getElementById("header");
        headRef.appendChild(imgElement)
        var shown = document.querySelector('#shwBtn')
        shown.setAttribute("style","display:none");

    }
   

}
outobj.addImage =  function(){
    var btnElement = document.querySelector('button')
    btnElement.addEventListener('click', function(){
        console.log("Click Event");
    })

}

outobj.addImageTrial =  function(){
    var btnElement = document.querySelector('button')
    //while using this we need not to pass function , but it would not wait for event to occur
    //it will call automatically , but we need to call this when i want to trigger the event 
    btnElement.addEventListener('click', outobj.trial('menu'));

}

outobj.show();
outobj.addHeader();
outobj.addImage();
outobj.addImageTrial();
