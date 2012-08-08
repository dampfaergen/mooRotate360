/*
    mooRotate360 v0.2 powered by Mootools
    by Købstaden.dk - based on Rotate360 by Oliveta
    
*/
var mooRotate360 = new Class({
    Implements: [Options],
    options: {
        autoPlay: false,
        tickAmount: 12,
        frameTime: 100,
        firstFrame: 0
    },
    initialize: function (data, target, options) {
        this.setOptions(options);
        if (this.options.speed < 1 || this.options.speed > 10) this.options.speed = 5;
        
        this.imageAmount = data.length;
        this.mdown = false;
        this.posun_x = 0;
        this.posXori = 0;

        if (this.options.firstFrame > 0 && this.options.firstFrame < this.imageAmount) {
            this.i = this.options.firstFrame - 1;
            this.nextImage();
        } else this.i = 0;

        var self = this;

        this.wrapper = new Element("div").inject(target);
        
        this.images360 = new Asset.images(data, {
            onComplete:function(){
                if (!self.options.autoPlay) {
                    self.wrapper.addEvents({
                        'mousedown': function (e) {
                            e.stop();
                            self.options.autoPlay = false;
                            self.mdown = true;
                            self.posXori = e.page.x;
                        },
                        'mouseup': function (e) {
                            self.mdown = false;
                        },
                        'mouseleave': function (e) {
                            //self.mdown = false;
                        },
                        'mousemove': function (e) {
                            e.stop();
                            if (self.mdown) {
                                if (Math.abs(self.posXori - e.page.x) >= self.options.tickAmount) {
                                    if (self.posXori - e.page.x >= self.options.tickAmount) {
                                        self.posXori = e.page.x;
                                        self.moveForward();
                                    } else {
                                        self.posXori = e.page.x;
                                        self.moveBack();
                                    }
                                }
                            }

                        }
                    }); //end addEvents
                } else {
                    self.nextImage.periodical(self.options.frameTime, self);
                }
                self.draw();
            },
            onProgress:function(counter, index, source){
                if(index === 0){
                    self.activeImageIndex = 0;
                    self.draw();
                }
                //TODO - Add progress bar
            }
        });

    },
    draw: function(){
        this.wrapper.empty();
        this.images360[this.activeImageIndex].inject(this.wrapper);
    },
    nextImage: function () {
        this.activeImageIndex++;
        if (this.activeImageIndex == this.imageAmount) {
            this.activeImageIndex = 0;
        }
        this.draw();
    },
    moveForward: function () {
        this.activeImageIndex++;
        if (this.activeImageIndex == this.imageAmount) {
            this.activeImageIndex = 0;
        }
        this.draw();
    },
    moveBack: function () {
        this.activeImageIndex--;
        if (this.activeImageIndex == -1) {
            this.activeImageIndex = this.imageAmount - 1;
        }
        this.draw();
    }
});