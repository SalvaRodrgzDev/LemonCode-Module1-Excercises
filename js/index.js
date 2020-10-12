document.addEventListener('DOMContentLoaded', function () {
    
    const titulosEjercicios = [...document.querySelectorAll('.titulo-ejercicio')];
    const ejercicios = [...document.querySelectorAll('main > section')];

    titulosEjercicios.forEach(tituloEjercicio => tituloEjercicio.addEventListener('click', e => displayExercise(e.currentTarget) ));

    function displayExercise(ele) {

        const ejercicioSeleccionado = document.querySelector(`.${ele.dataset.ejercicio}`);

        hideAll();

        showClicked(ejercicioSeleccionado);

        displayCurrentTitle(ele);
    }

    function showClicked(ele) {
        ele.classList.remove('hidden')

        setTimeout(() => ele.classList.add('fade-in')
        , 100)
    }
    
    function hideAll() {
        ejercicios.forEach(ejercicio => ejercicio.classList.add('hidden'));
        ejercicios.forEach(ejercicio => ejercicio.classList.remove('fade-in'));
    }

    function displayCurrentTitle(ele) {
        titulosEjercicios.forEach(titulo => titulo.classList.remove('current'));
        ele.classList.add('current');
    }
});
;