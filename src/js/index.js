import { TweenMax, TimelineMax } from "gsap"
var $ = require("jquery");

var h1 = $("h1");
var h2 = $("h2");
var tl = new TimelineMax();

var h1Tween = TweenMax.to(h1, 1, {x:200});
var h2Tween = TweenMax.to(h2, 1, {x:200});
tl.add(h1Tween);
tl.add(h2Tween);