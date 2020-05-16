$(function() {

    // h2- purple
	// Custom JS
	// console.log('start')
	console.log('Hello World')
	$("h2").css("color", "purple")

    // font size 22
	// Custom JS
	$(".details").css("font-size", "22px")


    // Vacation Packages changed on Spring Discount
	// Custom JS
	$("h1:last").text("Весенние Скидки")


    // price changed $ 199
	$("span").text("$199")


    // Price for London changed on
    $("span[target='_blank']").text("$99")


    // America chenged on USA
	$("a").first().text("USA")


    // Asia chenged on Africa
    $("a").last().text("Africa")


});

