//active
$(document).on("click","nav .container .navbar-collapse ul li ",function(){
    $(this).addClass("my-active").siblings().removeClass("my-active")
})
