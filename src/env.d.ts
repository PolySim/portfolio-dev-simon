/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_PUBLIC_KEY_EMAILJS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
