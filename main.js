$(document).ready(function(){
  // alert("読み込まれているか実験");
  // var box="中身のテスト";
  // console.log(box);

  // var elem='<a href="https://www.yahoo.co.jp/">yahoo</a>'
  // $('.Box').on('click', function(){
  //     // $('#js').html(elem);
  //     // $('#js').text(elem);
  //     // $('#js').css("color","#ff0");
  //     $('#js').hide(4000);
  //     // $('#js').prepend(elem);
  //     // $('#js').append(elem);
  // });


  //
  // $('#hide').on('click',function(){
  //   $('#ex').hide(2000);
  // });
  //
  //
  // var i=0;
  // $('#show').on('click',function(){
  //   $('#ex').show(2000);
  //   i++;
  //   $('#ex').html(i);
  //
  //   // var sty = i+"px solid"
  //   $('#ex').css("border", i+"px solid");
  // });

  //ここから課題2

  $('#ex2').fadeIn(4000);

  $('#ex2').on('click',function(){

    var str = "<p>かきくけこ</p>"
    $('#ex2').html(str);

    $('#ex2').css("background-color", "black");
    $('#ex2').css("color", "white");

    var str2 = "<p>あいうえお</p>"
    $('#ex2').prepend(str2);

    var str3 = "<p>さしすせそ</p>"
    $('#ex2').append(str3);


  });

  $('#ex2').on('dblclick',function(){
  $("#ex2").find("p:odd").addClass("odd");
  });












  // $('#js').empty();
  // $('#js').remove();

});
