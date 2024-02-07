const persona = {
  nombre : 'Julio Aguilar Carmona',
  edad : 44,
  profesion: 'Docente',
  fecha_nacimiento: '11/03/1979',
  lugar_nacimiento: 'Tuxtepec, Oaxaca',
  signo: 'Piscis',
  pasatiempos: [
    'Programar',
    'Leer',
    'Videojuegos',
    'Tocar guitarra',
    'Cocinar',
    'Reprobar alumnos'
  ],
}

function App() {
  return (
    <div>
      <h1>Información personal</h1>
      <hr />
      <ul>
        <li>Nombre completo: {persona.nombre}</li>
        <li>Edad: {persona.edad}</li>
        <li>Profesión: {persona.profesion}</li>
        <li>Fecha de nacimiento: {persona.fecha_nacimiento}</li>
        <li>Lugar de nacimiento: {persona.lugar_nacimiento}</li>
        <li>Signo zodiacal: {persona.signo}</li>
        <li>Pasatiempos:
          <ul>
            {
              persona.pasatiempos.map((pasatiempo) => {
                return <li key={pasatiempo}>
                        {pasatiempo}
                      </li>
              })
            }
            {/* <li>{persona.pasatiempos[0]}</li>
            <li>{persona.pasatiempos[1]}</li>
            <li>{persona.pasatiempos[2]}</li>
            <li>{persona.pasatiempos[3]}</li>
            <li>{persona.pasatiempos[4]}</li> */}
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default App
