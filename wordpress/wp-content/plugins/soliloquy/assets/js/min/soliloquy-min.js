function soliloquyIsMobile(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e}function soliloquyYouTubeVids(e,t,i,s,n,$){$("#"+n).show().css({display:"block","z-index":"1210"}),YT.Player&&"undefined"==typeof soliloquy_youtube[t]&&(soliloquy_youtube[t]=new YT.Player(n,{videoId:t,playerVars:e,events:{onStateChange:soliloquyYouTubeOnStateChange}}))}function soliloquyYouTubeOnStateChange(e){var t=jQuery(e.target.getIframe()).data("soliloquy-slider-id");(e.data===YT.PlayerState.PAUSED||e.data===YT.PlayerState.ENDED)&&soliloquy_slider[t]&&soliloquy_slider[t].getSetting("auto")&&soliloquy_slider[t].startAuto(),e.data===YT.PlayerState.PLAYING&&soliloquy_slider[t]&&soliloquy_slider[t].stopAuto()}function onYouTubeIframeAPIReady(){}function soliloquyVimeoVids(e,t,i,s,n,$){if($("#"+n).show().css({display:"block","z-index":"1210"}),$f){var o={};$.each($("#"+n)[0].attributes,function(e,t){o[t.nodeName]=t.nodeValue}),e.player_id=n,o.src="//player.vimeo.com/video/"+t+"?"+$.param(e),o.frameborder=0,$("#"+n).replaceWith(function(){return $("<iframe />",o).append($(this).contents())}),soliloquy_vimeo[t]=$f($("#"+n)[0]),soliloquy_vimeo[t].addEvent("ready",function(){soliloquy_vimeo[t].addEvent("play",soliloquyVimeoSliderPause),soliloquy_vimeo[t].addEvent("pause",soliloquyVimeoSliderStart),soliloquy_vimeo[t].addEvent("finish",soliloquyVimeoSliderStart)})}}function soliloquyVimeoSliderPause(e){var t=jQuery("#"+e).data("soliloquy-slider-id");soliloquy_slider[t]&&soliloquy_slider[t].stopAuto()}function soliloquyVimeoSliderStart(e){var t=jQuery("#"+e).data("soliloquy-slider-id");soliloquy_slider[t]&&soliloquy_slider[t].getSetting("auto")&&soliloquy_slider[t].startAuto()}function soliloquyWistiaVids(e,t,i,s,n,$){if($("#"+n).show().css({display:"block","z-index":"1210"}),wistiaEmbeds){var o={};$.each($("#"+n)[0].attributes,function(e,t){o[t.nodeName]=t.nodeValue}),e.container=n,o.src="//fast.wistia.net/embed/iframe/"+t+"?"+$.param(e),o.frameborder=0,$("#"+n).replaceWith(function(){return $("<iframe />",o).addClass("wistia_embed").append($(this).contents())}),wistiaEmbeds.onFind(function(e){t==e.hashedId()&&(soliloquy_wistia[t]=e,soliloquy_wistia[t].bind("play",function(){var e=$(this.container).data("soliloquy-slider-id");soliloquy_slider[e]&&soliloquy_slider[e].stopAuto()}),soliloquy_wistia[t].bind("pause",function(){var e=$(this.container).data("soliloquy-slider-id");soliloquy_slider[e]&&soliloquy_slider[e].getSetting("auto")&&soliloquy_slider[e].startAuto()}),soliloquy_wistia[t].bind("end",function(){var e=$(this.container).data("soliloquy-slider-id");soliloquy_slider[e]&&soliloquy_slider[e].getSetting("auto")&&soliloquy_slider[e].startAuto()}),e.play())})}}function soliloquyLocalVids(e,t,i,s,n,$){$("#"+n).show().css({display:"block","z-index":"1210"});var o={};$.each($("#"+n)[0].attributes,function(e,t){o[t.nodeName]=t.nodeValue});var l=[];1===e.playpause&&l.push("playpause"),1===e.progress&&l.push("progress"),1===e.current&&l.push("current"),1===e.duration&&l.push("duration"),1===e.volume&&l.push("volume"),soliloquy_local[t]=new MediaElementPlayer("video#"+n,{features:l,success:function(t,i){1===e.autoplay&&t.addEventListener("canplay",function(){t.play()},!1)}})}function soliloquyInitManually(){jQuery(document).ready(function($){var soliloquy_sliders=[];$(".soliloquy-outer-container[data-soliloquy-loaded='0']").each(function(){soliloquy_sliders.push($(".soliloquy-container",$(this)).attr("id").replace(/^\D+/g,""))}),soliloquy_sliders.length>0&&$.post(soliloquy_ajax.ajax,{action:"soliloquy_init_sliders",ajax_nonce:soliloquy_ajax.ajax_nonce,ids:soliloquy_sliders},function(response){"-1"!==response&&"0"!==response&&eval(response)})})}!function($){var e={},t={keyboard:!1,mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,captionSpeed:0,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"soliloquy-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};$.fn.soliloquy=function(s){if(0==this.length)return this;if(this.length>1)return this.each(function(){$(this).soliloquy(s)}),this;var n={},o=this;e.el=this;var l=$(window).width(),a=$(window).height(),r=function(){n.settings=$.extend({},t,s),n.settings.slideWidth=parseInt(n.settings.slideWidth),n.children=o.children(n.settings.slideSelector),n.children.length<n.settings.minSlides&&(n.settings.minSlides=n.children.length),n.children.length<n.settings.maxSlides&&(n.settings.maxSlides=n.children.length),n.settings.randomStart&&(n.settings.startSlide=Math.floor(Math.random()*n.children.length)),n.active={index:n.settings.startSlide},n.carousel=n.settings.minSlides>1||n.settings.maxSlides>1,n.carousel&&(n.settings.preloadImages="all"),n.minThreshold=n.settings.minSlides*n.settings.slideWidth+(n.settings.minSlides-1)*n.settings.slideMargin,n.maxThreshold=n.settings.maxSlides*n.settings.slideWidth+(n.settings.maxSlides-1)*n.settings.slideMargin,n.working=!1,n.controls={},n.interval=null,n.animProp="vertical"==n.settings.mode?"top":"left",n.usingCSS=n.settings.useCSS&&"fade"!=n.settings.mode&&function(){var e=document.createElement("div"),t=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in t)if(void 0!==e.style[t[i]])return n.cssPrefix=t[i].replace("Perspective","").toLowerCase(),n.animProp="-"+n.cssPrefix+"-transform",!0;return!1}(),"vertical"==n.settings.mode&&(n.settings.maxSlides=n.settings.minSlides),o.data("origStyle",o.attr("style")),o.children(n.settings.slideSelector).each(function(){$(this).data("origStyle",$(this).attr("style"))}),d()},d=function(){o.wrap('<div class="'+n.settings.wrapperClass+'"><div class="soliloquy-viewport"></div></div>'),n.viewport=o.parent(),n.loader=$('<div class="soliloquy-loading" />'),n.viewport.prepend(n.loader),o.css({width:"horizontal"==n.settings.mode?100*n.children.length+215+"%":"auto",position:"relative"}),n.usingCSS&&n.settings.easing?o.css("-"+n.cssPrefix+"-transition-timing-function",n.settings.easing):n.settings.easing||(n.settings.easing="swing");var e=v();n.viewport.css({width:"100%",position:"relative"}),"fade"!=n.settings.mode&&n.viewport.css({overflow:"hidden"}),n.viewport.parent().css({maxWidth:h()}),n.settings.pager||n.viewport.parent().css({margin:"0 auto 0px"}),n.children.css({"float":"left",listStyle:"none",position:"relative"}),n.children.css("width",p()),"horizontal"==n.settings.mode&&n.settings.slideMargin>0&&n.children.css("marginRight",n.settings.slideMargin),"vertical"==n.settings.mode&&n.settings.slideMargin>0&&n.children.css("marginBottom",n.settings.slideMargin),"fade"==n.settings.mode&&(n.children.css({zIndex:0,display:"none",marginRight:"-100%",width:"100%"}),n.children.eq(n.settings.startSlide).css({zIndex:n.settings.slideZIndex,display:"block"})),n.controls.el=$('<div class="soliloquy-controls" />'),n.settings.captions&&T(),n.active.last=n.settings.startSlide==f()-1;var t=n.children.eq(n.settings.startSlide);"all"==n.settings.preloadImages&&(t=n.children),n.settings.ticker?n.settings.pager=!1:(n.settings.pager&&S(),n.settings.controls&&b(),n.settings.auto&&n.settings.autoControls&&q(),(n.settings.controls||n.settings.autoControls||n.settings.pager)&&n.viewport.after(n.controls.el)),c(t,u)},c=function(e,t){var i=e.find("img, iframe").length;if(0==i)return void t();var s=0;e.find("img, iframe").each(function(){$(this).one("load",function(){++s==i&&t()}).each(function(){this.complete&&$(this).load()})})},u=function(){if(n.settings.infiniteLoop&&"fade"!=n.settings.mode&&!n.settings.ticker){var e="vertical"==n.settings.mode?n.settings.minSlides:n.settings.maxSlides,t=n.children.slice(0,e).clone().addClass("soliloquy-clone"),i=n.children.slice(-e).clone().addClass("soliloquy-clone");o.append(t).prepend(i)}n.loader.remove(),y(),"vertical"==n.settings.mode&&(n.settings.adaptiveHeight=!0),n.viewport.height(g()),o.redrawSlider(),n.settings.onSliderLoad(n.active.index),n.initialized=!0,n.settings.responsive&&$(window).bind("resize",V),n.settings.auto&&n.settings.autoStart&&(f()>1||n.settings.autoSlideForOnePage)&&A(),n.settings.ticker&&H(),n.settings.pager&&M(n.settings.startSlide),n.settings.controls&&D(),n.settings.touchEnabled&&!n.settings.ticker&&Y(),n.settings.keyboard&&!n.settings.ticker&&$(document).on("keydown",function(e){return 39==e.keyCode?(k(e),!1):37==e.keyCode?(E(e),!1):void 0})},g=function(){var e=0,t=$();if("vertical"==n.settings.mode||n.settings.adaptiveHeight)if(n.carousel){var s=1==n.settings.moveSlides?n.active.index:n.active.index*m();for(t=n.children.eq(s),i=1;i<=n.settings.maxSlides-1;i++)t=s+i>=n.children.length?t.add(n.children.eq(i-1)):t.add(n.children.eq(s+i))}else t=n.children.eq(n.active.index);else t=n.children;return"vertical"==n.settings.mode?(t.each(function(t){e+=$(this).outerHeight()}),n.settings.slideMargin>0&&(e+=n.settings.slideMargin*(n.settings.minSlides-1))):e=Math.max.apply(Math,t.map(function(){return $(this).outerHeight(!1)}).get()),"border-box"==n.viewport.css("box-sizing")?e+=parseFloat(n.viewport.css("padding-top"))+parseFloat(n.viewport.css("padding-bottom"))+parseFloat(n.viewport.css("border-top-width"))+parseFloat(n.viewport.css("border-bottom-width")):"padding-box"==n.viewport.css("box-sizing")&&(e+=parseFloat(n.viewport.css("padding-top"))+parseFloat(n.viewport.css("padding-bottom"))),e},h=function(){var e="100%";return n.settings.slideWidth>0&&(e="horizontal"==n.settings.mode?n.settings.maxSlides*n.settings.slideWidth+(n.settings.maxSlides-1)*n.settings.slideMargin:n.settings.slideWidth),"fade"==n.settings.mode?"100%":e},p=function(){var e=n.settings.slideWidth,t=n.viewport.width();return 0==n.settings.slideWidth||n.settings.slideWidth>t&&!n.carousel||"vertical"==n.settings.mode?e=t:n.settings.maxSlides>1&&"horizontal"==n.settings.mode&&(t>n.maxThreshold||t<n.minThreshold&&(e=(t-n.settings.slideMargin*(n.settings.minSlides-1))/n.settings.minSlides)),"fade"==n.settings.mode?"100%":e},v=function(){var e=1;if("horizontal"==n.settings.mode&&n.settings.slideWidth>0)if(n.viewport.width()<n.minThreshold)e=n.settings.minSlides;else if(n.viewport.width()>n.maxThreshold)e=n.settings.maxSlides;else{var t=n.children.first().width()+n.settings.slideMargin;e=Math.floor((n.viewport.width()+n.settings.slideMargin)/t)}else"vertical"==n.settings.mode&&(e=n.settings.minSlides);return e},f=function(){var e=0;if(n.settings.moveSlides>0)if(n.settings.infiniteLoop)e=Math.ceil(n.children.length/m());else for(var t=0,i=0;t<n.children.length;)++e,t=i+v(),i+=n.settings.moveSlides<=v()?n.settings.moveSlides:v();else e=Math.ceil(n.children.length/v());return e},m=function(){return n.settings.moveSlides>0&&n.settings.moveSlides<=v()?n.settings.moveSlides:v()},y=function(){if(n.children.length>n.settings.maxSlides&&n.active.last&&!n.settings.infiniteLoop){if("horizontal"==n.settings.mode){var e=n.children.last(),t=e.position();x(-(t.left-(n.viewport.width()-e.outerWidth())),"reset",0)}else if("vertical"==n.settings.mode){var i=n.children.length-n.settings.minSlides,t=n.children.eq(i).position();x(-t.top,"reset",0)}}else{var t=n.children.eq(n.active.index*m()).position();n.active.index==f()-1&&(n.active.last=!0),void 0!=t&&("horizontal"==n.settings.mode?x(-t.left,"reset",0):"vertical"==n.settings.mode&&x(-t.top,"reset",0))}},x=function(e,t,i,s){if(n.usingCSS){var l="vertical"==n.settings.mode?"translate3d(0, "+e+"px, 0)":"translate3d("+e+"px, 0, 0)";o.css("-"+n.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==t?(o.css(n.animProp,l),o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),_()})):"reset"==t?o.css(n.animProp,l):"ticker"==t&&(o.css("-"+n.cssPrefix+"-transition-timing-function","linear"),o.css(n.animProp,l),o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),x(s.resetValue,"reset",0),L()}))}else{var a={};a[n.animProp]=e,"slide"==t?o.animate(a,i,n.settings.easing,function(){_()}):"reset"==t?o.css(n.animProp,e):"ticker"==t&&o.animate(a,speed,"linear",function(){x(s.resetValue,"reset",0),L()})}},w=function(){for(var e="",t=f(),i=0;t>i;i++){var s="";n.settings.buildPager&&$.isFunction(n.settings.buildPager)?(s=n.settings.buildPager(i),n.pagerEl.addClass("soliloquy-custom-pager")):(s=i+1,n.pagerEl.addClass("soliloquy-default-pager")),e+='<div class="soliloquy-pager-item"><a href="" data-slide-index="'+i+'" class="soliloquy-pager-link" tabindex="0"><span>'+s+"</span></a></div>"}n.pagerEl.html(e)},S=function(){n.settings.pagerCustom?n.pagerEl=$(n.settings.pagerCustom):n.pagerEl=$('<div class="soliloquy-pager" />'),n.settings.pagerSelector?$(n.settings.pagerSelector).html(n.pagerEl):n.controls.el.addClass("soliloquy-has-pager").append(n.pagerEl),n.settings.pagerCustom||w(),n.pagerEl.on("click","a",z)},b=function(){n.controls.next=$('<a class="soliloquy-next" href="" tabindex="0"><span>'+n.settings.nextText+"</span></a>"),n.controls.prev=$('<a class="soliloquy-prev" href="" tabindex="0"><span>'+n.settings.prevText+"</span></a>"),n.controls.next.bind("click",k),n.controls.prev.bind("click",E),n.settings.nextSelector&&$(n.settings.nextSelector).append(n.controls.next),n.settings.prevSelector&&$(n.settings.prevSelector).append(n.controls.prev),n.settings.nextSelector||n.settings.prevSelector||(n.controls.directionEl=$('<div class="soliloquy-controls-direction" />'),n.controls.directionEl.append(n.controls.prev).append(n.controls.next),n.controls.el.addClass("soliloquy-has-controls-direction").append(n.controls.directionEl))},q=function(){n.controls.start=$('<div class="soliloquy-controls-auto-item"><a class="soliloquy-start" href="" aria-label="play" tabindex="0"><span>'+n.settings.startText+"</span></a></div>"),n.controls.stop=$('<div class="soliloquy-controls-auto-item"><a class="soliloquy-stop" href="" aria-label="pause" tabindex="0"><span>'+n.settings.stopText+"</span></a></div>"),n.controls.autoEl=$('<div class="soliloquy-controls-auto" />'),n.controls.autoEl.on("click",".soliloquy-start",C),n.controls.autoEl.on("click",".soliloquy-stop",P),n.settings.autoControlsCombine?n.controls.autoEl.append(n.controls.start):n.controls.autoEl.append(n.controls.start).append(n.controls.stop),n.settings.autoControlsSelector?$(n.settings.autoControlsSelector).html(n.controls.autoEl):n.controls.el.addClass("soliloquy-has-controls-auto").append(n.controls.autoEl),I(n.settings.autoStart?"stop":"start")},T=function(){n.children.each(function(e){var t=$(this).find("img:first").attr("title");void 0!=t&&(""+t).length&&$(this).append('<div class="soliloquy-caption"><span>'+t+"</span></div>")})},k=function(e){n.settings.auto&&o.stopAuto(),o.goToNextSlide(),e.preventDefault()},E=function(e){n.settings.auto&&o.stopAuto(),o.goToPrevSlide(),e.preventDefault()},C=function(e){o.startAuto(),e.preventDefault()},P=function(e){o.stopAuto(),e.preventDefault()},z=function(e){n.settings.auto&&o.stopAuto();var t=$(e.currentTarget);if(void 0!==t.attr("data-slide-index")){var i=parseInt(t.attr("data-slide-index"));i!=n.active.index&&o.goToSlide(i),e.preventDefault()}},M=function(e){var t=n.children.length;return"short"==n.settings.pagerType?(n.settings.maxSlides>1&&(t=Math.ceil(n.children.length/n.settings.maxSlides)),void n.pagerEl.html(e+1+n.settings.pagerShortSeparator+t)):(n.pagerEl.find("a").removeClass("active"),void n.pagerEl.each(function(t,i){$(i).find("a").eq(e).addClass("active")}))},_=function(){if(n.settings.infiniteLoop){var e="";0==n.active.index?e=n.children.eq(0).position():n.active.index==f()-1&&n.carousel?e=n.children.eq((f()-1)*m()).position():n.active.index==n.children.length-1&&(e=n.children.eq(n.children.length-1).position()),e&&("horizontal"==n.settings.mode?x(-e.left,"reset",0):"vertical"==n.settings.mode&&x(-e.top,"reset",0))}n.working=!1,"fade"==n.settings.mode&&n.viewport.css({overflow:""}),n.settings.onSlideAfter(n.children.eq(n.active.index),n.oldIndex,n.active.index)},I=function(e){n.settings.autoControlsCombine?n.controls.autoEl&&n.controls.autoEl.html(n.controls[e]):(n.controls.autoEl.find("a").removeClass("active"),n.controls.autoEl.find("a:not(.soliloquy-"+e+")").addClass("active"))},D=function(){1==f()?(n.controls.prev.addClass("disabled"),n.controls.next.addClass("disabled")):!n.settings.infiniteLoop&&n.settings.hideControlOnEnd&&(0==n.active.index?(n.controls.prev.addClass("disabled"),n.controls.next.removeClass("disabled")):n.active.index==f()-1?(n.controls.next.addClass("disabled"),n.controls.prev.removeClass("disabled")):(n.controls.prev.removeClass("disabled"),n.controls.next.removeClass("disabled")))},A=function(){if(n.settings.autoDelay>0)var e=setTimeout(o.startAuto,n.settings.autoDelay);else o.startAuto();n.settings.autoHover&&o.hover(function(){n.interval&&(o.stopAuto(!0),n.autoPaused=!0)},function(){n.autoPaused&&(o.startAuto(!0),n.autoPaused=null)})},H=function(){var e=0;if("next"==n.settings.autoDirection)o.append(n.children.clone().addClass("soliloquy-clone"));else{o.prepend(n.children.clone().addClass("soliloquy-clone"));var t=n.children.first().position();e="horizontal"==n.settings.mode?-t.left:-t.top}x(e,"reset",0),n.settings.pager=!1,n.settings.controls=!1,n.settings.autoControls=!1,n.settings.tickerHover&&!n.usingCSS&&n.viewport.hover(function(){o.stop()},function(){var e=0;n.children.each(function(t){e+="horizontal"==n.settings.mode?$(this).outerWidth(!0):$(this).outerHeight(!0)});var t=n.settings.speed/e,i="horizontal"==n.settings.mode?"left":"top",s=t*(e-Math.abs(parseInt(o.css(i))));L(s)}),L()},L=function(e){speed=e?e:n.settings.speed;var t={left:0,top:0},i={left:0,top:0};"next"==n.settings.autoDirection?t=o.find(".soliloquy-clone").first().position():i=n.children.first().position();var s="horizontal"==n.settings.mode?-t.left:-t.top,l="horizontal"==n.settings.mode?-i.left:-i.top,a={resetValue:l};x(s,"ticker",speed,a)},Y=function(){n.touch={start:{x:0,y:0},end:{x:0,y:0}},n.viewport.bind("touchstart",j)},j=function(e){if(n.working)e.preventDefault();else{n.touch.originalPos=o.position();var t=e.originalEvent;n.touch.start.x=t.changedTouches[0].pageX,n.touch.start.y=t.changedTouches[0].pageY,n.viewport.bind("touchmove",W),n.viewport.bind("touchend",O)}},W=function(e){var t=e.originalEvent,i=Math.abs(t.changedTouches[0].pageX-n.touch.start.x),s=Math.abs(t.changedTouches[0].pageY-n.touch.start.y);if(3*i>s&&n.settings.preventDefaultSwipeX?e.preventDefault():3*s>i&&n.settings.preventDefaultSwipeY&&e.preventDefault(),"fade"!=n.settings.mode&&n.settings.oneToOneTouch){var o=0;if("horizontal"==n.settings.mode){var l=t.changedTouches[0].pageX-n.touch.start.x;o=n.touch.originalPos.left+l}else{var l=t.changedTouches[0].pageY-n.touch.start.y;o=n.touch.originalPos.top+l}x(o,"reset",0)}},O=function(e){n.viewport.unbind("touchmove",W);var t=e.originalEvent,i=0;if(n.touch.end.x=t.changedTouches[0].pageX,n.touch.end.y=t.changedTouches[0].pageY,"fade"==n.settings.mode){var s=Math.abs(n.touch.start.x-n.touch.end.x);s>=n.settings.swipeThreshold&&(n.touch.start.x>n.touch.end.x?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto())}else{var s=0;"horizontal"==n.settings.mode?(s=n.touch.end.x-n.touch.start.x,i=n.touch.originalPos.left):(s=n.touch.end.y-n.touch.start.y,i=n.touch.originalPos.top),!n.settings.infiniteLoop&&(0==n.active.index&&s>0||n.active.last&&0>s)?x(i,"reset",200):Math.abs(s)>=n.settings.swipeThreshold?(0>s?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto()):x(i,"reset",200)}n.viewport.unbind("touchend",O)},V=function(e){if(n.initialized){var t=$(window).width(),i=$(window).height();(l!=t||a!=i)&&(l=t,a=i,o.redrawSlider(),n.settings.onSliderResize.call(o,n.active.index))}};return o.goToSlide=function(e,t){if(!n.working&&n.active.index!=e)if(n.working=!0,n.oldIndex=n.active.index,0>e?n.active.index=f()-1:e>=f()?n.active.index=0:n.active.index=e,n.settings.onSlideBefore(n.children.eq(n.active.index),n.oldIndex,n.active.index),"next"==t?n.settings.onSlideNext(n.children.eq(n.active.index),n.oldIndex,n.active.index):"prev"==t&&n.settings.onSlidePrev(n.children.eq(n.active.index),n.oldIndex,n.active.index),n.active.last=n.active.index>=f()-1,n.settings.pager&&M(n.active.index),n.settings.controls&&D(),"fade"==n.settings.mode)n.viewport.css({overflow:"hidden"}),n.settings.adaptiveHeight&&n.viewport.height()!=g()&&n.viewport.animate({height:g()},n.settings.adaptiveHeightSpeed),n.children.filter(":visible").fadeOut(n.settings.speed).css({zIndex:0}),n.children.eq(n.active.index).css("zIndex",n.settings.slideZIndex+1).fadeIn(n.settings.speed,function(){$(this).css("zIndex",n.settings.slideZIndex),_()});else{n.settings.adaptiveHeight&&n.viewport.height()!=g()&&n.viewport.animate({height:g()},n.settings.adaptiveHeightSpeed);var i=0,s={left:0,top:0};if(!n.settings.infiniteLoop&&n.carousel&&n.active.last)if("horizontal"==n.settings.mode){var l=n.children.eq(n.children.length-1);s=l.position(),i=n.viewport.width()-l.outerWidth()}else{var a=n.children.length-n.settings.minSlides;s=n.children.eq(a).position()}else if(n.carousel&&n.active.last&&"prev"==t){var r=1==n.settings.moveSlides?n.settings.maxSlides-m():(f()-1)*m()-(n.children.length-n.settings.maxSlides),l=o.children(".soliloquy-clone").eq(r);s=l.position()}else if("next"==t&&0==n.active.index)s=o.find("> .soliloquy-clone").eq(n.settings.maxSlides).position(),n.active.last=!1;else if(e>=0){var d=e*m();s=n.children.eq(d).position()}if("undefined"!=typeof s){var c="horizontal"==n.settings.mode?-(s.left-i):-s.top;x(c,"slide",n.settings.speed)}}},o.goToNextSlide=function(){if(n.settings.infiniteLoop||!n.active.last){var e=parseInt(n.active.index)+1;o.goToSlide(e,"next")}},o.goToPrevSlide=function(){if(n.settings.infiniteLoop||0!=n.active.index){var e=parseInt(n.active.index)-1;o.goToSlide(e,"prev")}},o.startAuto=function(e){n.interval||(n.interval=setInterval(function(){"next"==n.settings.autoDirection?o.goToNextSlide():o.goToPrevSlide()},n.settings.pause),n.settings.autoControls&&1!=e&&I("stop"))},o.stopAuto=function(e){n.interval&&(clearInterval(n.interval),n.interval=null,n.settings.autoControls&&1!=e&&I("start"))},o.getCurrentSlide=function(){return n.active.index},o.getCurrentSlideElement=function(){return n.children.eq(n.active.index)},o.getSlideCount=function(){return n.children.length},o.redrawSlider=function(){n.children.add(o.find(".soliloquy-clone")).width(p()),n.viewport.css("height",g()),n.settings.ticker||y(),n.active.last&&(n.active.index=f()-1),n.active.index>=f()&&(n.active.last=!0),n.settings.pager&&!n.settings.pagerCustom&&(w(),M(n.active.index))},o.destroySlider=function(){n.initialized&&(n.initialized=!1,$(".soliloquy-clone",this).remove(),n.children.each(function(){void 0!=$(this).data("origStyle")?$(this).attr("style",$(this).data("origStyle")):$(this).removeAttr("style")}),void 0!=$(this).data("origStyle")?this.attr("style",$(this).data("origStyle")):$(this).removeAttr("style"),$(this).unwrap().unwrap(),n.controls.el&&n.controls.el.remove(),n.controls.next&&n.controls.next.remove(),n.controls.prev&&n.controls.prev.remove(),n.pagerEl&&n.settings.controls&&n.pagerEl.remove(),$(".soliloquy-caption",this).remove(),n.controls.autoEl&&n.controls.autoEl.remove(),clearInterval(n.interval),n.settings.responsive&&$(window).unbind("resize",V))},o.reloadSlider=function(e){void 0!=e&&(s=e),o.destroySlider(),r()},o.getSetting=function(e){return n.settings[e]?n.settings[e]:!1},r(),this}}(jQuery),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function($){function e(e){var s=e||window.event,n=o.call(arguments,1),r=0,c=0,u=0,g=0,h=0,p=0;if(e=$.event.fix(s),e.type="mousewheel","detail"in s&&(u=-1*s.detail),"wheelDelta"in s&&(u=s.wheelDelta),"wheelDeltaY"in s&&(u=s.wheelDeltaY),"wheelDeltaX"in s&&(c=-1*s.wheelDeltaX),"axis"in s&&s.axis===s.HORIZONTAL_AXIS&&(c=-1*u,u=0),r=0===u?c:u,"deltaY"in s&&(u=-1*s.deltaY,r=u),"deltaX"in s&&(c=s.deltaX,0===u&&(r=-1*c)),0!==u||0!==c){if(1===s.deltaMode){var v=$.data(this,"mousewheel-line-height");r*=v,u*=v,c*=v}else if(2===s.deltaMode){var f=$.data(this,"mousewheel-page-height");r*=f,u*=f,c*=f}if(g=Math.max(Math.abs(u),Math.abs(c)),(!a||a>g)&&(a=g,i(s,g)&&(a/=40)),i(s,g)&&(r/=40,c/=40,u/=40),r=Math[r>=1?"floor":"ceil"](r/a),c=Math[c>=1?"floor":"ceil"](c/a),u=Math[u>=1?"floor":"ceil"](u/a),d.settings.normalizeOffset&&this.getBoundingClientRect){var m=this.getBoundingClientRect();h=e.clientX-m.left,p=e.clientY-m.top}return e.deltaX=c,e.deltaY=u,e.deltaFactor=a,e.offsetX=h,e.offsetY=p,e.deltaMode=0,n.unshift(e,r,c,u),l&&clearTimeout(l),l=setTimeout(t,200),($.event.dispatch||$.event.handle).apply(this,n)}}function t(){a=null}function i(e,t){return d.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120===0}var s=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],n="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],o=Array.prototype.slice,l,a;if($.event.fixHooks)for(var r=s.length;r;)$.event.fixHooks[s[--r]]=$.event.mouseHooks;var d=$.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var t=n.length;t;)this.addEventListener(n[--t],e,!1);else this.onmousewheel=e;$.data(this,"mousewheel-line-height",d.getLineHeight(this)),$.data(this,"mousewheel-page-height",d.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var t=n.length;t;)this.removeEventListener(n[--t],e,!1);else this.onmousewheel=null;$.removeData(this,"mousewheel-line-height"),$.removeData(this,"mousewheel-page-height")},getLineHeight:function(e){var t=$(e),i=t["offsetParent"in $.fn?"offsetParent":"parent"]();return i.length||(i=$("body")),parseInt(i.css("fontSize"),10)||parseInt(t.css("fontSize"),10)||16},getPageHeight:function(e){return $(e).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};$.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})});