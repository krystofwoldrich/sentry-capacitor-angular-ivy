import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'angular-capacitor-test',
  webDir: 'dist/angular-capacitor-test',
  server: {
    androidScheme: 'https'
  }
};

export default config;
