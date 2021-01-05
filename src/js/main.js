let x;
let y;
let num = 0;

let mouse = window.addEventListener("click",function(e){
x = e.clientX;
y = e.clientY
})

function random(n, t) {
    return Math.floor(Math.random() * (t - n)) + n
}

    function addSpan(item, num){
        let span = document.createElement("span");
        span.className = "child";
        span.style.left = x + "px",
        span.style.top = y + "px",
        span.innerText = num;
        num % 5 == 0 && (span.style.backgroundColor = "yellow",
        span.style.color = "white");
        item.appendChild(span);
    };

window.addEventListener("click", function(){
    let item = document.createElement("div");
    item.className = "first";
    return num++,
    addSpan(item,num),
    window.onresize = function() {
        let width = window.innerWidth;
        let height = window.innerHeight;
        let tag = document.getElementsByTagName("span");
        for (var i = 0; i < tag.length; i++)
            tag[i].style.left = random(60, width - 60) + "px",
            tag[i].style.top = random(60, height - 60) + "px"
},
    document.body.appendChild(item);
})




