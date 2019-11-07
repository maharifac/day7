//this.hide
//  $(document).ready(function(){
//     $("p").click(function(){
//       $(this).hide();
//     });
//   });

  //$("p").hide
// $(document).ready(function(){
//     $("p").click(function(){
//         $("p").hide();
//     });
// });

//$("#test").hide
// $(document).ready(function(){
// $("button").click(function(){
// $("#demo").hide();
//     });
// });
$(document).ready(function(){
function showDiv(val)

{
    if(val == 1)
    {
        var fruits ="<ul><li>orange</li><li>apple</li><li>grapes</li></ul>";
        $("p").html(fruits);
        $("p").show();
    }

    else if(val == 2)
    {
        var animals = "<ul><li>dog</li><li>cat</li><li>elephant</li></ul>";
        $("p").html(animals);
        $("p").show();
    }
}

 $("input[type = 'radio']").change(function()
 {
     if($(this).val() == 'fruits')
     {
       if ($(this).prop('checked') == true)
            showDiv(1);
       else if($(this).prop('checked') == false)
            $("p").hide();
     } 
     if($(this).val() == 'animals')
     {
        if($(this).prop('checked') == true) 
            showDiv(2);
        else if($(this).prop('checked') == false)
            $("p").hide();
     }
     
 });
// $("button").click(function(){
//     var x=$("input").val()
});