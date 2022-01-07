window.onload = function(){
    var img = document.getElementById("popcat1");
    var count = document.getElementById("score");
    var score = 0;
    var audio = new Audio("pop_.mp3");

    img.addEventListener('mousedown',function(){
        increaseScore();
        img.src = '1.jpg';
        audio.play();
    });

    img.addEventListener('mouseup',function(){
        img.src = '2.jpg';
});

    function increaseScore(){
        score++;
        count.innerHTML = score;
    }
}