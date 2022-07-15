var check = true;
$(document).ready(function(){
    
    $('.clicks').on('click', function(){   
       if(check == true)
       {
        check = false;
        $('#box').addClass('show');
       }
       else
       {
        check = true;
        $('#box').removeClass('show');
       }
    })

    $('.submission').on('click', function(){
        $('#box').removeClass('show');
    })

    $('.Close_Popup').on('click', function(){
        $('#box').removeClass('show');
        check = true;
    })
});

