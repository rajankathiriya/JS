var i=0;

function timedCount() {
    i=i+1;
    
    fetch("https://6413fcaf844a8032dc1183ac.mockapi.io/api/v1/movie").
    then(y=>y.json())
    .then(y=> {
        postMessage(y.length);
    })
    setTimeout("timedCount()", 1500);
}

timedCount();