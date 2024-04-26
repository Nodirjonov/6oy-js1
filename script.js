const myclock = ()=>{
const time = new Date();
const hour = time.getHours();
const minute = time.getMinutes();
const seconds = time.getSeconds();

const clock = document.querySelector('h1');

clock.textContent= `${hour}:${minute}:${seconds}`
}
myclock();


setInterval(()=>{
    myclock();
},1000);

// const h1 = document.querySelector("h1");
// let sec = 0;
// let min = 0;
// let hours =0

// const myclock=()=> {
//     sec++;
//     if (sec > 59) {
//         sec = 0;
//         min++;
//     }
//     else if(min>59){
//         min=0;
//         hours++;
//     }
//     else if(hours>23){
//         hours=0;
//         min=0;
//         sec=0
//     }
//     h1.innerHTML=`${hours}:${min}:${sec}`
// }

// setInterval(() => {

//     myclock();
// }, 1000);
