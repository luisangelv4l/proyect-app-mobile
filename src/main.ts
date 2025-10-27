import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)), provideFirebaseApp(() => initializeApp({ projectId: "proyect-app-mobile", appId: "1:474188118427:web:d8d4a1420444754628493e", storageBucket: "proyect-app-mobile.firebasestorage.app", apiKey: "AIzaSyAZxSrC9L8HJn3xMXG1lRzFUmYKPjpuNfY", authDomain: "proyect-app-mobile.firebaseapp.com", messagingSenderId: "474188118427", measurementId: "G-RDK2QCYZ2K", projectNumber: "474188118427", version: "2" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),
  ],
});
