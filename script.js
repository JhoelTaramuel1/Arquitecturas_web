// Add either a local MP4 path or a YouTube URL when the lesson video is available.
const VIDEO_CONFIG = {
  mp4Path: "",
  youtubeUrl: "",
};

const questions = [
  {
    level: "BÁSICA · CONCEPTOS",
    question: "¿Cuál es el objetivo principal de una arquitectura desacoplada?",
    options: [
      "Eliminar toda comunicación entre las partes del sistema.",
      "Reducir dependencias para que los componentes puedan evolucionar con menor impacto.",
      "Guardar todos los datos en una única base de datos compartida.",
      "Usar la misma tecnología en cada módulo.",
    ],
    answer: 1,
    explanation: "Desacoplar busca limitar cuánto conoce y depende un componente de los demás, para que los cambios sean más localizados. Los componentes todavía necesitan colaborar mediante interfaces.",
  },
  {
    level: "BÁSICA · CONCEPTOS",
    question: "¿Qué describe mejor a un microservicio?",
    options: [
      "Una función pequeña que siempre se ejecuta dentro de una aplicación monolítica.",
      "Un servidor dedicado a almacenar todos los datos de la aplicación.",
      "Un servicio autónomo enfocado en una capacidad de negocio y comunicable mediante contratos.",
      "Una copia completa de la aplicación para cada usuario.",
    ],
    answer: 2,
    explanation: "Un microservicio se organiza alrededor de una responsabilidad de negocio, encapsula su implementación y ofrece interfaces para colaborar con otros servicios.",
  },
  {
    level: "BÁSICA · CONCEPTOS",
    question: "¿Cuál es una diferencia habitual entre una aplicación monolítica y una basada en microservicios?",
    options: [
      "El monolito suele desplegarse como una unidad; los servicios pueden desplegarse por separado.",
      "El monolito no puede tener módulos ni responsabilidades diferenciadas.",
      "Los microservicios no necesitan comunicarse entre sí.",
      "Una arquitectura monolítica siempre requiere más infraestructura.",
    ],
    answer: 0,
    explanation: "En un monolito modular puede haber límites internos claros, pero la aplicación suele publicarse como una sola unidad. Los microservicios permiten despliegues separados, a cambio de más trabajo distribuido.",
  },
  {
    level: "INTERMEDIA · COMUNICACIÓN",
    question: "¿Qué papel cumple una API en la comunicación entre servicios?",
    options: [
      "Reemplaza toda necesidad de validar los datos recibidos.",
      "Permite que un servicio invoque directamente las funciones internas de otro.",
      "Define una interfaz y un contrato para solicitar o intercambiar información.",
      "Garantiza que la comunicación nunca falle.",
    ],
    answer: 2,
    explanation: "Una API define cómo pedir una operación o intercambiar datos sin depender de los detalles internos del otro servicio. No elimina la necesidad de validar ni de gestionar errores de red.",
  },
  {
    level: "INTERMEDIA · DESPLIEGUE",
    question: "¿Qué significa que dos microservicios puedan desplegarse de forma independiente?",
    options: [
      "Que comparten obligatoriamente el mismo ciclo de publicación.",
      "Que un servicio puede actualizarse sin publicar todos los demás, si sus contratos siguen siendo compatibles.",
      "Que ninguno necesita pruebas de integración.",
      "Que cada servicio debe utilizar un lenguaje de programación distinto.",
    ],
    answer: 1,
    explanation: "El despliegue independiente permite publicar un servicio sin volver a desplegar todo el sistema, siempre que se mantenga la compatibilidad de las interfaces y dependencias.",
  },
  {
    level: "INTERMEDIA · ESCALABILIDAD",
    question: "En una tienda, durante una campaña aumentan mucho las consultas al catálogo, pero no los pagos. ¿Qué ventaja puede ofrecer separar esos servicios?",
    options: [
      "Escalar solo el servicio de catálogo según su carga.",
      "Evitar por completo la necesidad de monitorear el sistema.",
      "Asegurar que ningún servicio experimente fallos.",
      "Duplicar la base de datos de pagos para atender las consultas del catálogo.",
    ],
    answer: 0,
    explanation: "Con servicios separados se puede asignar capacidad adicional al componente con mayor demanda, sin escalar necesariamente todos los demás.",
  },
  {
    level: "INTERMEDIA · RESPONSABILIDADES",
    question: "¿Cuál sería un límite de responsabilidad razonable para un servicio de notificaciones?",
    options: [
      "Administrar perfiles, pagos, pedidos y el inventario completo.",
      "Enviar avisos por canales acordados cuando recibe solicitudes o eventos relevantes.",
      "Modificar directamente las tablas internas de todos los servicios.",
      "Decidir la autenticación y el precio de cada producto.",
    ],
    answer: 1,
    explanation: "Una responsabilidad delimitada mantiene el servicio centrado. Notificaciones puede encargarse del envío de mensajes y responder a eventos, sin asumir las reglas internas de pedidos o pagos.",
  },
  {
    level: "INTERMEDIA · TRADE-OFFS",
    question: "¿Qué afirmación resume mejor el balance de los microservicios?",
    options: [
      "Siempre reducen los costes porque cada equipo elige su tecnología.",
      "Eliminan los fallos, ya que los servicios están aislados.",
      "Ofrecen autonomía y escalado selectivo, pero aumentan la complejidad operativa y distribuida.",
      "Son la opción recomendada para cualquier aplicación pequeña.",
    ],
    answer: 2,
    explanation: "La autonomía, el escalado selectivo y los cambios localizados son ventajas potenciales; infraestructura, observabilidad, seguridad y coordinación entre servicios agregan costes.",
  },
  {
    level: "APLICADA · RESILIENCIA",
    question: "El servicio de pagos no responde temporalmente al crear un pedido. ¿Qué diseño ayuda a manejar este fallo?",
    options: [
      "Esperar sin límite hasta que la conexión se recupere.",
      "Reintentar continuamente y en paralelo desde todos los servicios.",
      "Usar tiempos de espera acotados, reintentos prudentes y un estado de pedido que permita recuperarse.",
      "Ignorar el error y marcar el pago como exitoso.",
    ],
    answer: 2,
    explanation: "Los fallos de red son posibles. Límites de tiempo, reintentos limitados con espera y estados explícitos permiten evitar esperas infinitas y recuperar el flujo sin fingir éxito.",
  },
  {
    level: "APLICADA · DECISIÓN",
    question: "¿En cuál escenario podría justificarse evaluar microservicios, sin asumir que sean siempre la mejor opción?",
    options: [
      "Un prototipo personal con pocas funciones y un único desarrollador.",
      "Un producto con capacidades bien delimitadas, equipos autónomos y necesidad real de escalar o desplegar partes a ritmos distintos.",
      "Cualquier sistema que todavía no conoce sus requisitos.",
      "Una aplicación que necesita evitar completamente las llamadas de red.",
    ],
    answer: 1,
    explanation: "Límites de dominio claros, equipos preparados y necesidades concretas de despliegue o escalado pueden justificar la inversión. Para un producto pequeño o incierto, un monolito modular suele ser más sencillo.",
  },
];

const serviceDetails = {
  users: {
    title: "Servicio de usuarios",
    description: "Gestiona perfiles, direcciones y autenticación. Expone operaciones para que otros servicios consulten la identidad del cliente sin acceder a sus datos internos.",
  },
  products: {
    title: "Servicio de productos",
    description: "Mantiene el catálogo, precios e inventario. Puede escalarse para soportar picos de búsqueda y publicar cambios de producto sin desplegar pagos.",
  },
  orders: {
    title: "Servicio de pedidos",
    description: "Coordina el carrito y el ciclo de vida de una orden. Solicita la información necesaria a otros servicios y registra los estados del pedido.",
  },
  payments: {
    title: "Servicio de pagos",
    description: "Procesa cobros y reembolsos mediante una integración segura. Debe tratar los errores de red con cuidado y evitar exponer datos sensibles.",
  },
  notifications: {
    title: "Servicio de notificaciones",
    description: "Envía confirmaciones y avisos por los canales configurados. Puede reaccionar a eventos de pedidos sin bloquear el flujo principal de compra.",
  },
};

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
  mainNav.classList.toggle("is-open", !isOpen);
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    mainNav.classList.remove("is-open");
  });
});

document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("click", () => {
    const detail = serviceDetails[card.dataset.service];
    if (!detail) return;

    document.querySelectorAll(".service-card").forEach((serviceCard) => {
      const isSelected = serviceCard === card;
      serviceCard.classList.toggle("selected", isSelected);
      serviceCard.setAttribute("aria-pressed", String(isSelected));
    });
    document.querySelector("#service-title").textContent = detail.title;
    document.querySelector("#service-description").textContent = detail.description;
  });
});

const videoElement = document.querySelector("#lesson-video");
const youtubeFrame = document.querySelector("#lesson-youtube");
const videoPlaceholder = document.querySelector("#video-placeholder");
const videoDuration = document.querySelector("#video-duration");

function formatDuration(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "Duración no disponible";
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `Duración: ${minutes}:${remainingSeconds}`;
}

function getYouTubeEmbedUrl(value) {
  try {
    const url = new URL(value);
    const isYouTubeHost = ["youtube.com", "www.youtube.com", "m.youtube.com", "youtube-nocookie.com", "www.youtube-nocookie.com", "youtu.be"].includes(url.hostname);
    if (!isYouTubeHost) return null;

    let videoId = "";
    if (url.hostname === "youtu.be") videoId = url.pathname.slice(1);
    else if (url.pathname === "/watch") videoId = url.searchParams.get("v") || "";
    else videoId = url.pathname.match(/^\/(?:embed|shorts)\/([^/?]+)/)?.[1] || "";

    if (!/^[\w-]{11}$/.test(videoId)) return null;
    return `https://www.youtube-nocookie.com/embed/${videoId}?controls=1&rel=0`;
  } catch {
    return null;
  }
}

if (VIDEO_CONFIG.mp4Path.trim()) {
  videoElement.src = VIDEO_CONFIG.mp4Path.trim();
  videoElement.hidden = false;
  videoPlaceholder.hidden = true;
  videoElement.addEventListener("loadedmetadata", () => {
    videoDuration.textContent = formatDuration(videoElement.duration);
  });
  videoElement.addEventListener("error", () => {
    videoElement.hidden = true;
    videoPlaceholder.hidden = false;
    videoDuration.textContent = "No se pudo cargar el video";
    console.error("No se pudo cargar el archivo de video configurado:", VIDEO_CONFIG.mp4Path);
  });
} else if (VIDEO_CONFIG.youtubeUrl.trim()) {
  const embedUrl = getYouTubeEmbedUrl(VIDEO_CONFIG.youtubeUrl.trim());
  if (embedUrl) {
    youtubeFrame.src = embedUrl;
    youtubeFrame.hidden = false;
    videoPlaceholder.hidden = true;
    videoDuration.textContent = "Duración: consulta el reproductor";
  } else {
    videoDuration.textContent = "URL de YouTube no válida";
    console.error("Configura una URL válida de YouTube en VIDEO_CONFIG.youtubeUrl.");
  }
}

const questionIndexLabel = document.querySelector("#quiz-progress-text");
const questionNumber = document.querySelector("#question-number");
const questionLevel = document.querySelector("#question-level");
const questionTitle = document.querySelector("#question-title");
const answerList = document.querySelector("#answer-list");
const feedback = document.querySelector("#quiz-feedback");
const progressTrack = document.querySelector("#progress-track");
const progressFill = document.querySelector("#progress-fill");
const previousButton = document.querySelector("#quiz-prev");
const nextButton = document.querySelector("#quiz-next");
const finishButton = document.querySelector("#quiz-finish");
const quizStage = document.querySelector("#quiz-stage");
const quizResults = document.querySelector("#quiz-results");
const quizFootnote = document.querySelector(".quiz-footnote");
let currentQuestion = 0;
let selectedAnswers = Array(questions.length).fill(null);
let isFinished = false;

function renderQuestion() {
  const question = questions[currentQuestion];
  questionIndexLabel.textContent = `Pregunta ${currentQuestion + 1} de ${questions.length}`;
  questionNumber.textContent = `${String(currentQuestion + 1).padStart(2, "0")} / ${questions.length}`;
  questionLevel.textContent = question.level;
  questionTitle.textContent = question.question;
  progressFill.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  progressTrack.setAttribute("aria-valuenow", String(currentQuestion + 1));
  previousButton.disabled = currentQuestion === 0;
  nextButton.hidden = currentQuestion === questions.length - 1;
  finishButton.hidden = currentQuestion !== questions.length - 1;
  feedback.textContent = "";
  answerList.replaceChildren();

  question.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.className = "answer-option";
    button.type = "button";
    button.setAttribute("aria-pressed", String(selectedAnswers[currentQuestion] === optionIndex));

    const letter = document.createElement("span");
    letter.className = "answer-letter";
    letter.textContent = String.fromCharCode(65 + optionIndex);
    const text = document.createElement("span");
    text.className = "answer-text";
    text.textContent = option;
    const mark = document.createElement("span");
    mark.className = "answer-mark";
    mark.setAttribute("aria-hidden", "true");
    button.append(letter, text, mark);
    button.addEventListener("click", () => {
      if (isFinished) return;
      selectedAnswers[currentQuestion] = optionIndex;
      answerList.querySelectorAll(".answer-option").forEach((answer, index) => {
        answer.setAttribute("aria-pressed", String(index === optionIndex));
      });
      feedback.textContent = "";
    });
    answerList.append(button);
  });
}

previousButton.addEventListener("click", () => {
  if (currentQuestion === 0 || isFinished) return;
  currentQuestion -= 1;
  renderQuestion();
});

nextButton.addEventListener("click", () => {
  if (currentQuestion >= questions.length - 1 || isFinished) return;
  currentQuestion += 1;
  renderQuestion();
});

function renderResults() {
  const correctCount = questions.reduce((total, question, index) => total + (selectedAnswers[index] === question.answer ? 1 : 0), 0);
  const incorrectCount = questions.length - correctCount;
  const reviewItems = questions.map((question, index) => {
    const isCorrect = selectedAnswers[index] === question.answer;
    const article = document.createElement("article");
    article.className = `review-item ${isCorrect ? "is-correct" : "is-incorrect"}`;

    const title = document.createElement("p");
    title.className = "review-question";
    title.textContent = `${String(index + 1).padStart(2, "0")}. ${question.question}`;
    const status = document.createElement("p");
    status.className = "review-answer";
    const statusLabel = document.createElement("span");
    statusLabel.className = "review-status";
    statusLabel.textContent = isCorrect ? "✓ Correcta." : "✕ Incorrecta.";
    status.append(statusLabel, document.createTextNode(`Tu respuesta: ${question.options[selectedAnswers[index]]}`));

    const correctAnswer = document.createElement("p");
    correctAnswer.className = "review-answer";
    const correctLabel = document.createElement("strong");
    correctLabel.textContent = "Respuesta correcta: ";
    correctAnswer.append(correctLabel, document.createTextNode(question.options[question.answer]));
    const explanation = document.createElement("p");
    explanation.className = "review-explanation";
    explanation.textContent = question.explanation;
    article.append(title, status, correctAnswer, explanation);
    return article;
  });

  const header = document.createElement("div");
  header.className = "results-header";
  const resultCopy = document.createElement("div");
  const title = document.createElement("h3");
  title.className = "results-title";
  title.textContent = "Evaluación completada";
  const subtitle = document.createElement("p");
  subtitle.className = "results-subtitle";
  subtitle.textContent = correctCount >= 8 ? "¡Excelente! Tienes una base sólida." : correctCount >= 5 ? "Buen avance. Revisa las explicaciones para reforzar." : "Sigue explorando los módulos y vuelve a intentarlo.";
  resultCopy.append(title, subtitle);
  const scoreBadge = document.createElement("div");
  scoreBadge.className = "score-badge";
  const score = document.createElement("strong");
  score.textContent = `${correctCount}/10`;
  const scoreLabel = document.createElement("span");
  scoreLabel.textContent = "CALIFICACIÓN";
  scoreBadge.append(score, scoreLabel);
  header.append(resultCopy, scoreBadge);

  const stats = document.createElement("div");
  stats.className = "result-stats";
  [
    { label: "Respuestas correctas", value: correctCount, className: "good" },
    { label: "Respuestas incorrectas", value: incorrectCount, className: "bad" },
    { label: "Total de preguntas", value: questions.length, className: "" },
  ].forEach((item) => {
    const stat = document.createElement("div");
    stat.className = `result-stat ${item.className}`.trim();
    const statLabel = document.createElement("span");
    statLabel.textContent = item.label;
    const statValue = document.createElement("strong");
    statValue.textContent = String(item.value);
    stat.append(statLabel, statValue);
    stats.append(stat);
  });

  const reviewHeading = document.createElement("h4");
  reviewHeading.className = "review-heading";
  reviewHeading.textContent = "Revisión y explicaciones";
  const reviewList = document.createElement("div");
  reviewList.className = "review-list";
  reviewItems.forEach((item) => reviewList.append(item));
  const actions = document.createElement("div");
  actions.className = "results-actions";
  const retryButton = document.createElement("button");
  retryButton.className = "button button-primary";
  retryButton.type = "button";
  retryButton.textContent = "Intentar nuevamente";
  retryButton.addEventListener("click", resetQuiz);
  actions.append(retryButton);

  quizResults.replaceChildren(header, stats, reviewHeading, reviewList, actions);
  quizResults.hidden = false;
  quizStage.hidden = true;
  quizFootnote.hidden = true;
  isFinished = true;
}

finishButton.addEventListener("click", () => {
  const unansweredIndex = selectedAnswers.indexOf(null);
  if (unansweredIndex !== -1) {
    const unansweredCount = selectedAnswers.filter((answer) => answer === null).length;
    currentQuestion = unansweredIndex;
    renderQuestion();
    feedback.textContent = `Faltan ${unansweredCount} respuestas. Completa todas antes de finalizar.`;
    return;
  }
  renderResults();
});

function resetQuiz() {
  selectedAnswers = Array(questions.length).fill(null);
  currentQuestion = 0;
  isFinished = false;
  quizResults.hidden = true;
  quizStage.hidden = false;
  quizFootnote.hidden = false;
  renderQuestion();
  document.querySelector("#quiz").scrollIntoView({ behavior: "smooth", block: "start" });
}

renderQuestion();
