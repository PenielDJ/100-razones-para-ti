/* Personalización rápida: edita CONFIG para nombres, carta, música y fotos. */
const CONFIG = {
  recipientName: "alguien especial",
  yourName: "tu nombre",
  title: "100 razones por las que te amo",
  subtitle: "Y aun así, siento que 100 no son suficientes.",
  music: "",
  musicLink: "",
  photos: [
    { src: "", caption: "Una historia compartida" },
    { src: "", caption: "Así me gusta estar: cerca de ti" },
    { src: "", caption: "Un abrazo que dice mucho" },
    { src: "", caption: "Flores, risas y tú" },
    { src: "", caption: "Un momento solo nuestro" },
    { src: "", caption: "Una sonrisa para guardar" }
  ],
  letter: [
    "{{persona}},", "",
    "Si llegaste hasta aquí, quizá ya descubriste algunas de las razones por las que ocupas un lugar tan especial en mi vida.", "",
    "Cada una es pequeña por sí sola, pero juntas cuentan una historia que quiero seguir escribiendo contigo.", "",
    "Gracias por tu forma de ser, por los momentos compartidos y por todo lo bonito que traes a mis días.", "",
    "Ojalá esta página te recuerde lo mucho que te quiero.", "",
    "Con todo mi cariño,", "", "— {{tuNombre}} ♥"
  ].join("\n")
};

function personalizeText(value) {
  return String(value).replaceAll("{{persona}}", CONFIG.recipientName).replaceAll("{{tuNombre}}", CONFIG.yourName);
}

// Personaliza los textos y datos de ejemplo para crear tu propia carta.
const reasons = [
  { number: 1, text: "Porque tu sonrisa tiene una manera muy tuya de cambiar por completo el tono de mi día.", icon: "heart", category: "Tu sonrisa" },
  { number: 2, text: "Porque contigo, hasta una conversación sobre cualquier tontería puede convertirse en uno de mis momentos favoritos.", icon: "sparkle", category: "Nuestros momentos" },
  { number: 3, text: "Porque tienes una forma de escuchar que me hace sentir que lo que digo importa de verdad.", icon: "moon", category: "Lo que me haces sentir" },
  { number: 4, text: "Porque cuando te ríes sin intentar verte de ninguna manera, se te nota toda la luz.", icon: "star", category: "Pequeños detalles" },
  { number: 5, text: "Porque incluso tus pequeñas manías ya tienen un lugar especial en mi corazón.", icon: "flower", category: "Razones inesperadas" },
  { number: 6, text: "Porque contigo no tengo que fingir que siempre sé qué hacer o qué decir.", icon: "letter", category: "Lo que me haces sentir" },
  { number: 7, text: "Porque una mirada tuya a veces dice justo lo que yo necesitaba escuchar.", icon: "heart", category: "Tu mirada" },
  { number: 8, text: "Porque haces que lo cotidiano se sienta un poco más bonito, sin siquiera proponértelo.", icon: "sparkle", category: "Pequeños detalles" },
  { number: 9, text: "Porque me gusta la persona que soy cuando estoy cerca de ti.", icon: "moon", category: "Lo que me haces sentir" },
  { number: 10, text: "Porque siempre encuentro algo nuevo que admirar en la forma en que eres tú.", icon: "star", category: "Lo que admiro de ti" },
  { number: 11, text: "Porque puedes hacerme reír justo cuando mi cabeza se ha tomado todo demasiado en serio.", icon: "flower", category: "Tu personalidad" },
  { number: 12, text: "Porque tu voz se me queda dando vueltas en la memoria, incluso cuando ya nos despedimos.", icon: "letter", category: "Pequeños detalles" },
  { number: 13, text: "Porque no necesitas tener un día perfecto para seguir siendo alguien extraordinaria.", icon: "heart", category: "Lo que admiro de ti" },
  { number: 14, text: "Porque hay una calma que aparece cuando sé que puedo contarte lo que llevo dentro.", icon: "moon", category: "Lo que me haces sentir" },
  { number: 15, text: "Porque tus ocurrencias llegan sin aviso y casi siempre me arrancan una sonrisa.", icon: "sparkle", category: "Razones inesperadas" },
  { number: 16, text: "Porque me gusta cómo te emocionas cuando algo te importa.", icon: "star", category: "Tu personalidad" },
  { number: 17, text: "Porque detrás de tus palabras hay una ternura que no siempre notas en ti misma.", icon: "flower", category: "Tu personalidad" },
  { number: 18, text: "Porque estar contigo no se siente como llenar el silencio; se siente como poder descansar en él.", icon: "moon", category: "Nuestros momentos" },
  { number: 19, text: "Porque me acuerdo de detalles pequeños que me has contado y me dan ganas de conocerte más.", icon: "letter", category: "Pequeños detalles" },
  { number: 20, text: "Porque sabes ser fuerte sin dejar de ser dulce.", icon: "heart", category: "Lo que admiro de ti" },
  { number: 21, text: "Porque tienes ese brillo especial cuando hablas de algo que te apasiona.", icon: "star", category: "Tu personalidad" },
  { number: 22, text: "Porque puedo echarte de menos incluso poco después de haber estado contigo.", icon: "moon", category: "Lo que me haces sentir" },
  { number: 23, text: "Porque tus mensajes consiguen que un día normal tenga algo que esperar.", icon: "letter", category: "Pequeños detalles" },
  { number: 24, text: "Porque tu forma de mirar el mundo me invita a verlo con más cuidado.", icon: "sparkle", category: "Lo que admiro de ti" },
  { number: 25, text: "Porque contigo he aprendido que sentirse querido también puede ser sencillo y tranquilo.", icon: "heart", category: "Lo que me haces sentir" },
  { number: 26, text: "Porque tu sentido del humor tiene una firma propia; podría reconocerlo entre mil risas.", icon: "flower", category: "Tu personalidad" },
  { number: 27, text: "Porque nunca dejas de ser interesante, ni siquiera cuando solo me cuentas cómo estuvo tu día.", icon: "star", category: "Nuestros momentos" },
  { number: 28, text: "Porque hay cosas que antes me parecían normales y ahora me recuerdan a ti.", icon: "moon", category: "Razones inesperadas" },
  { number: 29, text: "Porque me gusta celebrar tus logros como si el corazón me quedara un poco más grande.", icon: "sparkle", category: "Lo que admiro de ti" },
  { number: 30, text: "Porque incluso cuando no estamos de acuerdo, sigo queriendo entender cómo lo ves tú.", icon: "letter", category: "Tu personalidad" },
  { number: 31, text: "Porque me haces sentir afortunado de conocer también tus lados más tranquilos.", icon: "heart", category: "Lo que me haces sentir" },
  { number: 32, text: "Porque el tiempo a tu lado siempre parece encontrar una forma de ir más deprisa.", icon: "moon", category: "Nuestros momentos" },
  { number: 33, text: "Porque con una sola palabra tuya a veces vuelvo a sentir que todo va a estar bien.", icon: "letter", category: "Lo que me haces sentir" },
  { number: 34, text: "Porque admiro la manera en que sigues adelante, incluso en los días que cuestan.", icon: "star", category: "Lo que admiro de ti" },
  { number: 35, text: "Porque tu presencia puede convertir una espera cualquiera en tiempo bien acompañado.", icon: "flower", category: "Pequeños detalles" },
  { number: 36, text: "Porque me gusta imaginar los lugares, las conversaciones y las versiones de nosotros que aún no conocemos.", icon: "sparkle", category: "Nuestro futuro" },
  { number: 37, text: "Porque haces preguntas que me ayudan a descubrir lo que realmente pienso.", icon: "letter", category: "Tu personalidad" },
  { number: 38, text: "Porque tienes detalles que quizá te parecen mínimos y a mí me hacen sentir muy querido.", icon: "heart", category: "Pequeños detalles" },
  { number: 39, text: "Porque puedo estar orgulloso de ti en voz alta y también en los momentos más silenciosos.", icon: "star", category: "Lo que admiro de ti" },
  { number: 40, text: "Porque a tu lado hasta no hacer nada tiene algo de plan perfecto.", icon: "moon", category: "Nuestros momentos" },
  { number: 41, text: "Porque dices algunas cosas con una seriedad tan linda que me cuesta no sonreír.", icon: "flower", category: "Razones inesperadas" },
  { number: 42, text: "Porque tu manera de cuidar a las personas habla mucho de lo que llevas dentro.", icon: "heart", category: "Tu personalidad" },
  { number: 43, text: "Porque no das por sentadas las cosas que merecen atención.", icon: "star", category: "Lo que admiro de ti" },
  { number: 44, text: "Porque contigo puedo contar un pensamiento a medio formar y aun así sentirme comprendido.", icon: "letter", category: "Lo que me haces sentir" },
  { number: 45, text: "Porque me gusta cómo suena mi nombre cuando viene de ti.", icon: "sparkle", category: "Pequeños detalles" },
  { number: 46, text: "Porque hay un lado juguetón en ti que hace que todo pese un poquito menos.", icon: "flower", category: "Tu personalidad" },
  { number: 47, text: "Porque tus silencios también pueden ser compañía.", icon: "moon", category: "Nuestros momentos" },
  { number: 48, text: "Porque me recuerdas que querer a alguien también está hecho de gestos sencillos.", icon: "heart", category: "Lo que me haces sentir" },
  { number: 49, text: "Porque me nace contarte las cosas, grandes o pequeñas, apenas me pasan.", icon: "letter", category: "Nuestros momentos" },
  { number: 50, text: "Porque entre tantas maneras de vivir, la tuya me parece preciosa.", icon: "star", category: "Lo que admiro de ti" },
  { number: 51, text: "Porque celebras lo que te alegra con una sinceridad contagiosa.", icon: "sparkle", category: "Tu personalidad" },
  { number: 52, text: "Porque haces que mis días tengan una pequeña pregunta bonita: ¿cuándo vuelvo a verte?", icon: "moon", category: "Lo que me haces sentir" },
  { number: 53, text: "Porque me gusta conocer lo que te gusta, aunque sea solo para verte hablar de ello.", icon: "heart", category: "Pequeños detalles" },
  { number: 54, text: "Porque eres capaz de ser delicada y decidida al mismo tiempo.", icon: "flower", category: "Lo que admiro de ti" },
  { number: 55, text: "Porque tus ideas a veces me sorprenden y casi siempre me dan ganas de escucharte más.", icon: "star", category: "Tu personalidad" },
  { number: 56, text: "Porque a tu lado puedo cambiar de opinión sin miedo a dejar de ser yo.", icon: "letter", category: "Lo que me haces sentir" },
  { number: 57, text: "Porque incluso un rato breve contigo se queda ocupando un espacio grande en mi día.", icon: "moon", category: "Nuestros momentos" },
  { number: 58, text: "Porque tienes una forma de aparecer en mis pensamientos justo cuando necesito algo bonito.", icon: "sparkle", category: "Razones inesperadas" },
  { number: 59, text: "Porque me gusta que seamos dos personas distintas que siguen eligiendo acercarse.", icon: "heart", category: "Nuestro futuro" },
  { number: 60, text: "Porque nunca necesito una ocasión especial para pensar que tenerte en mi vida ya lo es.", icon: "star", category: "Lo que me haces sentir" },
  { number: 61, text: "Porque te permites ser sensible en un mundo que a veces pide lo contrario.", icon: "flower", category: "Lo que admiro de ti" },
  { number: 62, text: "Porque hay una calidez en tus gestos que no se aprende; simplemente es tuya.", icon: "heart", category: "Tu personalidad" },
  { number: 63, text: "Porque me haces querer prestar más atención a los momentos mientras todavía están pasando.", icon: "moon", category: "Nuestros momentos" },
  { number: 64, text: "Porque puedo echar de menos tu risa antes incluso de darme cuenta de que la estoy extrañando.", icon: "sparkle", category: "Tu sonrisa" },
  { number: 65, text: "Porque contigo el futuro se parece menos a una lista de pendientes y más a algo que quiero descubrir.", icon: "star", category: "Nuestro futuro" },
  { number: 66, text: "Porque sabes hacer espacio para la alegría incluso en medio de una semana larga.", icon: "flower", category: "Tu personalidad" },
  { number: 67, text: "Porque tu manera de ser no necesita llamar la atención para quedarse conmigo.", icon: "moon", category: "Razones inesperadas" },
  { number: 68, text: "Porque me encanta que podamos hablar de algo importante y terminar riéndonos de cualquier cosa.", icon: "letter", category: "Nuestros momentos" },
  { number: 69, text: "Porque cada vez que te conozco un poquito más, encuentro otra razón para quererte.", icon: "heart", category: "Lo que admiro de ti" },
  { number: 70, text: "Porque me inspiras a cuidar mejor las cosas que de verdad importan.", icon: "star", category: "Lo que admiro de ti" },
  { number: 71, text: "Porque tienes una manera especial de hacer que alguien se sienta incluido.", icon: "flower", category: "Tu personalidad" },
  { number: 72, text: "Porque extraño hasta las pequeñas rutinas que se forman sin que nadie las planee.", icon: "moon", category: "Pequeños detalles" },
  { number: 73, text: "Porque me gusta ser quien te desea lo mejor, incluso en los sueños que todavía estás armando.", icon: "sparkle", category: "Nuestro futuro" },
  { number: 74, text: "Porque confías en mí lo suficiente para mostrarme también tus días imperfectos.", icon: "letter", category: "Lo que me haces sentir" },
  { number: 75, text: "Porque tu felicidad nunca me parece pequeña; me importa con todo el corazón.", icon: "heart", category: "Lo que me haces sentir" },
  { number: 76, text: "Porque hay una belleza en tu forma de insistir en las cosas que amas.", icon: "star", category: "Lo que admiro de ti" },
  { number: 77, text: "Porque contigo he descubierto que la ternura también puede ser una forma de valentía.", icon: "flower", category: "Lo que admiro de ti" },
  { number: 78, text: "Porque a veces basta con saber que estás al otro lado del teléfono para sentirme más cerca.", icon: "letter", category: "Lo que me haces sentir" },
  { number: 79, text: "Porque tus gustos, tus ideas y tus pequeñas rarezas forman un mundo que me encanta visitar.", icon: "sparkle", category: "Pequeños detalles" },
  { number: 80, text: "Porque imaginar más días a tu lado me sale con una naturalidad que me hace sonreír.", icon: "moon", category: "Nuestro futuro" },
  { number: 81, text: "Porque me gusta cómo haces preguntas desde la curiosidad y no desde el juicio.", icon: "letter", category: "Tu personalidad" },
  { number: 82, text: "Porque algunas veces con solo verte recuerdo que tuve mucha suerte.", icon: "heart", category: "Tu mirada" },
  { number: 83, text: "Porque respetas que cada persona tenga su propio ritmo para llegar a las cosas.", icon: "star", category: "Lo que admiro de ti" },
  { number: 84, text: "Porque tus planes espontáneos le ponen una chispa inesperada a la semana.", icon: "sparkle", category: "Razones inesperadas" },
  { number: 85, text: "Porque puedo ser un poco ridículo contigo y no sentir que tengo que disculparme por ser feliz.", icon: "flower", category: "Lo que me haces sentir" },
  { number: 86, text: "Porque te preocupas por mejorar sin dejar de tener compasión por quien eres hoy.", icon: "heart", category: "Lo que admiro de ti" },
  { number: 87, text: "Porque hay una parte de mi día que siempre quiere reservarte un lugar.", icon: "moon", category: "Pequeños detalles" },
  { number: 88, text: "Porque hablar contigo me recuerda que no tengo que resolverlo todo a solas.", icon: "letter", category: "Lo que me haces sentir" },
  { number: 89, text: "Porque tu alegría tiene esa costumbre de contagiarse sin pedir permiso.", icon: "sparkle", category: "Tu personalidad" },
  { number: 90, text: "Porque quiero seguir aprendiendo cuáles son esas cosas que te hacen sentir querida.", icon: "heart", category: "Nuestro futuro" },
  { number: 91, text: "Porque aun en los días comunes, mi vida es más bonita desde que puedo compartirla contigo.", icon: "star", category: "Nuestros momentos" },
  { number: 92, text: "Porque la forma en que pronuncias algunas palabras se me vuelve un recuerdo pequeño y feliz.", icon: "letter", category: "Pequeños detalles" },
  { number: 93, text: "Porque tienes el valor de seguir siendo amable sin dejar de poner límites.", icon: "flower", category: "Lo que admiro de ti" },
  { number: 94, text: "Porque cada recuerdo nuestro que vuelve a mi mente trae consigo un poquito de ti.", icon: "moon", category: "Nuestros momentos" },
  { number: 95, text: "Porque contigo he aprendido que el amor también es curiosidad por la persona que sigues siendo.", icon: "sparkle", category: "Nuestro futuro" },
  { number: 96, text: "Porque me encanta encontrar en ti algo nuevo, incluso después de tantas razones.", icon: "star", category: "Razones inesperadas" },
  { number: 97, text: "Porque me haces querer cuidar lo nuestro con paciencia, atención y alegría.", icon: "heart", category: "Nuestro futuro" },
  { number: 98, text: "Porque cuando pienso en los momentos que quiero conservar, apareces en muchos de ellos.", icon: "letter", category: "Nuestros momentos" },
  { number: 99, text: "Porque no hay una versión de esta historia que no sea más bonita con tu presencia.", icon: "rose", category: "Lo que me haces sentir" },
  { number: 100, text: "Porque entre tantas personas en este mundo, tuve la suerte de encontrarte a ti.", icon: "heart", category: "La razón más grande", cinematic: true }
];

const STORAGE_KEY = `100-razones-progress-v1:${location.pathname}`;
const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const MILESTONES = {
  10: { title: "10 razones descubiertas...", copy: "Y apenas estamos comenzando." },
  25: { title: "25 razones.", copy: "Pero podría escribir otras 100." },
  50: { title: "Mitad del camino.", copy: "Y todavía no encuentro una forma suficiente de explicar todo lo que significas para mí." },
  75: { title: "75...", copy: "Ya casi llegamos al final." }
};
const SWEET_PROGRESS = {
  25: "Ya descubriste una cuarta parte de lo que siento por ti.",
  50: "Ya vamos por la mitad... y todavía falta mucho.",
  75: "Ya casi llegamos... pero todavía tengo cosas que decirte."
};
const SECRET_NOTES = {
  7: "Hay algo muy bonito en poder ser yo contigo.",
  33: "Entre todas las notificaciones, la tuya siempre tiene algo distinto.",
  68: "A veces una conversación nuestra es justo el lugar al que quería llegar."
};
const $ = (id) => document.getElementById(id);
const ui = {
  welcome: $("welcome"), experience: $("experience"), start: $("startButton"), resume: $("continueButton"),
  card: $("reasonCard"), cardWrap: $("reasonCardWrap"), cardSymbol: $("cardSymbol"), cardNumber: $("cardNumber"),
  numberBack: $("reasonNumberBack"), category: $("reasonCategory"), text: $("reasonText"), next: $("nextButton"),
  hint: $("tapHint"), progress: $("progressCount"), progressCopy: $("progressSentence"), progressBar: $("progressBar"),
  progressFill: $("progressFill"), archiveButton: $("archiveButton"), milestone: $("milestoneDialog"),
  milestoneTitle: $("milestoneTitle"), milestoneCopy: $("milestoneCopy"), milestoneContinue: $("milestoneContinue"),
  archive: $("archiveDialog"), archiveGrid: $("archiveGrid"), hundredScreen: $("hundredScreen"), hundredLabel: $("hundredLabel"),
  hundredCopy: $("hundredCopy"), hundredName: $("hundredName"), hundredContinue: $("hundredContinue"),
  letterSection: $("letter"), letterCopy: $("letterCopy"), typedLetter: $("typedLetter"), caret: $("typeCaret"),
  readAll: $("readAllButton"), letterContinue: $("letterContinue"), memories: $("memories"), memoryGrid: $("memoryGrid"),
  memoriesContinue: $("memoriesContinue"), final: $("the-end"), secretButton: $("secretButton"), secretDialog: $("secretDialog"),
  restart: $("restartButton"), audio: $("ambientAudio"), soundToggle: $("soundToggle"), toast: $("toast"),
  lightbox: $("lightboxDialog"), lightboxImage: $("lightboxImage"), lightboxCaption: $("lightboxCaption")
};

function emptyState() { return { discovered: [], current: 1, milestones: [], stage: "welcome" }; }
function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!saved || typeof saved !== "object") return emptyState();
    const discovered = Array.isArray(saved.discovered) ? saved.discovered.filter((n) => Number.isInteger(n) && n >= 1 && n <= 100) : [];
    const milestones = Array.isArray(saved.milestones) ? saved.milestones.filter((n) => Object.prototype.hasOwnProperty.call(MILESTONES, n)) : [];
    const stages = ["welcome", "reasons", "lastInvite", "finale", "letter", "memories", "final"];
    return {
      discovered: [...new Set(discovered)].sort((a, b) => a - b),
      current: Number.isInteger(saved.current) && saved.current >= 1 && saved.current <= 99 ? saved.current : 1,
      milestones: [...new Set(milestones)], stage: stages.includes(saved.stage) ? saved.stage : "welcome"
    };
  } catch { return emptyState(); }
}
let state = loadState();
let pendingNext = false;
let toastTimer = 0;
let typeTimer = 0;
let soundEnabled = false;
let audioContext = null;
let pointer = { x: .5, y: .35, active: false };
function persist() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* Storage can be disabled in private browsing. */ } }
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}
function updateConfigCopy() {
  $("welcome-dedication").innerHTML = `Para ${escapeHTML(CONFIG.recipientName)} <span aria-hidden="true">♥</span>`;
  const splitAt = CONFIG.title.toLowerCase().indexOf(" por las ");
  const firstTitleLine = splitAt >= 0 ? CONFIG.title.slice(0, splitAt) : CONFIG.title;
  const secondTitleLine = splitAt >= 0 ? CONFIG.title.slice(splitAt + 1) : "";
  $("welcome-title").innerHTML = secondTitleLine
    ? `${escapeHTML(firstTitleLine)}<br><em>${escapeHTML(secondTitleLine)}</em>`
    : escapeHTML(firstTitleLine);
  $("story-title").innerHTML = secondTitleLine
    ? `${escapeHTML(firstTitleLine)} <em>${escapeHTML(secondTitleLine)}</em>`
    : escapeHTML(firstTitleLine);
  $("welcome-subtitle").textContent = CONFIG.subtitle;
  $("finalName").textContent = `${CONFIG.recipientName}.`;
  document.title = `${CONFIG.title} — Para ${CONFIG.recipientName}`;
  ui.letterCopy.setAttribute("aria-label", personalizeText(CONFIG.letter));
}
function countDiscovered() { return state.discovered.length; }
function updateProgress(celebrate = false) {
  const count = countDiscovered();
  ui.progress.textContent = String(count);
  ui.progressCopy.textContent = count === 0 ? "Aún quedan 100 pequeñas razones por descubrir." : count === 100 ? "Las 100 razones ya son tuyas." : `Has descubierto ${count} de 100 pequeñas razones.`;
  ui.progressFill.style.width = `${count}%`;
  ui.progressBar.setAttribute("aria-valuenow", String(count));
  if (celebrate) { ui.progressBar.classList.remove("is-pulsing"); requestAnimationFrame(() => ui.progressBar.classList.add("is-pulsing")); }
  ui.archiveButton.hidden = count < 10;
  updateChapterDots(count);
  if (count === 100) ui.secretButton.hidden = false;
}
function updateChapterDots(count) {
  const current = count >= 100 ? 5 : count >= 75 ? 4 : count >= 50 ? 3 : count >= 25 ? 2 : 1;
  document.querySelectorAll(".chapter-dot").forEach((dot) => {
    const chapter = Number(dot.dataset.chapter);
    dot.classList.toggle("is-active", chapter === current);
    dot.classList.toggle("is-complete", chapter < current || (chapter === 5 && count === 100));
  });
}
function iconSvg(name) {
  const shapes = {
    heart: '<path d="M20.8 4.9a5.5 5.5 0 0 0-7.8 0L12 5.9l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.3 1-1a5.5 5.5 0 0 0 0-7.8Z"/>',
    sparkle: '<path d="m12 2 1.8 7.1L21 12l-7.2 2.1L12 21l-1.8-6.9L3 12l7.2-2.9L12 2Z"/><path d="m19 15 1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z"/>',
    star: '<path d="m12 2.8 2.8 5.7 6.3.9-4.6 4.5 1.1 6.3-5.6-3-5.6 3 1.1-6.3-4.6-4.5 6.3-.9L12 2.8Z"/>',
    moon: '<path d="M20.5 15.4A8.5 8.5 0 0 1 8.6 3.5 8.5 8.5 0 1 0 20.5 15.4Z"/><path d="m17 4 .5 1.5L19 6l-1.5.5L17 8l-.5-1.5L15 6l1.5-.5L17 4Z"/>',
    flower: '<path d="M12 12c-3.5 0-5-2-5-4a3 3 0 0 1 5-2.2A3 3 0 0 1 17 8c0 2-1.5 4-5 4Z"/><path d="M12 12c0 3.5-2 5-4 5a3 3 0 0 1-2.2-5A3 3 0 0 1 8 7c2 0 4 1.5 4 5Z"/><path d="M12 12c3.5 0 5 2 5 4a3 3 0 0 1-5 2.2A3 3 0 0 1 7 16c0-2 1.5-4 5-4Z"/><path d="M12 12c0-3.5 2-5 4-5a3 3 0 0 1 2.2 5A3 3 0 0 1 16 17c-2 0-4-1.5-4-5Z"/><circle cx="12" cy="12" r="1.7"/>',
    letter: '<rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="m4 7 8 6 8-6"/><path d="M9 3h6"/>',
    rose: '<path d="M12 21c-4.6-2.5-6.8-6.2-6.5-10.4.2-2.3 1.5-4 3.6-4.6-.2 2 .8 3.1 2.9 3.4-.8-3 .3-5.2 3.4-6.6-.4 2.7 1.7 4.1 2.8 6.2 2.1 4-.1 9.5-6.2 12Z"/><path d="M12 21c0-4.4 1.5-7.2 4.5-9.2M12 17c-1.2-2.2-2.8-3.6-4.8-4.3"/>'
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${shapes[name] || shapes.heart}</svg>`;
}
function renderCard(number, revealed = false) {
  const reason = reasons[number - 1];
  if (!reason || reason.cinematic) return;
  state.current = number;
  persist();
  ui.card.classList.toggle("is-revealed", revealed);
  ui.card.setAttribute("aria-expanded", String(revealed));
  ui.card.setAttribute("aria-label", revealed ? `Razón número ${number}: ${reason.text}` : `Descubrir razón número ${number}`);
  ui.card.setAttribute("aria-disabled", String(revealed));
  ui.cardSymbol.innerHTML = iconSvg(reason.icon);
  ui.cardNumber.innerHTML = `RAZÓN <b>#${String(number).padStart(2, "0")}</b>`;
  ui.numberBack.textContent = String(number).padStart(2, "0");
  ui.category.textContent = reason.category;
  ui.text.textContent = reason.text;
  $("cardBack").setAttribute("aria-hidden", String(!revealed));
  ui.card.querySelector(".card-front").setAttribute("aria-hidden", String(revealed));
  ui.next.hidden = !revealed;
  ui.hint.textContent = revealed ? "Guarda esta razón contigo." : "Un pequeño secreto espera del otro lado.";
  ui.next.innerHTML = number === 99 ? 'Descubrir la última <span aria-hidden="true">♥</span>' : 'Descubrir la siguiente <span aria-hidden="true">♥</span>';
  const chapter = number <= 24 ? "CAPÍTULO I" : number <= 49 ? "CAPÍTULO II" : number <= 74 ? "CAPÍTULO III" : "CAPÍTULO IV";
  const label = number <= 24 ? "EL COMIENZO" : number <= 49 ? "LO QUE CRECE" : number <= 74 ? "TODO LO QUE ERES" : "CASI HASTA EL FINAL";
  $("chapterLabel").innerHTML = `${chapter} <span>·</span> ${label}`;
  ui.cardWrap.dataset.tone = reason.icon;
  const toneGlow = {
    heart: "rgba(116, 53, 77, .42)", sparkle: "rgba(91, 62, 91, .4)", star: "rgba(106, 81, 57, .36)",
    moon: "rgba(67, 70, 104, .34)", flower: "rgba(113, 57, 79, .37)", letter: "rgba(99, 66, 74, .4)", rose: "rgba(128, 57, 76, .4)"
  };
  ui.cardWrap.style.setProperty("--tone-glow", toneGlow[reason.icon] || toneGlow.heart);
}
function revealCurrent() {
  const number = state.current;
  if (state.discovered.includes(number) || number >= 100) return;
  state.discovered.push(number);
  state.discovered.sort((a, b) => a - b);
  ui.card.classList.add("is-revealed");
  ui.card.setAttribute("aria-expanded", "true");
  ui.card.setAttribute("aria-disabled", "true");
  ui.card.setAttribute("aria-label", `Razón número ${number}: ${reasons[number - 1].text}`);
  $("cardBack").setAttribute("aria-hidden", "false");
  ui.card.querySelector(".card-front").setAttribute("aria-hidden", "true");
  ui.next.hidden = false;
  ui.hint.textContent = "Guarda esta razón contigo.";
  persist(); updateProgress(true); playChime(520 + (number % 4) * 68);
  if (SWEET_PROGRESS[number]) showToast(SWEET_PROGRESS[number]);
  if (SECRET_NOTES[number]) showToast(SECRET_NOTES[number]);
  if (number === 99) ui.next.innerHTML = 'Descubrir la última <span aria-hidden="true">♥</span>';
}
function goNext() {
  if (!state.discovered.includes(state.current)) return;
  if (state.current === 99) { showLastReasonInvite(); return; }
  const milestone = MILESTONES[state.current];
  if (milestone && !state.milestones.includes(state.current)) {
    pendingNext = true; state.milestones.push(state.current); persist();
    ui.milestoneTitle.textContent = milestone.title;
    ui.milestoneCopy.textContent = milestone.copy;
    ui.milestone.showModal(); playChime(420); return;
  }
  renderCard(state.current + 1); playChime(320); ui.card.focus({ preventScroll: true });
}
function showLastReasonInvite() {
  state.stage = "lastInvite"; persist(); ui.experience.hidden = true; ui.hundredScreen.hidden = false;
  ui.hundredLabel.innerHTML = "ANTES DE DESPEDIRNOS <span>✦</span>";
  ui.hundredCopy.replaceChildren(); ui.hundredName.hidden = true; ui.hundredContinue.hidden = false;
  ui.hundredContinue.innerHTML = 'Descubrir la última <span aria-hidden="true">♥</span>';
  const line = document.createElement("p"); line.className = "hundred-line is-emphasis"; line.textContent = "Hay una última razón."; ui.hundredCopy.append(line);
}
async function runHundredScene() {
  state.stage = "finale"; persist(); ui.experience.hidden = true; ui.welcome.hidden = true; ui.hundredScreen.hidden = false;
  ui.hundredLabel.innerHTML = 'RAZÓN <span>#100</span>'; ui.hundredCopy.replaceChildren(); ui.hundredName.hidden = true; ui.hundredContinue.hidden = true;
  fadeMusic(); playChime(660);
  const lines = [
    { text: reasons[99].text, delay: REDUCED_MOTION ? 80 : 1100, emphasis: true },
    { text: "Y si me preguntaras cuál de estas 100 razones es mi favorita...", delay: REDUCED_MOTION ? 100 : 1550 },
    { text: "...la respuesta seguirías siendo tú.", delay: REDUCED_MOTION ? 100 : 1500, emphasis: true }
  ];
  for (const item of lines) {
    await wait(item.delay); if (state.stage !== "finale") return;
    const line = document.createElement("p"); line.className = `hundred-line${item.emphasis ? " is-emphasis" : ""}`; line.textContent = item.text; ui.hundredCopy.append(line); playChime(item.emphasis ? 590 : 460);
  }
  await wait(REDUCED_MOTION ? 60 : 950); if (state.stage !== "finale") return;
  ui.hundredName.textContent = `${CONFIG.recipientName.toLocaleUpperCase("es")} ♥`; ui.hundredName.hidden = false;
  state.discovered = Array.from({ length: 100 }, (_, index) => index + 1); state.stage = "letter"; persist(); updateProgress(true);
  ui.hundredContinue.hidden = false; ui.hundredContinue.innerHTML = 'Leer mi carta <span aria-hidden="true">↘</span>';
}
function wait(duration) { return new Promise((resolve) => window.setTimeout(resolve, duration)); }
function showLetter() {
  ui.hundredScreen.hidden = true; ui.experience.hidden = false; $("reasons").hidden = true;
  ui.letterSection.hidden = false; ui.memories.hidden = true; ui.final.hidden = true; state.stage = "letter"; persist();
  updateNavigation(); typeLetter(); scrollToSection(ui.letterSection);
}
function typeLetter() {
  window.clearTimeout(typeTimer); ui.typedLetter.textContent = ""; ui.caret.classList.remove("is-finished");
  ui.readAll.hidden = false; ui.letterContinue.hidden = true;
  const fullText = personalizeText(CONFIG.letter);
  if (REDUCED_MOTION) { finishLetter(fullText); return; }
  let index = 0;
  const step = () => {
    if (index >= fullText.length) { finishLetter(fullText); return; }
    const char = fullText[index++]; ui.typedLetter.textContent += char;
    const delay = char === "\n" ? 95 : /[.,…!?]/.test(char) ? 68 : 19;
    typeTimer = window.setTimeout(step, delay);
  };
  step();
}
function finishLetter(fullText) {
  window.clearTimeout(typeTimer); ui.typedLetter.textContent = fullText; ui.caret.classList.add("is-finished");
  ui.readAll.hidden = true; ui.letterContinue.hidden = false; state.stage = "letter"; persist(); updateNavigation();
}
function showMemories() {
  ui.memories.hidden = false; state.stage = "memories"; persist(); updateNavigation(); scrollToSection(ui.memories);
}
function showFinal() {
  ui.final.hidden = false; state.stage = "final"; persist(); updateNavigation(); scrollToSection(ui.final);
  ui.secretButton.hidden = countDiscovered() < 100;
}
function updateNavigation() {
  $("navLetter").setAttribute("aria-disabled", String(ui.letterSection.hidden));
  $("navMemories").setAttribute("aria-disabled", String(ui.memories.hidden));
  $("navFinal").setAttribute("aria-disabled", String(ui.final.hidden));
}
function scrollToSection(target) { target.scrollIntoView({ behavior: REDUCED_MOTION ? "auto" : "smooth", block: "start" }); }
function showToast(message) {
  ui.toast.textContent = message; ui.toast.classList.add("is-visible"); window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => ui.toast.classList.remove("is-visible"), 3600);
}
function renderArchive() {
  ui.archiveGrid.replaceChildren();
  for (let number = 1; number <= 99; number += 1) {
    const item = document.createElement("div"); item.className = "archive-item";
    const index = document.createElement("span"); index.className = "archive-item-number"; index.textContent = `#${String(number).padStart(2, "0")}`;
    const text = document.createElement("span");
    text.textContent = state.discovered.includes(number) ? reasons[number - 1].text : "Una pequeña razón que aún te espera.";
    if (!state.discovered.includes(number)) item.classList.add("is-locked"); item.append(index, text); ui.archiveGrid.append(item);
  }
  if (state.discovered.includes(100)) {
    const item = document.createElement("div"); item.className = "archive-item"; item.innerHTML = '<span class="archive-item-number">#100</span><span></span>';
    item.lastElementChild.textContent = reasons[99].text; ui.archiveGrid.append(item);
  }
}
function buildMemories() {
  ui.memoryGrid.replaceChildren();
  CONFIG.photos.slice(0, 6).forEach((photo, index) => {
    const button = document.createElement("button"); button.className = "memory-card"; button.type = "button";
    button.setAttribute("aria-label", `${photo.caption}. ${photo.src ? `Añade una imagen personal en ${photo.src}` : "Añade una imagen personal a este espacio."}`);
    const placeholder = document.createElement("span"); placeholder.className = "memory-placeholder";
    const mark = document.createElement("span"); mark.textContent = "✧"; placeholder.append(mark);
    const image = document.createElement("img"); image.alt = photo.caption; image.loading = "lazy";
    image.addEventListener("load", () => button.classList.add("has-image"), { once: true });
    image.addEventListener("error", () => { button.classList.remove("has-image"); image.removeAttribute("src"); }, { once: true });
    const caption = document.createElement("span"); caption.className = "memory-caption"; caption.textContent = photo.caption;
    const number = document.createElement("span"); number.className = "memory-number"; number.textContent = `RECUERDO 0${index + 1}`;
    button.append(placeholder, image, caption, number);
    button.addEventListener("click", () => {
      if (!button.classList.contains("has-image")) { showToast("Este espacio está esperando una foto nuestra."); return; }
      ui.lightboxImage.src = photo.src; ui.lightboxImage.alt = photo.caption; ui.lightboxCaption.textContent = photo.caption; ui.lightbox.showModal();
    });
    ui.memoryGrid.append(button); if (photo.src) image.src = photo.src;
  });
}
function openExperience(resume = false) {
  if (!resume) state = emptyState();
  if (state.stage === "welcome") state.stage = "reasons";
  persist(); playChime(490); ui.welcome.classList.add("is-leaving");
  window.setTimeout(() => {
    ui.welcome.hidden = true; ui.welcome.classList.remove("is-leaving"); ui.experience.hidden = false;
    ui.letterSection.hidden = true; ui.memories.hidden = true; ui.final.hidden = true; updateProgress();
    if (state.stage === "lastInvite") { renderCard(99, true); showLastReasonInvite(); }
    else if (state.stage === "finale") runHundredScene();
    else if (["letter", "memories", "final"].includes(state.stage)) {
      $("reasons").hidden = true; ui.letterSection.hidden = false;
      if (state.stage === "letter") typeLetter();
      else {
        ui.typedLetter.textContent = personalizeText(CONFIG.letter);
        ui.caret.classList.add("is-finished"); ui.letterContinue.hidden = false;
      }
      if (["memories", "final"].includes(state.stage)) ui.memories.hidden = false;
      if (state.stage === "final") ui.final.hidden = false;
      updateNavigation(); updateProgress();
    } else {
      renderCard(state.current, state.discovered.includes(state.current)); updateNavigation();
    }
  }, REDUCED_MOTION ? 30 : 950);
}
function restartExperience() {
  window.clearTimeout(typeTimer); state = emptyState();
  try { localStorage.removeItem(STORAGE_KEY); } catch { /* Storage can be unavailable. */ }
  ui.experience.hidden = true; ui.hundredScreen.hidden = true; ui.letterSection.hidden = true; ui.memories.hidden = true; ui.final.hidden = true;
  ui.welcome.hidden = false; ui.welcome.classList.remove("is-leaving"); ui.resume.hidden = true; ui.secretButton.hidden = true;
  updateProgress(); window.scrollTo({ top: 0, behavior: REDUCED_MOTION ? "auto" : "smooth" });
}
function initSoundControl() {
  if (!CONFIG.music && !CONFIG.musicLink) { ui.soundToggle.hidden = true; return; }
  if (CONFIG.music) ui.audio.src = CONFIG.music;
  ui.audio.volume = .22; updateSoundButton();
  ui.soundToggle.addEventListener("click", async () => {
    if (soundEnabled) { ui.audio.pause(); soundEnabled = false; updateSoundButton(); return; }
    const isLocalCopy = window.location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname);
    if (!isLocalCopy && CONFIG.musicLink) {
      window.open(CONFIG.musicLink, "_blank", "noopener,noreferrer");
      showToast("La música se abre en el enlace configurado.");
      return;
    }
    if (!CONFIG.music) { showToast("Configura CONFIG.music o CONFIG.musicLink para activar la música."); return; }
    try {
      ui.audio.volume = .22; await ui.audio.play(); soundEnabled = true; updateSoundButton(); playChime(530);
    } catch { soundEnabled = false; updateSoundButton(); showToast("Revisa la ruta de audio configurada en CONFIG.music."); }
  });
}
function updateSoundButton() {
  ui.soundToggle.setAttribute("aria-pressed", String(soundEnabled));
  ui.soundToggle.setAttribute("aria-label", soundEnabled ? "Desactivar música" : "Activar música");
  ui.soundToggle.title = "Música";
  ui.soundToggle.querySelector(".sound-state").textContent = soundEnabled ? "ON" : "OFF";
}
function playChime(frequency = 520) {
  if (!soundEnabled) return;
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    audioContext ||= new AudioContextClass(); if (audioContext.state === "suspended") audioContext.resume();
    const oscillator = audioContext.createOscillator(); const gain = audioContext.createGain();
    oscillator.type = "sine"; oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(frequency * .72, audioContext.currentTime + .28);
    gain.gain.setValueAtTime(.0001, audioContext.currentTime); gain.gain.exponentialRampToValueAtTime(.055, audioContext.currentTime + .035);
    gain.gain.exponentialRampToValueAtTime(.0001, audioContext.currentTime + .34);
    oscillator.connect(gain); gain.connect(audioContext.destination); oscillator.start(); oscillator.stop(audioContext.currentTime + .36);
  } catch { /* All interactions still work silently. */ }
}
function fadeMusic() {
  if (!soundEnabled) return;
  const startingVolume = ui.audio.volume; const startedAt = performance.now(); const duration = REDUCED_MOTION ? 100 : 2200;
  const fade = (now) => {
    const progress = Math.min(1, (now - startedAt) / duration); ui.audio.volume = startingVolume * (1 - progress);
    if (progress < 1) requestAnimationFrame(fade);
    else { ui.audio.pause(); ui.audio.currentTime = 0; ui.audio.volume = .22; soundEnabled = false; updateSoundButton(); }
  };
  requestAnimationFrame(fade);
}
function heartRain() {
  const pieces = REDUCED_MOTION ? 10 : 26;
  for (let index = 0; index < pieces; index += 1) {
    const heart = document.createElement("span"); heart.className = "love-drop"; heart.textContent = index % 4 === 0 ? "✦" : "♥";
    heart.style.left = `${5 + Math.random() * 90}%`; heart.style.setProperty("--drift", `${(Math.random() - .5) * 170}px`);
    heart.style.setProperty("--fall-time", `${2.1 + Math.random() * 2.2}s`); heart.style.setProperty("--drop-size", `${8 + Math.random() * 12}px`);
    document.body.append(heart); window.setTimeout(() => heart.remove(), 4600);
  }
  playChime(730);
}
function initHeartSecret() {
  let taps = [];
  $("heartSigil").addEventListener("click", () => {
    const now = Date.now(); taps = taps.filter((time) => now - time < 2400); taps.push(now); playChime(570 + taps.length * 40);
    if (taps.length >= 5) { taps = []; heartRain(); showToast("Una lluvia de cariño, solo para ti."); }
  });
  $("finalHeart").addEventListener("click", heartRain);
}
function initCursor() {
  if (REDUCED_MOTION || !window.matchMedia("(pointer: fine)").matches || navigator.maxTouchPoints > 0) return;
  const cursor = document.querySelector(".cursor-halo"); document.body.classList.add("has-custom-cursor");
  window.addEventListener("pointermove", (event) => {
    cursor.style.left = `${event.clientX}px`; cursor.style.top = `${event.clientY}px`; cursor.classList.add("is-visible");
    pointer = { x: event.clientX / window.innerWidth, y: event.clientY / window.innerHeight, active: true };
  }, { passive: true });
  document.addEventListener("pointerout", (event) => { if (!event.relatedTarget) cursor.classList.remove("is-visible"); });
  document.addEventListener("pointerover", (event) => { cursor.classList.toggle("is-hovering", Boolean(event.target.closest("button, a"))); });
  window.addEventListener("pointerdown", () => cursor.classList.add("is-hovering"));
  window.addEventListener("pointerup", () => cursor.classList.remove("is-hovering"));
}
function initParticles() {
  const canvas = $("stardust"); const context = canvas.getContext("2d", { alpha: true }); if (!context) return;
  const small = window.matchMedia("(max-width: 600px)").matches;
  const lowMemory = (navigator.deviceMemory || 4) <= 2 || (navigator.hardwareConcurrency || 4) <= 2;
  const count = REDUCED_MOTION ? 12 : lowMemory ? 18 : small ? 26 : 48;
  const stars = []; let width = 0; let height = 0; let raf = 0; let isVisible = !document.hidden;
  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 1.45); width = window.innerWidth; height = window.innerHeight;
    canvas.width = Math.round(width * ratio); canvas.height = Math.round(height * ratio); context.setTransform(ratio, 0, 0, ratio, 0, 0);
    if (stars.length === 0) {
      for (let index = 0; index < count; index += 1) stars.push({ x: Math.random() * width, y: Math.random() * height, r: .35 + Math.random() * 1.35, a: .2 + Math.random() * .55, phase: Math.random() * Math.PI * 2, speed: .001 + Math.random() * .004, drift: (Math.random() - .5) * .09 });
    } else stars.forEach((star) => { star.x %= width; star.y %= height; });
    draw(performance.now(), false);
  };
  const draw = (time, move) => {
    context.clearRect(0, 0, width, height);
    stars.forEach((star) => {
      if (move) {
        star.phase += star.speed; star.y -= .12 + star.r * .08;
        star.x += star.drift + (pointer.active ? (pointer.x - .5) * .012 : 0);
        if (star.y < -4) { star.y = height + 4; star.x = Math.random() * width; }
        if (star.x < -4) star.x = width + 4; if (star.x > width + 4) star.x = -4;
      }
      const alpha = REDUCED_MOTION ? star.a * .55 : star.a * (.72 + Math.sin(time * .0006 + star.phase) * .28);
      context.beginPath(); context.arc(star.x, star.y, star.r, 0, Math.PI * 2); context.fillStyle = `rgba(243, 205, 216, ${alpha})`; context.fill();
    });
  };
  const tick = (time) => { draw(time, true); if (isVisible && !REDUCED_MOTION) raf = requestAnimationFrame(tick); };
  const start = () => { if (!isVisible || REDUCED_MOTION || raf) return; raf = requestAnimationFrame(tick); };
  window.addEventListener("resize", resize, { passive: true });
  document.addEventListener("visibilitychange", () => { isVisible = !document.hidden; if (!isVisible) { cancelAnimationFrame(raf); raf = 0; } else start(); });
  window.addEventListener("pointermove", (event) => { if (event.pointerType === "touch") pointer = { x: event.clientX / window.innerWidth, y: event.clientY / window.innerHeight, active: true }; }, { passive: true });
  resize(); start();
}
function initDialogControls() {
  document.querySelectorAll("[data-close]").forEach((button) => button.addEventListener("click", () => $(button.dataset.close).close()));
  [ui.milestone, ui.archive, ui.secretDialog, ui.lightbox].forEach((dialog) => dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); }));
}
function initNavigation() {
  document.querySelectorAll(".nav-link").forEach((link) => link.addEventListener("click", (event) => {
    if (link.getAttribute("aria-disabled") === "true") { event.preventDefault(); return; }
    const target = document.querySelector(link.getAttribute("href"));
    if (target?.hidden) { event.preventDefault(); if (target === ui.memories) showMemories(); if (target === ui.final) showFinal(); }
    document.querySelectorAll(".nav-link").forEach((item) => item.classList.remove("is-current")); link.classList.add("is-current");
  }));
}
function initEvents() {
  ui.start.addEventListener("click", () => openExperience(false)); ui.resume.addEventListener("click", () => openExperience(true));
  ui.card.addEventListener("click", revealCurrent); ui.next.addEventListener("click", goNext);
  ui.milestoneContinue.addEventListener("click", () => {
    ui.milestone.close(); if (pendingNext) { pendingNext = false; renderCard(state.current + 1); playChime(350); }
  });
  ui.archiveButton.addEventListener("click", () => { renderArchive(); ui.archive.showModal(); });
  ui.hundredContinue.addEventListener("click", () => { if (state.stage === "lastInvite") runHundredScene(); else showLetter(); });
  ui.readAll.addEventListener("click", () => finishLetter(personalizeText(CONFIG.letter)));
  ui.letterContinue.addEventListener("click", showMemories); ui.memoriesContinue.addEventListener("click", showFinal);
  ui.secretButton.addEventListener("click", () => ui.secretDialog.showModal()); ui.restart.addEventListener("click", restartExperience);
  $("psButton").addEventListener("click", () => { $("psSecret").hidden = !$("psSecret").hidden; playChime(440); });
}
function init() {
  updateConfigCopy(); updateProgress(); buildMemories(); initSoundControl(); initParticles(); initCursor();
  initHeartSecret(); initDialogControls(); initNavigation(); initEvents();
  ui.resume.hidden = state.discovered.length === 0 && state.stage === "welcome";
  if (REDUCED_MOTION) $("motionNote").hidden = false;
}
init();
