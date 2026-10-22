// Configura una sola fuente cuando el video esté disponible. MP4 tiene prioridad.
const VIDEO_CONFIG = {
  mp4Path: "",
  youtubeUrl: "",
  googleDriveUrl: "https://drive.google.com/drive/folders/1zbk9N1hHwFxTRvRR6Fmu1c2qKjjKW9iv?usp=sharing",
};

const moduleDetails = {
  users: {
    title: "Módulo de usuarios",
    description: "Gestiona perfiles, direcciones y autenticación como parte de la aplicación de la tienda. Puede utilizar las reglas internas y la capa de datos compartida.",
  },
  products: {
    title: "Módulo de productos",
    description: "Mantiene el catálogo, los precios y las existencias. Al crear una compra, otros módulos pueden consultar internamente la disponibilidad.",
  },
  orders: {
    title: "Módulo de pedidos",
    description: "Coordina el carrito y el ciclo de vida de cada orden. Reúne productos, datos del usuario y el resultado del pago dentro de la aplicación.",
  },
  payments: {
    title: "Módulo de pagos",
    description: "Aplica las reglas para registrar cobros y reembolsos. En un sistema real, los datos sensibles deben tratarse con controles de seguridad adecuados.",
  },
  business: {
    title: "Capa de lógica de negocio",
    description: "Contiene las reglas del sistema y coordina acciones entre módulos, como comprobar existencias antes de confirmar un pedido.",
  },
  data: {
    title: "Capa de acceso a datos",
    description: "Centraliza las operaciones para consultar y guardar información. Los módulos solicitan datos a esta capa en vez de comunicarse con la base por su cuenta.",
  },
};

const questions = [
  {
    level: "BÁSICA · CONCEPTOS",
    question: "¿Qué es la arquitectura monolítica?",
    options: [
      "Un conjunto de servicios que se despliegan siempre por separado.",
      "Una aplicación que integra sus principales componentes y suele desplegarse como una unidad.",
      "Una base de datos sin interfaz ni lógica de negocio.",
      "Un programa que no puede dividir su código en módulos.",
    ],
    answer: 1,
    explanation: "Un monolito reúne las funcionalidades principales en una misma aplicación, que habitualmente se construye y despliega como una unidad. Puede tener una organización modular interna.",
  },
  {
    level: "BÁSICA · ORGANIZACIÓN",
    question: "¿Cómo se organizan los componentes en una aplicación monolítica bien estructurada?",
    options: [
      "En módulos con responsabilidades distintas dentro de la misma aplicación.",
      "En servidores independientes obligatoriamente.",
      "En una única función sin separar responsabilidades.",
      "En bases de datos que no pueden compartir información.",
    ],
    answer: 0,
    explanation: "Un monolito puede organizarse internamente en módulos, por ejemplo usuarios, productos y pedidos. La modularidad del código no implica que cada módulo se despliegue como servicio independiente.",
  },
  {
    level: "BÁSICA · DESPLIEGUE",
    question: "¿Qué significa desplegar una aplicación monolítica como una unidad?",
    options: [
      "Publicar solo el módulo que recibió cambios y dejar el resto fuera del sistema.",
      "Instalar una parte distinta en cada dispositivo de usuario.",
      "Publicar una versión que contiene la aplicación completa, aunque el cambio afecte a un solo módulo.",
      "No volver a publicar el programa después de la primera entrega.",
    ],
    answer: 2,
    explanation: "En la configuración habitual, el artefacto de despliegue contiene el conjunto de la aplicación. Por eso, una modificación localizada puede requerir publicar una nueva versión completa.",
  },
  {
    level: "BÁSICA · VENTAJAS",
    question: "¿Cuál es una ventaja frecuente de comenzar un proyecto pequeño con un monolito?",
    options: [
      "Cada módulo se escala de forma independiente desde el primer día.",
      "Se evitan todas las pruebas y revisiones.",
      "El sistema nunca necesitará cambios de arquitectura.",
      "Hay menos piezas operativas y es sencillo ejecutar la aplicación en un mismo entorno.",
    ],
    answer: 3,
    explanation: "Para un sistema pequeño, un proyecto y un despliegue comunes suelen ser más simples de desarrollar y operar que una solución distribuida equivalente.",
  },
  {
    level: "INTERMEDIA · MANTENIMIENTO",
    question: "¿Qué posible dificultad puede aparecer si una aplicación monolítica crece sin una buena organización?",
    options: [
      "Los módulos dejan de poder compartir recursos.",
      "El alto acoplamiento puede hacer que los cambios sean difíciles de mantener y probar.",
      "La aplicación se transforma automáticamente en microservicios.",
      "Cada función comienza a necesitar una llamada de red.",
    ],
    answer: 1,
    explanation: "Sin límites internos claros, los módulos pueden depender demasiado unos de otros. Entonces un cambio puede producir efectos inesperados en otras zonas y requerir pruebas más amplias.",
  },
  {
    level: "INTERMEDIA · ESCALABILIDAD",
    question: "¿Cómo suele escalarse una aplicación monolítica tradicional?",
    options: [
      "Se agregan recursos o instancias a la aplicación completa, aunque una función consuma más que las demás.",
      "Se escala siempre únicamente la base de datos.",
      "Se despliega un servidor nuevo por cada función interna.",
      "No puede escalarse de ninguna manera.",
    ],
    answer: 0,
    explanation: "En su configuración habitual, el monolito se escala como unidad. Es posible optimizar o separar componentes, pero el escalado selectivo por módulo no suele ser su forma de operación estándar.",
  },
  {
    level: "INTERMEDIA · DISEÑO",
    question: "¿Pueden existir módulos bien organizados dentro de un monolito?",
    options: [
      "No; la palabra monolito significa que todo el código debe estar mezclado.",
      "Sí, pero solo si cada módulo usa un lenguaje distinto.",
      "Sí. Puede haber módulos con responsabilidades claras aunque se desplieguen juntos.",
      "No; para usar módulos es obligatorio adoptar microservicios.",
    ],
    answer: 2,
    explanation: "Un monolito modular separa responsabilidades dentro del código. La diferencia principal es que los módulos siguen formando parte de una aplicación desplegable como conjunto.",
  },
  {
    level: "APLICADA · DESPLIEGUE",
    question: "El equipo cambia la pantalla del catálogo y la aplicación exige desplegarse de nuevo completa. ¿Qué consecuencia práctica tiene?",
    options: [
      "Los módulos se desplegarán automáticamente en distintos servidores.",
      "El cambio no puede llegar a producción.",
      "La base de datos se convertirá en una API.",
      "La publicación puede requerir validar y liberar el sistema completo, aunque el cambio sea pequeño.",
    ],
    answer: 3,
    explanation: "Al desplegarse como unidad, una modificación en un módulo suele producir una versión nueva del conjunto. Las pruebas y el proceso de publicación deben considerar la aplicación completa.",
  },
  {
    level: "APLICADA · ELECCIÓN",
    question: "¿Qué tipo de proyecto podría beneficiarse de comenzar con una arquitectura monolítica?",
    options: [
      "Un producto que exige que decenas de equipos desplieguen cada capacidad por separado desde el comienzo.",
      "Un sistema pequeño o mediano, con equipo reducido y necesidades que aún están evolucionando.",
      "Cualquier aplicación, sin importar sus requisitos.",
      "Un sistema que tiene prohibido ejecutarse como una sola aplicación.",
    ],
    answer: 1,
    explanation: "Un monolito puede ayudar a avanzar con menos complejidad inicial en un producto pequeño o mediano. La decisión debe revisarse si aparecen necesidades concretas que lo justifiquen.",
  },
  {
    level: "APLICADA · IDENTIFICACIÓN",
    question: "Una biblioteca administra usuarios, libros y préstamos dentro de una aplicación que se publica como un conjunto. ¿Qué arquitectura podría estar utilizando?",
    options: [
      "Una arquitectura monolítica, posiblemente organizada en módulos.",
      "Microservicios desplegados siempre en unidades independientes.",
      "Una arquitectura sin persistencia de datos.",
      "Un sistema sin componentes de software.",
    ],
    answer: 0,
    explanation: "Las funcionalidades integradas en una aplicación que se despliega como conjunto corresponden a un diseño monolítico. Sus áreas todavía pueden estar separadas en módulos internos.",
  },
];

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

document.querySelectorAll("[data-module]").forEach((component) => {
  component.addEventListener("click", () => {
    const detail = moduleDetails[component.dataset.module];
    if (!detail) return;

    document.querySelectorAll("[data-module]").forEach((item) => {
      const isSelected = item === component;
      item.classList.toggle("selected", isSelected);
      item.setAttribute("aria-pressed", String(isSelected));
    });
    document.querySelector("#module-title").textContent = detail.title;
    document.querySelector("#module-description").textContent = detail.description;
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
    const allowedHosts = ["youtube.com", "www.youtube.com", "m.youtube.com", "youtube-nocookie.com", "www.youtube-nocookie.com", "youtu.be"];
    if (!allowedHosts.includes(url.hostname)) return null;

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

function getGoogleDriveEmbed(value) {
  try {
    const url = new URL(value);
    if (url.hostname !== "drive.google.com") return null;

    const folderId = url.pathname.match(/^\/drive\/folders\/([^/]+)/)?.[1];
    if (folderId) {
      return {
        url: `https://drive.google.com/embeddedfolderview?id=${encodeURIComponent(folderId)}#grid`,
        title: "Videos compartidos en Google Drive",
        label: "Carpeta de video interactiva",
      };
    }

    const fileId = url.pathname.match(/^\/file\/d\/([^/]+)/)?.[1];
    if (fileId) {
      return {
        url: `https://drive.google.com/file/d/${encodeURIComponent(fileId)}/preview`,
        title: "Video explicativo en Google Drive",
        label: "Video en Google Drive",
      };
    }

    return null;
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
} else if (VIDEO_CONFIG.googleDriveUrl.trim()) {
  const driveEmbed = getGoogleDriveEmbed(VIDEO_CONFIG.googleDriveUrl.trim());
  if (driveEmbed) {
    youtubeFrame.src = driveEmbed.url;
    youtubeFrame.title = driveEmbed.title;
    youtubeFrame.hidden = false;
    videoPlaceholder.hidden = true;
    videoDuration.textContent = driveEmbed.label;
    const driveLink = document.querySelector("#video-drive-link");
    driveLink.href = VIDEO_CONFIG.googleDriveUrl.trim();
    driveLink.hidden = false;
  } else {
    videoDuration.textContent = "Enlace de Google Drive no válido";
    console.error("Configura un enlace válido a una carpeta o archivo de Google Drive.");
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
const quizSummary = document.querySelector("#quiz-summary");
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

function showQuizSummary() {
  const answeredCount = selectedAnswers.filter((answer) => answer !== null).length;
  const pendingQuestions = selectedAnswers
    .map((answer, index) => answer === null ? index : -1)
    .filter((index) => index !== -1);
  const summaryTitle = document.createElement("h3");
  summaryTitle.className = "summary-title";
  summaryTitle.textContent = "Resumen del cuestionario";
  const summaryText = document.createElement("p");
  summaryText.className = "summary-copy";
  summaryText.textContent = `Has respondido ${answeredCount} de ${questions.length} preguntas; quedan ${pendingQuestions.length} pendientes.`;
  const list = document.createElement("ol");
  list.className = "summary-list";

  questions.forEach((question, index) => {
    const item = document.createElement("li");
    item.className = selectedAnswers[index] === null ? "is-pending" : "is-answered";
    const status = selectedAnswers[index] === null ? "Pendiente" : "Respondida";
    item.textContent = `${index + 1}. ${status} — ${question.question}`;
    list.append(item);
  });

  const feedbackMessage = document.createElement("p");
  feedbackMessage.className = "summary-feedback";
  feedbackMessage.setAttribute("aria-live", "polite");
  const actions = document.createElement("div");
  actions.className = "results-actions";
  const backButton = document.createElement("button");
  backButton.className = "button button-quiet";
  backButton.type = "button";
  backButton.textContent = pendingQuestions.length ? "Responder pendientes" : "Volver a revisar";
  backButton.addEventListener("click", () => {
    quizSummary.hidden = true;
    quizStage.hidden = false;
    if (pendingQuestions.length) currentQuestion = pendingQuestions[0];
    renderQuestion();
    questionTitle.focus();
  });

  const calculateButton = document.createElement("button");
  calculateButton.className = "button button-primary";
  calculateButton.type = "button";
  calculateButton.textContent = "Calcular resultado";
  calculateButton.disabled = pendingQuestions.length > 0;
  calculateButton.addEventListener("click", renderResults);
  actions.append(backButton, calculateButton);
  quizSummary.replaceChildren(summaryTitle, summaryText, list, feedbackMessage, actions);
  quizSummary.hidden = false;
  quizStage.hidden = true;
  feedbackMessage.textContent = pendingQuestions.length
    ? `Faltan ${pendingQuestions.length} respuestas. Complétalas antes de calcular la nota.`
    : "Todas las preguntas están respondidas. Puedes finalizar y consultar la revisión.";
}

finishButton.addEventListener("click", showQuizSummary);

function getResultMessage(score) {
  if (score >= 9) return "¡Excelente! Dominas los conceptos principales";
  if (score >= 7) return "¡Muy bien! Comprendes la mayoría de los conceptos";
  if (score >= 5) return "Buen comienzo. Repasa los temas en los que tuviste dificultades";
  return "Te recomendamos revisar el contenido y volver a intentarlo";
}

function renderResults() {
  if (selectedAnswers.some((answer) => answer === null)) return;

  const correctCount = questions.reduce((total, question, index) => total + (selectedAnswers[index] === question.answer ? 1 : 0), 0);
  const incorrectCount = questions.length - correctCount;
  const score = (correctCount / questions.length) * 10;
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
    status.append(statusLabel, document.createTextNode(` Tu respuesta: ${question.options[selectedAnswers[index]]}`));

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
  subtitle.textContent = getResultMessage(score);
  resultCopy.append(title, subtitle);
  const scoreBadge = document.createElement("div");
  scoreBadge.className = "score-badge";
  const scoreValue = document.createElement("strong");
  scoreValue.textContent = `${score}/10`;
  const scoreLabel = document.createElement("span");
  scoreLabel.textContent = "CALIFICACIÓN";
  scoreBadge.append(scoreValue, scoreLabel);
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

  quizResults.replaceChildren(header, stats, reviewHeading, reviewList, actions);
  actions.append(retryButton);
  quizResults.hidden = false;
  quizSummary.hidden = true;
  quizStage.hidden = true;
  quizFootnote.hidden = true;
  isFinished = true;
  quizResults.focus();
}

function resetQuiz() {
  selectedAnswers = Array(questions.length).fill(null);
  currentQuestion = 0;
  isFinished = false;
  quizResults.hidden = true;
  quizSummary.hidden = true;
  quizStage.hidden = false;
  quizFootnote.hidden = false;
  renderQuestion();
  document.querySelector("#quiz").scrollIntoView({ behavior: "smooth", block: "start" });
}

renderQuestion();
