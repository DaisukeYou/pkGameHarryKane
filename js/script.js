// キッカー側の動き
const kickCourseRight = 1
const kickCourseCentre = 2
const kickCourseLeft = 3
// $('#box').html('蹴るコース');

// $('#btnStart').on('click', function(){
//   $('#box-item').fadeIn();
//   console.log(10);
// })

// $("#btnStart").on("click", function up () {
//   $("#box-item").fadeIn();
//   setTimeout(up, 5000);
// });

$("#btnStart").on("click", function () {
  const up = function () {
    $("#box-item").fadeIn();
  }
  setTimeout(up, 19000);

  document.getElementById("videoPrePk").play();
});

$('#btn1').on('click', function(){
  console.log(kickCourseRight)
  
})


$('#btn2').on('click', function(){
console.log(kickCourseCentre)

})

$('#btn3').on('click', function(){
console.log(kickCourseLeft)

})



// キーパー側の動き
$('#btn1').on('click', function(){
const saveCourse = Math.ceil(Math.random() * 3)
console.log(saveCourse)
if(saveCourse == 1){

  $('#result').html('<video class="failedResult" id="failed1" src="movies/harryKaneFailed.mp4">');
  document.getElementById("failed1").play();
  $('failed1').scrollTop()
}else{
  $('#result').html('<video class="successResult" id="success1" src="movies/harryKaneGoalResult.mp4">');
  document.getElementById("success1").play();
  $('#success1').scrollTop()
}
})

$('#btn2').on('click', function(){
  const saveCourse = Math.ceil(Math.random() * 3)
  console.log(saveCourse)
  if(saveCourse == 2){

  $('#result').html('<video class="failedResult" id="failed2" src="movies/harryKaneFailed.mp4">');
    document.getElementById("failed2").play();
    $('#failed2').scrollTop()
}else{
    $('#result').html('<video class="successResult" id="success2" src="movies/harryKaneGoalResult.mp4">');
    document.getElementById("success2").play();
    $('#success2').scrollTop()
}
})

$('#btn3').on('click', function(){
  const saveCourse = Math.ceil(Math.random() * 3)
  console.log(saveCourse)
  if(saveCourse == 3){

  $('#result').html('<video class="failedResult" id="failed3" src="movies/harryKaneFailed.mp4">');
    document.getElementById("failed3").play();
    // $('#failed3').scrollTop()
    
}else{
    $('#result').html('<video class="successResult" id="success3" src="movies/harryKaneGoalResult.mp4">');
    document.getElementById("success3").play();
    // $('#success3').scrollTop()
    
}
})

// $('#btn3').on('click', function(){
//   const saveCourse = Math.ceil(Math.random() * 3)
//   console.log(saveCourse)
//   if(saveCourse == 3){
//     $('#failed').html('<video class="failedResult" id="failed3" src="movies/harryKaneFailed.mp4">');
//     const a = document.getElementById("failed3")
//     console.log(a)
//     document.getElementById("failed3").play();
//     $('#failed3').scrollTop()
// }else{
//     $('#success').html('<video class="successResult" id="success3" src="movies/harryKaneGoalResult.mp4">');
//     document.getElementById("success3").play();
//     $('#success3').scrollTop()
// }
// })


