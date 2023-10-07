var item=document.getElementsByClassName('item'); // بتمثل الصور 
var slide=document.getElementById('slide');  // يمثل الشاشة السوداء الي بتطلع
var slideItem=document.getElementById('slide-item');  //عناصر الشاشة الي بتمثل الرقم والصورة
var next=document.getElementById("next");
var prev=document.getElementById('prev');
var close=document.getElementById('close')
// console.log(item.length);
var index=0;
var imgs=item.length

for(var i=0;i<imgs;i++){    //click عمل لوب على الصور الي عندي مشان اعمل فنكشن يتفذ في حالة حدوث 

    item[i].addEventListener('click',function(e){  // e  ==> بمثل العنصر الي ضغط عليه
        // e.target  ==> بجيب العنصر الي كبست عليه
        var ele=e.target.parentNode;// بجيب الاب  
        var currentIndex=Array.from(item).indexOf(ele);
        var imag=e.target.src; // src للصورة الي كبست عليها
        // console.log(slideItem.childNodes[3]);//بس انا بدي اوصل الرقم والصورة slide-item بجيب الابن انا واصل وماسك 
        // العنصر 3 يمثل الصورة
        slideItem.childNodes[3].setAttribute('src',imag);
        var x=currentIndex+1+"/"+imgs
        slideItem.childNodes[1].innerHTML=x;
        slide.classList.add('active');  // يدي اعطيه خاصية اكتبف وبالتالي يظهر
        // console.log(slide)
        index=currentIndex;
    }) 
    
    
}
close.addEventListener('click',function(){
    slide.classList.remove('active')
})


function changeImg(i){  // i بتمثل القيمة الي بدي اظهرها
    if(i>=imgs){  // بدي اعمل زي حلقة لما اوصل اخر عنصر يروح لاول عنصر
        index=0;
    }else if(i<0){
        index=imgs-1;
    }else{
        index=i;
    }
    // console.log(index);
    let imag=item[index].childNodes[1].getAttribute('src');  // بدي اغير الرقم
    // var y=(index+1)+"/"+imgs
    var y=`${index+1}/${imgs}`
    slideItem.childNodes[1].innerHTML=y;
    // console.log(slideItem.)
    slideItem.childNodes[3].setAttribute('src',imag);
}

next.addEventListener('click',function(){
    changeImg(index+1);
})

prev.addEventListener('click',function(){
    changeImg(index-1);
})

document.onkeydown=function(e){  // لما اكبس 
//    console.log(e.key);
   if(e.key=='ArrowRight'){  //وتكون قيمته هيك e لما يكون اكبس على 
      next.click(); //next روح اكبس على 
   }else if(e.key=='ArrowLeft'){
    prev.click();   
   }
   else if(e.key=='Escape'){
    close.click();
   }
}