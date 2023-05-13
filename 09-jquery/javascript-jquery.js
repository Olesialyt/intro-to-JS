// ******************************** 1 ********************************
$("h2.head").addClass("green-background");
const result = $("h2.head").find(".inner");
result.addClass("font-size");

//******************************** 2 ********************************

$("a[href*='https://']").attr("target", "_blank");

//******************************** 3 ********************************
const allDivs = $("h3").next("div");

$("h3").each((i, el) => {
  el.before(allDivs[i]);
});

//******************************** 4 ********************************
let count = 0;
const checkboxes = $("input[type='checkbox']");

const handleChange = () => {
  count++;
  if (count >= 3) {
    checkboxes.each((i, el) => {
      el.disabled = true;
    });
  }
};
checkboxes.on("change", handleChange);
