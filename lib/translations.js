// Translation dictionary for UI elements
export const translations = {
  en: {
    // Navigation
    "home": "Home",
    "chatbot": "Chatbot Assistant", 
    "bookings": "Booking History",
    "settings": "Settings",
    "profile": "Profile",
    
    // Dashboard
    "welcome": "Welcome to Airbnb Assistant",
    "chats_today": "Chats Today",
    "resolved_queries": "Resolved Queries",
    "active_languages": "Active Languages",
    
    // Chat
    "type_message": "Type your message...",
    "send": "Send",
    "online": "Online",
    "typing": "Typing...",
    "ready_to_help": "Ready to help",
    
    // Quick Replies
    "search_stays": "Search Stays",
    "my_bookings": "My Bookings", 
    "help": "Help",
    "need_inspiration": "Need inspiration?",
    
    // Actions
    "book_now": "Book Now",
    "change_dates": "Change Dates",
    "show_more": "Show More",
    "proceed_to_payment": "Proceed to Payment"
  },
  es: {
    "home": "Inicio",
    "chatbot": "Asistente de Chat",
    "bookings": "Historial de Reservas",
    "settings": "Configuración",
    "profile": "Perfil",
    "welcome": "Bienvenido a Airbnb Assistant",
    "chats_today": "Chats Hoy",
    "resolved_queries": "Consultas Resueltas",
    "active_languages": "Idiomas Activos",
    "type_message": "Escribe tu mensaje...",
    "send": "Enviar",
    "online": "En Línea",
    "typing": "Escribiendo...",
    "ready_to_help": "Listo para ayudar",
    "search_stays": "Buscar Alojamientos",
    "my_bookings": "Mis Reservas",
    "help": "Ayuda",
    "need_inspiration": "¿Necesitas inspiración?",
    "book_now": "Reservar Ahora",
    "change_dates": "Cambiar Fechas",
    "show_more": "Mostrar Más",
    "proceed_to_payment": "Proceder al Pago"
  },
  fr: {
    "home": "Accueil",
    "chatbot": "Assistant Chat",
    "bookings": "Historique des Réservations",
    "settings": "Paramètres",
    "profile": "Profil",
    "welcome": "Bienvenue sur Airbnb Assistant",
    "chats_today": "Chats Aujourd'hui",
    "resolved_queries": "Requêtes Résolues",
    "active_languages": "Langues Actives",
    "type_message": "Tapez votre message...",
    "send": "Envoyer",
    "online": "En Ligne",
    "typing": "En train d'écrire...",
    "ready_to_help": "Prêt à aider",
    "search_stays": "Rechercher des Logements",
    "my_bookings": "Mes Réservations",
    "help": "Aide",
    "need_inspiration": "Besoin d'inspiration ?",
    "book_now": "Réserver Maintenant",
    "change_dates": "Changer les Dates",
    "show_more": "Afficher Plus",
    "proceed_to_payment": "Procéder au Paiement"
  },
  de: {
    "home": "Startseite",
    "chatbot": "Chat-Assistent",
    "bookings": "Buchungsverlauf",
    "settings": "Einstellungen",
    "profile": "Profil",
    "welcome": "Willkommen bei Airbnb Assistant",
    "chats_today": "Chats Heute",
    "resolved_queries": "Gelöste Anfragen",
    "active_languages": "Aktive Sprachen",
    "type_message": "Nachricht eingeben...",
    "send": "Senden",
    "online": "Online",
    "typing": "Tippt...",
    "ready_to_help": "Bereit zu helfen",
    "search_stays": "Unterkünfte Suchen",
    "my_bookings": "Meine Buchungen",
    "help": "Hilfe",
    "need_inspiration": "Inspiration benötigt?",
    "book_now": "Jetzt Buchen",
    "change_dates": "Daten Ändern",
    "show_more": "Mehr Anzeigen",
    "proceed_to_payment": "Zur Zahlung"
  }
};

export const getTranslation = (key, language = 'en') => {
  return translations[language]?.[key] || translations['en'][key] || key;
};
