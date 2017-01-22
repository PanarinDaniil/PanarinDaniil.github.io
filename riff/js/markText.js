(function() {
			// Fake loading.
			init();
			// setTimeout(init, 500);

			function init() {
				// document.body.classList.remove('loading');

				//************************ Example 1 - reveal on load ********************************
				
				var rev1 = new RevealFx(document.querySelector('#rev-1'), {
					revealSettings : {
						bgcolor: '#d51c29',
						onCover: function(contentEl, revealerEl) {
							contentEl.style.opacity = 1;
						}
					}
				});
				rev1.reveal();

				var rev2 = new RevealFx(document.querySelector('#rev-2'), {
					revealSettings : {
						bgcolor: '#ffcf01',
						delay: 250,
						onCover: function(contentEl, revealerEl) {
							contentEl.style.opacity = 1;
						}
					}
				});
				rev2.reveal();
				//************************ Example 2 - reveal on scroll ********************************				
				var scrollElemToWatch_1 = document.getElementById('rev-5'),
					watcher_1 = scrollMonitor.create(scrollElemToWatch_1, -300),				
					rev5 = new RevealFx(scrollElemToWatch_1, {
						revealSettings : {
							bgcolor: '#d51c29',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev3 = new RevealFx(document.querySelector('#rev-3'), {
						revealSettings : {
							bgcolor: '#ffcf01',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev4 = new RevealFx(document.querySelector('#rev-4'), {
						revealSettings : {
							bgcolor: '#d51c29',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_2 = document.getElementById('rev-7'),
					watcher_2 = scrollMonitor.create(scrollElemToWatch_2, -300),
					rev7 = new RevealFx(scrollElemToWatch_2, {
						revealSettings : {
							bgcolor: '#d51c29',
							direction: 'rl',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev6 = new RevealFx(document.querySelector('#rev-6'), {
						revealSettings : {
							bgcolor: '#ffcf01',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					
					scrollElemToWatch_3 = document.getElementById('rev-8'),
					watcher_3 = scrollMonitor.create(scrollElemToWatch_3, -300),
					rev8 = new RevealFx(scrollElemToWatch_3, {
						revealSettings : {
							bgcolor: '#d51c29',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev9 = new RevealFx(document.querySelector('#rev-9'), {
						revealSettings : {
							bgcolor: '#d51c29',
							direction: 'rl',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_4 = document.getElementById('rev-10'),
					watcher_4 = scrollMonitor.create(scrollElemToWatch_4, -300),
					rev10 = new RevealFx(scrollElemToWatch_4, {
						revealSettings : {
							bgcolor: '#d51c29',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev11 = new RevealFx(document.querySelector('#rev-11'), {
						revealSettings : {
							bgcolor: '#ffcf01',
							delay: 250,
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_5 = document.getElementById('rev-13'),
					watcher_5 = scrollMonitor.create(scrollElemToWatch_5, -300),
					rev13 = new RevealFx(scrollElemToWatch_5, {
						revealSettings : {
							bgcolor: '#d51c29',
							direction: 'rl',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev12 = new RevealFx(document.querySelector('#rev-12'), {
						revealSettings : {
							bgcolor: '#ffcf01',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_6 = document.getElementById('rev-14'),
					watcher_6 = scrollMonitor.create(scrollElemToWatch_6, -300),
					rev14 = new RevealFx(scrollElemToWatch_6, {
						revealSettings : {
							bgcolor: '#d51c29',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev15 = new RevealFx(document.querySelector('#rev-15'), {
						revealSettings : {
							bgcolor: '#ffcf01',
							direction: 'rl',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_7 = document.getElementById('rev-17'),
					watcher_7 = scrollMonitor.create(scrollElemToWatch_7, -300),
					rev17 = new RevealFx(scrollElemToWatch_7, {
						revealSettings : {
							bgcolor: '#d51c29',
							direction: 'rl',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev16 = new RevealFx(document.querySelector('#rev-16'), {
						revealSettings : {
							bgcolor: '#ffcf01',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_8 = document.getElementById('rev-18'),
					watcher_8 = scrollMonitor.create(scrollElemToWatch_8, -300),
					rev18 = new RevealFx(scrollElemToWatch_8, {
						revealSettings : {
							bgcolor: '#d51c29',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev19 = new RevealFx(document.querySelector('#rev-19'), {
						revealSettings : {
							bgcolor: '#ffcf01',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev20 = new RevealFx(document.querySelector('#rev-20'), {
						revealSettings : {
							bgcolor: '#d51c29',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev21 = new RevealFx(document.querySelector('#rev-21'), {
						revealSettings : {
							bgcolor: '#ffcf01',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev22 = new RevealFx(document.querySelector('#rev-22'), {
						revealSettings : {
							bgcolor: '#d51c29',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev23 = new RevealFx(document.querySelector('#rev-23'), {
						revealSettings : {
							bgcolor: '#ffcf01',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_9 = document.getElementById('rev-25'),
					watcher_9 = scrollMonitor.create(scrollElemToWatch_9, -300),
					rev25 = new RevealFx(scrollElemToWatch_9, {
						revealSettings : {
							bgcolor: '#d51c29',
							direction: 'rl',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev24 = new RevealFx(document.querySelector('#rev-24'), {
						revealSettings : {
							bgcolor: '#ffcf01',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_10 = document.getElementById('rev-26'),
					watcher_10 = scrollMonitor.create(scrollElemToWatch_10, -300),
					rev26 = new RevealFx(scrollElemToWatch_10, {
						revealSettings : {
							bgcolor: '#d51c29',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev27 = new RevealFx(document.querySelector('#rev-27'), {
						revealSettings : {
							bgcolor: '#ffcf01',
							direction: 'rl',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_11 = document.getElementById('rev-28'),
					watcher_11 = scrollMonitor.create(scrollElemToWatch_11, -300),
					rev28 = new RevealFx(scrollElemToWatch_11, {
						revealSettings : {
							bgcolor: '#d51c29',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev29 = new RevealFx(document.querySelector('#rev-29'), {
						revealSettings : {
							bgcolor: '#414042',
							direction: 'rl',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_12 = document.getElementById('rev-31'),
					watcher_12 = scrollMonitor.create(scrollElemToWatch_12, -300),
					rev31 = new RevealFx(scrollElemToWatch_12, {
						revealSettings : {
							bgcolor: '#d51c29',
							direction: 'rl',
							delay: 250,
							
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev30 = new RevealFx(document.querySelector('#rev-30'), {
						revealSettings : {
							bgcolor: '#ffcf01',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					});
					

				watcher_1.enterViewport(function() {
					rev3.reveal();
					rev4.reveal();
					rev5.reveal();
					watcher_1.destroy();
				});
				watcher_2.enterViewport(function() {
					rev6.reveal();
					rev7.reveal();
					watcher_2.destroy();
				});
				watcher_3.enterViewport(function() {
					rev8.reveal();
					rev9.reveal();
					watcher_3.destroy();
				});
				watcher_4.enterViewport(function() {
					rev10.reveal();
					rev11.reveal();
					watcher_4.destroy();
				});
				watcher_5.enterViewport(function() {
					rev12.reveal();
					rev13.reveal();
					watcher_5.destroy();
				});
				watcher_6.enterViewport(function() {
					rev14.reveal();
					rev15.reveal();
					watcher_6.destroy();
				});
				watcher_7.enterViewport(function() {
					rev16.reveal();
					rev17.reveal();
					watcher_7.destroy();
				});
				watcher_8.enterViewport(function() {
					rev18.reveal();
					rev19.reveal();
					rev20.reveal();
					rev21.reveal();
					rev22.reveal();
					rev23.reveal();
					watcher_8.destroy();
				});
				watcher_9.enterViewport(function() {
					rev24.reveal();
					rev25.reveal();
					watcher_9.destroy();
				});
				watcher_10.enterViewport(function() {
					rev26.reveal();
					rev27.reveal();
					watcher_10.destroy();
				});
				watcher_11.enterViewport(function() {
					rev28.reveal();
					rev29.reveal();
					watcher_11.destroy();
				});
				watcher_12.enterViewport(function() {
					rev30.reveal();
					rev31.reveal();
					watcher_12.destroy();
				});
			}
		})();	