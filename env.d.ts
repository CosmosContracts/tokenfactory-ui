/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WCCLIENT: string
  readonly VITE_CHAINNETWORK: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
