var images=["https://www.udaipurblog.com/wp-content/uploads/2018/02/About-Us-Bal-Utsav-Bangalore-India.jpg", "https://borgenproject.org/wp-content/uploads/Blog-NGO-Successful-.jpg" ];
var num=0;
function next(){
    var slider=document.getElementById("slider");
    num++;
    if(num>=images.length){
        num=0;
    }
    slider.src=images[num];
}
setInterval("next()",2000);