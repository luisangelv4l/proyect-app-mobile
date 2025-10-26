import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
// NOTA: Quité 'IonicModule' de aquí. Se manejará en el .module.ts

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  // standalone: true, // <-- CORRECCIÓN: Eliminado
  // imports: [...]   // <-- CORRECCIÓN: Eliminado
})
export class LoginPage {
  // Usamos signals para manejar los campos del formulario
  usuario = signal('');
  contrasena = signal('');

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  /**
   * Intenta iniciar sesión con las credenciales proporcionadas.
   */
  async login() {
    if (this.usuario() === 'administrador' && this.contrasena() === '2025') {
      // Éxito: Navega a la primera pestaña de tu app
      await this.router.navigate(['/tabs/tab1']);
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
    await this.router.navigate(['/tabs/tab1']);
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

