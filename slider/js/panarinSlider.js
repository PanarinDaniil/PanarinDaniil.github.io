(function( $ ){
	$.fn.panarinSlider = function(obj) {
		
		class PSlider {
			constructor (obj) {
				this.slider = obj;
				this.initPlugin();
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
					this.addDots();
				}
			};
			fWidth() {
				return this.slider.getElementsByClassName("slider-list");
			};
			slide() {
				var temp = this.slider.getElementsByClassName("slider-list");
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
			show(number) {
				var w = this.getSliderWidth();
				this.setWidth(w);
				if (this.fWidth()[0].style.marginLeft === "") {
					this.fWidth()[0].style.marginLeft = 0 + "px";
				}
				this.start = parseFloat(this.fWidth()[0].style.marginLeft);
				console.log(this.start);
				if ( number <= this.num() && number > 0 ) {
					this.position = w * (number - 1);
					console.log(-this.position);
					// this.fWidth()[0].style.marginLeft = -position + "px";
					var pSlider = this;
					this.animate(pSlider.fWidth()[0], "marginLeft", this.start, -this.position, 1000);
				}
			};
			animate(object, property, start_value, end_value, time) {
				var frame_rate = 0.06;
				var frame = 0;
				var delta = (end_value - start_value) / time / frame_rate;
				var handle = setInterval(function() {
					frame++;
					var value = start_value + delta * frame;
					object.style[property] = value + "px";
					if (value == end_value) {
					  clearInterval(handle);
					}
				}, 1 / frame_rate);
			};
			addDots() {
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
							pSlider.setSlideDot(pSlider, number);
							pSlider.checkArrowsStyle();
						});
					})(pSlider, a, i);
				}
			};
			setSlideDot(obj, pos) {
				var curPosition = this.currentPosition;
				var newPosition = pos;
				if (newPosition > (obj.num())) {
					newPosition = obj.num();
				} else if (newPosition < 1) {
					newPosition = 1;
				}
				this.currentPosition = newPosition;
				obj.checkDotsStyle();
				obj.show(newPosition);
			};
			checkDotsStyle() {
				var dots = this.slider.getElementsByClassName("dots")[0];
				var li = dots.getElementsByTagName("li");
				var curPosition = this.currentPosition;
				for ( var i = 0; i < li.length; i++) {
					var a = li[i].getElementsByTagName("a")[0];
					if (curPosition == (i+1)) {
						a.classList.add("active");
					} else {
						a.classList.remove("active");
					}
				}
			};
			addBtn() {
				var prev = this.slider.appendChild(document.createElement('a')),
					next = this.slider.appendChild(document.createElement('a'));
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
					obj.checkDotsStyle();
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