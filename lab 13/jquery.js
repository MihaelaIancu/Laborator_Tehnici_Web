//ex1
$("#name_field").val("Peter Green");
    contentInput = $("#name_field").val();
    console.log(contentInput);
//ex2
var selectedValue = $('#options').val();
    console.log(selectedValue);

//SAU

var selectedText = $("#options option:selected").text();
    console.log(selectedText);


$("#options").change(function(){
    var newValue = $("#options option:selected").text();
    console.log(newValue);
});

//ex3
var radioSelected = $("input[name='gender']:checked").val();
    console.log(radioSelected);
var textRadio = $("input[name='gender']:checked").parent('span').text();
    console.log(textRadio);

$("input[name='gender']").change(function() {

        var newRadioValue = $("input[name='gender']:checked").parent('span').text();;
        console.log(newRadioValue);

    });

//ex4 - checkboxes - multiple choices - Woring with select boxes is similar to working with radio buttons, but since multiple options can be selected at the same time, we need to work with arrays.

$("input[name='interest']").change(function() {

        var selectedCheckboxes = $("input[name='interest']:checked");
        var texts = [];
        
        $.each(selectedCheckboxes, function( index, value ) {
            
            texts.push($(value).parent("span").text());
        
        });
        
        console.log(texts);
        
    });

//ex5
// add class:
    $("#add_class").click(function(){
        $("#example-paragraph").addClass("styling");
    });

    // remove class:
    $("#remove_class").click(function(){
        $("#example-paragraph").removeClass("styling");
    });

    // toggle class:
    $("#toggle_class").click(function(){
        $("#example-paragraph").toggleClass("styling");
    });

//ex6
$("#fullName").keyup( function(){

//    if( $("#fullName").val() == "") {
//        $("#submit").hide();
//    } else {
//        $("#submit").show();
//    } 

//SAU

 $("#fullName").val() == "" ? $("#submit").hide() : $("#submit").show();
// fara asta $("#submit").show();

});

//ex7
 $("#animate").click(function(){
    $("#square").animate({
        width: '+=20px',
        height: '+=20px'
    });
     
    //schimbare pe rand
     
//    $("#square").animate({
//        width: '+=20px'
//    },500);
//
//    $("#square").animate({
//        height: '+=20px'
//    },500);
}); 
    