$(function() {

	// Custom JS
	//console.log('Hello Word')
	//1-1
	//$('h2').css('color','purple')
	//1-2
	//$('.details').css('font-size','22px')

	//1-3
	//first option
	//$('h1').last().text('Весенние скидки')

  //two option
	//$('h1:eq(1)').text('Весенние скидки')
	
  //three option
	//$('#vacations-wrapper h1').text('Весенние скидки')

	//1-4
	//$('span').text('$199')

	//1-5 
	//$('span').text('$199')
	//$('.europe span').text('$99')

	//1-6
	//$('.sorting a').last().text('Africa')

	//2-2
	//$('#tours > li').css('background','#1C7E92')
	//$('#tours').find('li').css('background','#1C7E92')
	

	//2-3
	//$('.sale , .asia').css('background','#1C7E92')
	//$('#tours li:gt(3)').css('background','#1C7E92')

	//2-4
	//$('#tours li:first').css('background','#1C7E92')
	//$('#tours').find('li').first().css('background','#1C7E92')
	
	//2-5
	//$('#tours li:odd').find('span').html('$999 for 5 nights')
	//$('#tours li:odd').find('span').text('$999 for 5 nights')
	
	//2-6
	//$('.america').find('span').css('color','red')

	//2-7
	//$('h2').first().append(' Chicago')

	//2-8
	//$('h2').last().text('Osacu, Japan')
	
	//2-9
	//$('#tours >li').last().prev().find('a').css('background','red')
	//$('#tours').children('li').last().prev().find('a').css('background','red')
	
	//2-10
	//$('#tours').prev().text('АААА РЕАЛЬНЫЕ АААА ТУРЫ')

	//2-11
	//$('h1').last().parent().find('#tours').children('li').last().prev().css('background','#1C7E92').find('span').text('$1,577 for 14 nights')
	
//task 3
//3-1
// $(document).ready(function(){
// 	let text = $('<span>Call 1-555-jquery-air to book this tour</span>');
// 	$('.usa').css('text-align','center').find('span').after(text)
// })
	
// });
//3-1-1
	// $(document).ready(function(){
	// 	let massage = $('<span>Call 1-555-jquery-air to book this tour</span>');
	// 	$('.usa').css('text-align','center').find('span').after(massage)
	// })

// });
//3-2
// $(document).ready(function(){
// $('button').remove()
// })
// });

//3-2-1
// $('button').on('click', function(){
// 	let massage = $('<span>Call 1-555-jquery-air to book this tour</span>');
// 	$('.usa').css('text-align','center').find('span').after(massage)
// 	$('button').remove()
// 	})
// })

//3-3
// $('.tour').css('cursor','pointer').on('click', function(){
// 	let massage = $('<span>Call 1-555-jquery-air to book this tour</span>');
// 	$('.usa').css('text-align','center').find('span').after(massage)
// 	$('button').remove()
// 	})
// })
//3-4
// $('.book').on('click', function(){
// 	let massage = $('<span>Call 1-555-jquery-air to book this tour</span>');
// 	$(this).parent().css('text-align','center').find('span').after(massage)
// 	$(this).remove('button')
// 	})
// })

//3-5
// $('.book').on('click', function(){
// 	let massage = $('<span>Call 1-555-jquery-air to book this tour</span>');
// 	$(this).closest('.tour').append(massage)
// 	$(this).remove('button')
// 	})
// })

//3-6, 3-7
// $('.tour').on('click', function(){
// 	let massage = $('<span>Call 1-555-jquery-air to book this tour</span>');
// 	$(this).closest('.tour').append(massage)
// 	$(this).find('button').remove('button')
// 	})
// })

3-8
$('.book').on('click', function(){
	let massage = $('<span>Call 1-555-jquery-air to book this tour</span>');
	$(this).closest('.tour').append(massage)
	$(this).remove('button')
	let discount = $('.tour').attr("data-discount")
	})
})