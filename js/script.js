const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });

    // Journals
function checkAuth(event) {
    event.preventDefault(); 
    const isSignedIn = false; 

    if (isSignedIn) {
      
      window.location.href = "/journals.html";
    } else {
      
      alert("⚠️ You must sign in to continue!");
      window.location.href = "./register.html";
    }
  }


