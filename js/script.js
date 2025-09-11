const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });

    // Journals
function checkAuth(event) {
    event.preventDefault();
    const isSignedIn = false; // change to true if logged in

    if (isSignedIn) {
      window.location.href = "/journals.html";
    } else {
      // Show modern alert modal
      document.getElementById("alertModal").classList.remove("hidden");
    }
  }

  function closeAlert() {
    document.getElementById("alertModal").classList.add("hidden");
  }


