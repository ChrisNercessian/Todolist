$(document).ready(function () {
    var li = 0
    $("#writer").keyup(function (e) {
        let value = $(this).val()
        if (e.key == "Enter") {
            if ($(this).val() != "") {
                $("#todo").append(`<li class = 'task' ><span>${value}</span>
            <div id = 'fa'> <i class = "fa fa-trash" ></i>
           <i class="fa fa-check"></i>
             <i class = "fa fa-edit" ></i></div> </li>`)
                li++
                $("input").val("")
            }
        }
        if (li > 0) {

            $("#filter").show(1000)
        }
    })
    $("body").on("click", ".fa-check", function () {
        if ($("#editpopup").css('display') == 'none') {
            $(this).parent().parent().toggleClass("completed")
        }
    })
    $("body").on("click", ".fa-trash", function () {
        $(this).parent().parent().remove()
        li--
        if (li == 0) {

            $("#filter").hide(1000)
        }
    })


    var whichli
    $("body").on("click", ".fa-edit", function () {
        whichli = $(this).parents('li')
        if (!$(this).parent().parent().hasClass("completed")) {
            $("#editpopup").slideDown(500)
            let tasktext = $(this).parent().siblings('span').html()
            $("#editbox").val(tasktext)
        }
    })
    $("#no").click(function () {
        $("#editpopup").slideUp(500)
    })
    $('body').on("click", "#yes", function () {
        var newtask = $("#editbox").val()
        $("#editpopup").slideUp(500)
        whichli.children('span').text(newtask)
    })
    $("#filter").keyup(function () {
        let filter = $("#filter").val().toLowerCase()
        $(".task span").filter(function () {
            if ($(this).parent().text().toLowerCase().indexOf(filter) != -1) {
                $(this).parent().show()
            }
            else {
                $(this).parent().hide()
            }
        })
    })

});