$(function(){

    $("#button").click(handelbtn);

});


function handelbtn(){
    console.log("btn active");
 

    var chocolateMilk={ carbo:26,calories:208};
    var LowFatMilk={ carbo:12, calories:121};
    var Pudding ={ carbo:30,calories:161};
    var SkimMilk={ carbo:12,calories:86};
    var YogurtFruitFlavored ={ carbo:42,calories:226};
    var Yogurt ={ carbo:34,calories:220};
    var BlackEyePeas={ carbo:22,calories:134};
    var GarbanzoBeans={ carbo:45,calories:269};
    var NavyBeans={ carbo:48,calories:259};
    var PintoBeans={ carbo:44,calories:235};
    var Apple={ carbo:21,calories:81};
    var Banana={ carbo:27,calories:105};
    var Dates={ carbo:61,calories:228};
    var Grapes={ carbo:28,calories:114};
    var Orange={ carbo:16,calories:65};
    var Pear={ carbo:25,calories:98};
    var pineapple={ carbo:19,calories:77};
    var carrot={ carbo:8,calories:31};
    var corn={ carbo:21,calories:89};
    var potato={ carbo:50,calories:220};
    var sweetPotato={ carbo:28,calories:118};
    var arr=[];
    var carbo=0;
    var calories =0;








// calories and carbohydrates calculation


    if($("#Chocolate-milk").is(':checked')){
        arr[arr.length]=chocolateMilk;
        

    }
    
    if($("#Low-fat-milk").is(':checked')){

      
        arr[arr.length] = LowFatMilk;

    }




    if($("#Pudding").is(':checked')){
        
       
        arr[arr.length] = Pudding;
    }




    if($("#Skim-milk").is(':checked')){
       
        arr[arr.length] = SkimMilk;

    }




    if($("#Yogurt-fruit-flavored").is(':checked')){
       
        arr[arr.length] = YogurtFruitFlavored;
    }





    if($("#Yogurt").is(':checked')){
       
        arr[arr.length] = Yogurt;


    }
  

    if($("#Black-Eye-Peas").is(':checked')){
        
        arr[arr.length] = BlackEyePeas;


    }



    if($("#Garbanzo-beans").is(':checked')){
       
        arr[arr.length] = GarbanzoBeans;


    }



    if($("#Navy-beans").is(':checked')){
       

        arr[arr.length] = NavyBeans;
        


    }


      if($("#Pinto-beans").is(':checked')){
      

        arr[arr.length] = PintoBeans; 


    }


    if($("#Apple").is(':checked')){


        arr[arr.length] = Apple; 


    }

     if($("#Banana").is(':checked')){


        arr[arr.length] = Banana;


    }


    if($("#Dates").is(':checked')){
  
        arr[arr.length] = Dates; 

    }

    if($("#Grapes").is(':checked')){
        arr[arr.length] = Grapes; 

    }
    if($("#orange").is(':checked')){
        arr[arr.length] = Orange; 

    }
    if($("#pear").is(':checked')){
        arr[arr.length] = Pear; 

    }
    if($("#pineapple").is(':checked')){
        arr[arr.length] = pineapple; 

    }
     if($("#carrot").is(':checked')){
        arr[arr.length] = carrot; 

    }
     if($("#corn").is(':checked')){
        arr[arr.length] = corn; 

    }
     if($("#potato").is(':checked')){
        arr[arr.length] = potato; 

    }
     if($("#sweet-potato").is(':checked')){
        arr[arr.length] = sweetPotato; 

    }












    for(var i=0; i<arr.length ;i++){
        calories += arr[i].calories;
         carbo += arr[i].carbo;
    }



    $("#calories").empty();
    $("#calories").append("Calories: "+calories);
    $("#carbo").empty();
    $("#carbo").append("Carbohydrates: "+carbo);

  









  

}