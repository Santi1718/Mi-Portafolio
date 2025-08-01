/**
 * PORTAFOLIO AVIACIÓN - SANTIAGO ANDRÉS QUIÑONEZ SOSA
 * JavaScript mejorado con efectos adicionales y funcionalidad completa
 */

// ===== VARIABLES GLOBALES =====
let currentLanguage = "es"
let showPortfolio = false
let showTransition = false

// ===== TRADUCCIONES COMPLETAS =====
const translations = {
  es: {
    landing: {
      welcome: "Bienvenido a bordo",
      subtitle: "Prepárate para un viaje increíble por mi mundo de desarrollo",
      startJourney: "Comenzar Viaje",
    },
    nav: {
      about: "Sobre Mí",
      video: "Video",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
    },
    hero: {
      greeting: "¡Hola! Soy",
      name: "Santiago Andrés Quiñonez Sosa",
      title: "Desarrollador Full Stack",
      subtitle: "Programando con la precisión de un piloto experto",
      description:
        "Transformo ideas en aplicaciones web increíbles, navegando por el código con la misma precisión que un piloto surca los cielos.",
      cta: "Ver Mis Proyectos",
      downloadCV: "Descargar CV",
    },
    about: {
      title: "Mi Ruta de Vuelo",
      description:
        "Como programador junior, estoy comenzando mi travesía en el mundo del desarrollo con la determinación de un piloto en su primer vuelo. Mi pasión es crear experiencias digitales que eleven las ideas a nuevas alturas.",
      experience: "Años de Experiencia",
      projects: "Proyectos Completados",
      learning: "Siempre Aprendiendo",
    },
    video: {
      title: "Conoce al Piloto",
      subtitle: "Un vistazo personal a mi pasión por la programación",
      description: "Descubre más sobre mi historia, motivaciones y visión como desarrollador",
      comingSoon: "Video próximamente...",
      note: "Aquí aparecerá tu video personal",
    },
    projects: {
      title: "Hangar de Proyectos",
      subtitle: "Cada aplicación es un vuelo único hacia la innovación digital",
      project1: {
        title: "TaskFly Manager",
        description: "Sistema de gestión de tareas con interfaz intuitiva y funcional",
      },
      project2: {
        title: "WeatherWings",
        description: "Aplicación del clima con datos meteorológicos en tiempo real",
      },
      project3: {
        title: "SkyCalculator",
        description: "Calculadora avanzada con funciones científicas y conversiones",
      },
      project4: {
        title: "FlightPortfolio",
        description: "Portafolio personal con temática de aviación y diseño responsive",
      },
    },
    skills: {
      title: "Cabina de Instrumentos",
      subtitle: "Las tecnologías y habilidades que manejo en mi torre de control",
      frontend: "Frontend",
      backend: "Backend",
      soft: "Habilidades Blandas",
      tools: "Herramientas",
    },
    contact: {
      title: "Torre de Control",
      subtitle: "Listo para despegar en nuevos proyectos",
      description: "Contáctame y hagamos que tu idea digital vuele alto",
      email: "Enviar Email",
      github: "Ver GitHub",
      linkedin: "Conectar",
    },
    footer: {
      rights: "Todos los derechos reservados. Programando a gran altitud.",
    },
    transition: {
      preparing: "Preparando el vuelo...",
    },
  },
  en: {
    landing: {
      welcome: "Welcome aboard",
      subtitle: "Get ready for an incredible journey through my development world",
      startJourney: "Start Journey",
    },
    nav: {
      about: "About Me",
      video: "Video",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello! I'm",
      name: "Santiago Andrés Quiñonez Sosa",
      title: "Full Stack Developer",
      subtitle: "Programming with the precision of an expert pilot",
      description:
        "I transform ideas into incredible web applications, navigating through code with the same precision a pilot soars through the skies.",
      cta: "View My Projects",
      downloadCV: "Download CV",
    },
    about: {
      title: "My Flight Route",
      description:
        "As a junior programmer, I'm starting my journey in the development world with the determination of a pilot on their first flight. My passion is creating digital experiences that elevate ideas to new heights.",
      experience: "Years of Experience",
      projects: "Completed Projects",
      learning: "Always Learning",
    },
    video: {
      title: "Meet the Pilot",
      subtitle: "A personal look at my passion for programming",
      description: "Discover more about my story, motivations and vision as a developer",
      comingSoon: "Video coming soon...",
      note: "Your personal video will appear here",
    },
    projects: {
      title: "Project Hangar",
      subtitle: "Each application is a unique flight towards digital innovation",
      project1: {
        title: "TaskFly Manager",
        description: "Task management system with intuitive and functional interface",
      },
      project2: {
        title: "WeatherWings",
        description: "Weather application with real-time meteorological data",
      },
      project3: {
        title: "SkyCalculator",
        description: "Advanced calculator with scientific functions and conversions",
      },
      project4: {
        title: "FlightPortfolio",
        description: "Personal portfolio with aviation theme and responsive design",
      },
    },
    skills: {
      title: "Instrument Panel",
      subtitle: "The technologies and skills I handle in my control tower",
      frontend: "Frontend",
      backend: "Backend",
      soft: "Soft Skills",
      tools: "Tools",
    },
    contact: {
      title: "Control Tower",
      subtitle: "Ready to take off on new projects",
      description: "Contact me and let's make your digital idea fly high",
      email: "Send Email",
      github: "View GitHub",
      linkedin: "Connect",
    },
    footer: {
      rights: "All rights reserved. Programming at high altitude.",
    },
    transition: {
      preparing: "Preparing flight...",
    },
  },
}

// ===== INICIALIZACIÓN =====
document.addEventListener("DOMContentLoaded", () => {
  console.log("🛩️ Iniciando Portafolio de Aviación Mejorado...")

  // Configurar event listeners
  setupEventListeners()

  // Aplicar traducciones iniciales
  updateLanguage()

  // Inicializar efectos adicionales
  initializeEffects()

  console.log("✅ Portafolio inicializado correctamente")
})

// ===== CONFIGURACIÓN DE EVENT LISTENERS =====
function setupEventListeners() {
  // Botones de idioma
  const landingLanguageBtn = document.getElementById("landing-language-btn")
  const portfolioLanguageBtn = document.getElementById("portfolio-language-btn")

  if (landingLanguageBtn) {
    landingLanguageBtn.addEventListener("click", toggleLanguage)
  }

  if (portfolioLanguageBtn) {
    portfolioLanguageBtn.addEventListener("click", toggleLanguage)
  }

  // Botón de inicio del viaje
  const startJourneyBtn = document.getElementById("start-journey-btn")
  if (startJourneyBtn) {
    startJourneyBtn.addEventListener("click", startJourney)
  }

  // Logo para volver al inicio
  const logoHome = document.getElementById("logo-home")
  if (logoHome) {
    logoHome.addEventListener("click", goToHome)
  }

  // Botones del hero
  const heroProjectsBtn = document.getElementById("hero-projects-btn")
  const heroDownloadBtn = document.getElementById("hero-download-btn")

  if (heroProjectsBtn) {
    heroProjectsBtn.addEventListener("click", () => {
      scrollToSection("projects")
    })
  }

  if (heroDownloadBtn) {
    heroDownloadBtn.addEventListener("click", downloadCV)
  }

  // Enlaces de navegación
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const target = this.getAttribute("data-target")
      scrollToSection(target)
    })
  })

  console.log("🔗 Event listeners configurados")
}

// ===== EFECTOS ADICIONALES =====
function initializeEffects() {
  // Efecto parallax suave en las nubes
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const clouds = document.querySelectorAll(".hero-cloud")

    clouds.forEach((cloud, index) => {
      const speed = 0.5 + index * 0.1
      cloud.style.transform = `translateY(${scrolled * speed}px)`
    })
  })

  // Efecto de hover mejorado en las tarjetas
  const cards = document.querySelectorAll(".project-card, .skill-card")
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-8px) scale(1.02)"
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)"
    })
  })

  // Animación de entrada para elementos
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observar elementos para animación
  const animatedElements = document.querySelectorAll(".project-card, .skill-card, .stat-item")
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "all 0.6s ease-out"
    observer.observe(el)
  })
}

// ===== FUNCIONES DE NAVEGACIÓN =====
function startJourney() {
  console.log("🚀 Iniciando viaje...")

  const landingScreen = document.getElementById("landing-screen")
  const transitionScreen = document.getElementById("transition-screen")
  const portfolioScreen = document.getElementById("portfolio-screen")

  // Mostrar transición
  landingScreen.classList.add("hidden")
  transitionScreen.classList.remove("hidden")
  showTransition = true

  // Después de 3 segundos, mostrar portafolio
  setTimeout(() => {
    transitionScreen.classList.add("hidden")
    portfolioScreen.classList.remove("hidden")
    showPortfolio = true
    showTransition = false

    console.log("✅ Portafolio mostrado")
  }, 3000)
}

function goToHome() {
  console.log("🏠 Volviendo al inicio...")

  const landingScreen = document.getElementById("landing-screen")
  const portfolioScreen = document.getElementById("portfolio-screen")

  portfolioScreen.classList.add("hidden")
  landingScreen.classList.remove("hidden")
  showPortfolio = false
  showTransition = false
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
    console.log("📍 Navegando a: " + sectionId)
  }
}

// ===== FUNCIONES DE IDIOMA =====
function toggleLanguage() {
  currentLanguage = currentLanguage === "es" ? "en" : "es"
  updateLanguage()
  console.log("🌐 Idioma cambiado a: " + currentLanguage.toUpperCase())
}

function updateLanguage() {
  const t = translations[currentLanguage]

  // Actualizar botones de idioma
  const landingLangText = document.getElementById("landing-lang-text")
  const portfolioLangText = document.getElementById("portfolio-lang-text")

  if (landingLangText) {
    landingLangText.textContent = currentLanguage === "es" ? "EN" : "ES"
  }

  if (portfolioLangText) {
    portfolioLangText.textContent = currentLanguage === "es" ? "EN" : "ES"
  }

  // Actualizar textos del landing
  updateElementText("landing-title", t.landing.welcome)
  updateElementText("landing-subtitle", t.landing.subtitle)
  updateElementText("start-journey-text", t.landing.startJourney)

  // Actualizar navegación
  updateElementText("nav-about", t.nav.about)
  updateElementText("nav-video", t.nav.video)
  updateElementText("nav-projects", t.nav.projects)
  updateElementText("nav-skills", t.nav.skills)
  updateElementText("nav-contact", t.nav.contact)

  // Actualizar hero
  updateElementText("hero-greeting", t.hero.greeting)
  updateElementText("hero-name", t.hero.name)
  updateElementText("hero-title", t.hero.title)
  updateElementText("hero-subtitle", t.hero.subtitle)
  updateElementText("hero-description", t.hero.description)
  updateElementText("hero-cta", t.hero.cta)
  updateElementText("hero-download", t.hero.downloadCV)

  // Actualizar about
  updateElementText("about-title", t.about.title)
  updateElementText("about-description", t.about.description)
  updateElementText("stat-experience", t.about.experience)
  updateElementText("stat-projects", t.about.projects)
  updateElementText("stat-learning", t.about.learning)

  // Actualizar video
  updateElementText("video-title", t.video.title)
  updateElementText("video-subtitle", t.video.subtitle)
  updateElementText("video-description", t.video.description)
  updateElementText("video-coming-soon", t.video.comingSoon)
  updateElementText("video-note", t.video.note)

  // Actualizar proyectos
  updateElementText("projects-title", t.projects.title)
  updateElementText("projects-subtitle", t.projects.subtitle)
  updateElementText("project1-title", t.projects.project1.title)
  updateElementText("project1-description", t.projects.project1.description)
  updateElementText("project2-title", t.projects.project2.title)
  updateElementText("project2-description", t.projects.project2.description)
  updateElementText("project3-title", t.projects.project3.title)
  updateElementText("project3-description", t.projects.project3.description)
  updateElementText("project4-title", t.projects.project4.title)
  updateElementText("project4-description", t.projects.project4.description)

  // Actualizar skills
  updateElementText("skills-title", t.skills.title)
  updateElementText("skills-subtitle", t.skills.subtitle)
  updateElementText("skill-frontend", t.skills.frontend)
  updateElementText("skill-backend", t.skills.backend)
  updateElementText("skill-soft", t.skills.soft)
  updateElementText("skill-tools", t.skills.tools)

  // Actualizar contacto
  updateElementText("contact-title", t.contact.title)
  updateElementText("contact-subtitle", t.contact.subtitle)
  updateElementText("contact-description", t.contact.description)
  updateElementText("contact-email", t.contact.email)
  updateElementText("contact-github", t.contact.github)
  updateElementText("contact-linkedin", t.contact.linkedin)

  // Actualizar footer
  updateElementText("footer-rights", t.footer.rights)

  // Actualizar texto de transición
  updateElementText("transition-text", t.transition.preparing)
}

function updateElementText(elementId, text) {
  const element = document.getElementById(elementId)
  if (element) {
    element.textContent = text
  }
}

// ===== FUNCIONES DE CONTACTO =====
function sendEmail() {
  const email = "santiagoquinonez952@gmail.com"
  const subject = currentLanguage === "es" ? "Contacto desde tu portafolio" : "Contact from your portfolio"
  const body =
    currentLanguage === "es"
      ? "Hola Santiago, me interesa contactarte..."
      : "Hello Santiago, I would like to contact you..."

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.location.href = mailtoLink

  console.log("📧 Abriendo cliente de email")
}

function openGitHub() {
  const githubUrl = "https://github.com/Santi1718"
  window.open(githubUrl, "_blank")
  console.log("🐙 Abriendo GitHub")
}

function openLinkedIn() {
  const linkedinUrl = "https://www.linkedin.com/in/santiago-qui%C3%B1onez-505564376"
  window.open(linkedinUrl, "_blank")
  console.log("💼 Abriendo LinkedIn")
}

function downloadCV() {
  const cvUrl = "https://drive.google.com/file/d/1gcRs4Byl1cJ4PSUJKmNN47dPRnp_3qDP/view?usp=sharing"

  // Crear enlace temporal para descarga
  const link = document.createElement("a")
  link.href = cvUrl
  link.target = "_blank"
  link.download = "Santiago_Quinonez_CV.pdf"

  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  console.log("📄 Descargando CV")
}

// ===== FUNCIONES DE PROYECTOS =====
function openProject(projectUrl) {
  window.open(projectUrl, "_blank")
  console.log("🚀 Abriendo proyecto: " + projectUrl)
}

// ===== FUNCIONES DE UTILIDAD =====
function handleError(error) {
  console.error("❌ Error en el portafolio:", error)
}

function debugLog(message) {
  if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
    console.log("🔧 Debug: " + message)
  }
}

// ===== MANEJO DE ERRORES GLOBALES =====
window.addEventListener("error", (event) => {
  handleError(event.error)
})

window.addEventListener("unhandledrejection", (event) => {
  handleError(event.reason)
})

// ===== OPTIMIZACIONES DE RENDIMIENTO =====
function setupLazyLoading() {
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src
          img.classList.remove("lazy")
          imageObserver.unobserve(img)
        }
      })
    })

    const lazyImages = document.querySelectorAll("img[data-src]")
    lazyImages.forEach((img) => {
      imageObserver.observe(img)
    })
  }
}

// ===== INICIALIZACIÓN ADICIONAL =====
window.addEventListener("load", () => {
  setupLazyLoading()

  // Precargar recursos críticos
  const criticalResources = ["https://unpkg.com/lucide@latest/dist/umd/lucide.js"]

  criticalResources.forEach((resource) => {
    const link = document.createElement("link")
    link.rel = "preload"
    link.href = resource
    link.as = "script"
    document.head.appendChild(link)
  })

  console.log("🎯 Optimizaciones de rendimiento aplicadas")
})

// ===== FUNCIONES GLOBALES PARA EVENT HANDLERS =====
window.openProject = openProject
window.sendEmail = sendEmail
window.openGitHub = openGitHub
window.openLinkedIn = openLinkedIn
window.downloadCV = downloadCV

console.log("📜 Script del portafolio cargado completamente")
