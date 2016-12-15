console.log("Sanity Check: JS is working!");

var students = [
  {
    name:'Aaron',
    githubUsername:'nzoLogic',
    personalApiHerokuApp:'',
    personalApiData: ''
  },
  {
    name:'Alex',
    githubUsername:'aapiane09',
    personalApiHerokuApp:'',
    personalApiData: ''
  },
  {
    name:'Amber',
    githubUsername:'aquoss',
    personalApiHerokuApp:'',
    personalApiData: ''
  },
  {
    name:'Greice',
    githubUsername:'greicens',
    personalApiHerokuApp:'',
    personalApiData: ''
  },
  {
    name:'LD',
    githubUsername:'Vedelopment',
    personalApiHerokuApp:'',
    personalApiData: ''
  },
  {
    name:'Mike',
    githubUsername:'mblair415',
    personalApiHerokuApp:'',
    personalApiData: ''
  },
  {
    name:'Ricardo',
    githubUsername:'ricarellano',
    personalApiHerokuApp:'',
    personalApiData: ''
  },
  {
    name:'RJ',
    githubUsername:'johnson-rl',
    personalApiHerokuApp:'',
    personalApiData: ''
  },
  {
    name:'Ryan T',
    githubUsername:'ryanthomas92',
    personalApiHerokuApp:'',
    personalApiData: ''
  },
  {
    name:'Shiv',
    githubUsername:'shivngiggles',
    personalApiHerokuApp:'',
    personalApiData: ''
  },
  {
    name:'Zach',
    githubUsername:'c00z',
    personalApiHerokuApp:'',
    personalApiData: ''
  }
]

var template;


$(document).ready(function(){

  var source = $('#developer-data-template').html();
  template = Handlebars.compile(source);

  students.forEach(function(student){
    var address = student.personalApiHerokuApp;
    pingPersonalApi(address + '/profile');
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
  console.log(data.name, data);
  profiles.push(data);
  var apiHtml = template({ profiles: profiles });
  $(".data-container").html(apiHtml);
}

function onError(xhr, status, message){
  console.log(message);
}
