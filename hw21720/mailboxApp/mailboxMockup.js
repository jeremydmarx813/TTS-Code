var inboxNames = document.getElementById('prompt1');
var emailList = document.getElementById('prompt2');
var secondMessage = document.getElementById('prompt3');

var gMail = {
	user1 : {
		userInfo   : {
			name         : 'Jeremy Marx',
			emailAddress : 'jeremydmarx@gmail.com'
		},
		mailboxes  : {
			inbox   : [
				{
					sendTo       : 'jeremydmarx@gmail.com',
					sender       : 'no-reply@alertsp.chase.com',
					subject      : 'We got your Chase QuickDeposit(SM)',
					message      : 'Your check was received and is currently being reviewed.',
					attatchments : [],
					categories   : [ 'updates' ]
				},
				{
					sendTo       : 'jeremydmarx@gmail.com',
					sender       : 'sgallagher@techtalentsouth.com',
					subject      : 'Resume & LinkedIn Review Webinar',
					message      :
						'We will be having a Resume and LinkedIn Review webinar on Thursday and Friday of this week.',
					attatchments : [],
					categories   : [ 'promotional' ]
				}
			],
			snoozed : [],
			sent    : [
				{
					sendTo       : 'ebd7905b045336b698542364bb65fac2@reply.craigslist.org',
					sender       : 'jeremydmarx@gmail.com',
					subject      : '2003 BMW 525i',
					message      :
						'Hey Kirk, I have another buyer on the line who I told could have a day to think on it. If he turns it down, I’ll let you know. Jeremy',
					attatchments : [],
					categories   : []
				},
				{
					sendTo       : 'laura@gmail.com',
					sender       : 'jeremydmarx@gmail.com',
					subject      : 'tranche album cover',
					message      : 'Hey, here is my new draft of the graphic',
					attatchments : [ 'angel.png' ],
					categories   : []
				}
			],
			drafts  : [
				{
					sendTo       : 'mikep@nocca.com',
					sender       : 'jeremydmarx@gmail.com',
					subject      : 'lesson schedule',
					message      : 'Hey man, let me know what the schedule this week is',
					attatchments : [],
					categories   : []
				}
			],
			spam    : [
				{
					sendTo       : 'jeremydmarx@gmail.com',
					sender       : 'rick@getrich.com',
					subject      : 'You won a lot of money!',
					message      : 'Call us for your account number',
					attatchments : [],
					categories   : []
				}
			],
			folders : [ { WebDev: [] }, { MusicBiz: [] } ]
		},
		categories : [ 'social', 'updates', 'forums', 'promotions' ]
	}
};

//!!PROMPT 1
Object.keys(gMail.user1.mailboxes).forEach(function(e, i) {
	inboxNames.innerHTML += '<span>' + e + '</span><br>';
});

//!!PROMPT 2

var deepArrChecker = function(arr) {
	var layered = false;
	for (k in arr[0]) {
		if (Array.isArray(arr[0][k])) {
			layered = true;
		}
	}
	return layered;
};

var messageObjGetter = function(obj) {};

for (k in gMail.user1.mailboxes) {
	if (gMail.user1.mailboxes[k].length && k !== 'folders') {
		var stringToAdd = '<p><span class=prompt2header>' + k + ':</span><br>';
		var localBoxName = gMail.user1.mailboxes[k];
		localBoxName.forEach(function(e, i) {
			stringToAdd += 'sendTo: ' + e.sendTo + '<br>sender: ' + e.sender + '<br>message: ' + e.message + '<br><br>';
		});
		emailList.innerHTML += stringToAdd + '</p>';
	} else {
		console.log('NO MESSAGES');
	}
}

//!!PROMPT 3
var messageArr = [];
var messageCounter = 1;
for (k in gMail.user1.mailboxes) {
	if (gMail.user1.mailboxes[k].length && k !== 'folders') {
		for (var i = 0; i < gMail.user1.mailboxes[k].length; i++) {
			messageArr.push(gMail.user1.mailboxes[k][i]);
		}
	}
}

secondMessage.innerHTML = '<p>' + messageArr[1].message + '</p>';

//!!PROMPT 4
