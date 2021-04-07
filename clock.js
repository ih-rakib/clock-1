function setTime() {
        var canvas = document.getElementById("clock");
      var context = canvas.getContext('2d');
      var clockRadius = canvas.width/2;
      
      context.beginPath();
      context.fillStyle = "#7ed2fdff";
      context.arc(clockRadius,clockRadius,clockRadius,0,2*Math.PI);
      context.fill();
      
      context.beginPath();
      context.fillStyle = "#fff";
      context.arc(clockRadius,clockRadius,clockRadius-10,0,2*Math.PI);
      context.fill();
      
      context.beginPath();
      context.arc(clockRadius,clockRadius,5,0,2*Math.PI);
      context.fillStyle = "black";
      context.fill();
      
      context.font = clockRadius/8 + "px times";
      context.textAlign = "center";
      context.textBaseline = "middle";
      
      
      /*-----
      context.fillText("12",clockRadius,clockRadius - (clockRadius * 0.85));
      context.fillText("1",clockRadius + (clockRadius * 0.85 * Math.sin(2 * Math.PI/12)),clockRadius - (clockRadius * 0.85 * Math.cos(2 * Math.PI/12)));
      -----*/
      
      for(var i=1; i<=12; i++) {
        context.fillText(i,clockRadius + (clockRadius * 0.8 * Math.sin(i * 2 * Math.PI/12)),clockRadius - (clockRadius * 0.8 * Math.cos(i * 2 * Math.PI/12)));
      }
      
      var date = new Date();
      
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();
      
      var fullHours = hours % 12 + minutes /60 + seconds / 3600;
      var hourAngle = fullHours * 2 * Math.PI/12;
      var minuteAngle = minutes * 2 * Math.PI/60;
      var secondAngle = seconds * 2 * Math.PI/60;
      
      context.strokeStyle = "black";
      
      //Hours Angle
      context.moveTo(clockRadius,clockRadius);
      context.lineTo(clockRadius + (clockRadius * 0.6 * Math.sin(hourAngle)),clockRadius - (clockRadius * 0.6 * Math.cos(hourAngle)));
      context.lineWidth = 5;
      context.stroke();
      
      //Minutes Angle
      context.moveTo(clockRadius,clockRadius);
      context.lineTo(clockRadius + (clockRadius * 0.7 * Math.sin(minuteAngle)),clockRadius - (clockRadius * 0.7 * Math.cos(minuteAngle)));
      context.lineWidth = 3;
      context.stroke();
      
      //Seconds Angle
      context.moveTo(clockRadius,clockRadius);
      context.lineTo(clockRadius + (clockRadius * 0.8 * Math.sin(secondAngle)),clockRadius - (clockRadius * 0.8 * Math.cos(secondAngle)));
      context.lineWidth = 2;
      context.stroke();
      
      }
      setInterval(setTime, 1000);
      
      function showTime() {
        var date=new Date();
        var h=date.getHours();
        var m=date.getMinutes();
        var s=date.getSeconds();
        var session="AM";
      
      if(h==0){
          h=12;
      }
      if(h>12){
          h=h-12;
          session="PM";
      }
      
      h=(h<10)?"0"+h:h;
      m=(m<10)?"0"+m:m;
      s=(s<10)?"0"+s:s;
      
      
      time=h + ":" + m + ":" + s + " " + session;
      document.getElementById("digital_display").innerHTML=time;
      setTimeout(showTime,1000);
      
      }
      showTime();
      
      
      