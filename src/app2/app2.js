import "./app2.css";
import $ from "jquery";

const $tag = $("#tag");

$tag.on("click", (e) => {
  const t = e.target;
  const $tag1 = $("#tag1");
  const $tag2 = $("#tag2");
  const $content1 = $("#content1");
  const $content2 = $("#content2");
  t === $tag1[0]
    ? ($content1.addClass("active").siblings().removeClass("active"),
      $tag1.addClass("active").siblings().removeClass("active"))
    : ($content2.addClass("active").siblings().removeClass("active"),
      $tag2.addClass("active").siblings().removeClass("active"));
});

$tag.children().eq(0).trigger("click");
