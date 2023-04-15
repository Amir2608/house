let btn = document.querySelector('button');
let frm = document.querySelector('form');

let cond = true;


btn.addEventListener('click', function(){
    if(cond == true){
        frm.style.display='flex';
        cond = false;
    }
    else{
        frm.style.display='none';
        cond = true;
    }
})


let arr__btn = document.querySelectorAll('.set__btn');
let ads = document.querySelector('.adss');


arr__btn[0].addEventListener('click', function(){
    this.classList.remove('dis');
    this.classList.add('active');
    arr__btn[2].classList.remove('active');
    arr__btn[2].classList.add('dis');
    arr__btn[1].classList.remove('active');
    arr__btn[1].classList.add('dis');
    ads.innerHTML = '<div class="ads1"><div class="ads__left"><img class="left__img" src="images/ads_imgg.jpg" alt=""></div><div class="ads__annonc"><h1>Apartament</h1><p>Address : St. Mark’s Place Contact : +1 876-125-6767 Price : 189.000$</p><button class="ads__btnw"> <b>Write</b></button><button class="ads__btn"><b>Buy</b></button></div></div><div class="ads__annon"><div class="ads__annonn"><h1>Villa</h1><p>Address : St. Los Contact : +1 912-287-1902 Price : 260.000$</p><button class="ads__btnw1"><b>Write</b></button><button class="ads__btn1"><b>Buy</b></button></div><div class="ads__left"><img src="images/ads_imggg.jpg" alt="" class="annon__img"></div></div><div class="ads1"><div class="ads__left"><img class="left__img" src="images/ann.png" alt=""></div><div class="ads__annonc"><h1>Vacation house</h1><p>Address : St. Mark’s Place Contact : +1 876-125-6767 Price : 189.000$</p><button class="ads__btnw"> <b>Write</b></button><button class="ads__btn"><b>Buy</b></button></div></div><div class="ads__annon"><div class="ads__annonn"><h1>Villa</h1><p>Address : St. Los Contact : +1 912-287-1902 Price : 260.000$</p><button class="ads__btnw1"><b>Write</b></button><button class="ads__btn1"><b>Buy</b></button></div><div class="ads__left"><img src="images/ann2.png" alt="" class="annon__img"></div></div>'
})

arr__btn[1].addEventListener('click', function(){
    this.classList.remove('dis');
    this.classList.add('active');
    arr__btn[0].classList.remove('active');
    arr__btn[0].classList.add('dis');
    arr__btn[2].classList.remove('active');
    arr__btn[2].classList.add('dis');
    ads.innerHTML = '<div class="ads1"><div class="ads__left"><img class="left__img" src="images/ads_imgg.jpg" alt=""></div><div class="ads__annonc"><h1>Apartament</h1><p>Address : St. Mark’s Place Contact : +1 876-125-6767 Price : 189.000$</p><button class="ads__btnw"> <b>Write</b></button><button class="ads__btn"><b>Buy</b></button></div></div><div class="ads__annon"><div class="ads__annonn"><h1>Villa</h1><p>Address : St. Los Contact : +1 912-287-1902 Price : 260.000$</p><button class="ads__btnw1"><b>Write</b></button><button class="ads__btn1"><b>Buy</b></button></div><div class="ads__left"><img src="images/ads_imggg.jpg" alt="" class="annon__img"></div></div>'
})

arr__btn[2].addEventListener('click', function(){
    this.classList.remove('dis');
    this.classList.add('active');
    arr__btn[0].classList.remove('active');
    arr__btn[0].classList.add('dis');
    arr__btn[1].classList.remove('active');
    arr__btn[1].classList.add('dis');
    ads.innerHTML = '<div class="ads1"><div class="ads__left"><img class="left__img" src="images/ann.png" alt=""></div><div class="ads__annonc"><h1>Vacation house</h1><p>Address : St. Mark’s Place Contact : +1 876-125-6767 Price : 189.000$</p><button class="ads__btnw"> <b>Write</b></button><button class="ads__btn"><b>Buy</b></button></div></div><div class="ads__annon"><div class="ads__annonn"><h1>Villa</h1><p>Address : St. Los Contact : +1 912-287-1902 Price : 260.000$</p><button class="ads__btnw1"><b>Write</b></button><button class="ads__btn1"><b>Buy</b></button></div><div class="ads__left"><img src="images/ann2.png" alt="" class="annon__img"></div></div>'
})



