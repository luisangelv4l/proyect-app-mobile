/*
 * Estilos inspirados en el prototipo PDF (tonos púrpuras y rosados).
 */

ion-content {
  // Color de fondo principal (rosa pálido/lavanda)
  --background: #fdf6ff; // Un tono muy claro de púrpura
}

.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-bottom: 5vh; // Un poco de espacio para que no esté pegado abajo
}

.title {
  font-size: 3.5rem; // Tamaño grande para "Kera Bell"
  font-weight: bold;
  color: #6a006a; // Púrpura oscuro para el título
  margin-bottom: 8px;
  font-family: 'Georgia', serif; // Una fuente con más estilo para el logo
}

.slogan {
  font-size: 1.1rem;
  color: #8e24aa; // Púrpura medio
  margin-bottom: 32px; // Espacio antes de la tarjeta
  text-align: center;
  font-style: italic;
}

.login-card {
  width: 100%;
  max-width: 400px; // Límite para pantallas más grandes
  --background: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 16px; // Bordes más redondeados
}

ion-item {
  --background: transparent;
  --padding-start: 0;
  --inner-padding-end: 0;
}

ion-input {
  --color: #333;
  --placeholder-color: #999;
}

.login-button {
  --background: #8e24aa; // Púrpura principal para el botón
  --background-hover: #6a006a;
  --border-radius: 10px; // Bordes redondeados
  font-weight: bold;
  height: 48px;
}

.register-button {
  --color: #8e24aa; // Púrpura para el texto
  --color-hover: #6a006a;
  font-weight: 500;
}

.guest-button {
  --color: #8e24aa;
  --border-color: #8e24aa;
  --border-radius: 10px;
  --border-width: 1.5px;
  --background-hover: #fdf6ff;
  font-weight: 500;
  margin-top: 10px;
}
