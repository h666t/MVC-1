import "./app4.css";
import $ from "jquery";

const $circle = $(".circle");

$circle.on("mouseenter", () => {
  $circle.addClass("active");
});

$circle.on("mouseout", () => {
  $circle.removeClass("active");
});
