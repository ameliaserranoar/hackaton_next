'use client';

import { useState } from 'react';

export default function ContrasenasPage() {
  const [length, setLength] = useState(0);
  const [upercase, setUpperCase] = useState(false);
  const [lowercase, setLowerCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [specialCharacters, setSpecialCharacters] = useState(false);
  const [contrasena, setContrasena] = useState('');

  const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXZY';
  const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
  const NUMBERS = '0123456789';
  const SPECIALCHARACTERS = '!@#$%&*()?{}[]+=-_~';

  function seleccionarCharacterRandom(caracteres: string) {
    const indice = Math.floor(Math.random() * caracteres.length);
    return caracteres[indice];
  }

  function tipoRandom() {
    const tiposDisponibles: string[] = [];

    if (upercase) tiposDisponibles.push(UPPERCASE);
    if (lowercase) tiposDisponibles.push(LOWERCASE);
    if (numbers) tiposDisponibles.push(NUMBERS);
    if (specialCharacters) tiposDisponibles.push(SPECIALCHARACTERS);

    //para escoger de manera aleatoria entre usar un caracter UPPERCASE, LOWERCASE, NUMBERS o SPECIALCHARACTERS
    const indice = Math.floor(Math.random() * tiposDisponibles.length);

    return tiposDisponibles[indice];
  }

  function secuenciaTiposRandom(cantidad: number) {
    const tiposActivos: string[] = [];
    if (upercase) tiposActivos.push(UPPERCASE);
    if (lowercase) tiposActivos.push(LOWERCASE);
    if (numbers) tiposActivos.push(NUMBERS);
    if (specialCharacters) tiposActivos.push(SPECIALCHARACTERS);

    if (tiposActivos.length === 0 || cantidad <= 0) {
      return [];
    }

    const secuencia: string[] = [];

    while (secuencia.length < cantidad) {
      secuencia.push(tipoRandom());
    }

    for (let i = secuencia.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temporal = secuencia[i];
      secuencia[i] = secuencia[j];
      secuencia[j] = temporal;
    }

    return secuencia;
  }

  function generarContrasena() {
    if (length === 0) {
      setContrasena('');
      return;
    }

    const secuenciaTipos = secuenciaTiposRandom(length);

    if (secuenciaTipos.length === 0) {
      setContrasena('');
      return;
    }

    let nuevaContrasena = '';

    for (let i = 0; i < secuenciaTipos.length; i += 1) {
      const tipoCaracter = secuenciaTipos[i];
      nuevaContrasena += seleccionarCharacterRandom(tipoCaracter);
    }

    setContrasena(nuevaContrasena);
  }

  function copiarContrasena() {
    if (!contrasena) {
      return;
    }

    navigator.clipboard.writeText(contrasena);
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <section className="text-center">
        <h1>PASSWORD GENERATOR</h1>
        <p>Create strong and secure passwords to keep your account safe online</p>

        <div className="flex items-center justify-center gap-2">
          <div className="rounded border border-gray-400 px-3 py-2">
            <p>
              {contrasena}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={generarContrasena}
              className="rounded bg-slate-300 px-3 py-2 text-slate-900"
            >
              Refresh
            </button>
            <button
              type="button"
              onClick={copiarContrasena}
              className="rounded bg-cyan-400 px-3 py-2 text-slate-900"
            >
              Copy
            </button>
          </div>
        </div>

        <label>
          <span>Longitud</span>
          <input
            type="range"
            min="0"
            max="50"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <span>{length}</span>
        </label>

        <div className="flex flex-col items-start">
          <label>
            <input type="checkbox" checked={upercase} onChange={() => setUpperCase(!upercase)} />
            Uppercase
          </label>
          <label>
            <input type="checkbox" checked={lowercase} onChange={() => setLowerCase(!lowercase)} />
            Lowercase
          </label>
          <label>
            <input type="checkbox" checked={numbers} onChange={() => setNumbers(!numbers)} />
            Numbers
          </label>
          <label>
            <input
              type="checkbox"
              checked={specialCharacters}
              onChange={() => setSpecialCharacters(!specialCharacters)}
            />
            Special characters
          </label>
        </div>
      </section>
    </main>
  );
}
