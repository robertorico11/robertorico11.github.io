let dot = [];

$(".dot").click(function() {
for (let project = 0; project < 5; project  ++) {
    console.log(dot);
}
    
});

let userInput;

$(".addButton").click(function() {
	userInput = (".project-url").val();
	dot.push(userInput);
	$(".projectList").append("<li>"+userInput+"</li>");
    $(".numberOfProjects").text(dot.length);

});
