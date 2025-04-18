
//TESTIMONIAL
  const users = document.querySelectorAll(".testimonial .user");
  const dots = document.querySelectorAll(".testimonial .dots span");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;
  let autoSlideInterval;

  function showUser(index) {
    users.forEach((user, i) => {
      if (i === index) {
        user.classList.add("active");
        user.style.animation = "none";
        void user.offsetWidth;
        user.style.animation = "fadeIn 0.6s ease forwards";
      } else {
        user.classList.remove("active");
      }
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  function nextUser() {
    currentIndex = (currentIndex + 1) % users.length;
    showUser(currentIndex);
    resetAutoSlide();
  }

  function prevUser() {
    currentIndex = (currentIndex - 1 + users.length) % users.length;
    showUser(currentIndex);
    resetAutoSlide();
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      nextUser();
    }, 5000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  nextBtn.addEventListener("click", nextUser);
  prevBtn.addEventListener("click", prevUser);

  showUser(currentIndex);
  startAutoSlide();



























// MAP 
const bounds = [
  [-90, -180], 
  [90, 180]    
];

const map = L.map("real-map", {
  center: [20, 0],
  zoom: 1.8,
  scrollWheelZoom: false,
  doubleClickZoom: false,
  dragging: true,
  zoomControl: true,
  maxBounds: bounds, 
  maxBoundsViscosity: 1.0, 
  worldCopyJump: false,  
  maxZoom: 32,
  minZoom: 2.8
});


L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  {
    attribution:
      "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye",
    maxZoom: 18,
    noWrap: true 
  }
).addTo(map);


const locations = [
  { name: "Machu Picchu, Peru", coords: [-13.1631, -72.545] },
  { name: "Sydney Opera House, Australia", coords: [-33.8568, 151.2153] },
  { name: "Mount Kilimanjaro, Tanzania", coords: [-3.3731, 36.686] },
  { name: "Queenstown, New Zealand", coords: [-45.0312, 168.6626] },
  { name: "Matterhorn, Switzerland", coords: [46.0207, 7.7491] },
  { name: "Wat Phra Kaew, Thailand", coords: [13.4125, 103.8667] },
  { name: "CN Tower, Canada", coords: [43.6426, -79.3871] },
  { name: "Golden Circle, Iceland", coords: [64.9631, -19.0208] },
  { name: "Everest Base Camp, Nepal", coords: [27.9881, 86.925] },
  { name: "Table Mountain, South Africa", coords: [-33.9249, 18.4241] },
];

locations.forEach(loc => {
  L.marker(loc.coords).addTo(map).bindPopup(loc.name);
});

// function findAdventure() {
//   alert("Finding adventure near you...");
// }




function findAdventure() {
  const selected = document.getElementById("country").value;
  const modal = document.getElementById("adventureModal");
  const modalText = modal.querySelector("p");

  if (!selected) {
    modalText.innerHTML = "⚠️ Please select a Country.";
    modal.style.display = "block";

    setTimeout(() => {
      modal.style.display = "none";
    }, 2500);

    return;
  }

  modalText.innerHTML = "🌍 Finding adventure near you...";
  modal.style.display = "block";

  setTimeout(() => {
    modal.style.display = "none";

const coordsMap = {
  peru: [-13.1631, -72.545], // Machu Picchu
  australia: [-33.8568, 151.2153], // Sydney Opera House
  tanzania: [-3.3731, 36.686], // Mount Kilimanjaro
  newzealand: [-45.0312, 168.6626], // Queenstown
  switzerland: [46.0207, 7.7491], // Matterhorn
  thailand: [13.4125, 103.8667], // Wat Phra Kaew (Bangkok)
  canada: [43.6426, -79.3871], // CN Tower (Toronto)
  iceland: [64.9631, -19.0208], // Golden Circle
  nepal: [27.9881, 86.925], // Mount Everest Base Camp
  southafrica: [-33.9249, 18.4241], // Table Mountain (Cape Town)
};


    const destination = coordsMap[selected];
    if (destination) {
      map.flyTo(destination, 16);
    }
  }, 3000);
}

function closeModal() {
  document.getElementById("adventureModal").style.display = "none";
}








// HEADER DROPDOWN

document.querySelectorAll('.arrow-icon').forEach(icon => {
  icon.addEventListener('click', function (e) {
    e.stopPropagation(); 
    const parent = this.closest('.has-dropdown');
    const dropdown = parent.querySelector('.dropdown');

    document.querySelectorAll('.dropdown').forEach(menu => {
      if (menu !== dropdown) menu.classList.remove('show');
    });

    dropdown.classList.toggle('show');
    this.classList.toggle('rotate');
  });
});

document.addEventListener('click', function () {
  document.querySelectorAll('.dropdown').forEach(menu => {
    menu.classList.remove('show');
  });
  document.querySelectorAll('.arrow-icon').forEach(icon => {
    icon.classList.remove('rotate');
  });
});









// HERO SELECT RANGE

  const rangeInput = document.getElementById('price-range');
  const rangeValue = document.getElementById('range-value');
  rangeInput.addEventListener('input', () => {
    rangeValue.textContent = `$${rangeInput.value}`;
  });

  const rangeInput2 = document.getElementById("price-range-2");
  const rangeValue2 = document.getElementById("range-value-2");
  rangeInput2.addEventListener("input", () => {
    rangeValue2.textContent = `$${rangeInput2.value}`;
  });









// Step Further Slider
const sliderContainer = document.querySelector('.step-further');
const articleTrack = sliderContainer.querySelector('.explore-articles');
const articleItems = sliderContainer.querySelectorAll('.article');
const articleNext = sliderContainer.querySelector('#article-next');
const articlePrev = sliderContainer.querySelector('#article-prev');
const articleDots = sliderContainer.querySelectorAll('.article-dot');

function getVisibleCount() {
  if (window.innerWidth <= 440) return 1;
  if (window.innerWidth <= 767) return 2;
  if (window.innerWidth <= 991) return 3;
  return 3.5;
}

let index = 0;
const totalArticles = articleItems.length;

function updateArticleView() {
  const visibleCount = getVisibleCount();
  const itemWidth = articleItems[0].offsetWidth;
  const maxIndex = Math.ceil(totalArticles - visibleCount);
  let shift = index * itemWidth;

  if (index === maxIndex && visibleCount === 3.5) {
    shift = (totalArticles - visibleCount) * itemWidth;
  }

  articleTrack.style.transform = `translateX(-${shift}px)`;

  articleDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });

  articlePrev.disabled = index === 0;
  articleNext.disabled = index >= maxIndex;
}

articleNext.addEventListener('click', () => {
  const visibleCount = getVisibleCount();
  const maxIndex = Math.ceil(totalArticles - visibleCount);
  if (index < maxIndex) {
    index++;
    updateArticleView();
  }
});

articlePrev.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateArticleView();
  }
});

articleDots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    const visibleCount = getVisibleCount();
    const maxIndex = Math.ceil(totalArticles - visibleCount);
    if (i <= maxIndex) {
      index = i;
      updateArticleView();
    }
  });
});

window.addEventListener('resize', () => {
  updateArticleView();
});

updateArticleView();















 // Sidebar Toggle
const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const closeSidebar = document.querySelector(".close-sidebar");
const sidebarLinks = document.querySelectorAll(".sidebar a"); 

hamburger.addEventListener("click", () => {
  sidebar.classList.add("active");
  document.body.classList.add("sidebar-active");
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("active");
  document.body.classList.remove("sidebar-active");
});

sidebarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active");
    document.body.classList.remove("sidebar-active");
  });
});


