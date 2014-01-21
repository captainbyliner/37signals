$(document).ready(function(){
	$(".middlebox").mouseenter(function(){
		$("h1").addClass("hhover");
		$("h1").html("<span class ='blue'>Basecamp</span> is the project management tool you wish you had on your last project.");
		$("h2").addClass("hovera");
		$("h2").html("Are you still managing projects with email? Are you still using Excel for your to-do lists? It's time to upgrade to Basecamp. Manage projects and collaborate with your team and clients the modern way.");
	});
	$(".middlebox").mouseleave(function(){
		$("h1").removeClass("hhover");
		$("h1").html("Making collaboration productive and enjoyable for people every day.");
		$("h2").removeClass("hovera");
		$("h2").html("Frustration-free web-based apps for collaboration, sharing information, and making decisions.");

	});
	$(".middlebox1").mouseenter(function(){
		$("h1").addClass("hhover");
		$("h1").html("<span class='blue'>Highrise</span> remembers the important things about people you'd normally forget.");
		$("h2").addClass("hovera");
		$("h2").html("Keep a permanent record of people you do business with. Know who you talked to, when you talked to them, what was said, and when to follow up next. Over 20,000,000 contacts are tracked using Highrise");
	});
	$(".middlebox1").mouseleave(function(){
		$("h1").removeClass("hhover");
		$("h1").text("Making collaboration productive and enjoyable for people every day.");
		$("h2").removeClass("hovera");
		$("h2").text("Frustration-free web-based apps for collaboration, sharing information, and making decisions");

	});
	$(".middlebox2").mouseenter(function(){
		$("h1").addClass("hhover");
		$("h1").html("From near or far, <span class ='blue'>Campfire</span> helps teams work together over the web in real-time");
		$("h2").addClass("hovera");
		$("h2").html("Share ideas, discussions, concepts, images, code samples, videos, mockups and documents in a real-time private chat room. It's game changing. We couldn't run our own business without campfire.");


	});
	$(".middlebox2").mouseleave(function(){
		$("h1").removeClass("hhover");
		$("h1").text("Making collaboration productive and enjoyable for people every day.");
		$("h2").removeClass("hovera");
		$("h2").text("Frustration-free web-based apps for collaboration, sharing information, and making decisions");
	})

$(".middlebox").mouseenter(function(){
	$("#arrow-left").fadeTo("fast", 1);

});

$(".middlebox").mouseleave(function(){
	$("#arrow-left").fadeTo("fast", 0);

});

$(".middlebox1").mouseenter(function(){
	$("#arrow-lefta").fadeTo("fast", 1);

});

$(".middlebox1").mouseleave(function(){
	$("#arrow-lefta").fadeTo("fast", 0);

});

$(".middlebox2").mouseenter(function(){
	$("#arrow-right").fadeTo("fast", 1);
	
});

$(".middlebox2").mouseleave(function(){
	$("#arrow-right").fadeTo("fast", 0);

});

});






