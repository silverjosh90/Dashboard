search = $("#search")
oldSearchURL = "https://www.google.com/?gws_rd=ssl#q="
derp = $(".derp")


search.keyup(function(d){

  if(d.which == 13) {
    address = ""
    var oldAddress = search.val()
    for (var i = 0; i < oldAddress.length; i++) {
      if(oldAddress[i] == " ") {
        address+= "+"
      }
      else {
        address+= oldAddress[i]
      }
    }
    var searchURL = oldSearchURL+address
    window.location.href =searchURL


  }


})
var call = $.ajax({
    url: "http://api.nytimes.com/svc/mostpopular/v2/mostshared/all-sections/1?api-key=8bbb02c4de7a98497f61ef29ee45e158:6:73655312",
    method: "GET",
    dataType: "Json"
})

call.done(function(response){

  var artLoop = response["results"]
  for (var i = 0; i < 5; i++) {
    var url = artLoop[i]["url"]
    var title = artLoop[i]["title"]
    var abstract = artLoop[i]["abstract"]

    var output ="<a href="+url+">" + title +"</a><br/>"+abstract+"<br/><br/>"
    derp.append(output)
  }


})

var weatherCall = $.ajax({
    url: "http://api.wunderground.com/api/acc6a721fb24f238/conditions/q/CO/Denver.json",
    method: "GET",
    dataType: "Json"
})

weatherCall.done(function(response){
  var temp = response["current_observation"]["temperature_string"]
  var icon = response["current_observation"]["icon_url"]
  derp.append("<p>" +temp+ "</p>"+ "<img src='"+icon+"'/><br/>")
})


var redditCall = $.ajax({
    url:
    method: "GET",
    dataType: "Json"
})

redditCall.done(function(response){

})
