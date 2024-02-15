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