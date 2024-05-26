
let notasCurso = [];

function guardar() {
  let nombreAlumno = document.getElementById('nombreAlumno').value;
  let nota1 = parseFloat(document.getElementById('nota1').value);
  let nota2 = parseFloat(document.getElementById('nota2').value);
  let nota3 = parseFloat(document.getElementById('nota3').value);

  if (nombreAlumno && !isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
    notasCurso.push({ nombre: nombreAlumno, notas: [nota1, nota2, nota3] });
    alert('Datos guardados');
    document.getElementById('formulario').reset();
  } else {
    alert('Por favor, complete todos los campos para guardar los datos');
  }
}

function promCurso() {
  if (notasCurso.length === 0) {
    alert('No hay datos para calcular el promedio del curso');
    return;
  }

  let totalNotas = 0;
  let totalAlumnos = 0;

  notasCurso.forEach(alumno => {
    totalNotas += alumno.notas.reduce((acc, nota) => acc + nota, 0);
    totalAlumnos += alumno.notas.length;
  });

  let promedioCurso = totalNotas / totalAlumnos;
  alert('El promedio del curso es ' + promedioCurso.toFixed(2));
}

function promAlumno() {
  let nombreAlumno = document.getElementById('nombreAlumno').value;
  let nota1 = parseFloat(document.getElementById('nota1').value);
  let nota2 = parseFloat(document.getElementById('nota2').value);
  let nota3 = parseFloat(document.getElementById('nota3').value);

  if (nombreAlumno && !isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
    let promedio = (nota1 + nota2 + nota3) / 3;
    alert('El promedio del alumno ' + nombreAlumno + ' es ' + promedio.toFixed(2));
  } else {
    alert('Por favor, complete todos los campos para calcular el promedio del alumno');
  }
}
