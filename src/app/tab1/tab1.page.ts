// --- Imports necesarios ---
import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

// --- ¡ESTO ES LO QUE FALTABA! ---
// Importa los módulos para que el HTML funcione
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// ---------------------------------

@Component({
  selector: 'app-tab1',         // Corregido
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],   // Corregido

  // --- ¡ESTO ES LO MÁS IMPORTANTE! ---
  standalone: true,
  imports: [
    IonicModule,  // Permite usar <ion-content>, <ion-card>, etc.
    CommonModule, // Permite usar [fullscreen], *ngIf, etc.
    FormsModule,  // Permite usar [value] y (input) con signals
  ],
  // ------------------------------------
})
export class Tab1Page { // Corregido
  // Usamos signals para manejar los campos del formulario
  usuario = signal('');
  contrasena = signal('');

  constructor(
    private router: Router,
    private alertController: AlertController
  ) { }

  /**
  * Intenta iniciar sesión con las credenciales proporcionadas.
  */
  async login() {
    if (this.usuario() === 'administrador' && this.contrasena() === '2025') {
      // Éxito: Navega a la primera pestaña de tu app
      await this.router.navigate(['/tabs/tab1']); // Nota: Esto te lleva a ti mismo, quizás quieras ir a tab2
    } else {
      // Error: Muestra alerta
      await this.presentAlert(
        'Error',
        'Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.'
      );
    }
  }

  /**
  * Navega a la página de registro.
  * (Esta función está lista para cuando crees esa página).
  */
  async goToRegister() {
    // Por ahora, solo un placeholder.
    await this.presentAlert('No disponible', 'La página de registro aún no está implementada.');
    console.log('Navegar a la página de registro');
  }

  /**
  * Permite el acceso como invitado.
  */
  async loginInvitado() {
    // Navega a la primera pestaña
    await this.router.navigate(['/tabs/tab2']); // Te mando a tab2 para que veas un cambio
  }

  /**
  * Muestra una alerta simple.
  */
  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}