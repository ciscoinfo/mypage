

class Slider {
    constructor(imgSlides, $slider, $btnLeft, $btnRight) {
        this.imgSlides = imgSlides;
        this.$slider = $slider;
        this.$btnLeft = $btnLeft;
        this.$btnRight = $btnRight;

        this.nbSlides = this.imgSlides.length;
        this.itemWidth = 100 / this.imgSlides.length;
        this.lastIndex = this.imgSlides.length - 1;
        this.currentIndex = 0;

        this.createSlides();
        this.populateSlides();
        this.initSlider();
        this.setSlidesWidth();
        this.addControls();

    }

    createSlides() {
        for (let i = 0; i < this.nbSlides; i++) {
            this.$slider.append( "<img class='slide' src='' alt=''>" );
        }
    }

    populateSlides() {
        for (let i = 0; i < this.nbSlides; i++) {
            this.$slider.find('.slide:nth-child(' + (i + 1) + ')').attr("src", FOLDER_IMG + this.imgSlides[i]);
        }
    }

    initSlider() {
        this.$slider.css({
            width: 100 * this.nbSlides + "%",
            marginLeft: '-100%'
        });
    }

    setSlidesWidth() {

        let width = this.itemWidth;

        $.each(this.$slider.children(), function () {
            $(this).css("width", width + "%");
        });
    }


    addControls() {

        let that = this;

        this.$btnLeft.click(function() {
            that.$slider.animate({
                left: "+=" + '100' + "%"
            }, 800, function () {
                that.currentIndex = that.getPreviousIndex(that.currentIndex);
                // The last image becomes the first
                that.$slider.find('.slide:last-child').prependTo(that.$slider);
                that.resetSliderImages();
            });
        });


        this.$btnRight.click(function() {
            that.$slider.animate({
                left: "-=" + '100' + "%"
            }, 800,  function () {
                that.currentIndex = that.getNextIndex(that.currentIndex);
                // The first image becomes the last
                that.$slider.find('.slide:first-child').appendTo(that.$slider);
                that.resetSliderImages();
            });
        });

    }

    resetSliderImages() {
        this.$slider.css('left', "0");
    }

    getPreviousIndex() {
        let res = 0;
        res = (this.currentIndex > 0) ? this.currentIndex - 1 : this.lastIndex;
        return res;
    }
    
    getNextIndex() {
        let res = 0;
        res = (this.currentIndex < this.lastIndex) ? this.currentIndex + 1 : 0;
        return res;
    }

}  //end Slider class


// let mySlider = new Slider(IMG_SLIDES, slider, btnLeft, btnRight);
