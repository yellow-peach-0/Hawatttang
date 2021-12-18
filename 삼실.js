
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
const ho1 = document.querySelector('#ho1');
const ho2 = document.querySelector('#ho2');
const ho3 = document.querySelector('#ho3');
const ho4 = document.querySelector('#ho4');
const ho5 = document.querySelector('#ho5');
const ho6 = document.querySelector('#ho6');
const nct1 = document.querySelector("#nct1")
const nct2 = document.querySelector("#nct2")
const nct3 = document.querySelector("#nct3")
const nct4 = document.querySelector("#nct4")
const nct5 = document.querySelector("#nct5")
const nct6 = document.querySelector("#nct6")





  allContainer.addEventListener('scroll', function(){
    console.log(allContainer.scrollTop)

    if (allContainer.scrollTop >= 0) {
      n_circle1.style.backgroundColor = '#FEE010'
      ho1.style.opacity = '1'
      nct1.style.opacity = '1'

    }
    if(allContainer.scrollTop >=680){
      n_circle1.addEventListener('mouseover', function(){
      n_circle1.style.backgroundColor ='#FEE010'
      nct1.style.opacity = '1'
   });
         n_circle1.addEventListener('mouseout', function(){
      n_circle1.style.backgroundColor = 'white'
      nct1.style.opacity = '0'
   });
      n_circle1.style.backgroundColor = 'white'
      ho1.style.opacity = '0'
      nct1.style.opacity = '0'
    }



   
    if (allContainer.scrollTop >=680) {
      n_circle2.style.backgroundColor = '#FEE010'
      ho2.style.opacity = '1'
      nct2.style.opacity = '1'
    }
    if(allContainer.scrollTop <=680){
                  n_circle2.addEventListener('mouseover', function(){
      n_circle2.style.backgroundColor ='#FEE010'
      nct2.style.opacity = '1'
   });
         n_circle2.addEventListener('mouseout', function(){
      n_circle2.style.backgroundColor = 'white'
      nct2.style.opacity = '0'
   });
      n_circle2.style.backgroundColor = 'white'
      ho2.style.opacity = '0'
      nct2.style.opacity = '0'
    }
    if(allContainer.scrollTop >=2100){
                  n_circle2.addEventListener('mouseover', function(){
      n_circle2.style.backgroundColor ='#FEE010'
      nct2.style.opacity = '1'
   });
         n_circle2.addEventListener('mouseout', function(){
      n_circle2.style.backgroundColor = 'white'
      nct2.style.opacity = '0'
   });
      n_circle2.style.backgroundColor = 'white'
      ho2.style.opacity = '0'
      nct2.style.opacity = '0'
    }




    if (allContainer.scrollTop >= 2100) {
      n_circle3.style.backgroundColor = '#FEE010'
      ho3.style.opacity = '1'
      nct3.style.opacity = '1'
    }

    if(allContainer.scrollTop <= 2100){
                  n_circle3.addEventListener('mouseover', function(){
      n_circle3.style.backgroundColor ='#FEE010'
      nct3.style.opacity = '1'
   });
         n_circle3.addEventListener('mouseout', function(){
      n_circle3.style.backgroundColor = 'white'
      nct3.style.opacity = '0'
   });
      n_circle3.style.backgroundColor = 'white'
      ho3.style.opacity = '0'
      nct3.style.opacity = '0'
    }

    if(allContainer.scrollTop >=3000){
                      n_circle3.addEventListener('mouseover', function(){
      n_circle3.style.backgroundColor ='#FEE010'
      nct3.style.opacity = '1'
   });
         n_circle3.addEventListener('mouseout', function(){
      n_circle3.style.backgroundColor = 'white'
      nct3.style.opacity = '0'
   });
      n_circle3.style.backgroundColor = 'white'
      ho3.style.opacity = '0'
      nct3.style.opacity = '0'
    }



    if(allContainer.scrollTop >=3000){
      n_circle4.style.backgroundColor = '#FEE010'
      ho4.style.opacity = '1'
      nct4.style.opacity = '1'
    }
    if(allContainer.scrollTop <=3000){
         n_circle4.addEventListener('mouseover', function(){
      n_circle4.style.backgroundColor ='#FEE010'
      nct4.style.opacity = '1'
   });
         n_circle4.addEventListener('mouseout', function(){
      n_circle4.style.backgroundColor = 'white'
      nct4.style.opacity = '0'
   });
      n_circle4.style.backgroundColor = 'white'
      ho4.style.opacity = '0'
      nct4.style.opacity = '0'
    }

    if(allContainer.scrollTop >=5100){
         n_circle4.addEventListener('mouseover', function(){
      n_circle4.style.backgroundColor ='#FEE010'
      nct4.style.opacity = '1'
   });
         n_circle4.addEventListener('mouseout', function(){
      n_circle4.style.backgroundColor = 'white'
      nct4.style.opacity = '0'
   });
      n_circle4.style.backgroundColor = 'white'
      ho4.style.opacity = '0'
      nct4.style.opacity = '0'
    }


   


    if (allContainer.scrollTop >=5100) {
      n_circle5.style.backgroundColor = '#FEE010'
      ho5.style.opacity = '1'
      ho5.style.border= '2px solid #FFFFFF'
      nct5.style.opacity = '1'

    }
    if(allContainer.scrollTop <=5100){
          n_circle5.addEventListener('mouseover', function(){
      n_circle5.style.backgroundColor ='#FEE010'
      nct5.style.opacity = '1'
   });
         n_circle5.addEventListener('mouseout', function(){
      n_circle5.style.backgroundColor = 'white'
      nct5.style.opacity = '0'
   });
      n_circle5.style.backgroundColor = 'white'
      ho5.style.opacity = '0'
      nct5.style.opacity = '0'
    }

    if(allContainer.scrollTop >=10100){
               n_circle5.addEventListener('mouseover', function(){
      n_circle5.style.backgroundColor ='#FEE010'
      nct5.style.opacity = '1'
   });
         n_circle5.addEventListener('mouseout', function(){
      n_circle5.style.backgroundColor = 'white'
      nct5.style.opacity = '0'
   });
      n_circle5.style.backgroundColor = 'white'
      ho5.style.opacity = '0'
      nct5.style.opacity = '0'
    }



    if (allContainer.scrollTop >= 10100) {
      n_circle6.style.backgroundColor = '#FEE010'
      ho6.style.opacity = '1'
      nct6.style.opacity = '1'

    }
    if(allContainer.scrollTop <=10100){
         n_circle6.addEventListener('mouseover', function(){
      n_circle6.style.backgroundColor ='#FEE010'
      nct6.style.opacity = '1'
   });
         n_circle6.addEventListener('mouseout', function(){
      n_circle6.style.backgroundColor = 'white'
      nct6.style.opacity = '0'
   });
      n_circle6.style.backgroundColor = 'white'
      ho6.style.opacity = '0'
      nct6.style.opacity = '0'
    }

  });
//     if(allContainer.scrollTop >=6000){
//       n_circle1.style.backgroundColor ='#13682F'
//       n_circle2.style.backgroundColor ='#13682F'
//       n_circle3.style.backgroundColor ='#13682F'
//       n_circle4.style.backgroundColor ='#13682F'
//       ho5.style. border = ' 2px solid #13682F'
//       n_circle6.style.backgroundColor ='#13682F'
//       n_circle1.addEventListener('mouseover', function(){
//       n_circle1.style.backgroundColor ='#13682F'
//        nct1.style.color='#13682F'
//       nct1.style.opacity = '1'
//    });
//       n_circle1.addEventListener('mouseout', function(){
//       n_circle1.style.backgroundColor = '#13682F'
//       nct1.style.opacity = '0'
//    });
//       n_circle2.addEventListener('mouseover', function(){
//       n_circle2.style.backgroundColor ='#13682F'
//        nct2.style.color='#13682F'
//       nct2.style.opacity = '1'
//    });
//       n_circle2.addEventListener('mouseout', function(){
//       n_circle2.style.backgroundColor = '#13682F'
//       nct2.style.opacity = '0'
//    });
//       n_circle3.addEventListener('mouseover', function(){
//       n_circle3.style.backgroundColor ='#13682F'
//        nct3.style.color='#13682F'
//       nct3.style.opacity = '1'
//    });
//       n_circle3.addEventListener('mouseout', function(){
//       n_circle3.style.backgroundColor = '#13682F'
//       nct3.style.opacity = '0'
//    });
//          n_circle4.addEventListener('mouseover', function(){
//       n_circle4.style.backgroundColor ='#13682F'
//        nct4.style.color='#13682F'
//       nct4.style.opacity = '1'
//    });
//       n_circle4.addEventListener('mouseout', function(){
//       n_circle4.style.backgroundColor = '#13682F'
//       nct4.style.opacity = '0'
//    });
//     n_circle5.style.backgroundColor='#13682F'
//     nct5.style.color='#13682F'

//          n_circle5.addEventListener('mouseover', function(){
//       n_circle5.style.backgroundColor ='#13682F'
//       nct5.style.color='#13682F'
//       nct5.style.opacity = '1'
//    });
 
//      n_circle5.addEventListener('mouseout', function(){
//       n_circle5.style.backgroundColor = '#13682F'
//       nct5.style.opacity = '1'
//    });
//             n_circle6.addEventListener('mouseover', function(){
//       n_circle6.style.backgroundColor ='#13682F'
//       nct6.style.color='#13682F'
//       nct6.style.opacity = '1'
//    });
//       n_circle6.addEventListener('mouseout', function(){
//       n_circle6.style.backgroundColor = '#13682F'
//       nct6.style.opacity = '0'
//    });
//     }
//   })

//   if(allContainer.scrollTop >=7101){
//       n_circle1.style.backgroundColor ='#FEE010'
//       n_circle2.style.backgroundColor ='#FEE010'
//       n_circle3.style.backgroundColor ='#FEE010'
//       n_circle4.style.backgroundColor ='#FEE010'
//       ho5.style. border = ' 2px solid #FEE010'
//       n_circle6.style.backgroundColor ='#13682F'
//       n_circle1.addEventListener('mouseover', function(){
//       n_circle1.style.backgroundColor ='#13682F'
//        nct1.style.color='#13682F'
//       nct1.style.opacity = '1'
//    });
//       n_circle1.addEventListener('mouseout', function(){
//       n_circle1.style.backgroundColor = '#13682F'
//       nct1.style.opacity = '0'
//    });
//       n_circle2.addEventListener('mouseover', function(){
//       n_circle2.style.backgroundColor ='#13682F'
//        nct2.style.color='#13682F'
//       nct2.style.opacity = '1'
//    });
//       n_circle2.addEventListener('mouseout', function(){
//       n_circle2.style.backgroundColor = '#13682F'
//       nct2.style.opacity = '0'
//    });
//       n_circle3.addEventListener('mouseover', function(){
//       n_circle3.style.backgroundColor ='#13682F'
//        nct3.style.color='#13682F'
//       nct3.style.opacity = '1'
//    });
//       n_circle3.addEventListener('mouseout', function(){
//       n_circle3.style.backgroundColor = '#13682F'
//       nct3.style.opacity = '0'
//    });
//          n_circle4.addEventListener('mouseover', function(){
//       n_circle4.style.backgroundColor ='#13682F'
//        nct4.style.color='#13682F'
//       nct4.style.opacity = '1'
//    });
//       n_circle4.addEventListener('mouseout', function(){
//       n_circle4.style.backgroundColor = '#13682F'
//       nct4.style.opacity = '0'
//    });
//     n_circle5.style.backgroundColor='#13682F'

//          n_circle5.addEventListener('mouseover', function(){
//       n_circle5.style.backgroundColor ='#13682F'
//       nct5.style.color='#13682F'
//       nct5.style.opacity = '1'
//    });
 
//      n_circle5.addEventListener('mouseout', function(){
//       n_circle5.style.backgroundColor = '#13682F'
//       nct5.style.opacity = '1'
//    });
//             n_circle6.addEventListener('mouseover', function(){
//       n_circle6.style.backgroundColor ='#13682F'
//       nct6.style.color='#13682F'
//       nct6.style.opacity = '1'
//    });
//       n_circle6.addEventListener('mouseout', function(){
//       n_circle6.style.backgroundColor = '#13682F'
//       nct6.style.opacity = '0'
//    });
//     }


 

