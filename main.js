import Elem from "./Elem.js";

$(function () {
  //Példányosítjuk az osztályunkat
  new Elem($(".jatekter"));
  $(window).on("elemKivalaszt", (event) => {
    console.log(event.detail)
    event.detail.setErtek("X")
  });
});
