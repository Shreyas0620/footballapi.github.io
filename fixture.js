// console.log("hello is console")


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'd5456a4da0msh84b361f345d4441p170f2bjsn9e25d9d03dd5',
// 		'X-RapidAPI-Host': 'football98.p.rapidapi.com'
// 	}
// };

// fetch('https://football98.p.rapidapi.com/premierleague/fixtures', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));




// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'd5456a4da0msh84b361f345d4441p170f2bjsn9e25d9d03dd5',
//         'X-RapidAPI-Host': 'football98.p.rapidapi.com'
//     }
// };

// fetch('https://football98.p.rapidapi.com/premierleague/fixtures', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));




// var elasedTime = document.querySelector("#elasped");
// var homeTeamLogo = document.querySelector("#homoLogo");
// var homeTeamName = document.querySelector("#homeName");
// var awayTeamLogo = document.querySelector("#awaylogo");
// var awayTeamName = document.querySelector("#awayName");
// var lastMatchGoals = document.querySelector("#goals");
// var matchTable = document.querySelector("#matchTable");


// function getData() {

//     fetch('https://football98.p.rapidapi.com/fixtures', {

//         "method": 'GET',
//         "headers": {
//             'X-RapidAPI-Key': 'd5456a4da0msh84b361f345d4441p170f2bjsn9e25d9d03dd5',
//             'X-RapidAPI-Host': 'football98.p.rapidapi.com'
//         }
        
//     })
//     .then(response => response.json().then(data =>{
//         console.log(response);

//         // var fixture = matchesList[0]['fixture'];
//         // var goals = matchesList[0]['goals'];
//         // var teams = matchsList[0]['teams'];


//     elaspedTime.innerHTML = fixture['status']['elasped'] + "'";
//     homeTeamLogo.src = teams ['home']['Logo'];
//     homeTeamName.innerHTML = teams ['home']['name'];
//     awayTeamLogo.src = teams ['away']['Logo'];
//     awayTeamLogo.innerHTML = teams ['home']['name'];
//     lastMatchGoals.innerHTML = goals['home'] + " : " + goals['away'];

//     }))
//     .catch(err =>{
//         console.log(err);
//     })

// }

// getData();


const form = document.getElementById('myForm')





