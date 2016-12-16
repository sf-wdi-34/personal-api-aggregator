console.log("Sanity Check: JS is working!");

var students = [
  {
    name:'Aaron',
    githubUsername:'nzoLogic',
    personalApiHerokuApp:'https://steele-mongod.herokuapp.com/api'
  },
  {
    name:'Alex',
    githubUsername:'aapiane09',
    personalApiHerokuApp:'https://blooming-hamlet-27001.herokuapp.com/api'
  },
  {
    name:'Amber',
    githubUsername:'aquoss',
    personalApiHerokuApp:'https://personal-api-aquoss.herokuapp.com/api'
  },
  {
    name:'Greice',
    githubUsername:'greicens',
    personalApiHerokuApp:'https://gsilva.herokuapp.com/api'
  },
  {
    name:'LD',
    githubUsername:'Vedelopment',
    personalApiHerokuApp:'https://vedelopment-api-aggregator.herokuapp.com/api'
  },
  {
    name:'Mike',
    githubUsername:'mblair415',
    personalApiHerokuApp:'https://mblair-design.herokuapp.com/api'
  },
  {
    name:'Ricardo',
    githubUsername:'ricarellano',
    personalApiHerokuApp:'https://api-ricarellano.herokuapp.com/api'
  },
  {
    name:'RJ',
    githubUsername:'johnson-rl',
    personalApiHerokuApp:'https://arrjay-api.herokuapp.com/api'
  },
  {
    name:'Ryan T',
    githubUsername:'ryanthomas92',
    personalApiHerokuApp:'https://ryansapi.herokuapp.com/api'
  },
  {
    name:'Shiv',
    githubUsername:'shivngiggles',
    personalApiHerokuApp:'https://shivngiggles.herokuapp.com/api'
  },
  {
    name:'Zach',
    githubUsername:'c00z',
    personalApiHerokuApp:'https://c00z.herokuapp.com/api'
  }
]

var template;

Handlebars.registerHelper('json', function(context) {
    return JSON.stringify(context);
});


$(document).ready(function(){

  var source = $('#developer-data-template').html();
  template = Handlebars.compile(source);

  students.forEach(function(student){
    var apiHtml = template({ profiles: students});
    $(".data-container").html(apiHtml);
    if(student.personalApiHerokuApp){
      var address = student.personalApiHerokuApp;
      pingPersonalApi(address + '/profile');
    }
  })


});


function pingPersonalApi(route){
  $.ajax({
    method: 'GET',
    url: route,
    dataType: 'json',
    success: onSuccess,
    error: onError
  });
}

function onSuccess(data){
  console.log('found data for: ', data.name, data);
  var index = findProfileIndex(data.githubUsername);
  console.log(index);
  students[index].personalApiData = data;
  var apiHtml = template({ profiles: students });
  console.log(apiHtml);
  $(".data-container").html(apiHtml);
}

function onError(xhr, status, message){
  console.log(message);
}

function findProfileIndex(username){
  for (var i = 0; i < students.length; i++) {
    console.log('looping');
    if(students[i].githubUsername === username){
      return i;
    }
  }
}
