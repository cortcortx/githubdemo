const japaParagraph =
  "Japan is an archipelago, or string of islands, on the eastern edge of Asia. There are four main islands: Hokkaido, Honshu, Shikoku, and Kyushu. There are also nearly 4,000 smaller islands! Japan's nearest mainland neighbors are the Siberian region of Russia in the north and Korea and China farther south. Almost four-fifths of Japan is covered with mountains. The Japanese Alps run down the center of the largest island, Honshu. The highest peak is Mount Fuji, a cone-shaped volcano considered sacred by many Japanese. Japan can be a dangerous place. Three of the tectonic plates that form Earth's crust meet nearby and often move against each other, causing earthquakes. More than a thousand earthquakes hit Japan every year. Japan also has about 200 volcanoes, 60 of which are active.";


//when user clicks each card's button, it looks for the destination name (country) on that card listed as h3 and sets it as the modal-title.
// depending on the one clicked should display special text for that specific country
$(document).ready(function () {
  $(".btn-primary").click(function () {
    var destination = $(this).closest(".card").find("h3").text();

    $(".modal-title").text(destination);

    if (destination === "Japan") {
      modalContent = japaParagraph;
    } else if (destination === "Switzerland") {
      modalContent = "More information about Switzerland goes here.";
    } else if (destination === "Hawaii") {
      modalContent = "More information about Hawaii goes here.";
    } else if (destination === "Greenland") {
      modalContent = "More information about Greenland goes here.";
    } else if (destination === "Scotland") {
      modalContent = "More information about Scotland goes here.";
    } else if (destination === "Philippines") {
      modalContent = "More information about Philippines goes here.";
    } else if (destination === "South Korea") {
      modalContent = "More information about South Korea goes here.";
    } else if (destination === "Bora Bora") {
      modalContent = "More information about Bora Bora goes here.";
    }

    // Display modal-content on the HTML page
    $("#modal-content").html(modalContent);

  });
});
