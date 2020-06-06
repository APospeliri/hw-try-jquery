// $(function() {
// 	// Custom JS
// 	console.log('Hello World')
// 	$("h2").css("color", "purple")
// 	$(".details").css("font-size", "22px")
// 	$("h1:last").text("Весенние Скидки")
// 	$("span").text("$199")
//     $("span[target='_blank']").text("$99")
	// $("a").first().text("USA")
//     $("a").last().text("Africa")
// });

// $(function() {
	// Custom JS
	// console.log('Hello World')

	// 1-1
	// $("h2").css("color", "purple")

    // 1-2
	// $(".details").css("font-size", "22px")


	// 1-3 part1
	// $("h1:last").text("Весенние Скидки")

	// 1-4 part2
	// $("span").text("$199")


    // 1-5 part3
    // $("span[target='_blank']").text("$99")


    // 1-6 part1
	// $("a").first().text("USA")


    // 1-7 part2
    // $("a").last().text("Africa")
// });

// $(function() {

	// 2-2 background color for 4 cards
	// $("#tours").children("li").css("background-color", "#45ad7b")

	// 2-3 background color for 2 last cards
	// $(".sale, .asia").css("background-color", "#45ad7b")

	// 2-4 1-st card changed background-color
	// $("#tours li:first").css("background-color", "#45ad7b")

	// 2-5 priсe for Paris and Tokyo corrected on 999$
	// $("#tours span:odd").text("999$")

	// 2-6 price for New-York changed on red
	// $(".america").find("span").css("color", "red")

	// 2-7 Chicago added
	// $("h2").first().text("New York Chicago")

	// 2-8 Tokyo changed on Osaka
	// $("h2").last().text("Osaka, Japan")

	// 2-9 links for Madrid changed on yellow
	// $("#tours").children("li").last().prev().find("a").css("background-color", "yello")
	
	// 2-10 h1 was creative changed
	// $("#tours").prev("h1").text("Wanna see the world? Nothing easier!")
		
	// 	2-11 (part 1) Madrid nights changed on 14
	// 	$("h1").parent("div").children("ul").children(".sale").children("span").text("$1,577 for 14 nights")
// });
// 2-11 (part 2) Madrid background changed
// $(function() {
	// $("h1").parent("div").children("ul").children(".sale").css("background-color", "#12fcf5")
// 	$("h1").first().parent().find(".sale").css("background-color", "#12fcf5").children("span").text("$1,577 for 14 nights")
// });






		// task-3-1.in card USA  added'Call 1-555-jquery-air to book this tour'
// $(document).ready(function(){
// 	var tel=$('<span>Call 1-555-jquery-air to book this tour</span>');
// 	$('.america').append(tel)
// });


// task-3-1-1 var "message" was used
// $(document).ready(function(){
// 	var message=$('<span>Call 1-555-jquery-air to book this tour</span>');
// 	$('.america').append(message)
// });

// task-3-2 all buttons was removed
// $(document).ready(function(){
// 	$('.vote').remove();
// });

// task-3-2-1 when click on any button the message "Call 1-555-jquery-air
//  to book this tour" appears and buttons disappear
// $(document).ready(function(){
// 	$('.vote').on('click', function(){
// 		var message=$('<span>Call 1-555-jquery-air to book this tour</span>');
// 		$('li').append(message);
// 		$('.vote').remove();
// 	});
// });


// task-3-3. Click function was relocated on cards 
// $(document).ready(function(){
// 	$('li').on('click', function(){
// 		var message=$('<span>Call 1-555-jquery-air to book this tour</span>');
// 		$('.america, .europe, .europe sale, .asia').append(message);
// 		// $('.america').append(message);
// 	});
// });


// task-3-4 When click on button message added only on this card. 
// This button disappear
// $(document).ready(function(){
// 	$('.details').on('click', function(){
// 		var message=$('<span>Call 1-555-jquery-air to book this tour</span>');
// 		$(this).after(message);
// 		$(this).remove();
// 	})
// })

// task-3-5. Refactor using function "closest" and "append"
// $(document).ready(function(){
// 	$('span').on('click', function(){
// 		var message=$('<span>Call 1-555-jquery-air to book this tour</span>');
// 		$(this).closest('.america, .europe, .europe sale, .asia').append(message);
// 		$(this).remove();
// 	})
// })

// task-3-6. Click on card, massage on card, delete button (using "this")
$(document).ready(function(){
	$('.america, .europe, .sale, .asia').on('click', function(){
		var message=$('<span>Call 1-555-jquery-air to book this tour</span>');
		$(this).append(message);
		$('.details', this).remove();
	})
})