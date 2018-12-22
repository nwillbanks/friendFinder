var express = require('express');
var router = express.Router();
var path = require('path');
var friends = require(path.join(__dirname, '..', 'data', 'friends'));

// define the home page route & start comparison
router.post('/', function (req, res) {
	var winningFriend;
	var lowestScore;

	friends.forEach(friend => {
		let score = 0;
		for(let i = 0; i < friend.scores.length; i++) {
			score += Math.abs(friend.scores[i] - req.body.question[i]);
		}
		if(!winningFriend || score < lowestScore) {
			winningFriend = friend;
			lowestScore = score;
			console.log("New winning friend!")
		}
	});

	res.json(winningFriend);
	//console.log(JSON.stringify(req.body, null, 2));
})
// define the about route
router.get('/friends', function (req, res) {
  	res.json(friends);
})

//compare friends


module.exports = router

