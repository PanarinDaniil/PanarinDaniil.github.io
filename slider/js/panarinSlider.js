(function( $ ){
	$.fn.panarinSlider = function(options) {
		class PSlider {
			constructor (obj, options) {
				this.slider = obj;
				this.options = options;
				this.res = false;
				this.dots = false;
				this.arrows = true;
				this.beforeInit = false;
				this.afterInit = false;
				
				if ( typeof options != "undefined" ) {
					this.checkInstalls();
				}

				if ( this.beforeInit != false ) {
					this.beforeInit(this);
				}

				this.initPlugin();
				// this.showCurrent();
				if ( this.afterInit != false ) {
					this.afterInit(this);
				}

				// Events
				if ( options == "next" ){
					this.setSlideArrows(this, +1);
				}

				return this;
			};

			initPlugin() {
				document.getElementsByTagName("body")[0].style.overflow = "hidden";
				// this.style.height = "0px";
				if (typeof this.currentPosition == "undefined") {
					this.currentPosition = 1;
				}
				if ( !this.hasArrows() ) {
					this.addBtn();
				}
				if ( !this.hasDots() ) {
					this.addDots();
				}
				var fullW = this.getSliderWidth();
				this.setWidth(fullW);
				this.show(this.currentPosition);
				this.showCurrent();
				document.getElementsByTagName("body")[0].style.overflow = "visible";
				// this.style.height = "auto";
			};
			checkInstalls() {
				// Preinstalls
				if (typeof this.options.dots != "undefined" ) {
					this.dots = this.options.dots;
				}
				if (typeof this.options.arrows != "undefined" ) {
					this.arrows = this.options.arrows;
				}				
				// Callbacks
				if (typeof options.beforeInit != "undefined" ) {
					this.beforeInit = this.options.beforeInit;
				}
				if (typeof options.afterInit != "undefined" ) {
					this.afterInit = this.options.afterInit;
				}
				
			};
			fWidth() {
				return this.slider.getElementsByClassName("pSlider-list");
			};
			slide() {
				var temp = this.slider.getElementsByClassName("pSlider-list");
				return temp[0].getElementsByTagName("li");
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
			showCurrent() {
				for (var i = 0; i < this.num(); i++) {
					this.slide()[i].classList.remove("pan-slide-current");
					if ( this.currentPosition === i+1) {
						this.slide()[i].classList.add("pan-slide-current");
					}
				}
			};
			show(number) {
				var w = this.getSliderWidth();
				this.setWidth(w);
				
				if (this.fWidth()[0].style.left === "") {
					this.fWidth()[0].style.left = 0 + "px";
				}
				this.start = Math.abs(parseFloat(this.fWidth()[0].style.left));
				if ( number <= this.num() && number > 0 ) {
					this.position = w * (number - 1);
					if (this.res == true ) {
						this.fWidth()[0].style.left = -this.position + "px";
						this.res = false;
						this.showCurrent();
					} else {
						this.animate(this.fWidth()[0], "left", this.start, this.position, 1000);
						this.showCurrent();
					}
				}
			};
			animate(object, property, start_value, end_value, time) {
				var frame_rate = 0.04;
				var frame = 0;
				var delta = (end_value - start_value) / time / frame_rate;
				var handle = setInterval(function() {
					frame++;
					var value = start_value + delta * frame;
					object.style[property] = -value + "px";
					if (start_value > end_value){
						if (value <= end_value) {
							clearInterval(handle);
						}
					}
					if (start_value <= end_value){
						if (value >= end_value) {
							clearInterval(handle);
						}
					}
				}, 1 / frame_rate);
			};
			containsTagByClass (tag) {
				return this.slider.getElementsByClassName(tag).length > 0;
			};
			hasDots () {
				return this.containsTagByClass("dots");
			};
			addDots() {
				if ( this.hasDots() ) {
					return;
				}
				if ( this.dots ) {
					var dots = this.slider.appendChild(document.createElement('ul'));
					dots.classList.add("dots");
					for (var i = 1; i <= this.num(); i++) {
						var nod = dots.appendChild(document.createElement('li'));
						var a = nod.appendChild(document.createElement('a'));
						a.href = "javascript:void(0);";
						a.innerHtml = "&nbsp;";
						if (i == this.currentPosition) {
							a.classList.add("active");
						}
						var pSlider = this;
						(function (obj, a, number) {
							a.addEventListener("click", function(){
								obj.setSlide(obj, number);
								if ( obj.arrows ) {
									obj.checkArrowsStyle();
								}
							});
						})(pSlider, a, i);
					}			
				}
			};
			setSlide(obj, pos) {
				var curPosition = obj.currentPosition;
				var newPosition = pos;
				if (newPosition > (obj.num())) {
					newPosition = obj.num();
				} else if (newPosition < 1) {
					newPosition = 1;
				}
				obj.currentPosition = newPosition;
				if ( obj.arrows ) {
					obj.checkArrowsStyle();
				}
				if ( obj.dots ) {
					obj.checkDotsStyle();
				}
				obj.show(newPosition);
			};
			checkDotsStyle() {
				var dots = this.slider.getElementsByClassName("dots")[0];
				var li = dots.getElementsByTagName("li");
				var curPosition = this.currentPosition;
				for ( var i = 0; i < li.length; i++) {
					var a = li[i].getElementsByTagName("a")[0];
					a.removeAttribute('class');
					if (curPosition === i+1) {
						a.classList.add("active");
					} else {
						a.className = "";
					}					
				}
			};
			hasArrows () {
				var hasPrev = this.containsTagByClass("prev"),
					hasNext = this.containsTagByClass("next");
				return hasPrev && hasNext;
			};
			addBtn() {
				if ( this.hasArrows() ) {
					return;
				}
				if ( this.arrows ) {
					var prev = this.slider.appendChild(document.createElement('a')),
						next = this.slider.appendChild(document.createElement('a'));
					prev.classList.add("arrow-pSlider");
					next.classList.add("arrow-pSlider");
					prev.classList.add("prev");
					next.classList.add("next");
					prev.href = next.href = "javascript:void(0);";
					if ( this.arrows ) {
						this.checkArrowsStyle();
					}
					var pSlider = this;
					prev.addEventListener("click", function(){
						pSlider.setSlideArrows(pSlider, -1);
					});
					next.addEventListener("click", function(){
						pSlider.setSlideArrows(pSlider, +1);
					});
				}
			};
			setSlideArrows(obj, pos) {
				var curPosition = obj.currentPosition;
				if ( curPosition >= 1 && curPosition <= obj.num() ) {
					var newPosition = curPosition + pos;
					if (newPosition > (obj.num())) {
						newPosition = obj.num();
					} else if (newPosition < 1) {
						newPosition = 1;
					}
					obj.currentPosition = newPosition;
					if ( obj.arrows ) {
						obj.checkArrowsStyle();
					}
					if ( obj.dots ) {
						obj.checkDotsStyle();
					}
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
			};
			// Events
			nextSlide(obj) {
				var curPosition = obj.currentPosition;
				if ( curPosition >= 1 && curPosition <= obj.num() ) {
					var newPosition = curPosition + 1;
					if ( newPosition > (obj.num()) ) {
						newPosition = obj.num();
					} else if (newPosition < 1) {
						newPosition = 1;
					}
					obj.currentPosition = newPosition;
					if ( obj.arrows ) {
						obj.checkArrowsStyle();
					}
					if ( obj.dots ) {
						obj.checkDotsStyle();
					}
					obj.show(newPosition);
				}
			};
			prevSlide(obj) {
				var curPosition = obj.currentPosition;
				if ( curPosition >= 1 && curPosition <= obj.num() ) {
					var newPosition = curPosition - 1;
					if ( newPosition <= 1 ) {
						newPosition = 1;
					}
					obj.currentPosition = newPosition;
					if ( obj.arrows ) {
						obj.checkArrowsStyle();
					}
					if ( obj.dots ) {
						obj.checkDotsStyle();
					}
					obj.show(newPosition);
				}
			};
		};

		var obj = this;
		var slider = [];

		var initSlider = function(){
			for ( var i = 0; i < obj.length; i++ ) {
				if ( typeof slider[i] == "undefined" ) {
					slider[i] = new PSlider(obj[i], options);
				} else {
					slider[i].res = true;
					slider[i].initPlugin();
					slider[i].res = false;
				}
			}
			return slider;
		};

		$(window).on('load resize', initSlider);
		return initSlider();
	};
})(jQuery);