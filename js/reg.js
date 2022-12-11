function showMessageLogUp(){
   let result = prompt("Желаете пройти регистрацию на сайте?");
   if(result == "Да" || result=="да"){
        alert("Круто!");
   }
    else{
        alert("Очень жаль,Попробуй еще раз");
    }
}
showMessageLogUp();