/**
 * Created by wy on 2017/3/28.
 */
window.onload = function () {


        ;(function (win,doc){
            function changeSize(){
                doc.documentElement.style.fontSize=50*doc.documentElement.clientWidth/320+'px';
            }
            changeSize();
            win.addEventListener('resize',changeSize);//给window加监听事件 当窗口'resize'时 执行changeSize函数
        })(window,document);//实参 对应形参window对应win document对应doc



    var oBox=document.getElementById('box');
    var oUl=oBox.children[0];
    var iNow=0;

    oUl.onmousedown=function (ev){
        var oldX=ev.clientX-oUl.offsetLeft;
        var disX=ev.clientX;
        document.onmousemove=function (ev){
            var l=ev.clientX-oldX;

            oUl.style.left=l+'rem';
        };
        document.onmouseup=function (ev){
            document.onmousemove=null;

            if(Math.abs(ev.clientX-disX)>0.2){
                if(disX-ev.clientX>0){
                    iNow++;
                    if(iNow==5){
                        iNow=1;
                    }
                }else{
                    iNow--;
                    if(iNow==-1){
                        iNow=0;
                    }
                }
            }
            oUl.style.left=-iNow*6.4+'rem';
            /*$(oUl).animate({
             left:-iNow*320
             });*/
        };
        return false;
    };


};