var inboxNames = document.getElementById('prompt1');
var emailList = document.getElementById('prompt2');

var gMail = {
	user1 : {
		userInfo   : {
			name         : 'Jeremy Marx',
			emailAddress : 'jeremydmarx@gmail.com'
		},
		mailboxes  : {
			inbox   : [
				{
					sender       : 'no-reply@alertsp.chase.com',
					subject      : 'We got your Chase QuickDeposit(SM)',
					message      : 'Your check was received and is currently being reviewed.',
					attatchments : [],
					categories   : [ 'updates' ]
				},
				{
					sender       : 'sgallagher@techtalentsouth.com',
					subject      : 'Resume & LinkedIn Review Webinar',
					message      :
						'We will be having a Resume and LinkedIn Review webinar on Thursday and Friday of this week.',
					attatchments : [],
					categories   : [ 'promotional' ]
				}
			],
			snoozed : [ {} ],
			sent    : [
				{
					sendTo       : 'ebd7905b045336b698542364bb65fac2@reply.craigslist.org',
					subject      : '2003 BMW 525i',
					message      :
						'Hey Kirk, I have another buyer on the line who I told could have a day to think on it. If he turns it down, I’ll let you know. Jeremy',
					attatchments : []
				},
				{
					sendTo       : 'laura@gmail.com',
					subject      : 'tranche album cover',
					message      : 'Hey, here is my new draft of the graphic',
					attatchments : [ 'angel.png' ]
				}
			],
			drafts  : [
				{
					sendTo       : 'mikep@nocca.com',
					subject      : 'lesson schedule',
					message      : 'Hey man, let me know what the schedule this week is',
					attatchments : []
				}
			],
			spam    : [
				{
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
var randomNum = Math.floor(Math.random() * gMail.user1.mailboxes.inbox.length);
Object.keys(gMail.user1.mailboxes.inbox[randomNum]).forEach(function(e, i) {
	console.log(e);
	emailList.innerHTML += '<p>' + e + ': ' + gMail.user1.mailboxes.inbox[randomNum][e] + '</p>';
});
