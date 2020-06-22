import $ from "jquery";
import "./app1.css";

const $plus = $(".plus");
const $cut = $(".cut");
const $mul = $(".mul");
const $divide = $(".divide");
const $result = $("#result");

$result.text(parseInt(localStorage.getItem("number")) || 100);

$plus.on("click", () => {
  let n = $result.text();
  n = parseInt(n);
  n += 1;
  console.log(n);
  $result.text(n);
  localStorage.setItem("number", n);
});

$cut.on("click", () => {
  let n = $result.text();
  n = parseInt(n);
  n -= 1;
  console.log(n);
  $result.text(n);
  localStorage.setItem("number", n);
});

$mul.on("click", () => {
  let n = $result.text();
  n = parseInt(n);
  n *= 2;
  console.log(n);
  $result.text(n);
  localStorage.setItem("number", n);
});

$divide.on("click", () => {
  let n = $result.text();
  n = parseInt(n);
  n /= 2;
  console.log(n);
  $result.text(n);
  localStorage.setItem("number", n);
});
