var myImage=document.getElementById("myPhoto");

var imageArray=["img/photo_one.jpg", "img/photo_two.jpg", "img/photo_three.jpg", "img/photo_four.jpg", "img/photo_five.jpg"];

var imageIndex=0; 

function changeImage () 
    {
	myPhoto.setAttribute("src", imageArray [imageIndex]);
	imageIndex++;
	if (imageIndex>=imageArray.length) 
	 {
		imageIndex=0;
	 }
    }

var intervalHandle = setInterval(changeImage,2000); 

myPhoto.onClick=function()
{
	clearInterval(intervalHandle);
}