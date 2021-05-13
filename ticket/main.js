import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import $ from "jquery";

function create() {
  var node = document.getElementById("my-node");

  toPng(node)
    .then(function (dataUrl) {
      var img = new Image();
      img.src = dataUrl;
      document.body.appendChild(img);
    })
    .catch(function (error) {
      console.error("oops, something went wrong!", error);
    });
}

$(function () {
  let first_name = "";
  let last_name = "";

  $("#txt_first, #txt_last").on("change", function () {
    first_name = $.trim($("#txt_first").val());
    last_name = $.trim($("#txt_last").val());
    $("#first").text(first_name);
    $("#last").text(last_name);
  });

  $("#btn").on("click", function () {
    if (first_name == "" || last_name == "") {
      alert("请输入姓名");
      return;
    }
    create();
  });
});
