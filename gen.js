function gen(){
	var str= '<table>';
for(i=1;i<=5;i++){
       str = str +'<tr><td>Apple'+ i +'</td></tr>';
	 
}
str = str + '</table>';

document.getElementById('s1').innerHTML=str;

}
function gen2(){
	
var str='<table>';
var text1=document.getElementById('num1').value;

var text2=document.getElementById('num2').value;

for(i=parseInt(text1);i<=parseInt(text2);i++){
	console.log('hello');
str = str + '<tr><td>'+ i*1 +'</td><td>'+ i*2+
'</td><td>'+ i*3 +'</td></tr>';

}
str = str + '</table>';
document.getElementById('s1').innerHTML=str;

}