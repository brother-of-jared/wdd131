// FUNCTION FOR MOBILE MENU
document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('#menu');
  const navigation = document.querySelector("nav");
  const body = document.body;

  menuButton.addEventListener('click', function() {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
    body.classList.toggle('no-scroll');
  });
});

// FUNCTION FOR POPULATING DESTINATIONS PAGE

const destinations = [
  {
    name: "El Nido, Palawan",
    location: "Luzon",
    description: "A world-renowned tropical paradise in the Philippines, famous for its stunning limestone cliffs, crystal-clear turquoise waters, pristine white-sand beaches (like Nacpan Beach), hidden lagoons (Big & Small Lagoon), and rich marine life, making it a top destination for island hopping, snorkeling, diving, and exploring dramatic landscapes and secret spots, offering both adventure and relaxation.",
    imageUrl: ""
  }
]

const allLink = document.getElementById("all")
const luzonLink = document.getElementById("luzon")
const visayasLink = document.getElementById("visayas")
const mindanaoLink = document.getElementById("mindanao")

allLink.addEventListener("click", () => {
  createDestinationCard(destinations);
});


function createDestinationCard(filteredDestinations) {
  document.querySelector("#gallery-destinations").innerHTML = "",
  filteredDestinations.forEach(destination => {
    let card = document.createElement("div");
    card.classList.add("gd-card")

    let image = document.createElement("img");
    image.setAttribute("src", destination.imageUrl);
    image.setAttribute("alt", destination.name);
    image.setAttribute("loading", "lazy");

    let textBox = document.createElement("div");
    textBox.classList.add("gd-text-box")

    let title = document.createElement("div");
    title.classList.add("gd-title")
    title.textContent = destination.name;

    let summary = document.createElement("p");
    summary.textContent = destination.description;


    card.appendChild(image);
    card.appendChild(textBox);
    textBox.appendChild(title);
    textBox.appendChild(summary);

    let container = document.querySelector("#gallery-destinations");
    container.appendChild(card);
  });
}