// ??5 Slideshow extension
var slideshow = {
	photoList         : [ 'Neil Young', 'Tom Petty', 'Sade', 'Clapton' ],
	currentPhotoIndex : 0,
	nextPhoto         : function() {
		if (this.currentPhotoIndex + 1 < this.photoList.length) {
			this.currentPhotoIndex++;
			console.log(this.photoList[this.currentPhotoIndex]);
		} else {
			this.pause();
			console.log('End of Slideshow');
		}
	},
	prevPhoto         : function() {
		if (this.currentPhotoIndex > 0) {
			this.currentPhotoIndex--;
			console.log(this.photoList[this.currentPhotoIndex]);
		} else {
			// this.pause();
			console.log('No more photos');
		}
	},
	getCurrentPhoto   : function() {
		return this.photoList[this.currentPhotoIndex];
	},
	playInterval      : null,
	play              : function() {
		this.playInterval = this.setInterval(this.nextPhoto.bind(this), 2000);
	},
	pause             : function() {
		clearInterval(this.playInterval);
	}
};

slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.prevPhoto();
slideshow.getCurrentPhoto();
console.log(slideshow.prevPhoto());

//!!HW add reverse func, log the current photo in play and reverse function for HW
