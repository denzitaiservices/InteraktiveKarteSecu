// Die Positionen basieren auf deinem Bild (2048 x 1024 px).
// x und y sind Prozentwerte. Dadurch bleiben die Punkte auch bei
// unterschiedlichen Bildschirmgrössen genau auf der Karte.
const points = [
  { id: 1,  x: 9.3262,  y: 19.6289, title: "Punkt 1" },
  { id: 2,  x: 34.1309, y: 19.1406, title: "Punkt 2" },
  { id: 3,  x: 59.3262, y: 19.6289, title: "Punkt 3" },
  { id: 4,  x: 84.1309, y: 19.1406, title: "Punkt 4" },
  { id: 5,  x: 24.4629, y: 39.9414, title: "Punkt 5" },
  { id: 6,  x: 74.4629, y: 39.9414, title: "Punkt 6" },
  { id: 7,  x: 46.9727, y: 49.6094, title: "Punkt 7" },
  { id: 8,  x: 96.9727, y: 49.6094, title: "Punkt 8" },
  { id: 9,  x: 1.3672,  y: 66.6992, title: "Punkt 9" },
  { id: 10, x: 51.3672, y: 66.6992, title: "Punkt 10" },
  { id: 11, x: 17.5293, y: 71.9727, title: "Punkt 11" },
  { id: 12, x: 67.5293, y: 71.9727, title: "Punkt 12" },
  { id: 13, x: 35.6934, y: 83.5938, title: "Punkt 13" },
  { id: 14, x: 85.6934, y: 83.5938, title: "Punkt 14" }
];

const layer = document.getElementById("markersLayer");
const pointCount = document.getElementById("pointCount");

pointCount.textContent = points.length;

let activeMarker = null;
let activePopup = null;

function closePopup() {
  if (activePopup) {
    activePopup.remove();
    activePopup = null;
  }

  if (activeMarker) {
    activeMarker.setAttribute("aria-expanded", "false");
    activeMarker = null;
  }
}

function openPopup(point, marker) {
  const sameMarkerIsOpen = activeMarker === marker;
  closePopup();

  if (sameMarkerIsOpen) {
    return;
  }

  marker.setAttribute("aria-expanded", "true");
  activeMarker = marker;

  const popup = document.createElement("div");
  popup.className = "point-popup";
  popup.textContent = point.title;
  popup.style.setProperty("--x", `${point.x}%`);
  popup.style.setProperty("--y", `${point.y}%`);
  popup.setAttribute("role", "status");

  layer.appendChild(popup);
  activePopup = popup;
}

points.forEach((point) => {
  const marker = document.createElement("button");
  marker.type = "button";
  marker.className = "map-marker";
  marker.style.setProperty("--x", `${point.x}%`);
  marker.style.setProperty("--y", `${point.y}%`);
  marker.setAttribute("aria-label", point.title);
  marker.setAttribute("aria-expanded", "false");
  marker.title = point.title;

  marker.addEventListener("click", (event) => {
    event.stopPropagation();
    openPopup(point, marker);
  });

  layer.appendChild(marker);
});

// Klick auf die Karte schliesst das offene Infofenster.
document.getElementById("mapStage").addEventListener("click", closePopup);

// Escape schliesst das Infofenster ebenfalls.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closePopup();
  }
});
