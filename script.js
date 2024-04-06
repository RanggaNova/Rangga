document.addEventListener("DOMContentLoaded", function () {
  // Menambahkan event listener saat DOM selesai dimuat
  const navbarLinks = document.querySelectorAll(".navbar .link a");

  navbarLinks.forEach(function (navbarLink) {
    // Menambahkan event listener untuk setiap link di navbar
    navbarLink.addEventListener("click", function (event) {
      event.preventDefault(); // Menghentikan perilaku default dari link

      const targetId = navbarLink.getAttribute("href"); // Mendapatkan ID target dari atribut href
      const targetElement = document.querySelector(targetId); // Temukan elemen dengan ID yang sesuai

      if (targetElement) {
        // Gulir ke elemen target dengan perilaku yang mulus
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

// Event listener untuk hamburger menu
document.querySelector("#hamburger").onclick = () => {
  const navbarNav = document.querySelector(".navbar-nav");
  navbarNav.classList.toggle("active");
};

document.addEventListener("DOMContentLoaded", function () {
  const $bigBall = document.querySelector(".cursor__ball--big");
  const $smallBall = document.querySelector(".cursor__ball--small");

  // Move the cursor
  function onMouseMove(e) {
    TweenMax.to($bigBall, 0.4, {
      x: e.pageX - 15,
      y: e.pageY - 15,
    });
    TweenMax.to($smallBall, 0.1, {
      x: e.pageX - 5,
      y: e.pageY - 7,
    });
  }
});
