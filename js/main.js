/**
 * Gonzalo Madroñal Portfolio - Main Script
 * Contains all interactivity, animations, and UI logic.
 * ========================================================================== */

// === Mobile Menu Toggle ====================================================
const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const mobileMenu = document.getElementById("mobile-menu");
const menuLinks = document.querySelectorAll(".nav-link-mobile");

function openMenu() {
  mobileMenu.classList.add("open");
  mobileMenu.setAttribute("aria-hidden", "false");
  menuToggle.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  mobileMenu.classList.remove("open");
  mobileMenu.setAttribute("aria-hidden", "true");
  menuToggle.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

menuToggle.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && mobileMenu.classList.contains("open")) {
    closeMenu();
  }
});

// === Smooth Scroll for Anchor Links ========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  });
});

// === Scroll Animations (AOS - Animate On Scroll) ===========================
const aosObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("aos-animate");
        aosObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
);

document.querySelectorAll("[data-aos]").forEach((el) => {
  el.classList.add("aos-init");
  aosObserver.observe(el);
});

// === Active Navigation Link on Scroll ======================================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + entry.target.id) {
            link.classList.add("active");
          }
        });
        menuLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + entry.target.id) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  { threshold: 0.25, rootMargin: "0px 0px -100px 0px" },
);

sections.forEach((section) => navObserver.observe(section));

// === Header Solid Background on Scroll =====================================
const header = document.getElementById("header");
let lastScroll = 0;

window.addEventListener(
  "scroll",
  () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 80) {
      header.classList.add("header-solid");
    } else {
      header.classList.remove("header-solid");
    }
    lastScroll = currentScroll;
  },
  { passive: true },
);

// === Contact Form Validation & Feedback ====================================
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  function showError(input) {
    input.classList.add("error");
  }

  function clearError(input) {
    input.classList.remove("error");
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  nameInput.addEventListener("input", () => {
    if (nameInput.value.trim()) clearError(nameInput);
  });

  emailInput.addEventListener("input", () => {
    if (validateEmail(emailInput.value)) clearError(emailInput);
  });

  messageInput.addEventListener("input", () => {
    if (messageInput.value.trim()) clearError(messageInput);
  });

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    if (!nameInput.value.trim()) {
      showError(nameInput);
      valid = false;
    }
    if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
      showError(emailInput);
      valid = false;
    }
    if (!messageInput.value.trim()) {
      showError(messageInput);
      valid = false;
    }

    if (valid) {
      const btn = this.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      btn.innerHTML = "<span>Sending...</span>";
      btn.disabled = true;

      setTimeout(() => {
        btn.innerHTML =
          '<span>Message Sent!</span> <span class="material-symbols-outlined text-lg">check</span>';
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.disabled = false;
          contactForm.reset();
        }, 2500);
      }, 1500);
    }
  });
}
