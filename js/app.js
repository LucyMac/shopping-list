$(document).ready(function() {

//Adding item to the list

    $("input.new-item")
		.keydown(function (e) {
			if (e.which == 13) {
				$("ul.list-items").append('<li class="pending">'+$('input.new-item').val()+'</li>');
				$("input.new-item").val("");
			}
		})

//Showing green tick on hover for 'pending' items

	//the following doesn't work on items added dynamically

//	$("li.pending")
//		.hover(
//			function() {
//			$(this).append($('<span class="tick"> </span>'));
//		}, function() {
//			$(this).find('span:last').remove();
//		})

	//trying other option with .on() but this doesn't work

	$(document)
		.on("hover", "li.pending", function() {
			$("li.pending").append('<span class="tick"> </span>');
		}, function() {
			$("li.pending").find('span:last').remove();
		})


//Showing red cross on hover for 'done' items

	//the following doesn't work on items added dynamically

	$("li.done")
		.hover(
			function() {
			$(this).append($('<span class="delete"> </span>'));
		}, function() {
			$(this).find('span:last').remove();
		})

//Changing an item from 'pending' to 'done' on clicking a pending item

	//this changes the styling but doesn't show the appropriate icon ('span.delete')

	$("ul.list-items")
		.on("click", "li.pending", function() {
  			$(this).removeClass('pending').addClass('done');
		})

//Removing an item from the list on clicking the red cross

	//doesn't work

	$( "li.done" )
		.on("click", "span.delete", function() {
  			$(this).remove();
	})

//Order items so 'done' items always sit below all 'pending' items.


})