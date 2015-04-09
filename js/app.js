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

	$("ul.list-items")
		.on("mouseenter", "li.pending", function() {
                $(this).append('<span class="tick"> </span>');
            })
		.on("mouseleave", "li.pending", function() {
                $(this).find('span.tick:last').remove();
            })

//Changing an item from 'pending' to 'done' on clicking a pending item

	$("ul.list-items")
		.on("click", "li.pending", function() {
  			$(this).removeClass('pending').addClass('done');
  			$(this).find('span.tick').remove();
		})

//Showing red cross on hover for 'done' items

	$("ul.list-items")
		.on("mouseenter", "li.done", function() {
            $(this).append('<span class="delete"> </span>');
        })
		.on("mouseleave", "li.done", function() {
            $(this).find('span.delete:last').remove();
        })

//Removing an item from the list on clicking the red cross

	$("ul.list-items")
		.on("mousedown", "li.done", function() {
            $(this).slideUp();
        })

})

