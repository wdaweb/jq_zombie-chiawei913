//分數
let score=0;
//遊戲時間
let countdown=30;
//倒數計時
let timer=0;
let food='';
// const move=(zb)=>{
//   zb.stop().animate({
//     left:Math.round(Math.random()*70)+'%',
//     top:Math.round(Math.random()*70)+'%'
//   },1000,function(){
//     move(zb)
//   })
// }
$(document).keydown(function(event) {
  if(event.key =='a'){
    $('#big_food').css({
      "background":"url('./images/1.png') no-repeat center",
      "background-size":"100px 80px"
    })
  }else if(event.key=='s'){
    $('#big_food').css({
      "background":"url('./images/2.png') no-repeat center",
      "background-size":"100px 80px"
    })
  }else if(event.key =='d'){
    $('#big_food').css({
      "background":"url('./images/3.png') no-repeat center",
      "background-size":"100px 80px"
    })
  }else if(event.key =='Shift'){
    $('#big_food').css({
      "background":"url('./images/4.png') no-repeat center",
      "background-size":"100px 80px"
    })
  }else if(event.key=='z'){
    $('#big_food').css({
      "background":"url('./images/5.png') no-repeat center",
      "background-size":"100px 80px"
    })
  }else if(event.key=='x'){
    $('#big_food').css({
      "background":"url('./images/6.png') no-repeat center",
      "background-size":"100px 80px"
    })
  }else if(event.key=='c'){
    $('#big_food').css({
      "background":"url('./images/7.png') no-repeat center",
      "background-size":"100px 80px"
    })
  }
  
}) 
$('#btn-start').click(function(){
  $(this).attr('disable',true);
  $('#game #customer1').css("display","block")
  $('#game #customer2').css("display","block")
  $('#game #customer3').css("display","block")
  $('#book_btn').css("display","none")
  score=0;
  $('#text-score').text(score);
  countdown=30;
  $('#text-time').text(countdown);

  timer=setInterval(()=>{
    countdown--
    $('#text-time').text(countdown)
   
    // if(rand>5 && $('#game img').length<10){
    //   const zb=$(`<img src="./images/1.gif" alt="" style="left:${(Math.round(Math.random()*70))}%;top:${Math.round(Math.random()*70)}%">`);
    //   $('#game').append(zb);
    //   move(zb);
    // }
    for(let i=0;i<3;i++){
      let rand=Math.round(Math.random()*3)
      const foodrand=Math.floor(Math.random()*7)+1;
      // const zb=$('<img src="./images/'+ foodrand +'.png" alt="">')
      // $('#customer'+ rand).append(zb)
      $('#customer'+ rand).css({
        "background":"url('./images/"+ foodrand +".png') no-repeat center",
        "background-size":"100px 80px"
      })
    }
    if(countdown<=0){
      clearInterval(timer)
      Swal.fire({
        title: 'TIME OUT !!',
        text: 'SCORE：'+score,
        imageUrl: './images/flag.png',
        imageWidth: 400,
        imageHeight: 300,
      })
      $('#game #customer1').css("display","none")
      $('#game #customer2').css("display","none")
      $('#game #customer3').css("display","none")
      $(this).attr('disabled',false)
      $('#book_btn').css("display","block")
    }
    $('.progress').circleProgress({
      max: 30,
      value: countdown,
      textFormat: 'vertical',
    })
    /*$('#game img').each(function(){
      $(this).stop().animate({
        left:Math.round(Math.random()*70)+'%',
        top:Math.round(Math.random()*70)+'%'
      },1000)
    })*/
  },1000);
})
$('#game').on('click','#customer1',function(){
  if($(this)[0].style.background.slice(14,19)!==$('#big_food')[0].style.background.slice(14,19)){
    score--;
    $(this).css({
      "background":"url('./images/cross.png') no-repeat center",
      "background-size":"100px 80px"
    })
  }else{
    score++;
    $(this).css({
      "background":"url('./images/circle.png') no-repeat center",
      "background-size":"100px 80px"
    })
  }
  if(score<0){
    score=0
  }

  if(countdown<=0){
    $(this).stop();
    $(this).css({
     'user-select':'none',
     '-webkit-user-drag':'none',
     'pointer-events':'none'
    })
  }
  // $(this).attr('src','./images/blood.png');
  // 
  // //忽略點擊事件、無法點擊和選取
 
  $('#text-score').text(score);
})
$('#game').on('click','#customer2',function(){
  if($(this)[0].style.background.slice(14,19)!==$('#big_food')[0].style.background.slice(14,19)){
    score--;
    $(this).css({
      "background":"url('./images/cross.png') no-repeat center",
      "background-size":"100px 80px"
    })
  }else{
    score++;
    $(this).css({
      "background":"url('./images/circle.png') no-repeat center",
      "background-size":"100px 80px"
    })
  }
  if(score<0){
    score=0
  }
  if(countdown<=0){
    $(this).stop();
    $(this).css({
     'user-select':'none',
     '-webkit-user-drag':'none',
     'pointer-events':'none'
    })
  }
  $('#text-score').text(score);
})
$('#game').on('click','#customer3',function(){
  if($(this)[0].style.background.slice(14,19)!==$('#big_food')[0].style.background.slice(14,19)){
    score--;
    $(this).css({
      "background":"url('./images/cross.png') no-repeat center",
      "background-size":"100px 80px"
    })
  }else{
    score++;
    $(this).css({
      "background":"url('./images/circle.png') no-repeat center",
      "background-size":"100px 80px"
    })
  }
  if(score<0){
    score=0
  }
  if(countdown<=0){
    $(this).stop();
    $(this).css({
     'user-select':'none',
     '-webkit-user-drag':'none',
     'pointer-events':'none'
    })
  }
  $('#text-score').text(score);
})
$('.progress').circleProgress({
  max: 30,
  value: countdown,
  textFormat: 'vertical',
})