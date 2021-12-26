
/*아이콘 애니메이션*/
var index = 0;
window.onload = function () {
  slideShow();
}

function slideShow() {
  var i;
  var x = document.getElementsByClassName("icon_slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  index++;
  if (index > x.length) {
    index = 1;
  }
  x[index - 1].style.display = "block";
  setTimeout(slideShow, 800);

}

/*nav 색 변환 시키기*/


const n_circle1 = document.querySelector("#n_circle1")
const n_circle2 = document.querySelector("#n_circle2")
const n_circle3 = document.querySelector("#n_circle3")
const n_circle4 = document.querySelector("#n_circle4")
const n_circle5 = document.querySelector("#n_circle5")
const n_circle6 = document.querySelector("#n_circle6")
const allContainer = document.querySelector('.allContainer');




    
  allContainer.addEventListener('scroll', function(){
    console.log(allContainer.scrollTop)

    if (allContainer.scrollTop >= 0) {
      n_circle1.style.backgroundColor = '#FEE010'
      n_circle1.addEventListener('mouseover', function(){
      n_circle1.style.backgroundColor ='#FEE010'
   });
     n_circle1.addEventListener('mouseout', function(){
      n_circle1.style.backgroundColor = '#FEE010'
   });
    }

    if(allContainer.scrollTop <=680){
    n_circle1.addEventListener('mouseover', function(){
      n_circle1.style.backgroundColor ='#FEE010'
   });
     n_circle1.addEventListener('mouseout', function(){
      n_circle1.style.backgroundColor = '#FEE010'
   });
      n_circle2.addEventListener('mouseover', function(){
      n_circle2.style.backgroundColor ='#FEE010'
   });
         n_circle2.addEventListener('mouseout', function(){
      n_circle2.style.backgroundColor = 'white'
   });
      n_circle2.style.backgroundColor = 'white'
    }



    if(allContainer.scrollTop >=680){
      n_circle1.addEventListener('mouseover', function(){
      n_circle1.style.backgroundColor ='#FEE010'
   });
         n_circle1.addEventListener('mouseout', function(){
      n_circle1.style.backgroundColor = 'white'
   });
      n_circle1.style.backgroundColor = 'white'
    }



   
    if (allContainer.scrollTop >=680) {
      n_circle2.style.backgroundColor = '#FEE010'
      n_circle2.addEventListener('mouseover', function(){
      n_circle2.style.backgroundColor ='#FEE010'
   });
     n_circle2.addEventListener('mouseout', function(){
      n_circle2.style.backgroundColor = '#FEE010'
   });
      n_circle2.style.backgroundColor = '#FEE010'
    }

  if(allContainer.scrollTop >=2100){
                  n_circle2.addEventListener('mouseover', function(){
      n_circle2.style.backgroundColor ='#FEE010'
   });
         n_circle2.addEventListener('mouseout', function(){
      n_circle2.style.backgroundColor = 'white'
   });
      n_circle2.style.backgroundColor = 'white'
    }


    if (allContainer.scrollTop >= 2100) {
        n_circle3.style.backgroundColor = '#FEE010'
      n_circle3.addEventListener('mouseover', function(){
      n_circle3.style.backgroundColor ='#FEE010'
   });
     n_circle3.addEventListener('mouseout', function(){
      n_circle3.style.backgroundColor = '#FEE010'
   });
      n_circle3.style.backgroundColor = '#FEE010'
    }

    if(allContainer.scrollTop <= 2100){
                  n_circle3.addEventListener('mouseover', function(){
      n_circle3.style.backgroundColor ='#FEE010'
   });
         n_circle3.addEventListener('mouseout', function(){
      n_circle3.style.backgroundColor = 'white'
   });
      n_circle3.style.backgroundColor = 'white'
    }

    if(allContainer.scrollTop >=3000){
                      n_circle3.addEventListener('mouseover', function(){
      n_circle3.style.backgroundColor ='#FEE010'
   });
         n_circle3.addEventListener('mouseout', function(){
      n_circle3.style.backgroundColor = 'white'
   });
      n_circle3.style.backgroundColor = 'white'
    }



    if(allContainer.scrollTop >=3000){
        n_circle4.style.backgroundColor = '#FEE010'
      n_circle4.addEventListener('mouseover', function(){
      n_circle4.style.backgroundColor ='#FEE010'
   });
     n_circle4.addEventListener('mouseout', function(){
      n_circle4.style.backgroundColor = '#FEE010'
   });
      n_circle4.style.backgroundColor = '#FEE010'
    }
    if(allContainer.scrollTop <=3000){
         n_circle4.addEventListener('mouseover', function(){
      n_circle4.style.backgroundColor ='#FEE010'
   });
         n_circle4.addEventListener('mouseout', function(){
      n_circle4.style.backgroundColor = 'white'
   });
      n_circle4.style.backgroundColor = 'white'
    }

    if(allContainer.scrollTop >=5100){
         n_circle4.addEventListener('mouseover', function(){
      n_circle4.style.backgroundColor ='#FEE010'
   });
         n_circle4.addEventListener('mouseout', function(){
      n_circle4.style.backgroundColor = 'white'
   });
      n_circle4.style.backgroundColor = 'white'
    }


   


    if (allContainer.scrollTop >=5100) {
        n_circle5.style.backgroundColor = '#FEE010'
      n_circle5.addEventListener('mouseover', function(){
      n_circle5.style.backgroundColor ='#FEE010'
   });
     n_circle5.addEventListener('mouseout', function(){
      n_circle5.style.backgroundColor = '#FEE010'
   });
      n_circle5.style.backgroundColor = '#FEE010'

    }
    if(allContainer.scrollTop <=5100){
          n_circle5.addEventListener('mouseover', function(){
      n_circle5.style.backgroundColor ='#FEE010'
   });
         n_circle5.addEventListener('mouseout', function(){
      n_circle5.style.backgroundColor = 'white'
   });
      n_circle5.style.backgroundColor = 'white'
    }
   


    if(allContainer.scrollTop >=10100){
               n_circle5.addEventListener('mouseover', function(){
      n_circle5.style.backgroundColor ='#FEE010'
   });
         n_circle5.addEventListener('mouseout', function(){
      n_circle5.style.backgroundColor = 'white'
   });
      n_circle5.style.backgroundColor = 'white'
    }



    if (allContainer.scrollTop >= 10100) { n_circle1.style.backgroundColor = '#FEE010'
      n_circle6.addEventListener('mouseover', function(){
      n_circle6.style.backgroundColor ='#FEE010'
   });
     n_circle6.addEventListener('mouseout', function(){
      n_circle6.style.backgroundColor = '#FEE010'
   });
      n_circle6.style.backgroundColor = '#FEE010'

    }
    if(allContainer.scrollTop <=10100){
         n_circle6.addEventListener('mouseover', function(){
      n_circle6.style.backgroundColor ='#FEE010'
   });
         n_circle6.addEventListener('mouseout', function(){
      n_circle6.style.backgroundColor = 'white'
   });
      n_circle6.style.backgroundColor = 'white'
    }

       if(allContainer.scrollTop <=6100){
      n_circle6.style.backgroundColor = 'white'
   }

   if(allContainer.scrollTop >=6100){
      n_circle1.style.backgroundColor = '#13682f'
         n_circle1.addEventListener('mouseover', function(){
         n_circle1.style.backgroundColor ='#FEE010'
      });
         n_circle1.addEventListener('mouseout', function(){
         n_circle1.style.backgroundColor = '#13682f'
      });
      n_circle2.style.backgroundColor = '#13682f'
         n_circle2.addEventListener('mouseover', function(){
         n_circle2.style.backgroundColor ='#FEE010'
      });
         n_circle2.addEventListener('mouseout', function(){
         n_circle2.style.backgroundColor = '#13682f'
      });
      n_circle3.style.backgroundColor = '#13682f'
               n_circle3.addEventListener('mouseover', function(){
         n_circle3.style.backgroundColor ='#FEE010'
      });
         n_circle3.addEventListener('mouseout', function(){
         n_circle3.style.backgroundColor = '#13682f'
      });
      n_circle4.style.backgroundColor = '#13682f'
               n_circle4.addEventListener('mouseover', function(){
         n_circle4.style.backgroundColor ='#FEE010'
      });
         n_circle4.addEventListener('mouseout', function(){
         n_circle4.style.backgroundColor = '#13682f'
      });
  
      n_circle6.style.backgroundColor = '#13682f'
               n_circle6.addEventListener('mouseover', function(){
         n_circle6.style.backgroundColor ='#FEE010'
      });
         n_circle6.addEventListener('mouseout', function(){
         n_circle6.style.backgroundColor = '#13682f'
      });
   }

   if(allContainer.scrollTop >=6700){
         n_circle1.style.backgroundColor = 'white'
         n_circle1.addEventListener('mouseover', function(){
         n_circle1.style.backgroundColor ='#FEE010'
      });
         n_circle1.addEventListener('mouseout', function(){
         n_circle1.style.backgroundColor = 'white'
      });

         n_circle2.style.backgroundColor = 'white'
         n_circle2.addEventListener('mouseover', function(){
         n_circle2.style.backgroundColor ='#FEE010'
      });
         n_circle2.addEventListener('mouseout', function(){
         n_circle2.style.backgroundColor = 'white'
      });

         n_circle3.style.backgroundColor = 'white'
         n_circle3.addEventListener('mouseover', function(){
         n_circle3.style.backgroundColor ='#FEE010'
      });
         n_circle3.addEventListener('mouseout', function(){
         n_circle3.style.backgroundColor = 'white'
      });

         n_circle4.style.backgroundColor = 'white'
         n_circle4.addEventListener('mouseover', function(){
         n_circle4.style.backgroundColor ='#FEE010'
      });
         n_circle4.addEventListener('mouseout', function(){
         n_circle4.style.backgroundColor = 'white'
      });
         n_circle6.style.backgroundColor = 'white'
         n_circle6.addEventListener('mouseover', function(){
         n_circle6.style.backgroundColor ='#FEE010'
      });
         n_circle6.addEventListener('mouseout', function(){
         n_circle6.style.backgroundColor = 'white'
      });
   }

     if(allContainer.scrollTop >=10100){
      n_circle5.addEventListener('mouseover', function(){
      n_circle5.style.backgroundColor ='#FEE010'
   });
         n_circle5.addEventListener('mouseout', function(){
      n_circle5.style.backgroundColor = 'white'
   });
      n_circle5.style.backgroundColor = 'white'

      n_circle6.addEventListener('mouseover', function(){
      n_circle6.style.backgroundColor ='#FEE010'
   });
         n_circle6.addEventListener('mouseout', function(){
      n_circle6.style.backgroundColor = '#FEE010'
   });
      n_circle6.style.backgroundColor = '#FEE010'
    }


  });

    
 

