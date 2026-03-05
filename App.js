import { useState, useEffect, useRef } from "react";
import { auth, db, googleProvider } from "./firebase";
import { signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, onSnapshot } from "firebase/firestore";

// ─── CONSTANTES ───────────────────────────────────────────────
const TABS = [
  { id: "alimentacao", label: "Alimentação", icon: "🥗" },
  { id: "academia",    label: "Academia",    icon: "💪" },
  { id: "corrida",     label: "Corrida",     icon: "🏃" },
  { id: "ingles",      label: "Inglês",      icon: "🇺🇸" },
  { id: "apostas",     label: "Apostas",     icon: "📊" },
  { id: "marketing",   label: "Marketing Digital", icon: "📱" },
  { id: "curso",       label: "Corpo no Controle", icon: "🎯" },
  { id: "leitura",     label: "Leitura",     icon: "📚" },
  { id: "empresa",     label: "Empresa",     icon: "🏢" },
  { id: "videos",      label: "Vídeos",      icon: "🎬" },
];

// ...e todo o resto do código até o final, incluindo o `export default function App() { ... }`
