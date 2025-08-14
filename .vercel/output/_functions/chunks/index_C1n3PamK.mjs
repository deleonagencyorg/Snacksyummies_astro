import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderScript, d as renderTemplate, j as defineScriptVars, f as renderComponent, b as addAttribute, e as renderTransition } from './astro/server_XONErzoU.mjs';
import 'kleur/colors';
import { g as getLocale } from './i18n_N2D6iQyo.mjs';
import { a as $$MainLayout, $ as $$LazyImage } from './MainLayout_C_bIfuhT.mjs';
import { $ as $$Breadcrumb } from './Breadcrumb_B2nuBQfw.mjs';
import 'clsx';
/* empty css                            */
/* empty css                         */

const $$Astro$2 = createAstro();
const $$SuccessModal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SuccessModal;
  const locale = getLocale(Astro2.url);
  const defaultValues = {
    es: {
      title: "Tu mensaje se envi\xF3 correctamente",
      message: "Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.",
      buttonText: "Cerrar"
    },
    en: {
      title: "Your message was sent successfully",
      message: "Thank you for your message. We will contact you soon.",
      buttonText: "Close"
    }
  };
  const {
    title = defaultValues[locale]?.title || defaultValues.es.title,
    message = defaultValues[locale]?.message || defaultValues.es.message,
    buttonText = defaultValues[locale]?.buttonText || defaultValues.es.buttonText
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="successModal" class="fixed inset-0 flex items-center justify-center z-50 hidden"> <div class="modal-backdrop fixed inset-0 bg-primary bg-opacity-50"></div> <div class="bg-white rounded-lg p-8 max-w-md mx-4 relative z-10 transform transition-all"> <!-- Botón cerrar en esquina superior derecha con position absolute --> <button type="button" class="modal-close absolute top-2 right-2 text-gray-500 hover:text-gray-700"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> <!-- Título centrado sin el botón --> <div class="flex justify-center items-center mb-4"> <h3 class="md:text-4xl text-2xl font-bold text-primary font-title" id="modal-title">${title}</h3> </div> <div class="mb-6"> <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4"> <svg class="h-10 w-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <p class="text-gray-700 text-center" id="modal-message">${message}</p> </div> <div class="flex justify-center"> <button type="button" class="modal-close px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all"> ${buttonText} </button> </div> </div> </div> ${renderScript($$result, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/SuccessModal.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/common/SuccessModal.astro", void 0);

const title$1 = "Contáctanos";
const description$1 = "Envíanos tus dudas o comentarios llenando el formulario de la derecha, o contáctanos vía e-mail o teléfono.";
const form$1 = {"title":"¿Tienes preguntas? ¡Estamos aquí para ti!","contactReason":{"label":"Motivo de contacto"},"fullName":{"label":"Nombre completo","placeholder":"Nombre y apellidos"},"email":{"label":"Correo electrónico","placeholder":"correo@ejemplo.com"},"phone":{"label":"Número de celular","placeholder":"XXXXXXXX"},"submit":"Enviar"};
const offices$1 = {"title":"Nuestras Oficinas","locations":{"+504":{"tab":"Honduras","name":"Yummies Honduras","address":"Corporación Dinant, Frente a Plantas Tropicales, Blvd. Suyapa, 11101 Tegucigalpa, Francisco Morazán, Honduras","phones":["2275-3370","2239-5869","2235-7521"],"email":"contacto.honduras@yummies.com","image":"https://snack.yummiespromociones.com/SnacksyummiesAssets/oficina-honduras.webp","mapEmbed":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.703817626697!2d-87.20101878594838!3d14.094653490126237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fa2c8e9523aff%3A0x7ab9968369fb1370!2sCorporaci%C3%B3n%20Dinant!5e0!3m2!1ses!2sgt!4v1611329011085!5m2!1ses!2sgt"},"+502":{"tab":"Guatemala","name":"Yummies Guatemala","address":"Corporación Dinant, 4 Complejo Industrial, Bulevar El Naranjo 16-61, Cdad. de Guatemala","phones":["2502-7050"],"email":"contacto.guatemala@yummies.com","image":"https://snack.yummiespromociones.com/SnacksyummiesAssets/oficina-guatemala.webp","mapEmbed":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30881.33176788943!2d-90.5543817869406!3d14.646489876089056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a1d0337bd0cb%3A0xb2ab8a4de6a7dcc4!2sCorporaci%C3%B3n%20Dinant!5e0!3m2!1ses!2sgt!4v1611328904055!5m2!1ses!2sgt"},"+503":{"tab":"El Salvador","name":"Yummies El Salvador","address":"Dinant de El Salvador, S.A. de C.V., Bulevar del Ejercito Nacional, km 9 1/2, entrada Zona Franca San Bartolo, El Salvador","phones":["2510-8300"],"fax":"2295-8243","email":"contacto.elsalvador@yummies.com","image":"https://snack.yummiespromociones.com/SnacksyummiesAssets/oficina-elsalvador.webp","mapEmbed":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.322825230165!2d-89.11336908595418!3d13.698887490381667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6337c0d6561e95%3A0xa775fdc4c5061c7d!2sDinant%20de%20El%20Salvador%2C%20S.A.%20de%20C.V.!5e0!3m2!1ses!2sgt!4v1611329118318!5m2!1ses!2sgt"},"+505":{"tab":"Nicaragua","name":"Yummies Nicaragua","address":"Corporación Dinant, 4RR2+R3W, Managua, Nicaragua","phones":["2251-4069","2251-4070"],"email":"contacto.nicaragua@yummies.com","image":"https://snack.yummiespromociones.com/SnacksyummiesAssets/oficina-nicaragua.webp","mapEmbed":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.5572478066233!2d-86.20197198597542!3d12.142416891403649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f73fc23fb350063%3A0xe657362f6f7abec5!2sCorporaci%C3%B3n%20Dinant!5e0!3m2!1ses!2sgt!4v1611329300767!5m2!1ses!2sgt"},"+506":{"tab":"Costa Rica","name":"Yummies Costa Rica","address":"Dinant Bodegas, VWFH+CJQ, San José, San Rafael Arriba de Desamparados, Costa Rica","phones":["2234-7363","2234-7259","2234-7482","2234-7044","2234-6490"],"email":"contacto.costarica@yummies.com","image":"https://snack.yummiespromociones.com/SnacksyummiesAssets/oficina-costarica.webp","mapEmbed":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.723068183398!2d-84.07309458600189!3d9.873585092937915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e2ec16f703c9%3A0x9608ff49efdf1534!2sDinant%20Bodegas!5e0!3m2!1ses!2sgt!4v1611329274006!5m2!1ses!2sgt"},"+1809":{"tab":"República Dominicana","name":"Yummies República Dominicana","address":"Corporación Dinant (Yummies), F2R8+G25, Santo Domingo 10408, República Dominicana","phones":["473-1212"],"email":"contacto.dominicana@yummies.com","image":"https://snack.yummiespromociones.com/SnacksyummiesAssets/oficina-dominicana.webp","mapEmbed":""}}};
const contactEs = {
  title: title$1,
  description: description$1,
  form: form$1,
  offices: offices$1};

const title = "Contact Us";
const description = "We'd love to hear from you. Send us a message and we'll respond as soon as possible.";
const form = {"title":"Send us a message","contactReason":{"label":"Reason for contact"},"fullName":{"label":"Full Name","placeholder":"Enter your full name"},"email":{"label":"Email","placeholder":"your@email.com"},"phone":{"label":"Mobile Number","placeholder":"XXXXXXXX"},"submit":"Send"};
const offices = {"title":"Our Offices","locations":{"+504":{"tab":"Honduras","name":"Yummies Honduras","address":"Corporación Dinant, In front of Tropical Plants, Suyapa Blvd., 11101 Tegucigalpa, Francisco Morazán, Honduras","phones":["2275-3370","2239-5869","2235-7521"],"email":"contacto.honduras@yummies.com","image":"https://snack.yummiespromociones.com/SnacksyummiesAssets/oficina-honduras.webp","mapEmbed":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.703817626697!2d-87.20101878594838!3d14.094653490126237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fa2c8e9523aff%3A0x7ab9968369fb1370!2sCorporaci%C3%B3n%20Dinant!5e0!3m2!1ses!2sgt!4v1611329011085!5m2!1ses!2sgt"},"+502":{"name":"Yummies Guatemala","address":"Corporación Dinant, 4 Industrial Complex, El Naranjo Blvd. 16-61, Guatemala City","phones":["2502-7050"],"email":"contacto.guatemala@yummies.com","image":"https://snack.yummiespromociones.com/SnacksyummiesAssets/oficina-guatemala.webp","mapEmbed":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30881.33176788943!2d-90.5543817869406!3d14.646489876089056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a1d0337bd0cb%3A0xb2ab8a4de6a7dcc4!2sCorporaci%C3%B3n%20Dinant!5e0!3m2!1ses!2sgt!4v1611328904055!5m2!1ses!2sgt"},"+503":{"tab":"El Salvador","name":"Yummies El Salvador","address":"Dinant de El Salvador, S.A. de C.V., National Army Blvd., km 9 1/2, San Bartolo Free Zone entrance, El Salvador","phones":["2510-8300"],"fax":"2295-8243","email":"contacto.elsalvador@yummies.com","image":"https://snack.yummiespromociones.com/SnacksyummiesAssets/oficina-elsalvador.webp","mapEmbed":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.322825230165!2d-89.11336908595418!3d13.698887490381667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6337c0d6561e95%3A0xa775fdc4c5061c7d!2sDinant%20de%20El%20Salvador%2C%20S.A.%20de%20C.V.!5e0!3m2!1ses!2sgt!4v1611329118318!5m2!1ses!2sgt"},"+505":{"tab":"Nicaragua","name":"Yummies Nicaragua","address":"Corporación Dinant, 4RR2+R3W, Managua, Nicaragua","phones":["2251-4069","2251-4070"],"email":"contacto.nicaragua@yummies.com","image":"https://snack.yummiespromociones.com/SnacksyummiesAssets/oficina-nicaragua.webp","mapEmbed":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.5572478066233!2d-86.20197198597542!3d12.142416891403649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f73fc23fb350063%3A0xe657362f6f7abec5!2sCorporaci%C3%B3n%20Dinant!5e0!3m2!1ses!2sgt!4v1611329300767!5m2!1ses!2sgt"},"+506":{"tab":"Costa Rica","name":"Yummies Costa Rica","address":"Dinant Warehouses, VWFH+CJQ, San José, San Rafael Arriba de Desamparados, Costa Rica","phones":["2234-7363","2234-7259","2234-7482","2234-7044","2234-6490"],"email":"contacto.costarica@yummies.com","image":"https://snack.yummiespromociones.com/SnacksyummiesAssets/oficina-costarica.webp","mapEmbed":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.723068183398!2d-84.07309458600189!3d9.873585092937915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e2ec16f703c9%3A0x9608ff49efdf1534!2sDinant%20Bodegas!5e0!3m2!1ses!2sgt!4v1611329274006!5m2!1ses!2sgt"},"+1809":{"tab":"Dominican Republic","name":"Yummies Dominican Republic","address":"Corporacion Dinant (Yummies), F2R8+G25, Santo Domingo 10408, Dominican Republic","phones":["473-1212"],"email":"contacto.dominicana@yummies.com","image":"https://snack.yummiespromociones.com/SnacksyummiesAssets/oficina-dominicana.webp","mapEmbed":""}}};
const contactEn = {
  title,
  description,
  form,
  offices};

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro();
const $$FormContact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FormContact;
  const { currentLang } = Astro2.props;
  const locale = currentLang || getLocale(Astro2.url);
  const contact = locale === "es" ? contactEs : contactEn;
  const countryLabel = locale === "es" ? "País" : "Country";
  const cityLabel = locale === "es" ? "Ciudad" : "City";
  const countryPlaceholder = locale === "es" ? "Selecciona tu país" : "Select your country";
  const departmentPlaceholder = locale === "es" ? "Primero selecciona un país" : "First select a country";
  const contactReasonPlaceholder = locale === "es" ? "Selecciona el tipo de consulta" : "Select the type of inquiry";
  const apiHost = "https://api-crm.yummiespromociones.com/api";
  const apiToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6IiIsInRpdGxlIjoiQWdlbmNpYSBhcmdlbnRpbmEiLCJ0eXBlIjoiIiwiaXNzIjoiQVBJIiwiZXhwIjoxNzgyNTM0NTAyfQ.-VG0bC-DxqdFwfkJ_BmZxuTNfuOrtVi0W-feVdQ24VY";
  const contactFormPath = "/v1/auth/email/custom";
  const dynamicLabels = {
    es: {
      clientCode: "Código de Cliente",
      areaOfInterest: "Área de Interés",
      message: "Mensaje",
      requestType: "Tipo de Solicitud",
      interest: "Interés",
      question: "Pregunta o Solicitud",
      comments: "Comentarios",
      file: "Adjuntar Archivo",
      fileHelp: "PDF, JPG, PNG (máx. 10MB)",
      areaOfInterestSupplier: "Área de Interés",
      commentsEthics: "Escribe tus comentarios. Si eres empleado Dinant especifica tu cargo"
    },
    en: {
      clientCode: "Client Code",
      areaOfInterest: "Area of Interest",
      message: "Message",
      requestType: "Request Type",
      interest: "Interest",
      question: "Question or Request",
      comments: "Comments",
      file: "Attach File",
      fileHelp: "PDF, JPG, PNG (max. 10MB)",
      areaOfInterestSupplier: "Area of Interest",
      commentsEthics: "Write your comments. If you are a Dinant employee specify your position"
    }
  };
  const labels = dynamicLabels[locale];
  const dynamicOptions = {
    es: {
      clientAreaOfInterest: ["Sugerencias", "Consultas", "Reclamo"],
      requestTypes: ["Para consumo propio", "Pulpería", "Mini Mercado", "Abastecedor", "Otros"],
      exportInterests: ["Quiero ser distribuidor", "Deseo producto para consumo personal"],
      journalistAreas: ["Presidencia Ejecutiva", "Mercadeo", "Relaciones Corporativas"],
      contactReason: ["Soy cliente", "Quiero ser cliente", "Exportaciones", "Quiero ser proveedor", "Enviar Hoja de vida", "Soy Estudiante Universitario", "Soy Periodista/ Medio de comunicación", "Línea Ética YUMMIES", "Soy un ganador", "Otros"]
    },
    en: {
      clientAreaOfInterest: ["Suggestions", "Inquiries", "Complaint"],
      requestTypes: ["For personal consumption", "Small store", "Mini Market", "Supplier", "Others"],
      exportInterests: ["I want to be a distributor", "I want product for personal consumption"],
      journalistAreas: ["Executive Presidency", "Marketing", "Corporate Relations"],
      contactReason: ["I am a client", "I want to be a client", "Exports", "I want to be a supplier", "Send Resume", "I am a University Student", "I am a Journalist/Media", "YUMMIES Ethics Line", "", "Others"]
    }
  };
  const options = dynamicOptions[locale];
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="bg-white rounded-2xl p-8"', '> <h2 class="text-primary font-sans text-2xl font-bold mb-6"> ', ' </h2> <form class="space-y-6" id="contactForm"> <!-- Contact Reason Dropdown --> <div> <label class="block text-gray-700 font-medium mb-2"> ', ' *\n</label> <select name="contactReason" id="contactReasonSelect" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"> <option value="">', "</option> ", ' </select> </div> <!-- Country Selector --> <div> <label class="block text-gray-700 font-medium mb-2"> ', ' *\n</label> <select name="country" id="countrySelect" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"> <option value="">', '</option> </select> </div> <!-- City Selector --> <div> <label class="block text-gray-700 font-medium mb-2"> ', ' *\n</label> <select name="city" id="departmentSelect" required disabled class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"> <option value="">', '</option> </select> </div> <!-- Name --> <div> <label class="block text-gray-700 font-medium mb-2"> ', ' *\n</label> <input type="text" name="name" required', ' class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"> </div> <!-- Email --> <div> <label class="block text-gray-700 font-medium mb-2"> ', ' *\n</label> <input type="email" name="email" required', ' class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"> </div> <!-- Phone --> <div> <label class="block text-gray-700 font-medium mb-2"> ', ' </label> <input type="number" name="phone"', ' class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"> </div> <!-- Dynamic Fields Container --> <div id="dynamicFields" class="space-y-6"> <!-- Dynamic fields will be inserted here --> </div> <!-- Submit Button --> <div> <button type="submit" id="submitButton" class="w-full py-3 px-6 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all"> ', " </button> </div> </form> </div> <!-- Success Modal --> ", " <script>(function(){", `
  // Countries data
  const countriesData = {
    'Guatemala': [
      'Guatemala', 'Alta Verapaz', 'Baja Verapaz', 'Chimaltenango', 'Chiquimula',
      'El Progreso', 'Escuintla', 'Huehuetenango', 'Izabal', 'Jalapa',
      'Jutiapa', 'Petén', 'Quetzaltenango', 'Quiché', 'Retalhuleu',
      'Sacatepéquez', 'San Marcos', 'Santa Rosa', 'Sololá', 'Suchitepéquez',
      'Totonicapán', 'Zacapa'
    ],
    'El Salvador': [
      'Ahuachapán', 'Cabañas', 'Chalatenango', 'Cuscatlán', 'La Libertad',
      'La Paz', 'La Unión', 'Morazán', 'San Miguel', 'San Salvador',
      'San Vicente', 'Santa Ana', 'Sonsonate', 'Usulután'
    ],
    'Honduras': [
      'Atlántida', 'Choluteca', 'Colón', 'Comayagua', 'Copán', 'Cortés',
      'El Paraíso', 'Francisco Morazán', 'Gracias a Dios', 'Intibucá',
      'Islas de la Bahía', 'La Paz', 'Lempira', 'Ocotepeque', 'Olancho',
      'Santa Bárbara', 'Valle', 'Yoro'
    ],
    'Nicaragua': [
      'Boaco', 'Carazo', 'Chinandega', 'Chontales', 'Estelí', 'Granada',
      'Jinotega', 'León', 'Madriz', 'Managua', 'Masaya', 'Matagalpa',
      'Nueva Segovia', 'Río San Juan', 'Rivas', 'Región Autónoma del Atlántico Norte',
      'Región Autónoma del Atlántico Sur'
    ],
    'Costa Rica': [
      'San José', 'Alajuela', 'Cartago', 'Heredia', 'Guanacaste', 'Puntarenas', 'Limón'
    ],
    'República Dominicana': [
      'Distrito Nacional', 'Azua', 'Baoruco', 'Barahona', 'Dajabón', 'Duarte',
      'Elías Piña', 'El Seibo', 'Espaillat', 'Hato Mayor', 'Hermanas Mirabal',
      'Independencia', 'La Altagracia', 'La Romana', 'La Vega', 'María Trinidad Sánchez',
      'Monseñor Nouel', 'Monte Cristi', 'Monte Plata', 'Pedernales', 'Peravia',
      'Puerto Plata', 'Samaná', 'San Cristóbal', 'San José de Ocoa', 'San Juan',
      'San Pedro de Macorís', 'Sánchez Ramírez', 'Santiago', 'Santiago Rodríguez',
      'Santo Domingo', 'Valverde'
    ]
  };

  // Simple file validation function
  function validateFile(file) {
    if (file.size > 10 * 1024 * 1024) {
      return { valid: false, error: locale === 'es' ? 'El archivo debe ser menor a 10MB' : 'File must be smaller than 10MB' };
    }
    
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
    if (!allowedTypes.includes(file.type)) {
      return { valid: false, error: locale === 'es' ? 'Solo se permiten archivos PDF, JPG y PNG' : 'Only PDF, JPG and PNG files are allowed' };
    }
    
    return { valid: true };
  }

  // Form submission function using the new API
  async function submitContactForm(formData) {
    try {
      // Handle "Enviar Hoja de vida" redirect case
      if (formData.contactReason === 'Enviar Hoja de vida') {
        window.location.href = 'https://www.dinant.com/buscamos-talento-como-tu/';
        return { success: true, message: 'Redirecting to careers page...' };
      }

      // Map contact reason to template
      function getTemplateByContactReason(contactReason) {
        const templateMap = {
          'Soy cliente': 'client',
          'Quiero ser cliente': 'ser_cliente',
          'Exportaciones': 'exportaciones',
          'Quiero ser proveedor': 'ser_proveedor',
          'Soy Estudiante Universitario': 'estudiante_universitario',
          'Soy Periodista/ Medio de comunicación': 'periodista_medio',
          'Línea Ética YUMMIES': 'linea_etica',
          'Otros': 'otros',
          'Soy un ganador': 'ganador'
        };
        
        return templateMap[contactReason] || 'otros';
      }

      // Validate file if present
      if (formData.file && formData.file instanceof File && formData.file.size > 0) {
        const fileValidation = validateFile(formData.file);
        if (!fileValidation.valid) {
          return {
            success: false,
            message: fileValidation.error || 'Invalid file'
          };
        }
      }

      // Create FormData for multipart submission
      const multipartData = new FormData();

      // Add template field based on contact reason
      const template = getTemplateByContactReason(formData.contactReason);
      multipartData.append('template', template);
      multipartData.append('site', 'snacksyummies');
      // Add all form fields according to the API structure
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          if (key === 'file' && value instanceof File) {
            // Add file with proper field name for attachments
            multipartData.append('attachments', value);
          } else {
            // Convert all other fields to string
            multipartData.append(key, String(value));
          }
        }
      });

      // Build full API URL
      const apiUrl = \`\${apiHost}\${contactFormPath}\`;

      console.log('Submitting contact form to:', apiUrl);
      console.log('Template for contact reason "' + formData.contactReason + '":', template);

      // Submit to API
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': apiToken
        },
        body: multipartData,
      });

      if (!response.ok) {
        let errorMessage = \`HTTP error! status: \${response.status}\`;
        
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorData.error || errorMessage;
        } catch (parseError) {
          console.error('Error parsing error response:', parseError);
        }

        throw new Error(errorMessage);
      }

      const result = await response.json();
      return {
        success: true,
        message: result.message || (locale === 'es' ? 'Formulario enviado exitosamente' : 'Form submitted successfully'),
        data: result.data
      };

    } catch (error) {
      console.error('Contact form submission error:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : (locale === 'es' ? 'Error al enviar el formulario' : 'Error sending form')
      };
    }
  }

  // Initialize the form functionality
  function initFormFunctionality() {
    const contactReasonSelect = document.getElementById('contactReasonSelect');
    const countrySelect = document.getElementById('countrySelect');
    const citySelect = document.getElementById('departmentSelect');
    const dynamicFields = document.getElementById('dynamicFields');
    const form = document.getElementById('contactForm');

    // Debug: Check if elements exist
    console.log('Form elements found:', {
      contactReasonSelect: !!contactReasonSelect,
      countrySelect: !!countrySelect,
      citySelect: !!citySelect,
      dynamicFields: !!dynamicFields,
      form: !!form
    });

    // Debug: Check if variables are passed correctly
    console.log('Script variables:', { labels, options, locale, apiHost, apiToken, contactFormPath });

    // If any of the required elements are missing, exit early
    if (!contactReasonSelect || !countrySelect || !citySelect || !dynamicFields || !form) {
      console.error('Required form elements not found');
      return;
    }

    // Populate countries
    if (countrySelect) {
      // Make sure we don't add duplicates
      if (countrySelect.options.length <= 1) {
        Object.keys(countriesData).forEach(country => {
          const option = document.createElement('option');
          option.value = country;
          option.textContent = country;
          countrySelect.appendChild(option);
        });
      }
    }

    // Handle contact reason change
    contactReasonSelect.onchange = function() {
      const selectedReason = this.value;
      console.log('Contact reason changed to:', selectedReason);
      updateDynamicFields(selectedReason);
    };

    // Handle country change
    countrySelect.onchange = function() {
      const selectedCountry = this.value;
      
      // Clear city options
      citySelect.innerHTML = \`<option value="">\${departmentPlaceholder}</option>\`;
      
      if (selectedCountry && countriesData[selectedCountry]) {
        // Enable city select
        citySelect.disabled = false;
        citySelect.classList.remove('disabled:bg-gray-100', 'disabled:cursor-not-allowed');
        
        // Add cities for selected country
        countriesData[selectedCountry].forEach(function(city) {
          const option = document.createElement('option');
          option.value = city;
          option.textContent = city;
          citySelect.appendChild(option);
        });
      } else {
        // Disable city select if no country selected
        citySelect.disabled = true;
        citySelect.classList.add('disabled:bg-gray-100', 'disabled:cursor-not-allowed');
      }
    };

    // Handle form submission
    form.onsubmit = async function(e) {
      e.preventDefault();
      
      const submitButton = document.getElementById('submitButton');
      const originalText = submitButton ? submitButton.textContent : '';
      
      try {
        // Show loading state
        if (submitButton) {
          submitButton.disabled = true;
          submitButton.textContent = locale === 'es' ? 'Enviando...' : 'Sending...';
        }
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());
        
        // Convert phone to number if present
        if (data.phone && data.phone !== '') {
          data.phone = Number(data.phone);
        }
        
        // Handle file upload
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput && fileInput.files[0]) {
          data.file = fileInput.files[0];
        }
        
        console.log('Form data to submit:', data);
        
        // Submit form
        const result = await submitContactForm(data);
        
        if (result.success) {
          // Show success modal instead of alert
          if (window.showSuccessModal) {
            const successTitle = locale === 'es' ? '¡Gracias por tu mensaje!' : 'Thank you for your message!';
            const successMessage = locale === 'es' ? 'Hemos recibido tu información. Te contactaremos pronto.' : 'We have received your information. We will contact you soon.';
            window.showSuccessModal(successMessage, successTitle);
          } else {
            // Fallback to alert if modal function not available
            alert(locale === 'es' ? '¡Gracias por tu mensaje! Te contactaremos pronto.' : 'Thank you for your message! We will contact you soon.');
          }
          
          // Reset form
          this.reset();
          if (citySelect) {
            citySelect.disabled = true;
            citySelect.classList.add('disabled:bg-gray-100', 'disabled:cursor-not-allowed');
            citySelect.innerHTML = \`<option value="">\${departmentPlaceholder}</option>\`;
          }
          if (dynamicFields) {
            dynamicFields.innerHTML = '';
          }
        } else {
          // Show error message
          alert(result.message);
        }
        
      } catch (error) {
        console.error('Form submission error:', error);
        alert(locale === 'es' ? 'Error al enviar el formulario' : 'Error sending form');
      } finally {
        // Restore button state
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = originalText;
        }
      }
    };
    
    // Initialize dynamic fields with default contact reason if selected
    if (contactReasonSelect.value) {
      updateDynamicFields(contactReasonSelect.value);
    }
  }

  // Initialize on DOMContentLoaded (initial page load)
  document.addEventListener('DOMContentLoaded', initFormFunctionality);
  
  // Also initialize on astro:page-load (for client-side navigation)
  document.addEventListener('astro:page-load', initFormFunctionality);

  // Function to update dynamic fields based on contact reason
  function updateDynamicFields(contactReason) {
    if (!dynamicFields) {
      console.error('Dynamic fields container not found');
      return;
    }
    
    console.log('Updating dynamic fields for reason:', contactReason);
    
    // Clear existing dynamic fields
    dynamicFields.innerHTML = '';
    
    // Handle redirect case
    if (contactReason === 'Enviar Hoja de vida') {
      window.location.href = 'https://www.dinant.com/buscamos-talento-como-tu/';
      return;
    }
    
    // Create dynamic fields based on contact reason
    switch (contactReason) {
      case 'Soy cliente':
        createClientFields();
        break;
      case 'Quiero ser cliente':
        createProspectiveClientFields();
        break;
      case 'Exportaciones':
        createExportsFields();
        break;
      case 'Quiero ser proveedor':
        createSupplierFields();
        break;
      case 'Soy Estudiante Universitario':
        createStudentFields();
        break;
      case 'Soy Periodista/ Medio de comunicación':
        createJournalistFields();
        break;
      case 'Línea Ética YUMMIES':
        createEthicsLineFields();
        break;
      case 'Soy un ganador':
        createWinnerFields();
        break;
      case 'Otros':
        createOthersFields();
        break;
      default:
        console.log('No specific fields for reason:', contactReason);
    }
  }

  // Field creation functions
  function createClientFields() {
    if (!labels || !options) {
      console.error('Labels or options not available');
      return;
    }
    
    dynamicFields.innerHTML = \`
      <div>
        <label class="block text-gray-700 font-medium mb-2">\${labels.clientCode}</label>
        <input type="text" name="clientCode" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
      </div>
      <div>
        <label class="block text-gray-700 font-medium mb-2">\${labels.areaOfInterest} *</label>
        <select name="interestArea" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
          <option value="">\${locale === 'es' ? 'Selecciona una opción' : 'Select an option'}</option>
          \${options.clientAreaOfInterest.map(option => \`<option value="\${option}">\${option}</option>\`).join('')}
        </select>
      </div>
      <div>
        <label class="block text-gray-700 font-medium mb-2">\${labels.message}</label>
        <textarea name="message" rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"></textarea>
      </div>
      <div>
        <label class="block text-gray-700 font-medium mb-2">\${labels.file}</label>
        <input type="file" name="file" accept=".pdf,.jpg,.jpeg,.png" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
        <p class="text-sm text-gray-500 mt-1">\${labels.fileHelp}</p>
      </div>
    \`;
  }

  function createProspectiveClientFields() {
    if (!labels || !options) return;
    
    dynamicFields.innerHTML = \`
      <div>
        <label class="block text-gray-700 font-medium mb-2">\${labels.requestType} *</label>
        <select name="requestType" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
          <option value="">\${locale === 'es' ? 'Selecciona una opción' : 'Select an option'}</option>
          \${options.requestTypes.map(option => \`<option value="\${option}">\${option}</option>\`).join('')}
        </select>
      </div>
      <div>
        <label class="block text-gray-700 font-medium mb-2">\${labels.file}</label>
        <input type="file" name="file" accept=".pdf,.jpg,.jpeg,.png" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
        <p class="text-sm text-gray-500 mt-1">\${labels.fileHelp}</p>
      </div>
    \`;
  }

  function createExportsFields() {
    if (!labels || !options) return;
    
    dynamicFields.innerHTML = \`
      <div>
        <label class="block text-gray-700 font-medium mb-2">\${labels.interest} *</label>
        <select name="interest" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
          <option value="">\${locale === 'es' ? 'Selecciona una opción' : 'Select an option'}</option>
          \${options.exportInterests.map(option => \`<option value="\${option}">\${option}</option>\`).join('')}
        </select>
      </div>
    \`;
  }

  function createSupplierFields() {
    if (!labels) return;
    
    dynamicFields.innerHTML = \`
      <div>
        <label class="block text-gray-700 font-medium mb-2">\${labels.areaOfInterestSupplier} *</label>
        <input type="text" name="areaOfInterest" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
      </div>
      <div>
        <label class="block text-gray-700 font-medium mb-2">\${labels.file}</label>
        <input type="file" name="file" accept=".pdf,.jpg,.jpeg,.png" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
        <p class="text-sm text-gray-500 mt-1">\${labels.fileHelp}</p>
      </div>
    \`;
  }

  function createStudentFields() {
    if (!labels) return;
    
    dynamicFields.innerHTML = \`
      <div>
        <label class="block text-gray-700 font-medium mb-2">\${labels.question} *</label>
        <textarea name="question" required rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"></textarea>
      </div>
      <div>
        <label class="block text-gray-700 font-medium mb-2">\${labels.file}</label>
        <input type="file" name="file" accept=".pdf,.jpg,.jpeg,.png" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
        <p class="text-sm text-gray-500 mt-1">\${labels.fileHelp}</p>
      </div>
    \`;
  }

  function createJournalistFields() {
    if (!labels || !options) return;
    
    dynamicFields.innerHTML = \`
      <div>
        <label class="block text-gray-700 font-medium mb-2">\${labels.areaOfInterest} *</label>
        <select name="areaOfInterest" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
          <option value="">\${locale === 'es' ? 'Selecciona una opción' : 'Select an option'}</option>
          \${options.journalistAreas.map(option => \`<option value="\${option}">\${option}</option>\`).join('')}
        </select>
      </div>
      <div>
        <label class="block text-gray-700 font-medium mb-2">\${labels.question} *</label>
        <textarea name="question" required rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"></textarea>
      </div>
    \`;
  }

  function createEthicsLineFields() {
    if (!labels) return;
    
    dynamicFields.innerHTML = \`
      <div>
        <label class="block text-gray-700 font-medium mb-2">\${labels.comments || 'Comentarios'} *</label>
        <textarea name="message" required rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"></textarea>
        <p class="text-sm text-gray-500 mt-1">\${labels.ethicsLineHelp || 'Si eres empleado Dinant, especifica tu cargo.'}</p>
      </div>
      <div>
        <label class="block text-gray-700 font-medium mb-2">\${labels.file || 'Adjuntar archivo'}</label>
        <input type="file" name="file" accept=".pdf,.jpg,.jpeg,.png" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
        <p class="text-sm text-gray-500 mt-1">\${labels.fileHelp || 'Formatos permitidos: PDF, JPG, PNG (max 10MB)'}</p>
      </div>
    \`;
  }
  
  function createWinnerFields() {
    if (!labels) return;
    
    // Solo disponible en español
    if (locale !== 'es') {
      dynamicFields.innerHTML = \`
        <div class="alert alert-info">
          <p>Esta opción solo está disponible en español.</p>
        </div>
      \`;
      return;
    }
    
    dynamicFields.innerHTML = \`
      <div>
        <label class="block text-gray-700 font-medium mb-2">Dinámica o promoción en la que ganó *</label>
        <input type="text" name="dynamicOrPromotion" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
      </div>
      <div>
        <label class="block text-gray-700 font-medium mb-2">Premio adjudicado *</label>
        <input type="text" name="award" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
      </div>
    \`;
  }

  function createOthersFields() {
    if (!labels) return;
    
    dynamicFields.innerHTML = \`
      <div>
        <label class="block text-gray-700 font-medium mb-2">\${labels.message}</label>
        <textarea name="message" rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"></textarea>
      </div>
      <div>
        <label class="block text-gray-700 font-medium mb-2">\${labels.file}</label>
        <input type="file" name="file" accept=".pdf,.jpg,.jpeg,.png" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
        <p class="text-sm text-gray-500 mt-1">\${labels.fileHelp}</p>
      </div>
    \`;
  }
})();</script>`], ["", '<div class="bg-white rounded-2xl p-8"', '> <h2 class="text-primary font-sans text-2xl font-bold mb-6"> ', ' </h2> <form class="space-y-6" id="contactForm"> <!-- Contact Reason Dropdown --> <div> <label class="block text-gray-700 font-medium mb-2"> ', ' *\n</label> <select name="contactReason" id="contactReasonSelect" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"> <option value="">', "</option> ", ' </select> </div> <!-- Country Selector --> <div> <label class="block text-gray-700 font-medium mb-2"> ', ' *\n</label> <select name="country" id="countrySelect" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"> <option value="">', '</option> </select> </div> <!-- City Selector --> <div> <label class="block text-gray-700 font-medium mb-2"> ', ' *\n</label> <select name="city" id="departmentSelect" required disabled class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"> <option value="">', '</option> </select> </div> <!-- Name --> <div> <label class="block text-gray-700 font-medium mb-2"> ', ' *\n</label> <input type="text" name="name" required', ' class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"> </div> <!-- Email --> <div> <label class="block text-gray-700 font-medium mb-2"> ', ' *\n</label> <input type="email" name="email" required', ' class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"> </div> <!-- Phone --> <div> <label class="block text-gray-700 font-medium mb-2"> ', ' </label> <input type="number" name="phone"', ' class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"> </div> <!-- Dynamic Fields Container --> <div id="dynamicFields" class="space-y-6"> <!-- Dynamic fields will be inserted here --> </div> <!-- Submit Button --> <div> <button type="submit" id="submitButton" class="w-full py-3 px-6 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all"> ', " </button> </div> </form> </div> <!-- Success Modal --> ", " <script>(function(){", `
  // Countries data
  const countriesData = {
    'Guatemala': [
      'Guatemala', 'Alta Verapaz', 'Baja Verapaz', 'Chimaltenango', 'Chiquimula',
      'El Progreso', 'Escuintla', 'Huehuetenango', 'Izabal', 'Jalapa',
      'Jutiapa', 'Petén', 'Quetzaltenango', 'Quiché', 'Retalhuleu',
      'Sacatepéquez', 'San Marcos', 'Santa Rosa', 'Sololá', 'Suchitepéquez',
      'Totonicapán', 'Zacapa'
    ],
    'El Salvador': [
      'Ahuachapán', 'Cabañas', 'Chalatenango', 'Cuscatlán', 'La Libertad',
      'La Paz', 'La Unión', 'Morazán', 'San Miguel', 'San Salvador',
      'San Vicente', 'Santa Ana', 'Sonsonate', 'Usulután'
    ],
    'Honduras': [
      'Atlántida', 'Choluteca', 'Colón', 'Comayagua', 'Copán', 'Cortés',
      'El Paraíso', 'Francisco Morazán', 'Gracias a Dios', 'Intibucá',
      'Islas de la Bahía', 'La Paz', 'Lempira', 'Ocotepeque', 'Olancho',
      'Santa Bárbara', 'Valle', 'Yoro'
    ],
    'Nicaragua': [
      'Boaco', 'Carazo', 'Chinandega', 'Chontales', 'Estelí', 'Granada',
      'Jinotega', 'León', 'Madriz', 'Managua', 'Masaya', 'Matagalpa',
      'Nueva Segovia', 'Río San Juan', 'Rivas', 'Región Autónoma del Atlántico Norte',
      'Región Autónoma del Atlántico Sur'
    ],
    'Costa Rica': [
      'San José', 'Alajuela', 'Cartago', 'Heredia', 'Guanacaste', 'Puntarenas', 'Limón'
    ],
    'República Dominicana': [
      'Distrito Nacional', 'Azua', 'Baoruco', 'Barahona', 'Dajabón', 'Duarte',
      'Elías Piña', 'El Seibo', 'Espaillat', 'Hato Mayor', 'Hermanas Mirabal',
      'Independencia', 'La Altagracia', 'La Romana', 'La Vega', 'María Trinidad Sánchez',
      'Monseñor Nouel', 'Monte Cristi', 'Monte Plata', 'Pedernales', 'Peravia',
      'Puerto Plata', 'Samaná', 'San Cristóbal', 'San José de Ocoa', 'San Juan',
      'San Pedro de Macorís', 'Sánchez Ramírez', 'Santiago', 'Santiago Rodríguez',
      'Santo Domingo', 'Valverde'
    ]
  };

  // Simple file validation function
  function validateFile(file) {
    if (file.size > 10 * 1024 * 1024) {
      return { valid: false, error: locale === 'es' ? 'El archivo debe ser menor a 10MB' : 'File must be smaller than 10MB' };
    }
    
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
    if (!allowedTypes.includes(file.type)) {
      return { valid: false, error: locale === 'es' ? 'Solo se permiten archivos PDF, JPG y PNG' : 'Only PDF, JPG and PNG files are allowed' };
    }
    
    return { valid: true };
  }

  // Form submission function using the new API
  async function submitContactForm(formData) {
    try {
      // Handle "Enviar Hoja de vida" redirect case
      if (formData.contactReason === 'Enviar Hoja de vida') {
        window.location.href = 'https://www.dinant.com/buscamos-talento-como-tu/';
        return { success: true, message: 'Redirecting to careers page...' };
      }

      // Map contact reason to template
      function getTemplateByContactReason(contactReason) {
        const templateMap = {
          'Soy cliente': 'client',
          'Quiero ser cliente': 'ser_cliente',
          'Exportaciones': 'exportaciones',
          'Quiero ser proveedor': 'ser_proveedor',
          'Soy Estudiante Universitario': 'estudiante_universitario',
          'Soy Periodista/ Medio de comunicación': 'periodista_medio',
          'Línea Ética YUMMIES': 'linea_etica',
          'Otros': 'otros',
          'Soy un ganador': 'ganador'
        };
        
        return templateMap[contactReason] || 'otros';
      }

      // Validate file if present
      if (formData.file && formData.file instanceof File && formData.file.size > 0) {
        const fileValidation = validateFile(formData.file);
        if (!fileValidation.valid) {
          return {
            success: false,
            message: fileValidation.error || 'Invalid file'
          };
        }
      }

      // Create FormData for multipart submission
      const multipartData = new FormData();

      // Add template field based on contact reason
      const template = getTemplateByContactReason(formData.contactReason);
      multipartData.append('template', template);
      multipartData.append('site', 'snacksyummies');
      // Add all form fields according to the API structure
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          if (key === 'file' && value instanceof File) {
            // Add file with proper field name for attachments
            multipartData.append('attachments', value);
          } else {
            // Convert all other fields to string
            multipartData.append(key, String(value));
          }
        }
      });

      // Build full API URL
      const apiUrl = \\\`\\\${apiHost}\\\${contactFormPath}\\\`;

      console.log('Submitting contact form to:', apiUrl);
      console.log('Template for contact reason "' + formData.contactReason + '":', template);

      // Submit to API
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': apiToken
        },
        body: multipartData,
      });

      if (!response.ok) {
        let errorMessage = \\\`HTTP error! status: \\\${response.status}\\\`;
        
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorData.error || errorMessage;
        } catch (parseError) {
          console.error('Error parsing error response:', parseError);
        }

        throw new Error(errorMessage);
      }

      const result = await response.json();
      return {
        success: true,
        message: result.message || (locale === 'es' ? 'Formulario enviado exitosamente' : 'Form submitted successfully'),
        data: result.data
      };

    } catch (error) {
      console.error('Contact form submission error:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : (locale === 'es' ? 'Error al enviar el formulario' : 'Error sending form')
      };
    }
  }

  // Initialize the form functionality
  function initFormFunctionality() {
    const contactReasonSelect = document.getElementById('contactReasonSelect');
    const countrySelect = document.getElementById('countrySelect');
    const citySelect = document.getElementById('departmentSelect');
    const dynamicFields = document.getElementById('dynamicFields');
    const form = document.getElementById('contactForm');

    // Debug: Check if elements exist
    console.log('Form elements found:', {
      contactReasonSelect: !!contactReasonSelect,
      countrySelect: !!countrySelect,
      citySelect: !!citySelect,
      dynamicFields: !!dynamicFields,
      form: !!form
    });

    // Debug: Check if variables are passed correctly
    console.log('Script variables:', { labels, options, locale, apiHost, apiToken, contactFormPath });

    // If any of the required elements are missing, exit early
    if (!contactReasonSelect || !countrySelect || !citySelect || !dynamicFields || !form) {
      console.error('Required form elements not found');
      return;
    }

    // Populate countries
    if (countrySelect) {
      // Make sure we don't add duplicates
      if (countrySelect.options.length <= 1) {
        Object.keys(countriesData).forEach(country => {
          const option = document.createElement('option');
          option.value = country;
          option.textContent = country;
          countrySelect.appendChild(option);
        });
      }
    }

    // Handle contact reason change
    contactReasonSelect.onchange = function() {
      const selectedReason = this.value;
      console.log('Contact reason changed to:', selectedReason);
      updateDynamicFields(selectedReason);
    };

    // Handle country change
    countrySelect.onchange = function() {
      const selectedCountry = this.value;
      
      // Clear city options
      citySelect.innerHTML = \\\`<option value="">\\\${departmentPlaceholder}</option>\\\`;
      
      if (selectedCountry && countriesData[selectedCountry]) {
        // Enable city select
        citySelect.disabled = false;
        citySelect.classList.remove('disabled:bg-gray-100', 'disabled:cursor-not-allowed');
        
        // Add cities for selected country
        countriesData[selectedCountry].forEach(function(city) {
          const option = document.createElement('option');
          option.value = city;
          option.textContent = city;
          citySelect.appendChild(option);
        });
      } else {
        // Disable city select if no country selected
        citySelect.disabled = true;
        citySelect.classList.add('disabled:bg-gray-100', 'disabled:cursor-not-allowed');
      }
    };

    // Handle form submission
    form.onsubmit = async function(e) {
      e.preventDefault();
      
      const submitButton = document.getElementById('submitButton');
      const originalText = submitButton ? submitButton.textContent : '';
      
      try {
        // Show loading state
        if (submitButton) {
          submitButton.disabled = true;
          submitButton.textContent = locale === 'es' ? 'Enviando...' : 'Sending...';
        }
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());
        
        // Convert phone to number if present
        if (data.phone && data.phone !== '') {
          data.phone = Number(data.phone);
        }
        
        // Handle file upload
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput && fileInput.files[0]) {
          data.file = fileInput.files[0];
        }
        
        console.log('Form data to submit:', data);
        
        // Submit form
        const result = await submitContactForm(data);
        
        if (result.success) {
          // Show success modal instead of alert
          if (window.showSuccessModal) {
            const successTitle = locale === 'es' ? '¡Gracias por tu mensaje!' : 'Thank you for your message!';
            const successMessage = locale === 'es' ? 'Hemos recibido tu información. Te contactaremos pronto.' : 'We have received your information. We will contact you soon.';
            window.showSuccessModal(successMessage, successTitle);
          } else {
            // Fallback to alert if modal function not available
            alert(locale === 'es' ? '¡Gracias por tu mensaje! Te contactaremos pronto.' : 'Thank you for your message! We will contact you soon.');
          }
          
          // Reset form
          this.reset();
          if (citySelect) {
            citySelect.disabled = true;
            citySelect.classList.add('disabled:bg-gray-100', 'disabled:cursor-not-allowed');
            citySelect.innerHTML = \\\`<option value="">\\\${departmentPlaceholder}</option>\\\`;
          }
          if (dynamicFields) {
            dynamicFields.innerHTML = '';
          }
        } else {
          // Show error message
          alert(result.message);
        }
        
      } catch (error) {
        console.error('Form submission error:', error);
        alert(locale === 'es' ? 'Error al enviar el formulario' : 'Error sending form');
      } finally {
        // Restore button state
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = originalText;
        }
      }
    };
    
    // Initialize dynamic fields with default contact reason if selected
    if (contactReasonSelect.value) {
      updateDynamicFields(contactReasonSelect.value);
    }
  }

  // Initialize on DOMContentLoaded (initial page load)
  document.addEventListener('DOMContentLoaded', initFormFunctionality);
  
  // Also initialize on astro:page-load (for client-side navigation)
  document.addEventListener('astro:page-load', initFormFunctionality);

  // Function to update dynamic fields based on contact reason
  function updateDynamicFields(contactReason) {
    if (!dynamicFields) {
      console.error('Dynamic fields container not found');
      return;
    }
    
    console.log('Updating dynamic fields for reason:', contactReason);
    
    // Clear existing dynamic fields
    dynamicFields.innerHTML = '';
    
    // Handle redirect case
    if (contactReason === 'Enviar Hoja de vida') {
      window.location.href = 'https://www.dinant.com/buscamos-talento-como-tu/';
      return;
    }
    
    // Create dynamic fields based on contact reason
    switch (contactReason) {
      case 'Soy cliente':
        createClientFields();
        break;
      case 'Quiero ser cliente':
        createProspectiveClientFields();
        break;
      case 'Exportaciones':
        createExportsFields();
        break;
      case 'Quiero ser proveedor':
        createSupplierFields();
        break;
      case 'Soy Estudiante Universitario':
        createStudentFields();
        break;
      case 'Soy Periodista/ Medio de comunicación':
        createJournalistFields();
        break;
      case 'Línea Ética YUMMIES':
        createEthicsLineFields();
        break;
      case 'Soy un ganador':
        createWinnerFields();
        break;
      case 'Otros':
        createOthersFields();
        break;
      default:
        console.log('No specific fields for reason:', contactReason);
    }
  }

  // Field creation functions
  function createClientFields() {
    if (!labels || !options) {
      console.error('Labels or options not available');
      return;
    }
    
    dynamicFields.innerHTML = \\\`
      <div>
        <label class="block text-gray-700 font-medium mb-2">\\\${labels.clientCode}</label>
        <input type="text" name="clientCode" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
      </div>
      <div>
        <label class="block text-gray-700 font-medium mb-2">\\\${labels.areaOfInterest} *</label>
        <select name="interestArea" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
          <option value="">\\\${locale === 'es' ? 'Selecciona una opción' : 'Select an option'}</option>
          \\\${options.clientAreaOfInterest.map(option => \\\`<option value="\\\${option}">\\\${option}</option>\\\`).join('')}
        </select>
      </div>
      <div>
        <label class="block text-gray-700 font-medium mb-2">\\\${labels.message}</label>
        <textarea name="message" rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"></textarea>
      </div>
      <div>
        <label class="block text-gray-700 font-medium mb-2">\\\${labels.file}</label>
        <input type="file" name="file" accept=".pdf,.jpg,.jpeg,.png" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
        <p class="text-sm text-gray-500 mt-1">\\\${labels.fileHelp}</p>
      </div>
    \\\`;
  }

  function createProspectiveClientFields() {
    if (!labels || !options) return;
    
    dynamicFields.innerHTML = \\\`
      <div>
        <label class="block text-gray-700 font-medium mb-2">\\\${labels.requestType} *</label>
        <select name="requestType" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
          <option value="">\\\${locale === 'es' ? 'Selecciona una opción' : 'Select an option'}</option>
          \\\${options.requestTypes.map(option => \\\`<option value="\\\${option}">\\\${option}</option>\\\`).join('')}
        </select>
      </div>
      <div>
        <label class="block text-gray-700 font-medium mb-2">\\\${labels.file}</label>
        <input type="file" name="file" accept=".pdf,.jpg,.jpeg,.png" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
        <p class="text-sm text-gray-500 mt-1">\\\${labels.fileHelp}</p>
      </div>
    \\\`;
  }

  function createExportsFields() {
    if (!labels || !options) return;
    
    dynamicFields.innerHTML = \\\`
      <div>
        <label class="block text-gray-700 font-medium mb-2">\\\${labels.interest} *</label>
        <select name="interest" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
          <option value="">\\\${locale === 'es' ? 'Selecciona una opción' : 'Select an option'}</option>
          \\\${options.exportInterests.map(option => \\\`<option value="\\\${option}">\\\${option}</option>\\\`).join('')}
        </select>
      </div>
    \\\`;
  }

  function createSupplierFields() {
    if (!labels) return;
    
    dynamicFields.innerHTML = \\\`
      <div>
        <label class="block text-gray-700 font-medium mb-2">\\\${labels.areaOfInterestSupplier} *</label>
        <input type="text" name="areaOfInterest" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
      </div>
      <div>
        <label class="block text-gray-700 font-medium mb-2">\\\${labels.file}</label>
        <input type="file" name="file" accept=".pdf,.jpg,.jpeg,.png" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
        <p class="text-sm text-gray-500 mt-1">\\\${labels.fileHelp}</p>
      </div>
    \\\`;
  }

  function createStudentFields() {
    if (!labels) return;
    
    dynamicFields.innerHTML = \\\`
      <div>
        <label class="block text-gray-700 font-medium mb-2">\\\${labels.question} *</label>
        <textarea name="question" required rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"></textarea>
      </div>
      <div>
        <label class="block text-gray-700 font-medium mb-2">\\\${labels.file}</label>
        <input type="file" name="file" accept=".pdf,.jpg,.jpeg,.png" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
        <p class="text-sm text-gray-500 mt-1">\\\${labels.fileHelp}</p>
      </div>
    \\\`;
  }

  function createJournalistFields() {
    if (!labels || !options) return;
    
    dynamicFields.innerHTML = \\\`
      <div>
        <label class="block text-gray-700 font-medium mb-2">\\\${labels.areaOfInterest} *</label>
        <select name="areaOfInterest" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
          <option value="">\\\${locale === 'es' ? 'Selecciona una opción' : 'Select an option'}</option>
          \\\${options.journalistAreas.map(option => \\\`<option value="\\\${option}">\\\${option}</option>\\\`).join('')}
        </select>
      </div>
      <div>
        <label class="block text-gray-700 font-medium mb-2">\\\${labels.question} *</label>
        <textarea name="question" required rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"></textarea>
      </div>
    \\\`;
  }

  function createEthicsLineFields() {
    if (!labels) return;
    
    dynamicFields.innerHTML = \\\`
      <div>
        <label class="block text-gray-700 font-medium mb-2">\\\${labels.comments || 'Comentarios'} *</label>
        <textarea name="message" required rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"></textarea>
        <p class="text-sm text-gray-500 mt-1">\\\${labels.ethicsLineHelp || 'Si eres empleado Dinant, especifica tu cargo.'}</p>
      </div>
      <div>
        <label class="block text-gray-700 font-medium mb-2">\\\${labels.file || 'Adjuntar archivo'}</label>
        <input type="file" name="file" accept=".pdf,.jpg,.jpeg,.png" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
        <p class="text-sm text-gray-500 mt-1">\\\${labels.fileHelp || 'Formatos permitidos: PDF, JPG, PNG (max 10MB)'}</p>
      </div>
    \\\`;
  }
  
  function createWinnerFields() {
    if (!labels) return;
    
    // Solo disponible en español
    if (locale !== 'es') {
      dynamicFields.innerHTML = \\\`
        <div class="alert alert-info">
          <p>Esta opción solo está disponible en español.</p>
        </div>
      \\\`;
      return;
    }
    
    dynamicFields.innerHTML = \\\`
      <div>
        <label class="block text-gray-700 font-medium mb-2">Dinámica o promoción en la que ganó *</label>
        <input type="text" name="dynamicOrPromotion" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
      </div>
      <div>
        <label class="block text-gray-700 font-medium mb-2">Premio adjudicado *</label>
        <input type="text" name="award" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
      </div>
    \\\`;
  }

  function createOthersFields() {
    if (!labels) return;
    
    dynamicFields.innerHTML = \\\`
      <div>
        <label class="block text-gray-700 font-medium mb-2">\\\${labels.message}</label>
        <textarea name="message" rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"></textarea>
      </div>
      <div>
        <label class="block text-gray-700 font-medium mb-2">\\\${labels.file}</label>
        <input type="file" name="file" accept=".pdf,.jpg,.jpeg,.png" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
        <p class="text-sm text-gray-500 mt-1">\\\${labels.fileHelp}</p>
      </div>
    \\\`;
  }
})();</script>`])), maybeRenderHead(), addAttribute(renderTransition($$result, "7je5dalr", "", "contact-form"), "data-astro-transition-scope"), contact.form.title, contact.form.contactReason.label, contactReasonPlaceholder, locale === "es" ? (
    // En español, mostrar todas las opciones incluido "Soy un ganador"
    dynamicOptions.es.contactReason.map((reason) => renderTemplate`<option${addAttribute(reason, "value")}>${reason}</option>`)
  ) : (
    // En inglés, mostrar solo las opciones que tienen texto (filtrar vacías)
    dynamicOptions.en.contactReason.map((reason, index) => {
      if (reason) {
        return renderTemplate`<option${addAttribute(dynamicOptions.es.contactReason[index], "value")}>${reason}</option>`;
      }
      return null;
    })
  ), countryLabel, countryPlaceholder, cityLabel, departmentPlaceholder, contact.form.fullName.label, addAttribute(contact.form.fullName.placeholder, "placeholder"), contact.form.email.label, addAttribute(contact.form.email.placeholder, "placeholder"), contact.form.phone.label, addAttribute(contact.form.phone.placeholder, "placeholder"), contact.form.submit, renderComponent($$result, "SuccessModal", $$SuccessModal, { "title": locale === "es" ? "¡Gracias por contactarnos!" : "Thank you for contacting us!", "message": locale === "es" ? "Hemos recibido tu mensaje. Te contactaremos pronto." : "We have received your message. We will contact you soon.", "buttonText": locale === "es" ? "Cerrar" : "Close" }), defineScriptVars({ departmentPlaceholder, countryPlaceholder, labels, options, locale, apiHost, apiToken, contactFormPath }));
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/components/contact/FormContact.astro", "self");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { currentLang, headerColorConfig } = Astro2.props;
  const locale = currentLang || getLocale();
  const contact = locale === "es" ? contactEs : contactEn;
  const title = contact.title;
  const metaDescription = contact.description;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "class": "bg-white", "description": metaDescription, "headerColorConfig": headerColorConfig }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="container mx-auto px-4 pt-6"> ', ' <!-- Main Contact Section --> <div class="flex flex-col justify-center items-start lg:flex-row gap-12 py-12"> <!-- Left Column - Contact Info --> <div class="w-[90%] lg:w-[40%] flex flex-col justify-center"', '> <h1 class="text-primary font-title text-5xl lg:text-6xl font-bold mb-6"> ', ' </h1> <p class="text-gray-700 text-lg mb-8 leading-relaxed"> ', ' </p> <!-- <div class="flex flex-col space-y-4">\n          <div class="flex items-center space-x-3">\n            <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">\n              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>\n              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>\n            </svg>\n            <span class="text-gray-700">{contact.email}</span>\n          </div>\n          \n          <div class="flex items-center space-x-3">\n            <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">\n              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>\n            </svg>\n            <span class="text-gray-700">{contact.phone}</span>\n          </div>\n        </div> --> <div class="mt-8"> ', ' </div> </div> <!-- Right Column - Contact Form --> <div class="w-[90%] lg:w-[60%]"> ', ' </div> </div> <!-- Offices Section --> <div class="container mx-auto mb-8"> <h2 class="text-primary font-title text-4xl font-bold mb-4 flex items-center justify-center gap-1"> <span class="font-title">', '</span> <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M39.2251 72.2894C34.3914 72.2894 29.8246 71.0982 26.0145 68.847C22.1257 66.5476 19.2211 63.2453 17.6113 59.286C15.3454 53.7106 15.8135 47.4169 18.9324 41.5612C22.0295 35.7493 27.3793 31.063 33.9934 28.3695C37.786 26.8234 41.7098 26.0394 45.6642 26.0394C50.4979 26.0394 55.0648 27.2307 58.8792 29.4819C62.768 31.7813 65.6726 35.0836 67.2824 39.0429C69.5483 44.6183 69.0803 50.912 65.9613 56.7677C62.8643 62.5796 57.5144 67.2659 50.9004 69.9594C47.1078 71.5055 43.1796 72.2894 39.2251 72.2894Z" fill="#FAF1E9"></path> <path d="M55.4026 41.642L57.0669 41.5618C57.2674 41.5518 57.4409 41.6972 57.4463 41.8826C57.4734 44.1331 56.4977 45.9727 55.1966 46.0378C53.8306 46.103 52.5946 44.1883 52.4591 41.7874C52.3236 39.3865 53.3318 37.3565 54.6925 37.2913C55.6628 37.2412 56.6007 38.1985 57.0885 39.7073C57.1536 39.9027 57.0723 40.1183 56.8988 40.2436L55.3051 41.4064C55.1912 41.4866 55.2617 41.652 55.4026 41.647V41.642Z" fill="#003278"></path> <path d="M39.4434 46.0565C38.3701 46.1486 36.8656 46.6135 35.9344 47.9068C34.5492 49.8307 35.0262 50.8709 35.0262 50.8709C35.0262 50.8709 35.0537 50.9538 35.0904 50.9952C35.1913 51.1149 35.3519 50.9538 35.3519 50.9538C35.6684 50.6592 35.7922 50.3738 36.017 50.0885C36.3885 49.6144 38.0123 46.9495 42.2277 47.29C42.3194 47.2993 42.402 47.244 42.4341 47.1612C42.4616 47.0921 42.4433 47.0185 42.3928 46.9633C42.1589 46.7055 40.8149 45.9323 39.4434 46.0519V46.0565Z" fill="#003278"></path> <path d="M58.6969 51.2992C58.6876 51.1816 58.6369 51.0815 58.54 51.0511C58.4154 51.0075 58.2723 51.0902 58.1847 51.2339C58.1847 51.2339 58.1801 51.2426 58.1754 51.2469C58.1201 51.334 58.0693 51.408 58.0324 51.4559C57.9909 51.5124 57.9401 51.5821 57.834 51.7214C57.834 51.7214 57.8248 51.7344 57.8155 51.7475C57.511 52.1218 57.1926 52.5789 56.7635 53.0446C56.2974 53.5669 55.7944 54.0632 55.2592 54.5289C53.4688 56.0872 51.3324 57.2885 49.0298 57.9676C46.0443 58.8729 42.8281 58.9034 39.8242 58.1199C39.8242 58.1199 39.7688 58.1069 39.6673 58.0851C39.5704 58.0546 39.4274 58.0111 39.2612 57.9589C39.0951 57.9066 38.9059 57.85 38.6983 57.7848L38.6706 57.7761C38.4676 57.7021 38.2507 57.6194 38.0338 57.541C37.8077 57.4627 37.5955 57.3625 37.3924 57.2755C37.1894 57.1841 36.9956 57.1101 36.8387 57.0274C36.5203 56.8707 36.3081 56.7619 36.3081 56.7619C35.0945 56.1046 34.6561 55.8217 34.4992 55.7041C34.4531 55.6737 34.4531 55.6084 34.4992 55.5779C35.339 54.9859 36.2435 54.7378 36.7972 54.4375C36.8433 54.4114 36.871 54.3678 36.8802 54.3156C36.8849 54.2634 36.8618 54.2111 36.8202 54.1763C36.6311 54.0283 36.1143 53.8803 34.6976 54.0632C33.9594 54.1589 33.2303 54.4157 32.6166 54.8031C31.6614 55.3472 30.9416 56.1699 30.3694 57.0361C30.2171 57.2755 29.991 57.5454 29.9495 57.8588C29.9356 57.9545 29.9772 58.0503 30.0602 58.1112C30.1387 58.1678 30.2402 58.1809 30.3325 58.1504C30.637 58.0503 30.8677 57.8152 31.0985 57.6716C31.3707 57.4888 31.6476 57.3147 31.9244 57.1493L32.2428 56.9621C32.4643 56.8315 32.755 56.8663 32.935 57.0448C33.0596 57.1623 33.9686 57.9153 34.4946 58.2766C34.8822 58.5421 35.0991 58.9774 35.0714 59.4301C35.0391 60.0482 35.1129 60.7229 35.3344 61.3932C35.9435 63.2083 37.577 64.7143 39.0075 65.3847C39.8657 65.7851 40.7055 65.9374 40.7055 65.9374C41.6376 66.1072 42.3529 66.0245 42.7266 65.9766C44.9323 65.6937 46.7549 64.8362 47.9916 63.6261C49.6666 61.9808 50.3772 60.3616 50.6033 59.7391C50.6679 59.565 50.7971 59.4214 50.9678 59.33C52.0061 58.7728 52.9797 58.1112 53.8472 57.3582C54.1656 57.0796 54.4701 56.788 54.7654 56.4876C54.7793 56.4746 54.7977 56.4615 54.8116 56.4485C55.8129 55.5736 56.6989 54.5942 57.4556 53.5365C57.8663 52.9967 58.1478 52.4788 58.4062 52.0478L58.42 52.0174C58.5031 51.852 58.6507 51.5516 58.6646 51.5081C58.6646 51.495 58.6876 51.4254 58.6969 51.3688C58.6969 51.347 58.6969 51.3209 58.6969 51.2992ZM58.4615 51.7301C58.4615 51.7301 58.4754 51.7257 58.4846 51.7214C58.4754 51.7214 58.4708 51.7257 58.4615 51.7301Z" fill="#003278"></path> <path d="M57.0703 35.4262C56.8122 34.8961 56.401 34.4163 55.9723 34.101C55.6749 33.8771 55.3206 33.7126 54.9487 33.6258C54.765 33.5755 54.5725 33.5526 54.3757 33.5435C54.2794 33.5344 54.1832 33.5435 54.087 33.5435H54.0738C53.9688 33.5572 53.8945 33.5572 53.737 33.5983L53.7939 33.5846C53.5795 33.6395 53.3652 33.6989 53.1508 33.7628L53.1246 33.772C52.919 33.8588 52.7221 33.9685 52.5296 34.0736C51.7597 34.5397 51.2086 35.2434 50.828 35.9699C50.4474 36.7056 50.2112 37.4779 50.0668 38.2502C49.9881 38.6843 49.905 39.1047 49.9706 39.5845C49.9793 39.6622 50.0318 39.7307 50.0975 39.7627C50.2024 39.8175 50.3337 39.7855 50.3905 39.6896C50.6355 39.2738 50.7711 38.9356 50.9548 38.57C51.1692 38.1405 51.3923 37.7247 51.6504 37.3454C52.0047 36.8245 52.3853 36.3538 52.7965 35.9837C53.2077 35.6135 53.6451 35.3485 54.1307 35.1885L54.1876 35.1748C54.1876 35.1748 54.2313 35.1566 54.2707 35.1474H54.2882C54.3319 35.1337 54.3757 35.1246 54.4238 35.12C54.5244 35.1063 54.6294 35.0972 54.7344 35.1017C54.9443 35.1063 55.1631 35.1429 55.3774 35.2251C55.688 35.3302 56.0423 35.5907 56.3617 35.9425C56.6548 36.2441 56.8997 36.6143 57.1578 36.9296C57.2059 36.989 57.2847 37.0027 57.3503 36.9707C57.4115 36.9387 57.4509 36.8747 57.4465 36.8016C57.4203 36.3766 57.3109 35.8831 57.0747 35.4216L57.0703 35.4262Z" fill="#003278"></path> <path d="M53.63 49.479C53.5351 49.038 53.3411 48.6059 53.0478 48.2593C52.4614 47.5572 51.6119 47.2602 50.8357 47.2917C50.3614 47.3142 49.8094 47.4357 49.4989 47.8318C49.4601 47.8813 49.4515 47.9578 49.486 48.0118C49.5119 48.0613 49.5636 48.0883 49.6154 48.0928C49.818 48.0928 50.0336 48.0883 50.2061 48.0838C50.9694 48.0703 51.4998 48.3989 51.7499 48.6464C52.2544 49.1325 52.3751 49.8076 52.2587 50.5232C52.2285 50.6987 52.1811 50.8742 52.1207 51.0453C52.0905 51.1308 52.056 51.2118 52.0172 51.2973C51.9741 51.3648 51.9396 51.4368 51.9008 51.5088C51.7283 51.7879 51.4567 52.0444 51.1246 52.2649C50.8357 52.4585 50.426 52.6385 49.9905 52.7645C49.7749 52.8275 49.5507 52.8905 49.3394 52.94C49.1885 52.976 48.9556 53.0075 48.8219 53.03C48.7529 53.0436 48.7012 53.1021 48.6969 53.1741C48.6969 53.2371 48.7271 53.2956 48.7831 53.3226C48.9384 53.4036 49.1669 53.4396 49.3437 53.4801C49.5852 53.5296 49.8396 53.5431 50.0983 53.5386C50.6115 53.5296 51.1332 53.4216 51.5645 53.2776C52.0474 53.1066 52.5433 52.823 52.9314 52.3639C53.022 52.2424 53.1082 52.1209 53.1945 51.9949C53.2635 51.8689 53.3324 51.7474 53.3885 51.6123C53.5049 51.3513 53.5869 51.0723 53.6386 50.7887C53.7162 50.3612 53.7205 49.9111 53.6257 49.47L53.63 49.479Z" fill="#003278"></path> <path d="M39.1751 73.5394C29.0351 73.5394 19.971 68.4729 16.4458 59.7849C14.0497 53.8754 14.5387 47.2166 17.8238 41.0351C21.0601 34.9472 26.6435 30.0412 33.5427 27.2225C47.8791 21.3665 63.5358 26.4465 68.448 38.5419C70.844 44.4514 70.3551 51.1102 67.0699 57.2917C63.8337 63.3796 58.2502 68.2856 51.351 71.1043C47.3101 72.7545 43.1581 73.535 39.1795 73.5394H39.1751ZM45.7498 27.78C42.1357 27.78 38.3571 28.4936 34.6719 29.9966C28.4172 32.5522 23.3717 36.972 20.46 42.4444C17.5971 47.8276 17.1526 53.581 19.2108 58.652C23.5006 69.2177 37.4102 73.5617 50.2219 68.3257C56.4765 65.7701 61.5221 61.3503 64.4338 55.8779C67.2966 50.4947 67.7412 44.7413 65.6829 39.6703C62.629 32.1419 54.6939 27.7755 45.7498 27.7755V27.78Z" fill="#003278"></path> <path d="M46.1485 29.2613L46.0815 28.9724L42.7229 12.8386C42.714 12.7852 42.7006 12.7364 42.6827 12.6741C42.4683 11.6563 42.254 10.6385 42.0351 9.6207C41.7582 8.32288 41.4858 7.02951 41.2178 5.75836C41.1195 5.20723 40.6416 4.78944 40.1012 4.78944C39.6993 4.78944 39.3509 5.02945 39.1857 5.42057C38.9311 6.02059 38.6586 6.69172 38.3907 7.34952C38.0244 8.24288 37.6805 9.08291 37.417 9.69181C37.3456 9.84293 37.2786 9.99404 37.2116 10.1452C37.0642 10.4741 36.9079 10.8163 36.7516 11.1185L36.7382 11.1496L36.7069 11.2385C36.6712 11.3141 36.4746 11.763 36.1977 12.3897C35.6841 13.5453 34.6435 15.8964 34.1343 17.0343C32.9553 16.1676 32.0084 15.3187 30.7623 14.2075C30.0745 13.5942 29.293 12.8964 28.3461 12.0786C27.7968 11.6119 27.2519 11.1185 26.6177 10.5541C25.845 9.86071 24.9652 9.06957 23.862 8.12732C23.6119 7.90954 23.3082 7.79398 23.0045 7.79398C22.7008 7.79398 22.3882 7.91843 22.1693 8.1451C21.9326 8.38955 21.812 8.72734 21.8254 9.09179C21.8522 9.81182 21.879 10.523 21.9103 11.2296C21.9281 11.8252 21.9594 12.3986 21.9862 12.9719C22.0085 13.443 22.0353 13.9186 22.0532 14.3897V14.4697C22.0532 14.5008 22.214 18.3987 22.214 18.4387C22.281 19.8966 22.3435 21.2833 22.2988 22.6167L16.917 21.1011C14.3758 20.4255 12.5178 19.9277 9.98546 19.221C9.8872 19.1899 9.78448 19.1765 9.68622 19.1765C9.30659 19.1765 8.96716 19.3943 8.80191 19.7455C8.61433 20.141 8.68132 20.6299 8.97609 20.9899C10.0837 22.3455 11.1958 23.6922 12.3079 25.0389L13.4557 26.4301L13.4736 26.4568C13.5093 26.5101 13.545 26.559 13.5852 26.6079L21.486 36.2571C23.737 38.7549 24.791 39.8661 25.3582 40.3505C25.8674 40.7861 26.8231 41.0394 28.3595 41.0394C30.606 41.0394 33.6475 40.5461 35.2822 39.915L35.3492 39.8883C36.7114 39.3638 38.1182 38.8172 39.4179 38.0616C42.3343 36.3726 44.7729 33.6214 45.9431 30.6969L46.0681 30.3769C46.2066 30.0213 46.2334 29.6391 46.1485 29.2702V29.2613Z" fill="#003278"></path> <path d="M39.2986 14.0065C39.2259 13.5571 38.6525 13.3301 38.4642 13.7974C37.8951 15.2081 37.219 16.9972 36.7654 18.092C35.9267 19.9789 35.2035 22.1641 32.8971 20.5397C30.4837 18.804 29.247 17.3888 26.0805 14.5628C25.6398 14.1623 25.0664 14.4471 25.0878 15.0524C25.1134 15.7778 25.1391 16.4854 25.1691 17.2019C25.2375 19.3781 25.4001 21.5188 25.3017 23.6861C25.2119 25.2927 24.908 26.6501 23.0338 26.3741C20.8087 26.0048 19.0457 25.2437 16.6879 24.5584C16.2728 24.4293 16.0289 24.9812 16.3327 25.3684C18.7633 28.4703 25.1177 36.343 26.4613 37.9585C26.5512 38.0653 26.6539 38.1587 26.7694 38.221C26.855 38.27 26.9492 38.3056 27.0433 38.3278C32.2339 39.4449 39.9448 36.0226 42.2855 30.8112C42.3796 30.602 42.4352 30.375 42.4438 30.1436C42.4523 29.9923 42.4438 29.841 42.4095 29.6897C41.3697 24.4649 40.3299 19.2357 39.2901 14.011L39.2986 14.0065Z" fill="#D23627"></path> </svg> <span class="font-title">', '</span> </h2> <!-- Tabs and Office Info --> <div class="flex flex-col mb-4"> <!-- Office Details --> <div class="order-2"> <div id="officeInfo" class="bg-white rounded-2xl p-8 border border-gray-100"> <div class="flex flex-col lg:flex-row justify-between items-center"> <div class="space-y-4"> <h3 id="officeName" class="text-primary font-sans text-2xl font-bold mb-4"> ', ' </h3> <div class="flex items-start space-x-3"> <svg class="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <p id="officeAddress" class="text-gray-700 leading-relaxed">', '</p> </div> <div class="flex items-center space-x-3"> <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.516 5.516l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V5z"></path> </svg> <div id="officePhones" class="flex flex-col"> <div class="text-primary font-title text-2xl font-bold mb-4">Telefonos</div> ', ' </div> </div> <!-- <div class="flex items-center space-x-3">\n                  <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>\n                  </svg>\n                  <a id="officeEmail" href={`mailto:${contact.offices.locations["+504"].email}`} class="text-primary hover:text-secondary transition-colors">\n                    {contact.offices.locations["+504"].email}\n                  </a>\n                </div> --> </div> <div class="mt-6 lg:mt-0"> ', ' </div> </div> </div> </div> <!-- Map and Tabs --> <div class="order-1 mt-4"> <!-- Country Tabs --> <div class="mb-6 flex flex-wrap justify-center gap-2"> ', ' </div> <!-- Map --> <div class="bg-gradient-to-br bg-white rounded-2xl p-6 shadow-lg mb-4"> <div class="w-full overflow-hidden rounded-xl" style="height: 400px;"> <!-- Container for all map iframes --> <div id="maps-container" style="width: 100%; height: 100%;"> ', " </div> </div> </div> </div> </div> </div> <script>(function(){", "\n      // Funci\xF3n que se ejecutar\xE1 cuando el DOM est\xE9 listo o cuando se llame manualmente\n      function initializeCountryTabs() {\n        // Get references to all elements that need to be updated\n        const tabs = document.querySelectorAll('.country-tab');\n        const officeName = document.getElementById('officeName');\n        const officeAddress = document.getElementById('officeAddress');\n        const officePhones = document.getElementById('officePhones');\n        const officeEmail = document.getElementById('officeEmail');\n        const officeImage = document.getElementById('officeImage');\n        \n        // Get all map containers\n        const mapContainers = document.querySelectorAll('[data-map-country]');\n        \n        // Contact data is directly available from Astro's define:vars\n        const contactData = contactLocations;\n        \n        // For debugging\n        console.log('Contact locations:', contactData);\n        console.log('Tabs found:', tabs.length);\n        console.log('Map containers found:', mapContainers.length);\n        \n        // Function to update office information\n        function updateOfficeInfo(countryCode) {\n          console.log('Updating office for:', countryCode);\n          const office = contactData[countryCode];\n          \n          if (!office) {\n            console.error('No office data found for', countryCode);\n            return;\n          }\n          \n          console.log('Office data:', office);\n          \n          // Update text content and attributes\n          if (officeName) officeName.textContent = office.name;\n          if (officeAddress) officeAddress.textContent = office.address;\n          \n          // Update phone numbers\n          if (officePhones) {\n            officePhones.innerHTML = '';\n            // Primero a\xF1adir el t\xEDtulo\n            const phoneTitle = document.createElement('div');\n            phoneTitle.className = 'text-primary font-title text-2xl font-bold mb-4';\n            phoneTitle.textContent = 'Telefonos';\n            officePhones.appendChild(phoneTitle);\n            \n            // Luego a\xF1adir los tel\xE9fonos\n            office.phones.forEach(phone => {\n              const phoneContainer = document.createElement('div');\n              const phoneLink = document.createElement('a');\n              phoneLink.href = `tel:${phone}`;\n              phoneLink.textContent = phone;\n              phoneLink.className = 'text-primary hover:text-secondary transition-colors';\n              phoneContainer.appendChild(phoneLink);\n              officePhones.appendChild(phoneContainer);\n            });\n          }\n          \n          // Update email\n          if (officeEmail) {\n            officeEmail.href = `mailto:${office.email}`;\n            officeEmail.textContent = office.email;\n          }\n          \n          // Update image\n          if (officeImage instanceof HTMLImageElement) {\n            officeImage.src = office.image;\n            officeImage.alt = office.name;\n          }\n          \n          // Update map iframe visibility\n          console.log('Updating map visibility for country:', countryCode);\n          \n          // First hide all maps\n          mapContainers.forEach(container => {\n            container.style.display = 'none';\n          });\n          \n          // Then show the selected one\n          const selectedMap = document.querySelector(`[data-map-country=\"${countryCode}\"]`);\n          if (selectedMap) {\n            selectedMap.style.display = 'block';\n            console.log('Showing map container:', countryCode);\n          } else {\n            console.error('No map container found for country code:', countryCode);\n          }\n        }\n        \n        // Function to handle tab selection\n        function handleTabSelection(tab) {\n          // Remove active class from all tabs\n          tabs.forEach(t => {\n            t.classList.remove('bg-primary', 'text-white');\n            t.classList.add('bg-gray-200', 'text-gray-700', 'hover:bg-gray-300');\n          });\n          \n          // Add active class to clicked tab\n          tab.classList.remove('bg-gray-200', 'text-gray-700', 'hover:bg-gray-300');\n          tab.classList.add('bg-primary', 'text-white');\n          \n          // Update office info based on country code\n          const countryCode = tab.getAttribute('data-country-code');\n          if (countryCode) {\n            updateOfficeInfo(countryCode);\n          }\n        }\n        \n        // Add click and touch event listeners to tabs for better mobile compatibility\n        tabs.forEach(tab => {\n          // Funci\xF3n para manejar ambos tipos de eventos\n          const handleEvent = (e) => {\n            e.preventDefault();\n            console.log('Tab interaction:', tab.getAttribute('data-country-code'));\n            handleTabSelection(tab);\n          };\n          \n          // Agregar m\xFAltiples listeners para mayor compatibilidad\n          tab.addEventListener('click', handleEvent);\n          tab.addEventListener('touchend', handleEvent);\n        });\n        \n        // Initialize with first country\n        if (tabs.length > 0) {\n          const firstTabCountry = tabs[0].getAttribute('data-country-code');\n          if (firstTabCountry) {\n            updateOfficeInfo(firstTabCountry);\n          }\n        }\n      }\n      \n      // Intentar inicializar inmediatamente\n      if (document.readyState === 'loading') {\n        // Si el documento a\xFAn se est\xE1 cargando, esperar al evento DOMContentLoaded\n        document.addEventListener('DOMContentLoaded', initializeCountryTabs);\n      } else {\n        // Si el documento ya est\xE1 cargado, ejecutar inmediatamente\n        initializeCountryTabs();\n      }\n      \n      // Como respaldo, intentar inicializar despu\xE9s de un breve retraso\n      // para asegurarnos de que todo est\xE9 correctamente cargado\n      setTimeout(initializeCountryTabs, 500);\n    })();<\/script> </div> "], [" ", '<div class="container mx-auto px-4 pt-6"> ', ' <!-- Main Contact Section --> <div class="flex flex-col justify-center items-start lg:flex-row gap-12 py-12"> <!-- Left Column - Contact Info --> <div class="w-[90%] lg:w-[40%] flex flex-col justify-center"', '> <h1 class="text-primary font-title text-5xl lg:text-6xl font-bold mb-6"> ', ' </h1> <p class="text-gray-700 text-lg mb-8 leading-relaxed"> ', ' </p> <!-- <div class="flex flex-col space-y-4">\n          <div class="flex items-center space-x-3">\n            <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">\n              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>\n              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>\n            </svg>\n            <span class="text-gray-700">{contact.email}</span>\n          </div>\n          \n          <div class="flex items-center space-x-3">\n            <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">\n              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>\n            </svg>\n            <span class="text-gray-700">{contact.phone}</span>\n          </div>\n        </div> --> <div class="mt-8"> ', ' </div> </div> <!-- Right Column - Contact Form --> <div class="w-[90%] lg:w-[60%]"> ', ' </div> </div> <!-- Offices Section --> <div class="container mx-auto mb-8"> <h2 class="text-primary font-title text-4xl font-bold mb-4 flex items-center justify-center gap-1"> <span class="font-title">', '</span> <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M39.2251 72.2894C34.3914 72.2894 29.8246 71.0982 26.0145 68.847C22.1257 66.5476 19.2211 63.2453 17.6113 59.286C15.3454 53.7106 15.8135 47.4169 18.9324 41.5612C22.0295 35.7493 27.3793 31.063 33.9934 28.3695C37.786 26.8234 41.7098 26.0394 45.6642 26.0394C50.4979 26.0394 55.0648 27.2307 58.8792 29.4819C62.768 31.7813 65.6726 35.0836 67.2824 39.0429C69.5483 44.6183 69.0803 50.912 65.9613 56.7677C62.8643 62.5796 57.5144 67.2659 50.9004 69.9594C47.1078 71.5055 43.1796 72.2894 39.2251 72.2894Z" fill="#FAF1E9"></path> <path d="M55.4026 41.642L57.0669 41.5618C57.2674 41.5518 57.4409 41.6972 57.4463 41.8826C57.4734 44.1331 56.4977 45.9727 55.1966 46.0378C53.8306 46.103 52.5946 44.1883 52.4591 41.7874C52.3236 39.3865 53.3318 37.3565 54.6925 37.2913C55.6628 37.2412 56.6007 38.1985 57.0885 39.7073C57.1536 39.9027 57.0723 40.1183 56.8988 40.2436L55.3051 41.4064C55.1912 41.4866 55.2617 41.652 55.4026 41.647V41.642Z" fill="#003278"></path> <path d="M39.4434 46.0565C38.3701 46.1486 36.8656 46.6135 35.9344 47.9068C34.5492 49.8307 35.0262 50.8709 35.0262 50.8709C35.0262 50.8709 35.0537 50.9538 35.0904 50.9952C35.1913 51.1149 35.3519 50.9538 35.3519 50.9538C35.6684 50.6592 35.7922 50.3738 36.017 50.0885C36.3885 49.6144 38.0123 46.9495 42.2277 47.29C42.3194 47.2993 42.402 47.244 42.4341 47.1612C42.4616 47.0921 42.4433 47.0185 42.3928 46.9633C42.1589 46.7055 40.8149 45.9323 39.4434 46.0519V46.0565Z" fill="#003278"></path> <path d="M58.6969 51.2992C58.6876 51.1816 58.6369 51.0815 58.54 51.0511C58.4154 51.0075 58.2723 51.0902 58.1847 51.2339C58.1847 51.2339 58.1801 51.2426 58.1754 51.2469C58.1201 51.334 58.0693 51.408 58.0324 51.4559C57.9909 51.5124 57.9401 51.5821 57.834 51.7214C57.834 51.7214 57.8248 51.7344 57.8155 51.7475C57.511 52.1218 57.1926 52.5789 56.7635 53.0446C56.2974 53.5669 55.7944 54.0632 55.2592 54.5289C53.4688 56.0872 51.3324 57.2885 49.0298 57.9676C46.0443 58.8729 42.8281 58.9034 39.8242 58.1199C39.8242 58.1199 39.7688 58.1069 39.6673 58.0851C39.5704 58.0546 39.4274 58.0111 39.2612 57.9589C39.0951 57.9066 38.9059 57.85 38.6983 57.7848L38.6706 57.7761C38.4676 57.7021 38.2507 57.6194 38.0338 57.541C37.8077 57.4627 37.5955 57.3625 37.3924 57.2755C37.1894 57.1841 36.9956 57.1101 36.8387 57.0274C36.5203 56.8707 36.3081 56.7619 36.3081 56.7619C35.0945 56.1046 34.6561 55.8217 34.4992 55.7041C34.4531 55.6737 34.4531 55.6084 34.4992 55.5779C35.339 54.9859 36.2435 54.7378 36.7972 54.4375C36.8433 54.4114 36.871 54.3678 36.8802 54.3156C36.8849 54.2634 36.8618 54.2111 36.8202 54.1763C36.6311 54.0283 36.1143 53.8803 34.6976 54.0632C33.9594 54.1589 33.2303 54.4157 32.6166 54.8031C31.6614 55.3472 30.9416 56.1699 30.3694 57.0361C30.2171 57.2755 29.991 57.5454 29.9495 57.8588C29.9356 57.9545 29.9772 58.0503 30.0602 58.1112C30.1387 58.1678 30.2402 58.1809 30.3325 58.1504C30.637 58.0503 30.8677 57.8152 31.0985 57.6716C31.3707 57.4888 31.6476 57.3147 31.9244 57.1493L32.2428 56.9621C32.4643 56.8315 32.755 56.8663 32.935 57.0448C33.0596 57.1623 33.9686 57.9153 34.4946 58.2766C34.8822 58.5421 35.0991 58.9774 35.0714 59.4301C35.0391 60.0482 35.1129 60.7229 35.3344 61.3932C35.9435 63.2083 37.577 64.7143 39.0075 65.3847C39.8657 65.7851 40.7055 65.9374 40.7055 65.9374C41.6376 66.1072 42.3529 66.0245 42.7266 65.9766C44.9323 65.6937 46.7549 64.8362 47.9916 63.6261C49.6666 61.9808 50.3772 60.3616 50.6033 59.7391C50.6679 59.565 50.7971 59.4214 50.9678 59.33C52.0061 58.7728 52.9797 58.1112 53.8472 57.3582C54.1656 57.0796 54.4701 56.788 54.7654 56.4876C54.7793 56.4746 54.7977 56.4615 54.8116 56.4485C55.8129 55.5736 56.6989 54.5942 57.4556 53.5365C57.8663 52.9967 58.1478 52.4788 58.4062 52.0478L58.42 52.0174C58.5031 51.852 58.6507 51.5516 58.6646 51.5081C58.6646 51.495 58.6876 51.4254 58.6969 51.3688C58.6969 51.347 58.6969 51.3209 58.6969 51.2992ZM58.4615 51.7301C58.4615 51.7301 58.4754 51.7257 58.4846 51.7214C58.4754 51.7214 58.4708 51.7257 58.4615 51.7301Z" fill="#003278"></path> <path d="M57.0703 35.4262C56.8122 34.8961 56.401 34.4163 55.9723 34.101C55.6749 33.8771 55.3206 33.7126 54.9487 33.6258C54.765 33.5755 54.5725 33.5526 54.3757 33.5435C54.2794 33.5344 54.1832 33.5435 54.087 33.5435H54.0738C53.9688 33.5572 53.8945 33.5572 53.737 33.5983L53.7939 33.5846C53.5795 33.6395 53.3652 33.6989 53.1508 33.7628L53.1246 33.772C52.919 33.8588 52.7221 33.9685 52.5296 34.0736C51.7597 34.5397 51.2086 35.2434 50.828 35.9699C50.4474 36.7056 50.2112 37.4779 50.0668 38.2502C49.9881 38.6843 49.905 39.1047 49.9706 39.5845C49.9793 39.6622 50.0318 39.7307 50.0975 39.7627C50.2024 39.8175 50.3337 39.7855 50.3905 39.6896C50.6355 39.2738 50.7711 38.9356 50.9548 38.57C51.1692 38.1405 51.3923 37.7247 51.6504 37.3454C52.0047 36.8245 52.3853 36.3538 52.7965 35.9837C53.2077 35.6135 53.6451 35.3485 54.1307 35.1885L54.1876 35.1748C54.1876 35.1748 54.2313 35.1566 54.2707 35.1474H54.2882C54.3319 35.1337 54.3757 35.1246 54.4238 35.12C54.5244 35.1063 54.6294 35.0972 54.7344 35.1017C54.9443 35.1063 55.1631 35.1429 55.3774 35.2251C55.688 35.3302 56.0423 35.5907 56.3617 35.9425C56.6548 36.2441 56.8997 36.6143 57.1578 36.9296C57.2059 36.989 57.2847 37.0027 57.3503 36.9707C57.4115 36.9387 57.4509 36.8747 57.4465 36.8016C57.4203 36.3766 57.3109 35.8831 57.0747 35.4216L57.0703 35.4262Z" fill="#003278"></path> <path d="M53.63 49.479C53.5351 49.038 53.3411 48.6059 53.0478 48.2593C52.4614 47.5572 51.6119 47.2602 50.8357 47.2917C50.3614 47.3142 49.8094 47.4357 49.4989 47.8318C49.4601 47.8813 49.4515 47.9578 49.486 48.0118C49.5119 48.0613 49.5636 48.0883 49.6154 48.0928C49.818 48.0928 50.0336 48.0883 50.2061 48.0838C50.9694 48.0703 51.4998 48.3989 51.7499 48.6464C52.2544 49.1325 52.3751 49.8076 52.2587 50.5232C52.2285 50.6987 52.1811 50.8742 52.1207 51.0453C52.0905 51.1308 52.056 51.2118 52.0172 51.2973C51.9741 51.3648 51.9396 51.4368 51.9008 51.5088C51.7283 51.7879 51.4567 52.0444 51.1246 52.2649C50.8357 52.4585 50.426 52.6385 49.9905 52.7645C49.7749 52.8275 49.5507 52.8905 49.3394 52.94C49.1885 52.976 48.9556 53.0075 48.8219 53.03C48.7529 53.0436 48.7012 53.1021 48.6969 53.1741C48.6969 53.2371 48.7271 53.2956 48.7831 53.3226C48.9384 53.4036 49.1669 53.4396 49.3437 53.4801C49.5852 53.5296 49.8396 53.5431 50.0983 53.5386C50.6115 53.5296 51.1332 53.4216 51.5645 53.2776C52.0474 53.1066 52.5433 52.823 52.9314 52.3639C53.022 52.2424 53.1082 52.1209 53.1945 51.9949C53.2635 51.8689 53.3324 51.7474 53.3885 51.6123C53.5049 51.3513 53.5869 51.0723 53.6386 50.7887C53.7162 50.3612 53.7205 49.9111 53.6257 49.47L53.63 49.479Z" fill="#003278"></path> <path d="M39.1751 73.5394C29.0351 73.5394 19.971 68.4729 16.4458 59.7849C14.0497 53.8754 14.5387 47.2166 17.8238 41.0351C21.0601 34.9472 26.6435 30.0412 33.5427 27.2225C47.8791 21.3665 63.5358 26.4465 68.448 38.5419C70.844 44.4514 70.3551 51.1102 67.0699 57.2917C63.8337 63.3796 58.2502 68.2856 51.351 71.1043C47.3101 72.7545 43.1581 73.535 39.1795 73.5394H39.1751ZM45.7498 27.78C42.1357 27.78 38.3571 28.4936 34.6719 29.9966C28.4172 32.5522 23.3717 36.972 20.46 42.4444C17.5971 47.8276 17.1526 53.581 19.2108 58.652C23.5006 69.2177 37.4102 73.5617 50.2219 68.3257C56.4765 65.7701 61.5221 61.3503 64.4338 55.8779C67.2966 50.4947 67.7412 44.7413 65.6829 39.6703C62.629 32.1419 54.6939 27.7755 45.7498 27.7755V27.78Z" fill="#003278"></path> <path d="M46.1485 29.2613L46.0815 28.9724L42.7229 12.8386C42.714 12.7852 42.7006 12.7364 42.6827 12.6741C42.4683 11.6563 42.254 10.6385 42.0351 9.6207C41.7582 8.32288 41.4858 7.02951 41.2178 5.75836C41.1195 5.20723 40.6416 4.78944 40.1012 4.78944C39.6993 4.78944 39.3509 5.02945 39.1857 5.42057C38.9311 6.02059 38.6586 6.69172 38.3907 7.34952C38.0244 8.24288 37.6805 9.08291 37.417 9.69181C37.3456 9.84293 37.2786 9.99404 37.2116 10.1452C37.0642 10.4741 36.9079 10.8163 36.7516 11.1185L36.7382 11.1496L36.7069 11.2385C36.6712 11.3141 36.4746 11.763 36.1977 12.3897C35.6841 13.5453 34.6435 15.8964 34.1343 17.0343C32.9553 16.1676 32.0084 15.3187 30.7623 14.2075C30.0745 13.5942 29.293 12.8964 28.3461 12.0786C27.7968 11.6119 27.2519 11.1185 26.6177 10.5541C25.845 9.86071 24.9652 9.06957 23.862 8.12732C23.6119 7.90954 23.3082 7.79398 23.0045 7.79398C22.7008 7.79398 22.3882 7.91843 22.1693 8.1451C21.9326 8.38955 21.812 8.72734 21.8254 9.09179C21.8522 9.81182 21.879 10.523 21.9103 11.2296C21.9281 11.8252 21.9594 12.3986 21.9862 12.9719C22.0085 13.443 22.0353 13.9186 22.0532 14.3897V14.4697C22.0532 14.5008 22.214 18.3987 22.214 18.4387C22.281 19.8966 22.3435 21.2833 22.2988 22.6167L16.917 21.1011C14.3758 20.4255 12.5178 19.9277 9.98546 19.221C9.8872 19.1899 9.78448 19.1765 9.68622 19.1765C9.30659 19.1765 8.96716 19.3943 8.80191 19.7455C8.61433 20.141 8.68132 20.6299 8.97609 20.9899C10.0837 22.3455 11.1958 23.6922 12.3079 25.0389L13.4557 26.4301L13.4736 26.4568C13.5093 26.5101 13.545 26.559 13.5852 26.6079L21.486 36.2571C23.737 38.7549 24.791 39.8661 25.3582 40.3505C25.8674 40.7861 26.8231 41.0394 28.3595 41.0394C30.606 41.0394 33.6475 40.5461 35.2822 39.915L35.3492 39.8883C36.7114 39.3638 38.1182 38.8172 39.4179 38.0616C42.3343 36.3726 44.7729 33.6214 45.9431 30.6969L46.0681 30.3769C46.2066 30.0213 46.2334 29.6391 46.1485 29.2702V29.2613Z" fill="#003278"></path> <path d="M39.2986 14.0065C39.2259 13.5571 38.6525 13.3301 38.4642 13.7974C37.8951 15.2081 37.219 16.9972 36.7654 18.092C35.9267 19.9789 35.2035 22.1641 32.8971 20.5397C30.4837 18.804 29.247 17.3888 26.0805 14.5628C25.6398 14.1623 25.0664 14.4471 25.0878 15.0524C25.1134 15.7778 25.1391 16.4854 25.1691 17.2019C25.2375 19.3781 25.4001 21.5188 25.3017 23.6861C25.2119 25.2927 24.908 26.6501 23.0338 26.3741C20.8087 26.0048 19.0457 25.2437 16.6879 24.5584C16.2728 24.4293 16.0289 24.9812 16.3327 25.3684C18.7633 28.4703 25.1177 36.343 26.4613 37.9585C26.5512 38.0653 26.6539 38.1587 26.7694 38.221C26.855 38.27 26.9492 38.3056 27.0433 38.3278C32.2339 39.4449 39.9448 36.0226 42.2855 30.8112C42.3796 30.602 42.4352 30.375 42.4438 30.1436C42.4523 29.9923 42.4438 29.841 42.4095 29.6897C41.3697 24.4649 40.3299 19.2357 39.2901 14.011L39.2986 14.0065Z" fill="#D23627"></path> </svg> <span class="font-title">', '</span> </h2> <!-- Tabs and Office Info --> <div class="flex flex-col mb-4"> <!-- Office Details --> <div class="order-2"> <div id="officeInfo" class="bg-white rounded-2xl p-8 border border-gray-100"> <div class="flex flex-col lg:flex-row justify-between items-center"> <div class="space-y-4"> <h3 id="officeName" class="text-primary font-sans text-2xl font-bold mb-4"> ', ' </h3> <div class="flex items-start space-x-3"> <svg class="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <p id="officeAddress" class="text-gray-700 leading-relaxed">', '</p> </div> <div class="flex items-center space-x-3"> <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.516 5.516l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V5z"></path> </svg> <div id="officePhones" class="flex flex-col"> <div class="text-primary font-title text-2xl font-bold mb-4">Telefonos</div> ', ' </div> </div> <!-- <div class="flex items-center space-x-3">\n                  <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>\n                  </svg>\n                  <a id="officeEmail" href={\\`mailto:\\${contact.offices.locations["+504"].email}\\`} class="text-primary hover:text-secondary transition-colors">\n                    {contact.offices.locations["+504"].email}\n                  </a>\n                </div> --> </div> <div class="mt-6 lg:mt-0"> ', ' </div> </div> </div> </div> <!-- Map and Tabs --> <div class="order-1 mt-4"> <!-- Country Tabs --> <div class="mb-6 flex flex-wrap justify-center gap-2"> ', ' </div> <!-- Map --> <div class="bg-gradient-to-br bg-white rounded-2xl p-6 shadow-lg mb-4"> <div class="w-full overflow-hidden rounded-xl" style="height: 400px;"> <!-- Container for all map iframes --> <div id="maps-container" style="width: 100%; height: 100%;"> ', " </div> </div> </div> </div> </div> </div> <script>(function(){", "\n      // Funci\xF3n que se ejecutar\xE1 cuando el DOM est\xE9 listo o cuando se llame manualmente\n      function initializeCountryTabs() {\n        // Get references to all elements that need to be updated\n        const tabs = document.querySelectorAll('.country-tab');\n        const officeName = document.getElementById('officeName');\n        const officeAddress = document.getElementById('officeAddress');\n        const officePhones = document.getElementById('officePhones');\n        const officeEmail = document.getElementById('officeEmail');\n        const officeImage = document.getElementById('officeImage');\n        \n        // Get all map containers\n        const mapContainers = document.querySelectorAll('[data-map-country]');\n        \n        // Contact data is directly available from Astro's define:vars\n        const contactData = contactLocations;\n        \n        // For debugging\n        console.log('Contact locations:', contactData);\n        console.log('Tabs found:', tabs.length);\n        console.log('Map containers found:', mapContainers.length);\n        \n        // Function to update office information\n        function updateOfficeInfo(countryCode) {\n          console.log('Updating office for:', countryCode);\n          const office = contactData[countryCode];\n          \n          if (!office) {\n            console.error('No office data found for', countryCode);\n            return;\n          }\n          \n          console.log('Office data:', office);\n          \n          // Update text content and attributes\n          if (officeName) officeName.textContent = office.name;\n          if (officeAddress) officeAddress.textContent = office.address;\n          \n          // Update phone numbers\n          if (officePhones) {\n            officePhones.innerHTML = '';\n            // Primero a\xF1adir el t\xEDtulo\n            const phoneTitle = document.createElement('div');\n            phoneTitle.className = 'text-primary font-title text-2xl font-bold mb-4';\n            phoneTitle.textContent = 'Telefonos';\n            officePhones.appendChild(phoneTitle);\n            \n            // Luego a\xF1adir los tel\xE9fonos\n            office.phones.forEach(phone => {\n              const phoneContainer = document.createElement('div');\n              const phoneLink = document.createElement('a');\n              phoneLink.href = \\`tel:\\${phone}\\`;\n              phoneLink.textContent = phone;\n              phoneLink.className = 'text-primary hover:text-secondary transition-colors';\n              phoneContainer.appendChild(phoneLink);\n              officePhones.appendChild(phoneContainer);\n            });\n          }\n          \n          // Update email\n          if (officeEmail) {\n            officeEmail.href = \\`mailto:\\${office.email}\\`;\n            officeEmail.textContent = office.email;\n          }\n          \n          // Update image\n          if (officeImage instanceof HTMLImageElement) {\n            officeImage.src = office.image;\n            officeImage.alt = office.name;\n          }\n          \n          // Update map iframe visibility\n          console.log('Updating map visibility for country:', countryCode);\n          \n          // First hide all maps\n          mapContainers.forEach(container => {\n            container.style.display = 'none';\n          });\n          \n          // Then show the selected one\n          const selectedMap = document.querySelector(\\`[data-map-country=\"\\${countryCode}\"]\\`);\n          if (selectedMap) {\n            selectedMap.style.display = 'block';\n            console.log('Showing map container:', countryCode);\n          } else {\n            console.error('No map container found for country code:', countryCode);\n          }\n        }\n        \n        // Function to handle tab selection\n        function handleTabSelection(tab) {\n          // Remove active class from all tabs\n          tabs.forEach(t => {\n            t.classList.remove('bg-primary', 'text-white');\n            t.classList.add('bg-gray-200', 'text-gray-700', 'hover:bg-gray-300');\n          });\n          \n          // Add active class to clicked tab\n          tab.classList.remove('bg-gray-200', 'text-gray-700', 'hover:bg-gray-300');\n          tab.classList.add('bg-primary', 'text-white');\n          \n          // Update office info based on country code\n          const countryCode = tab.getAttribute('data-country-code');\n          if (countryCode) {\n            updateOfficeInfo(countryCode);\n          }\n        }\n        \n        // Add click and touch event listeners to tabs for better mobile compatibility\n        tabs.forEach(tab => {\n          // Funci\xF3n para manejar ambos tipos de eventos\n          const handleEvent = (e) => {\n            e.preventDefault();\n            console.log('Tab interaction:', tab.getAttribute('data-country-code'));\n            handleTabSelection(tab);\n          };\n          \n          // Agregar m\xFAltiples listeners para mayor compatibilidad\n          tab.addEventListener('click', handleEvent);\n          tab.addEventListener('touchend', handleEvent);\n        });\n        \n        // Initialize with first country\n        if (tabs.length > 0) {\n          const firstTabCountry = tabs[0].getAttribute('data-country-code');\n          if (firstTabCountry) {\n            updateOfficeInfo(firstTabCountry);\n          }\n        }\n      }\n      \n      // Intentar inicializar inmediatamente\n      if (document.readyState === 'loading') {\n        // Si el documento a\xFAn se est\xE1 cargando, esperar al evento DOMContentLoaded\n        document.addEventListener('DOMContentLoaded', initializeCountryTabs);\n      } else {\n        // Si el documento ya est\xE1 cargado, ejecutar inmediatamente\n        initializeCountryTabs();\n      }\n      \n      // Como respaldo, intentar inicializar despu\xE9s de un breve retraso\n      // para asegurarnos de que todo est\xE9 correctamente cargado\n      setTimeout(initializeCountryTabs, 500);\n    })();<\/script> </div> "])), maybeRenderHead(), renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "textColor": "text-gray-600", "hoverColor": "hover:text-primary" }), addAttribute(renderTransition($$result2, "eb7cqm7q", "", "contact-info"), "data-astro-transition-scope"), contact.title, contact.description, renderComponent($$result2, "LazyImage", $$LazyImage, { "src": "https://snack.yummiespromociones.com/SnacksyummiesAssets/contactimage.webp", "alt": "Contact illustration", "class": "w-80 h-auto mx-auto lg:mx-0" }), renderComponent($$result2, "FormContact", $$FormContact, { "currentLang": locale }), contact.offices.title.split(" ")[0], contact.offices.title.split(" ").slice(1).join(" "), contact.offices.locations["+504"].name, contact.offices.locations["+504"].address, contact.offices.locations["+504"].phones.map((phone) => renderTemplate`<div> <a${addAttribute(`tel:${phone}`, "href")} class="text-primary hover:text-secondary transition-colors"> ${phone} </a></div>`), renderComponent($$result2, "LazyImage", $$LazyImage, { "src": "https://snack.yummiespromociones.com/SnacksyummiesAssets/oficinas.webp", "alt": "Yummies Honduras", "class": "w-full h-48 object-cover rounded-xl" }), Object.entries(contact.offices.locations).map(([countryCode, location], index) => renderTemplate`<button${addAttribute(countryCode, "data-country-code")}${addAttribute(`country-tab px-4 py-2 rounded-lg text-sm font-medium transition-colors ${index === 0 ? "bg-primary text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`, "class")}> ${location.tab} </button>`), Object.entries(contact.offices.locations).map(([countryCode, location], index) => renderTemplate`<div${addAttribute(countryCode, "data-map-country")}${addAttribute(`width: 100%; height: 100%; ${index === 0 ? "display: block;" : "display: none;"}`, "style")}> <iframe${addAttribute(location.mapEmbed, "src")} width="100%" height="100%" frameborder="0" allowfullscreen="allowfullscreen" aria-hidden="false" style="width: 100%; height: 100%; border: 0;"${addAttribute(`${location.name} Map`, "title")}></iframe> </div>`), defineScriptVars({ contactLocations: contact.offices.locations })) })}`;
}, "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/views/Contact/index.astro", "self");

const $$file = "/Users/josedeleon/Proyectos/Snacksyummies_astro/src/views/Contact/index.astro";
const $$url = undefined;

export { $$Index as default, $$file as file, $$url as url };
