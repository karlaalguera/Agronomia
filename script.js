const cursos = [
  // Primer año - I Semestre
  { id: "B0106", nombre: "Biología General", prerrequisitos: [], semestre: "1er Año I Semestre" },
  { id: "B0107", nombre: "Laboratorio de Biología General", prerrequisitos: [], semestre: "1er Año I Semestre" },
  { id: "EF", nombre: "Actividad Deportiva", prerrequisitos: [], semestre: "1er Año I Semestre" },
  { id: "EG-I", nombre: "Humanidades I", prerrequisitos: [], semestre: "1er Año I Semestre" },
  { id: "MA1210", nombre: "Cálculo I", prerrequisitos: [], semestre: "1er Año I Semestre" },
  { id: "QU0114", nombre: "Química General Intensiva Lab.", prerrequisitos: [], semestre: "1er Año I Semestre" },
  { id: "QU0115", nombre: "Lab. Química General Intensiva", prerrequisitos: [], semestre: "1er Año I Semestre" },

  // Primer año - II Semestre
  { id: "B0111", nombre: "Botánica Agrícola I", prerrequisitos: ["B0106", "B0107"], semestre: "1er Año II Semestre" },
  { id: "EG-II", nombre: "Humanidades II", prerrequisitos: ["EG-I"], semestre: "1er Año II Semestre" },
  { id: "QU0200", nombre: "Química Analítica Cuantitativa I", prerrequisitos: ["QU0114"], semestre: "1er Año II Semestre" },
  { id: "QU0201", nombre: "Lab. Química Analítica Cuantitativa I", prerrequisitos: ["QU0115"], semestre: "1er Año II Semestre" },
  { id: "QU0210", nombre: "Fundamentos de Química Orgánica", prerrequisitos: ["QU0114"], semestre: "1er Año II Semestre" },
  { id: "QU0211", nombre: "Lab. Fundamentos de Química Orgánica", prerrequisitos: ["QU0115"], semestre: "1er Año II Semestre" },

  // Primer año - III Semestre (Verano)
  { id: "AF0104", nombre: "Métodos de Investigación Agrícola", prerrequisitos: ["MA1210"], semestre: "1er Año III Semestre (Verano)" },
  { id: "AF0106", nombre: "Práctica Agrícola I", prerrequisitos: ["B0111"], semestre: "1er Año III Semestre (Verano)" },

  // Segundo año - IV Semestre
  { id: "EG-ARTE", nombre: "Curso de Arte", prerrequisitos: [], semestre: "2do Año IV Semestre" },
  { id: "AF0105", nombre: "Fisiología Vegetal", prerrequisitos: ["B0111", "QU0201", "QU0210", "QU0211", "AF0104"], semestre: "2do Año IV Semestre" },
  { id: "AF0107", nombre: "Fitogenética", prerrequisitos: ["B0111", "QU0210", "QU0211"], semestre: "2do Año IV Semestre" },
  { id: "AF0108", nombre: "Relación Suelo-Planta", prerrequisitos: ["QU0200", "QU0201", "AF0104"], semestre: "2do Año IV Semestre" },
  { id: "FS0103", nombre: "Física para Ciencias de la Vida I", prerrequisitos: [], semestre: "2do Año IV Semestre" },

  // Quinto semestre
  { id: "AF0111", nombre: "Biología de Malezas", prerrequisitos: ["AF0105", "AF0107"], semestre: "2do Año V Semestre" },
  { id: "AF0109", nombre: "Fitopatología", prerrequisitos: ["AF0105", "AF0107"], semestre: "2do Año V Semestre" },
  { id: "AF0110", nombre: "Entomología Agrícola", prerrequisitos: ["AF0105", "AF0107"], semestre: "2do Año V Semestre" },
  { id: "AF0108b", nombre: "Agroecología", prerrequisitos: ["AF0108"], semestre: "2do Año V Semestre" },
  { id: "AF0112", nombre: "Productividad de Suelos", prerrequisitos: ["AF0108", "AF0108"], semestre: "2do Año V Semestre" },

  // Sexto semestre (Verano)
  { id: "AF0113", nombre: "Práctica Agrícola II", prerrequisitos: ["AF0111", "AF0109", "AF0110", "AF0108b"], semestre: "2do Año VI Semestre (Verano)" },
  { id: "AF0114", nombre: "Elementos de Economía Agrícola", prerrequisitos: ["AF0108b"], semestre: "2do Año VI Semestre (Verano)" },

  // Tercer año - VII Semestre
  { id: "SR-I", nombre: "Seminario Realidad Nacional I", prerrequisitos: ["EG-II"], semestre: "3er Año VII Semestre" },
  { id: "AF3410", nombre: "Fisiología de los Cultivos", prerrequisitos: ["AF0113"], semestre: "3er Año VII Semestre" },
  { id: "AF0118", nombre: "Manejo Integrado de Problemas Fitosanitarios", prerrequisitos: ["AF0113"], semestre: "3er Año VII Semestre" },
  { id: "AF0119", nombre: "Conservación de Suelos", prerrequisitos: ["AF0112"], semestre: "3er Año VII Semestre" },
  { id: "AF0116", nombre: "Manejo de Aguas Agrícolas", prerrequisitos: ["FS0103", "AF0112"], semestre: "3er Año VII Semestre" },
  { id: "AF0201", nombre: "Gestión y Administración de Empresas Agrícolas", prerrequisitos: ["AF0114"], semestre: "3er Año VII Semestre" },

  // Octavo semestre
  { id: "SR-II", nombre: "Seminario Realidad Nacional II", prerrequisitos: ["SR-I"], semestre: "3er Año VIII Semestre" },
  { id: "OPT951", nombre: "Optativos del Plan", prerrequisitos: [], semestre: "3er Año VIII Semestre" },
  { id: "AF0117", nombre: "Sistemas de Producción de Cultivos", prerrequisitos: ["AF3410", "AF0118", "AF0201"], semestre: "3er Año VIII Semestre" },
  { id: "AF0115", nombre: "Equipos Agrícolas y Mecanización", prerrequisitos: ["AF0119", "AF0116"], semestre: "3er Año VIII Semestre" },
  { id: "AF0202", nombre: "Práctica Agrícola III", prerrequisitos: ["AF0118", "AF0201"], semestre: "3er Año VIII Semestre" },

  // Cuarto año - IX Semestre
  { id: "RP", nombre: "Repertorio", prerrequisitos: [], semestre: "4to Año IX Semestre" },
  { id: "AF0212", nombre: "Diseño de Experimentos I", prerrequisitos: ["AF0117"], semestre: "4to Año IX Semestre" },
  { id: "AF0206", nombre: "Proyecto Productivo", prerrequisitos: ["AF0117", "AF0202"], semestre: "4to Año IX Semestre" },
  { id: "OPT951b", nombre: "Optativos del Plan", prerrequisitos: [], semestre: "4to Año IX Semestre" },

  // Décimo semestre
  { id: "AF0220", nombre: "Taller de Formulación de Proyectos", prerrequisitos: ["AF0212"], semestre: "4to Año X Semestre" },
  { id: "AF0207", nombre: "Pasantía", prerrequisitos: ["AF0206"], semestre: "4to Año X Semestre" },

  // Quinto año - XI Semestre
  { id: "AF0221", nombre: "Taller de Investigación I", prerrequisitos: ["AF0220", "AF0207"], semestre: "Licenciatura XI Semestre" },
  { id: "OPT951c", nombre: "Optativos del Plan", prerrequisitos: [], semestre: "Licenciatura XI Semestre" },

  // XII Semestre
  { id: "AF0222", nombre: "Taller de Investigación II", prerrequisitos: ["AF0221"], semestre: "Licenciatura XII Semestre" },
  { id: "AF5413", nombre: "Seminario de Agronomía", prerrequisitos: ["AF0207"], semestre: "Licenciatura XII Semestre" },
  { id: "OPT951d", nombre: "Optativos del Plan", prerrequisitos: [], semestre: "Licenciatura XII Semestre" },

  // XIII Semestre
  { id: "AF9500", nombre: "Investigación Dirigida I", prerrequisitos: [], semestre: "Licenciatura XIII Semestre" },
  { id: "AF9600", nombre: "Seminario de Graduación I", prerrequisitos: ["AF9500"], semestre: "Licenciatura XIII Semestre" },
  { id: "AF9501", nombre: "Investigación Dirigida II", prerrequisitos: ["AF9500"], semestre: "Licenciatura XIII Semestre" },
  { id: "AF9601", nombre: "Seminario de Graduación II", prerrequisitos: ["AF9600"], semestre: "Licenciatura XIII Semestre" },
  { id: "AF9602", nombre: "Seminario de Graduación III", prerrequisitos: ["AF9600"], semestre: "Licenciatura XIII Semestre" },
  { id: "AF9700", nombre: "Práctica Dirigida I", prerrequisitos: [], semestre: "Licenciatura XIII Semestre" },
  { id: "AF9701", nombre: "Práctica Dirigida II", prerrequisitos: ["AF9700"], semestre: "Licenciatura XIII Semestre" },
  { id: "AF9702", nombre: "Práctica Dirigida III", prerrequisitos: ["AF9701"], semestre: "Licenciatura XIII Semestre" },

  // XIV Semestre
  { id: "AF9501b", nombre: "Investigación Dirigida II (Repetido)", prerrequisitos: [], semestre: "Licenciatura XIV Semestre" },
];

const malla = document.getElementById("malla");

function crearCurso(curso) {
  const div = document.createElement("div");
  div.classList.add("curso");
  div.dataset.id = curso.id;
  div.textContent = `${curso.id} - ${curso.nombre}`;
  div.addEventListener("click", () => toggleCurso(div));
  return div;
}

function toggleCurso(div) {
  if (div.classList.contains("bloqueado")) return;
  div.classList.toggle("aprobado");
  actualizarCursos();
}

function actualizarCursos() {
  const aprobados = new Set(
    [...document.querySelectorAll(".curso.aprobado")].map(c => c.dataset.id)
  );

  cursos.forEach(curso => {
    const div = document.querySelector(`.curso[data-id="${curso.id}"]`);
    const desbloqueado = curso.prerrequisitos.every(pr => aprobados.has(pr));
    if (desbloqueado) {
      div.classList.remove("bloqueado");
    } else {
      div.classList.add("bloqueado");
      div.classList.remove("aprobado");
    }
  });
}

function agruparPorSemestre(cursos) {
  const agrupados = {};
  cursos.forEach(curso => {
    if (!agrupados[curso.semestre]) {
      agrupados[curso.semestre] = [];
    }
    agrupados[curso.semestre].push(curso);
  });
  return agrupados;
}

function init() {
  const agrupados = agruparPorSemestre(cursos);

  // Orden semestres (puedes modificar el orden si quieres)
  const ordenSemestres = Object.keys(agrupados).sort();

  ordenSemestres.forEach(semestre => {
    const contenedorSemestre = document.createElement("div");
    contenedorSemestre.classList.add("semestre");

    const titulo = document.createElement("h2");
    titulo.textContent = semestre;
    contenedorSemestre.appendChild(titulo);

    agrupados[semestre].forEach(curso => {
      const divCurso = crearCurso(curso);
      contenedorSemestre.appendChild(divCurso);
    });

    malla.appendChild(contenedorSemestre);
  });

  actualizarCursos();
}

init();
