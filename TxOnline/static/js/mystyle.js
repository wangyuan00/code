  var oBox1=document.getElementById('box1');
	var oBox2=document.getElementById('box2');
	var timer=null;

	oBox2.onmouseover=oBox1.onmouseover=function (){
		clearTimeout(timer);
		timer=setTimeout(function (){
			oBox2.style.display='block';
		},10);
	};

	oBox2.onmouseout=oBox1.onmouseout=function (){
		clearTimeout(timer);
		timer=setTimeout(function (){
			oBox2.style.display='none';
		},100);
	};