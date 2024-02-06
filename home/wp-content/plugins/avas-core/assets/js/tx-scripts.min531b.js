/**plugin version 2.3.3.3*/
!function(e){"use strict";var t=!0,n=function(t,n){var o,a=n||{},i=a.start||0,r=a.end||0,d=e(window).height(),s=d*i/100,l=d*r/100;return o=(e(window).scrollTop()+d+s-t.offset().top)/(d+s+l+t.height()),o=Math.min(100,Math.max(0,100*o)),parseFloat(o.toFixed(2))},o=function(e,t){var n=e.find(".tx-animated-heading-wrap");if(n.length>0){var o=n.data("settings"),a=n.find(".tx-animated-txt"),i=t(a).attr("id");if("typed"===o.styles)new Typed("#"+i,o);else"animated"===o.styles&&t(a).Morphext(o)}},a=function(e,t){var n=e.children(".tx-bg-slider-wrap").children(".tx-bg-slider"),o=[],a=[];if(n&&n.data("tx-bg-slider")){var i=n.data("tx-bg-slider"),r=n.data("tx-bg-slider-transition"),d=(n.data("tx-bg-slider-first-transition"),n.data("tx-bg-slider-animation")),s=n.data("tx-bg-slider-delay"),l=n.data("tx-bg-slider-timer");void 0!==i&&(o=i.split(","),jQuery.each(o,function(e,t){var n=[];n.src=t,a.push(n)}),n.vegas({slides:a,transition:r,firstTransition:r,animation:d,delay:s,timer:l}))}},i=function(e,t){var n=e.find(".tx-circle-progress-bar");if(n.length>0){n.data("settings");n.asPieProgress({namespace:"pie_progress"}),n.asPieProgress("start")}},r=function(e,t){var n=e.find(".tx-countdown-wrapper");if(n.length>0){var o=t(n.find(".tx-countdown-content")).attr("id");t("#"+o).countdown()}},d=function(n){var o=function(e){var n={},o=e.data("model-cid");if(t&&o){var a=elementorFrontend.config.elements.data[o],i=elementorFrontend.config.elements.keys[a.attributes.widgetType||a.attributes.elType];jQuery.each(a.getActiveControls(),function(e){-1!==i.indexOf(e)&&(n[e]=a.attributes[e])})}else n=e.data("settings")||{};return n}(n);if(n.find(".tx-coupon-image").each(function(){var t=e(this).find(".tx-coupon-code").attr("data-coupon-code");e(this).find(".tx-coupon-code").not(".tx-copied").on("click",function(){var n=e(this),o='<input type="text" value="'+t+'" id="txCouponIn">';n.append(o),document.getElementById("txCouponIn").select(),document.execCommand("copy"),e("#txCouponIn").remove(),setTimeout(function(){n.addClass("tx-copied"),n.find(".tx-coupon-copy-text").fadeOut().text(txCopied).fadeIn()},500)})}),"carousel"===o.layout){var a=n.find(".tx-carousel").eq(0);if(a.length>0){var i=a.data("settings"),r=i.display_mobile,d=i.display_tablet,s=i.display_laptop,l=i.display_desktop,c=i.gutter,f=i.autoplay,u=i.pause_on_hover,p=i.navigation,m=i.dots,v=i.loop,h=i.autoplay_timeout,g=i.smart_speed;a.owlCarousel({loop:v,margin:c,autoplay:f,smartSpeed:g,autoplayTimeout:h,autoplayHoverPause:u,lazyLoad:!0,nav:p,dots:m,navText:['<i class="bi bi-arrow-left"></i>','<i class="bi bi-arrow-right"></i>'],responsive:{0:{items:r},600:{items:d},1000:{items:s},1400:{items:l}}})}}},s=function(e,t){var n=e.find(".tx-carousel").eq(0);if(n.length>0){var o=n.data("settings"),a=o.display_mobile,i=o.display_tablet,r=o.display_laptop,d=o.display_desktop,s=o.gutter,l=o.autoplay,c=o.pause_on_hover,f=o.navigation,u=o.dots,p=o.loop,m=o.autoplay_timeout,v=o.smart_speed;n.owlCarousel({loop:p,margin:s,autoplay:l,smartSpeed:v,autoplayTimeout:m,autoplayHoverPause:c,lazyLoad:!0,nav:f,dots:u,navText:['<i class="bi bi-arrow-left"></i>','<i class="bi bi-arrow-right"></i>'],responsive:{0:{items:a},600:{items:i},1000:{items:r},1400:{items:d}}})}},l=function(e,t){if((n=e.find(".tx-chart-wrapper").eq(0)).length){n.data("type"),n.data("labels");var n,o=n.data("settings"),a=(n=e.find(".tx-chart-widget").eq(0)).attr("id"),i=document.getElementById(a).getContext("2d");new Chart(i,o)}},c=function(e,t){var n=e.find(".tx-gallery-wrap").eq(0);if(n.length){var o,a,i=n.data("settings"),r=n.find(".tx-gallery-item"),d=n.find(".tx-gallery-grid"),s=n.find(".tx-gallery-filter-item"),l=n.find(".tx-gallery-filters"),c=n.find(".tx-gallery-search-input"),f=t(r).attr("id"),u=t(d).attr("id"),p=t(s).attr("id"),m=t(l).attr("id"),v=t(c).attr("id"),h=i.transitionDuration?400:0,g=i.gall_cols,y=i.layoutMode,_={},b=t("#"+u).imagesLoaded(function(){b.isotope({itemSelector:"#"+f,percentPosition:!0,transitionDuration:h,hiddenStyle:{opacity:0},visibleStyle:{opacity:1},filter:function(){var e=t(this),n=!a||e.text().match(a),i=!o||e.is(o);return n&&i},layoutMode:y,masonry:{columnWidth:g}})});t("#"+m).on("click","#"+p,function(){var e=t(this),n=e.parents("#"+p).attr("data-filter-group");_[n]=e.attr("data-filter"),o=function(e){var t="";for(var n in e)t+=e[n];return t}(_),b.isotope()});var x,w,k,F=t("#"+v).keyup((x=function(){a=new RegExp(F.val(),"gi"),b.isotope()},w=(w=200)||100,function(){clearTimeout(k);var e=arguments,t=this;k=setTimeout(function(){x.apply(t,e)},w)}));t("#"+u).magnificPopup({type:"inline",midClick:!0,gallery:{enabled:!0},delegate:".tx-gallery-popup",removalDelay:200,callbacks:{beforeOpen:function(){this.st.mainClass=this.st.el.attr("data-effect")}},closeOnContentClick:!1}),t(".tx-gallery-filter-item").on("click",function(){t(this).siblings().removeClass("active"),t(this).addClass("active")})}},f=function(e,t){if(e.find(".tx-hs-item").eq(0).length){var n=t(".tx-hs-popup");n.on("click",function(e){e.stopPropagation()}),t(".tx-hs-marker").on("click",function(e){e.preventDefault(),e.stopPropagation(),t(this).next(".tx-hs-popup").toggleClass("open"),t(this).parent().siblings().children(".tx-hs-popup").removeClass("open")}),t(document).on("click",function(){n.removeClass("open")}),n.each(function(){t(window).outerWidth()<Math.round(t(this).offset().left+t(this).outerWidth())&&t(this).addClass("edge")})}},u=function(e,t){e.find(".tx-ic-wrap");var n=e.find(".tx-ic-content");if(n.length){var o=n.data("settings"),a=o.starting_point,i=o.orientation,r=o.before_label,d=o.after_label,s=o.show_labels,l=o.on_hover,c=o.add_circle_blur,f=o.add_circle_shadow,u=o.add_circle,p=o.smoothing,m=o.smoothing_amount,v=o.control_line,h=o.move_slider_on_hover,g=document.querySelectorAll("#"+o.id),y={controlColor:v,controlShadow:f,addCircle:u,addCircleBlur:c,showLabels:s,labelOptions:{before:r,after:d,onHover:l},smoothing:p,smoothingAmount:m,hoverStart:h,verticalMode:i,startingPoint:a,fluidMode:!1};g.forEach(function(e){new ImageCompare(e,y).mount()})}},p=function(e,t){var n=e.find(".tx-image-slide-wrap").eq(0);if(n.length>0){var o=n.data("settings"),a=o.speed,i=o.direction,r=o.pauseonhover,d=o.clone;n.infiniteslide({speed:a,direction:i,pauseonhover:r,clone:d})}},m=function(e,t){var n=e.find(".tx-instagram-feed-item").eq(0).attr("id");t("#"+n).each(function(){var e=t(this).data("target"),n=t(this).data("access_token"),o=t(this).data("limit"),a=t(this).data("template");new Instafeed({target:e,limit:o,accessToken:n,template:a}).run()})},v=function(t){var o,a,i=t.find(".tx-lottie-wrap"),r=i.find(".tx-lottie-elem"),d=i.data("settings");if(i[0]){o={container:r[0],renderer:d.renderer,loop:d.loop,autoplay:!1,path:d.path,name:"avas-lottie"},a=lottie.loadAnimation(o),d.play_speed&&a.setSpeed(d.play_speed),d.reversed&&a.setDirection(-1);var s=0,l=0;switch(d.viewport&&(s=-d.viewport.start||0,l=-(100-d.viewport.end)||0),d.action_start){case"on_hover":var c=!1,f=function(){if(c&&"reverse"===d.on_hover_out){var e=d.reversed?-1:1;a.setDirection(e)}a.play(),c=!0},u=function(){switch(d.on_hover_out){case"pause":a.pause();break;case"stop":a.stop();break;case"reverse":var e=d.reversed?1:-1;a.setDirection(e),a.play()}};i.off("mouseenter",f).on("mouseenter",f),i.off("mouseleave",u).on("mouseleave",u);break;case"on_click":var p=i.find(".tx-lottie-link"),m=+d.redirect_timeout,v=function(){a.play()},h=function(t){t.preventDefault(),a.play();var n=e(this).attr("href"),o="_blank"===e(this).attr("target")?"_blank":"_self";setTimeout(function(){window.open(n,o)},m)};p[0]&&m>0?p.off("click",h).on("click",h):i.off("click",v).on("click",v);break;case"on_viewport":if(void 0!==window.IntersectionObserver)new IntersectionObserver(function(e,t){e[0].isIntersecting?a.play():a.pause()},{rootMargin:l+"% 0% "+s+"%"}).observe(i[0]);else a.play();break;case"on_scroll":if(void 0!==window.IntersectionObserver){var g,y=0;new IntersectionObserver(function(e,t){e[0].isIntersecting?g=requestAnimationFrame(function e(){if(window.scrollY!==y){var t=n(r,{start:s,end:l}),o=(a.totalFrames-a.firstFrame)*t/100;a.goToAndStop(o,!0),y=window.scrollY}g=requestAnimationFrame(e)}):cancelAnimationFrame(g)},{rootMargin:l+"% 0% "+s+"%"}).observe(i[0])}break;default:var _=+d.delay;_>0?setTimeout(function(){a.play()},_):a.play()}}},h=function(e,t){t(".navbar-toggle").on("click",function(){t(this).find(t(".bi")).toggleClass("bi-list bi-x")})},g=function(e,t){var n=e.find(".tx-table-wrap");n.data("table_id");"undefined"!=typeof enableProSorter&&t.isFunction(enableProSorter)&&t(document).ready(function(){enableProSorter(jQuery,n)});var o=e.find(".tx-table").find("th");e.find(".tx-table").find("tbody").find("tr").each(function(e,n){t(n).find("td .td-content-wrapper").each(function(e,n){t(this).prepend('<div class="th-mobile-screen">'+o.eq(e).html()+"</div>")})})};e(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/avas-animated-heading.default",o),elementorFrontend.hooks.addAction("frontend/element_ready/section",a),elementorFrontend.hooks.addAction("frontend/element_ready/avas-chart.default",l),elementorFrontend.hooks.addAction("frontend/element_ready/avas-circle-progress-bar.default",i),elementorFrontend.hooks.addAction("frontend/element_ready/avas-countdown.default",r),elementorFrontend.hooks.addAction("frontend/element_ready/avas-coupon.default",d),elementorFrontend.hooks.addAction("frontend/element_ready/avas-gallery.default",c),elementorFrontend.hooks.addAction("frontend/element_ready/avas-courses-carousel.default",s),elementorFrontend.hooks.addAction("frontend/element_ready/avas-hotspot.default",f),elementorFrontend.hooks.addAction("frontend/element_ready/avas-image-comparison.default",u),elementorFrontend.hooks.addAction("frontend/element_ready/avas-image-slide.default",p),elementorFrontend.hooks.addAction("frontend/element_ready/avas-instagram.default",m),elementorFrontend.hooks.addAction("frontend/element_ready/avas-lottie.default",v),elementorFrontend.hooks.addAction("frontend/element_ready/avas-menu.default",h),elementorFrontend.hooks.addAction("frontend/element_ready/avas-news-ticker.default",s),elementorFrontend.hooks.addAction("frontend/element_ready/avas-post-carousel.default",s),elementorFrontend.hooks.addAction("frontend/element_ready/avas-portfolio-carousel.default",s),elementorFrontend.hooks.addAction("frontend/element_ready/avas-profile-carousel.default",s),elementorFrontend.hooks.addAction("frontend/element_ready/avas-services-carousel.default",s),elementorFrontend.hooks.addAction("frontend/element_ready/avas-team-carousel.default",s),elementorFrontend.hooks.addAction("frontend/element_ready/avas-testimonial.default",s),elementorFrontend.hooks.addAction("frontend/element_ready/avas-woocommerce-carousel.default",s),elementorFrontend.hooks.addAction("frontend/element_ready/avas-table.default",g)})}(jQuery);