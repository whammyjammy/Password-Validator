var overlay=document.getElementById('overlay');
        var pkey=document.getElementById("key");
        var box=document.getElementById("box");
        var unsucc=document.getElementById('unsucc');
        var succ=document.getElementById('succ');
        var x=1;

        pkey.addEventListener("keydown", function(key){
            
            if(x == 1){
                if(key.keyCode == "13"){
                    key.preventDefault();
                    x=0;
                    overlay.classList.add('showscr');
                    setTimeout(validate, 5000); 
                }
            }
            });
           
        
       
        

        document.getElementById('butt').addEventListener('click', function(){
            x=1;
            overlay.classList.add('showscr');
            setTimeout(validate, 5000);

        });
    function validate(){
            if(pkey.value=="hallo"){
                succ.classList.add('showscr3')
}
            else{
               
               overlay.classList.remove('showscr'); 
               denied();
}

    }
    function denied(){
        unsucc.classList.add('showscr2')
    }
    document.getElementById('bot').addEventListener('click', function(){
            
            unsucc.classList.remove('showscr2');
            x=1;

        });


