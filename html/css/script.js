var slides = document.querySelector('.slides'),
slide = document.querySelectorAll('.slides li'),
currentIdx = 0 ,
slideWidth = 390,
slideMargin = 2,
slideCount = slide.length, 
dotFirstBtn = document.querySelector('.dotFirst'),
dotSecondBtn = document.querySelector('.dotSecond'),
dotThirdBtn = document.querySelector('.dotThird');

slides.style.width = ((slideWidth + slideMargin) * slideCount - slideMargin) * 5 + 'px';
for (var i =0; i<3;i++){
    makeClone();
    console.log('dd')
}

function updateWidth(){
    var currentslides = document.querySelectorAll('.slides li')
    var newSlideCount = currentslides.length
    slides.style.width = ((slideWidth + slideMargin) * newslideCount - slideMargin) * 3 + 'px';

}


function moveSlide(num){
    
    slides.style.left = -num * (slideWidth + slideMargin) + 'px';
}

function makeClone(){
    for(var i = 0; i<slideCount; i++){
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.appendChild(cloneSlide);
    }
    //updateWidth();
}

btnList = [dotFirstBtn, dotSecondBtn, dotThirdBtn]
dotFirstBtn.style.backgroundColor = 'black';

dotFirstBtn.addEventListener('click', function(){
    for (idx = 0; idx < btnList.length; idx ++){
        if (idx == 0){
            btnList[idx].style.backgroundColor = 'black';
            continue
        }
        btnList[idx].style.backgroundColor = '#bbb';

    }
    moveSlide(0);
});
dotSecondBtn.addEventListener('click', function(){
    for (idx = 0; idx < btnList.length; idx ++){
        if (idx == 1){
            btnList[idx].style.backgroundColor = 'black';
            continue
        }
        btnList[idx].style.backgroundColor = '#bbb';

    }
    dotSecondBtn.style.backgroundColor = 'black';
    moveSlide(1);
    
});
dotThirdBtn.addEventListener('click', function(){ for (idx = 0; idx < btnList.length; idx ++){
    if (idx == 2){
        btnList[idx].style.backgroundColor = 'black';
        continue
    }
    btnList[idx].style.backgroundColor = '#bbb';

}
    dotThirdBtn.style.backgroundColor = 'black';
    moveSlide(2);
});

