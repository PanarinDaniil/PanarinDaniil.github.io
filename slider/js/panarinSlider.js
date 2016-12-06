(function( $ ){
			$.fn.panarinSlider = function(obj) {
				var ConstSlider = {
					currentPosition: 1,
					init: function (obj) {
						this.slider = obj[0];
						this.initPlugin();
						var pSlider = this;
						window.onresize = function(event) {
						    pSlider.initPlugin();
						};
					},
					initPlugin: function () {
						var w = this.getSliderWidth();
						this.setWidth(w);
						this.show(this.currentPosition);
						if ( !document.getElementsByClassName("arrows-slider").length ) {
							this.addBtn();
						}
					},
					fWidth: function () {
						return this.slider.getElementsByClassName("slider-list");
					},
					slide: function () {
						return this.slider.getElementsByTagName("li");

					},
					num: function () {
						return this.slide().length;
					},
					getSliderWidth: function () {
						return Math.max(
							this.slider.offsetWidth, 
							this.slider.clientWidth
						);
					},
					setWidth: function (w) {
						var fullWidth = this.num() * w;
						this.fWidth()[0].style.width = fullWidth + "px";
						for (var i = 0; i < this.num(); i++) {
							this.slide()[i].style.width = w + "px";
						}
					},
					show: function (number) {
						var w = this.getSliderWidth();
						this.setWidth(w);
						if ( number <= this.num() && number > 0 ) {
							var position = w * (number - 1);
							this.fWidth()[0].style.marginLeft = -position + "px";
						}
					},
					addBtn: function () {
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
			            this.checkArrowsStyle(prev, next);
			            prev.addEventListener("click", function(){
			            	if ( pSlider.currentPosition > 1 && pSlider.currentPosition <= pSlider.num() ) {
			            		pSlider.currentPosition -= 1;
				            	pSlider.checkArrowsStyle(prev, next);
			            		pSlider.show(pSlider.currentPosition);
			            	}
			            });
			            next.addEventListener("click", function(){
			            	if ( pSlider.currentPosition >= 1 && pSlider.currentPosition < pSlider.num() ) {
			            		pSlider.currentPosition += 1;
				            	pSlider.checkArrowsStyle(prev, next);
			            		pSlider.show(pSlider.currentPosition);
			            	}
			            });
					},
					checkArrowsStyle: function (prev, next) {
						if ( this.currentPosition > 1 && this.currentPosition <= this.num() ) {
			            	prev.classList.remove("dis");
			            } else {
			            	prev.classList.add("dis");
			            }
			            if ( this.currentPosition >= 1 && this.currentPosition < this.num() ) {
			            	next.classList.remove("dis");
			            } else {
			            	next.classList.add("dis");
			            }
					}
				};
				var obj = this;
				document.addEventListener("DOMContentLoaded", function(event) { 
					ConstSlider.init(obj);
				});
			};
		})(jQuery);