burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist =  document.querySelector('.nav-list');
rightnav = document.querySelector('.rightnav');
    
 
burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('v-class-resp')
    navlist.classList.toggle('v-class-resp')
    navbar.classList.toggle('h-nav-resp')
})
function contact()
{
   let input1 = document.forms['form']['input'];
   let input2= document.forms['form']['phone'];
//    var k = /[0-9]/;
   if(input1.value == "")
   {
    alert("Please fill the name");
    return false;
   }
  else if(input2.value.length != 10)
   {
    alert("Please Enter valid Phone Number");
    return false;
   }
   else{
    alert("Successfully Submitted!");
    return true;
   }

}