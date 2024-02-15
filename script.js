/*
** Determinar si el postulante posea o no gratuidad para poder continuar
*/
document.addEventListener('DOMContentLoaded', function() {
    const radioGratuidadNo = document.getElementById('gratuidad-no');
    const radioGratuidadSi = document.getElementById('gratuidad-si');
    
    const mostrarAlert = () => {
        const alerta = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                No puede continuar con la postulación
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        document.getElementById('alert-container').innerHTML = alerta;
    };

    const quitarAlert = () => {
        document.getElementById('alert-container').innerHTML = '';
    };

    const habilitarTabs = () => {
        $('.nav-pills .nav-link').removeClass('disabled');
        $('.tab-pane').removeClass('disabled').attr('aria-disabled', false);
    };

    const deshabilitarTabs = () => {
        $('.nav-pills .nav-link').addClass('disabled');
        $('.tab-pane').addClass('disabled').attr('aria-disabled', true);
    };

    deshabilitarTabs();

    radioGratuidadNo.addEventListener('change', function() {
        if (radioGratuidadNo.checked) {
            habilitarTabs();
            quitarAlert();
        } else {
            deshabilitarTabs();
        }
    });

    radioGratuidadSi.addEventListener('change', function() {
        if (radioGratuidadSi.checked) {
            deshabilitarTabs();
            mostrarAlert();
        } else {
            habilitarTabs();
        }
    });
});

/*
** Función para mostrar y ocultar el campo CAE
*/
document.addEventListener('DOMContentLoaded', function () {
    const radioSi = document.getElementById('cae-si');
    const radioNo = document.getElementById('cae-no');
    const campoCae = document.getElementById('campo-cae');
    
    function toggleCampoCae() {
        if (radioSi.checked) {
            campoCae.style.display = 'block';
        } else {
            campoCae.style.display = 'none';
        }
    }

    radioSi.addEventListener('change', toggleCampoCae);
    radioNo.addEventListener('change', toggleCampoCae);

    toggleCampoCae();
});

/*
** Función para añadir campos dinámicos por cada aporte familiar seleccionado
*/
document.getElementById("personas-aportan-hogar").addEventListener("change", function() {
    var selectValue = parseInt(this.value);
    var dynamicBlock = document.getElementById("bloque-personas-aportan");

    dynamicBlock.innerHTML = "";

    for (var i = 1; i <= selectValue; i++) {
        dynamicBlock.innerHTML += `
            <div class="col-12 col-md-12 mt-4 mb-3">
                <hr>
                <p class="mb-1 fw-bold">Familiar ${i} que aporta</p>
                <div class="row">
                    <div class="col-12 col-md-4">
                        <div class="input-group">
                            <span class="input-group-text" id="personas-aportan-${i}Nombre"><i class="far fa-user"></i></span>
                            <input type="text" class="form-control" placeholder="Nombre completo del familiar ${i}" aria-label="Nombre completo del familiar ${i}" aria-describedby="personas-aportan-${i}Nombre">
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <div class="input-group">
                            <span class="input-group-text" id="personas-aportan-${i}Edad"><i class="far fa-calendar-alt"></i></span>
                            <input type="number" class="form-control" placeholder="Edad del familiar ${i}" aria-label="Edad del familiar ${i}" aria-describedby="personas-aportan-${i}Edad">
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <div class="input-group">
                            <span class="input-group-text" id="personas-aportan-${i}Monto"><i class="far fa-money-bill-alt"></i></span>
                            <input type="number" min="1" max="99999999" class="form-control" placeholder="Monto aporte mensual ${i}" aria-label="Monto aporte mensual ${i}" aria-describedby="personas-aportan-${i}Monto">
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    dynamicBlock.style.display = "block";
});

/*
** Función para mostrar y ocultar los campos de enfermedad
*/
document.addEventListener('DOMContentLoaded', function () {
    const radioSi = document.getElementById('enfermedad-cronica-si');
    const radioNo = document.getElementById('enfermedad-cronica-no');
    const campoEnfermedad = document.getElementById('campo-enfermedad');

    function toggleCampoEnfermedad() {
        campoEnfermedad.style.display = radioSi.checked ? 'block' : 'none';
    }

    radioSi.addEventListener('change', toggleCampoEnfermedad);
    radioNo.addEventListener('change', toggleCampoEnfermedad);
    toggleCampoEnfermedad(); // Para asegurarse de que el campo se oculte o muestre según la selección inicial.
});

/*
** Función para añadir campos dinámicos por cada hijo en el grupo familiar
*/
document.getElementById("hijos-grupo-familiar").addEventListener("change", function() {
    var selectValueHijo = parseInt(this.value);
    var dynamicBlockHijo = document.getElementById("bloque-hijos-familia");

    dynamicBlockHijo.innerHTML = "";

    for (var i = 1; i <= selectValueHijo; i++) {
        dynamicBlockHijo.innerHTML += `
            <div class="col-12 col-md-12 mt-4 mb-3">
                <hr>
                <p class="mb-1 fw-bold">Hijo ${i}</p>
                <div class="row">
                    <div class="col-12 col-md-4">
                        <div class="input-group">
                            <span class="input-group-text" id="hijo-familia-${i}Rut"><i class="far fa-address-card"></i></span>
                            <input type="text" class="form-control" placeholder="Rut del Hijo ${i}" aria-label="Rut del Hijo ${i}" aria-describedby="hijo-familia-${i}Rut">
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <div class="input-group">
                            <span class="input-group-text" id="hijo-familia-${i}Nombre"><i class="far fa-user"></i></span>
                            <input type="number" class="form-control" placeholder="Nombre del Hijo ${i}" aria-label="Nombre del Hijo ${i}" aria-describedby="hijo-familia-${i}Nombre">
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <div class="input-group">
                            <span class="input-group-text" id="hijo-familia-${i}Gasto"><i class="far fa-money-bill-alt"></i></span>
                            <input type="number" min="1" max="99999999" class="form-control" placeholder="Gasto total en educación anual del hijo ${i}" aria-label="Gasto total en educación anual del hijo ${i}" aria-describedby="hijo-familia-${i}Gasto">
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    dynamicBlockHijo.style.display = "block";
});

/*
** JSON para universidades de Chile
*/
$(document).ready(function() {
    var universities = [
        {"id": 1, "text": "Universidad de Chile"},
        {"id": 2, "text": "Pontificia Universidad Católica de Chile"},
        {"id": 3, "text": "Universidad de Santiago de Chile"},
        {"id": 4, "text": "Universidad Austral de Chile"},
        {"id": 5, "text": "Universidad de Concepción"},
        {"id": 6, "text": "Universidad de Valparaíso"},
        {"id": 7, "text": "Universidad Adolfo Ibáñez"},
        {"id": 8, "text": "Universidad Diego Portales"},
        {"id": 9, "text": "Universidad Católica de Valparaíso"},
        {"id": 10, "text": "Universidad de La Serena"},
        {"id": 11, "text": "Universidad de Tarapacá"},
        {"id": 12, "text": "Universidad de La Frontera"},
        {"id": 13, "text": "Universidad Católica del Norte"},
        {"id": 14, "text": "Universidad de Los Lagos"},
        {"id": 15, "text": "Universidad de Talca"}
    ];

    var $select = $('#nombre-institucion');
    $select.append('<option disabled selected value="">Seleccione una institución</option>');

    $.each(universities, function(index, university) {
        $select.append('<option value="' + university.id + '">' + university.text + '</option>');
    });

    $select.select2();
});

/*
** JSON para carreras de universidades
*/
$(document).ready(function() {
    var carreras = [
        {"id": 1, "text": "Ingeniería Civil"},
        {"id": 2, "text": "Medicina"},
        {"id": 3, "text": "Derecho"},
        {"id": 4, "text": "Arquitectura"},
        {"id": 5, "text": "Psicología"},
        {"id": 6, "text": "Administración de Empresas"},
        {"id": 7, "text": "Enfermería"},
        {"id": 8, "text": "Ingeniería Comercial"},
        {"id": 9, "text": "Pedagogía en Educación Básica"},
        {"id": 10, "text": "Pedagogía en Educación Parvularia"},
        {"id": 11, "text": "Contabilidad y Auditoría"},
        {"id": 12, "text": "Periodismo"},
        {"id": 13, "text": "Ingeniería Informática"},
        {"id": 14, "text": "Ingeniería en Construcción"},
        {"id": 15, "text": "Ingeniería en Alimentos"}
    ];

    var $select = $('#nombre-carrera');
    $select.append('<option disabled selected value="">Seleccione una Carrera</option>');

    $.each(carreras, function(index, carrera) {
        $select.append('<option value="' + carrera.id + '">' + carrera.text + '</option>');
    });

    $select.select2();
});

