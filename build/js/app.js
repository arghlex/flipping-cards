var $discard=$(".option--discard"),$save=$(".option--save"),$savedToFav=$(".saved"),$fsv=$(".fullscreen-view"),$panels=$(".app__body .panels"),toggleClassDelay=function(e,s,a){e.addClass(a);setTimeout(function(){e.removeClass(a)},s)},optionChoice=function(e,s){var a=$(this);if($(".app__body .panel").length>1){var o=$(".app__body .panel:first");o.addClass("transition--"+e);setTimeout(function(){o.remove()},s);"save"===e&&toggleClassDelay($savedToFav,1e3,"item-saved")}else toggleClassDelay(a,1e3,"option--disabled")};$discard.on("click",function(e){e.preventDefault(),optionChoice.call(this,"discard",500)}),$save.on("click",function(e){e.preventDefault(),optionChoice.call(this,"save",500)}),$fsv.on("click",".head__option--close",function(e){e.preventDefault(),$fsv.toggleClass("show"),$(".fullscreen-view .panel").remove()}),$panels.on("click",".panel--item:first-child",function(e){$(this).clone().appendTo(".fullscreen-view"),$fsv.toggleClass("show");setTimeout(function(){$(".fullscreen-view .panel").addClass("fade-in")})});