// Animación de la barra de navegación al hacer scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', function() {
    if (nav) {
        if (window.scrollY > 0) {
            nav.classList.add('nav-scroll');
        } else {
            nav.classList.remove('nav-scroll');
        }
    }
});

// Animación de los botones (hover)
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.classList.add('btn-hover');
    });
    button.addEventListener('mouseleave', function() {
        this.classList.remove('btn-hover');
    });
});

// Animación para el título principal 
const title = document.querySelector('.title');
window.addEventListener('scroll', function() {
    if (title) {
        if (window.scrollY > 100) {
            title.classList.add('title-scroll');
        } else {
            title.classList.remove('title-scroll');
        }
    }
});

// Título principal con animación de aparición al hacer scroll
const mainTitle = document.querySelector('.main-title');
window.addEventListener('scroll', function() {
    if (mainTitle) {
        if (window.scrollY > 150) {
            mainTitle.classList.add('main-title-scroll');   
        } else {
            mainTitle.classList.remove('main-title-scroll');
        }
    }
});

// Título h1 tamaño más grande y tipografía diferente al hacer scroll
const h1Title = document.querySelector('.h1-title');
window.addEventListener('scroll', function() {
    if (h1Title) {
        if (window.scrollY > 200) {
            h1Title.classList.add('h1-title-scroll');
        } else {
            h1Title.classList.remove('h1-title-scroll');
        }
    }
});

// Animación para la tarjeta del maestro
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.classList.add('card-hover');
    });
    card.addEventListener('mouseleave', function() {
        this.classList.remove('card-hover');
    });
});

// Animación para la foto del maestro
const photos = document.querySelectorAll('.photo');
photos.forEach(photo => {
    photo.addEventListener('mouseenter', function() {
        this.classList.add('photo-hover');
    });
    photo.addEventListener('mouseleave', function() {
        this.classList.remove('photo-hover');
    });
});

// Transformación para que la tarjeta dé la vuelta al hacer clic
const flipCards = document.querySelectorAll('.flip-card');
flipCards.forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('flipped');
    });
});

// Animación para el título del maestro con el scroll
const masterTitle = document.querySelector('.master-title');
window.addEventListener('scroll', function() {
    if (masterTitle) {
        if (window.scrollY > 200) {
            masterTitle.classList.add('master-title-scroll');
        } else {
            masterTitle.classList.remove('master-title-scroll');
        }
    }
});

// Animación para la aparición del texto del maestro con el scroll
const masterText = document.querySelector('.master-text');
window.addEventListener('scroll', function() {
    if (masterText) {
        if (window.scrollY > 300) {
            masterText.classList.add('master-text-scroll');
        } else {
            masterText.classList.remove('master-text-scroll');
        }
    }
});

// Diseño de la página adaptable para PC y móviles mediante JS
const mediaQuery = window.matchMedia('(max-width: 768px)');
function handleMediaQuery(e) {
    if (e.matches) {
        document.body.classList.add('mobile');
    } else {
        document.body.classList.remove('mobile');
    }
}
mediaQuery.addEventListener('change', handleMediaQuery);
handleMediaQuery(mediaQuery);

// Lógica de la encuesta local (Sin Firebase)
const encuestaForm = document.getElementById('encuestaForm');
if (encuestaForm) {
    encuestaForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const seleccionado = document.querySelector('input[name="profesor"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        
        if (!seleccionado) {
            resultadoDiv.textContent = 'Por favor, selecciona un profesor antes de votar.';
            resultadoDiv.style.color = '#cc0000';
            return;
        }

        // Muestra el éxito de forma instantánea en la pantalla
        resultadoDiv.textContent = `¡Voto simulado con éxito para: ${seleccionado.value}!`;
        resultadoDiv.style.color = '#008800';
        encuestaForm.reset();
    });
}

// Fondo de la página con animación de partículas y estrellas parpadeantes combinadas
const canvas = document.createElement('canvas');
canvas.id = 'particles';
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.zIndex = '-1';
canvas.style.pointerEvents = 'none';
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
let elementsArray;

function initElements() {
    elementsArray = [];
    const numberOfParticles = 60;
    const numberOfStars = 40;

    // Inicializar partículas de polvo flotante
    for (let i = 0; i < numberOfParticles; i++) {
        elementsArray.push({
            type: 'particle',
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 1.5,
            speedY: (Math.random() - 0.5) * 1.5
        });
    }

    // Inicializar estrellas parpadeantes
    for (let i = 0; i < numberOfStars; i++) {
        elementsArray.push({
            type: 'star',
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            alpha: Math.random(),
            blinkSpeed: 0.01 + Math.random() * 0.02
        });
    }
}

function animateElements() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    elementsArray.forEach(element => {
        if (element.type === 'particle') {
            ctx.beginPath();
            ctx.arc(element.x, element.y, element.size, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.fill();
            
            element.x += element.speedX;
            element.y += element.speedY;
            
            if (element.x < 0 || element.x > canvas.width) element.speedX *= -1;
            if (element.y < 0 || element.y > canvas.height) element.speedY *= -1;

        } else if (element.type === 'star') {
            ctx.save();
            ctx.beginPath();
            ctx.arc(element.x, element.y, element.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${element.alpha})`;
            ctx.fill();
            ctx.restore();
            
            element.alpha += element.blinkSpeed;
            if (element.alpha <= 0.1 || element.alpha >= 1) {
                element.blinkSpeed *= -1;
            }
        }
    });
    
    requestAnimationFrame(animateElements);
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initElements();
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
animateElements();