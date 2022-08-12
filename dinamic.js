let i =1;
function slide()
{
    if (i==4) {i=0;}
   document.getElementById('gevimg').src = 'gev' + i +'.jpg';
    i++;
}



