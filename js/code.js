// const turnos = ["Augusto Flores","Martin Guzman","Sergio Diaz"];

function SetBasis(){
    const $divPrevio = document.querySelector(".m_c__container");
    if($divPrevio != null){
        $divPrevio.remove();
    }
    const $items = document.querySelectorAll(".m_c__item");
    for(var i of $items){
        i.style.display = "none";
    }
    const $div = document.createElement("div");
    $div.classList.add("m_c__container");
    const $mainContent = document.getElementById("main__content");
    // $mainContent.removeChild($mainContent.lastElementChild);
    $mainContent.appendChild($div);
}
async function InsertarCliente(){
    const $textarea = document.querySelectorAll(".textarea_result");
    let flag = true;
    for(var $txt of $textarea){
        if($txt.value=== ""){
            if (flag){
                flag = false;
                alert("Escriba los datos del turno");
            }
        }
    }
    if(flag){
        // turnos.push($txt.value);

        const response =await fetch("https://localhost:44318/api/Turno", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre: $textarea[0].value,
                apellido: $textarea[1].value,
                fecha: $textarea[2].value
            })
        });
        if (response.ok){
            alert("Turno agregado");
            for(var $txt of $textarea){
                $txt.value = "";
            }
        }

        // $txt.value = "";
        // alert("Turno agregado");
    }
}

async function EventoConsultar(){
    SetBasis();
    const $pTittle = document.createElement("p")
    $pTittle.classList.add("p_tittle");
    $pTittle.innerText = "Total de turnos por cliente";
    const $divResult = document.createElement("div");
    $divResult.classList.add("div_result");
    // let numerador = 0;

    const response = await fetch("https://localhost:44318/api/Turno");
    const turnos = await response.json();


    for(let turno of turnos){
        // numerador++;
        const $pCliente = document.createElement("p");
        $pCliente.innerText = `Turno ${turno.idTurno}: ${turno.nombre} ${turno.apellido} - ${turno.fecha}`;
        $pCliente.classList.add("p_cliente");
        $divResult.appendChild($pCliente);
    }
    const $mainContentContainer = document.querySelector(".m_c__container");
    $mainContentContainer.appendChild($pTittle);
    $mainContentContainer.appendChild($divResult);
}
function EventoAgregar(){
    SetBasis();
    const $pTittle = document.createElement("p")
    $pTittle.classList.add("p_tittle");
    $pTittle.innerText = "Agregar turno para cliente";
    const $textareaNombre = document.createElement("textarea");
    $textareaNombre.classList.add("textarea_result");
    $textareaNombre.setAttribute("placeholder", "Escriba el nombre del cliente");
    const $textareaApellido = document.createElement("textarea");
    $textareaApellido.classList.add("textarea_result");
    $textareaApellido.setAttribute("placeholder", "Escriba el apellido del cliente");
    const $inputFecha = document.createElement('input');
    $inputFecha.type = 'date';
    $inputFecha.id = 'fecha';
    $inputFecha.classList.add("textarea_result");
    const $button = document.createElement("button");
    $button.classList.add("button_result");
    $button.innerText = "Agregar";
    const $mainContentContainer = document.querySelector(".m_c__container");
    $mainContentContainer.appendChild($pTittle);
    $mainContentContainer.appendChild($textareaNombre);
    $mainContentContainer.appendChild($textareaApellido);
    $mainContentContainer.appendChild($inputFecha);
    $mainContentContainer.appendChild($button);
    $button.addEventListener("click", InsertarCliente);
}
function EventoInicio(){
    const $mainContent = document.getElementById("main__content");
    const $item = document.querySelector(".m_c__container");
    if ($item != null)
        $mainContent.removeChild($item);
    const $divs = document.querySelectorAll(".m_c_div");
    for(let div of $divs){
        div.style.display = "inline-block";
    }
}

document.getElementById("m_c_d_primer_item").addEventListener("click", EventoConsultar);
document.getElementById("list__consultar").addEventListener("click", EventoConsultar);

document.getElementById("list__agregar").addEventListener("click", EventoAgregar);
document.getElementById("m_c_d_segundo_item").addEventListener("click", EventoAgregar);

document.getElementById("list__inicio").addEventListener("click", EventoInicio);

