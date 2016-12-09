(function( $ ){
	$.fn.panarinSlider = function(obj) {
		
		class PSlider {
			constructor (obj) {
				// console.log(obj);
				this.slider = obj;
				this.initPlugin();
				// for (var i=0; i < obj.length; i++) {
				// 	(function(obj, f){
				// 		f.slider = obj;
				// 		console.log(f.slider);
				// 		f.initPlugin();
				// 	})(obj[i], this);
				// }
			};


			initPlugin() {
				if (typeof this.currentPosition == "undefined") {
					this.currentPosition = 1;
				}
				var fullW = this.getSliderWidth();
				this.setWidth(fullW);
				this.show(this.currentPosition);
				if ( !this.slider.getElementsByClassName("arrows-slider").length ) {
					this.addBtn();
				}
			};
			fWidth() {
				return this.slider.getElementsByClassName("slider-list");
			};
			slide() {
				return this.slider.getElementsByTagName("li");
			};
			num() {
				return this.slide().length;
			};
			getSliderWidth() {
				return Math.max(
					this.slider.offsetWidth, 
					this.slider.clientWidth
				);
			};
			setWidth(w) {
				var fullWidth = this.num() * w;
				this.fWidth()[0].style.width = fullWidth + "px";
				for (var i = 0; i < this.num(); i++) {
					this.slide()[i].style.width = w + "px";
				}
			};
			show(number) {
				var w = this.getSliderWidth();
				this.setWidth(w);
				if ( number <= this.num() && number > 0 ) {
					var position = w * (number - 1);
					this.fWidth()[0].style.marginLeft = -position + "px";
				}
			};
			addBtn() {
				var arrowsSlider = this.slider.appendChild(document.createElement('div'));
				arrowsSlider.classList.add("arrows-slider");
	            var prev = arrowsSlider.appendChild(document.createElement('a')),
					next = arrowsSlider.appendChild(document.createElement('a'));
	            prev.classList.add("arrow-slider");
	            next.classList.add("arrow-slider");
	            prev.classList.add("prev");
	            next.classList.add("next");
	            prev.href = next.href = "javascript:void(0);";

	            var pSlider = this;
	            this.checkArrowsStyle();
	            prev.addEventListener("click", function(){
	            	pSlider.setSlide(pSlider, -1);
	            });
	            next.addEventListener("click", function(){
	            	pSlider.setSlide(pSlider, +1);
	            });
			};
			setSlide(obj, pos) {
				var curPosition = this.currentPosition;
            	if ( curPosition >= 1 && curPosition <= obj.num() ) {
            		var newPosition = curPosition + pos;
            		if (newPosition > (obj.num())) {
            			newPosition = obj.num();
            		} else if (newPosition < 1) {
            			newPosition = 1;
            		}
            		this.currentPosition = newPosition;
	            	obj.checkArrowsStyle();
            		obj.show(newPosition);
            	}
			};
			checkArrowsStyle() {
				var prev = this.slider.getElementsByClassName("prev")[0];
				var next = this.slider.getElementsByClassName("next")[0];
				if (this.currentPosition == 1) {
					prev.classList.add("dis");
				} else {
					prev.classList.remove("dis");
				}
				if (this.currentPosition == this.num()) {
					next.classList.add("dis");
				} else {
					next.classList.remove("dis");
				}
			}
		};
		var obj = this;
		var slider = [];

		$(window).on('load resize', function(){
			for (var i=0; i< obj.length;i++) {
				if ( typeof slider[i] == "undefined" ) {
					slider[i] = new PSlider(obj[i]);
				} else {
					slider[i].initPlugin();
				}
			}
		});
	};
})(jQuery);