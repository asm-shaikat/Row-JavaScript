let x = document.getElementById('test');
console.log(x.innerText);
console.log(x.innerHTML);
console.log(x.textContent);

let a = document.getElementById('ob');
let b = a.getElementsByTagName('li');
for(let i=0;i<b.length;i++){
    b[i].style.backgroundColor = 'black';
    b[i].style.color = 'white';
}
