var database = firebase.database().ref();

function sendMessage()
{
	var msg = $("#msg").val();
	var name = $("#name").val();
	database.push(
	{
		"msg":msg,
		"name":name
	})
 	$("#msg").val("");
 	$("#name").val("");
 	database.on("child_added", function(dataRow){
	var row = dataRow.val();
	$("#msgBoard").append("<p>" + row.name + ": "+ row.msg);
})
}
