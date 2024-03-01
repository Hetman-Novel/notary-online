let sendingDocToNotary = document.querySelector('.sending-doc-to-notary')

// Title and text
let titleAndText = document.querySelector('.sending-doc-to-notary__wrap-title-text')

// Data sent
let dataSent = document.querySelector('.sending-doc-to-notary__data-sent')

// Wrapper form
let wrapperForm = document.querySelector('.sending-doc-to-notary__wrap-form')

// Icons (Steps)
let stepIcon1 = document.getElementById('step-icon-1')
let stepIcon2 = document.getElementById('step-icon-2')
let stepIcon3 = document.getElementById('step-icon-3')
let stepIcon4 = document.getElementById('step-icon-4')
let stepIcon5 = document.getElementById('step-icon-5')

// Blocks (Steps)
let formStep1 = document.getElementById('block-step-1')
let formStep2 = document.getElementById('block-step-2')
let formStep3 = document.getElementById('block-step-3')
let formStep4 = document.getElementById('block-step-4')
let formStep5 = document.getElementById('block-step-5')

// Buttons 

// Next
let btnToStep2 = document.getElementById('btn-to-step-2')
let btnToStep3 = document.getElementById('btn-to-step-3')
let btnToStep4 = document.getElementById('btn-to-step-4')
let btnToStep5 = document.getElementById('btn-to-step-5')
let btnSend = document.getElementById('btn-send')

// Prev
let btnPrevToStep1 = document.getElementById('btn-prev-to-step-1')
let btnPrevToStep2 = document.getElementById('btn-prev-to-step-2')
let btnPrevToStep3 = document.getElementById('btn-prev-to-step-3')
let btnPrevToStep4 = document.getElementById('btn-prev-to-step-4')

if (sendingDocToNotary) {

    // Next

    // Step 1 
    btnToStep2.addEventListener('click', () => {
        stepIcon1.classList.remove('active')
        formStep1.classList.remove('step-active')
        stepIcon1.classList.add('passed')
        stepIcon2.classList.add('active')
        formStep2.classList.add('step-active')
    })

    // Step 2
    btnToStep3.addEventListener('click', () => {
        stepIcon2.classList.remove('active')
        formStep2.classList.remove('step-active')
        stepIcon2.classList.add('passed')
        stepIcon3.classList.add('active')
        formStep3.classList.add('step-active')
    })

    // Step 3
    btnToStep4.addEventListener('click', () => {
        stepIcon3.classList.remove('active')
        formStep3.classList.remove('step-active')
        stepIcon3.classList.add('passed')
        stepIcon4.classList.add('active')
        formStep4.classList.add('step-active')
    })

    // Step 4
    btnToStep5.addEventListener('click', () => {
        stepIcon4.classList.remove('active')
        formStep4.classList.remove('step-active')
        stepIcon4.classList.add('passed')
        stepIcon5.classList.add('active')
        formStep5.classList.add('step-active')
    })

    // Step 5
    btnSend.addEventListener('click', () => {
        titleAndText.classList.add('hidden')
        wrapperForm.classList.add('hidden')
        dataSent.classList.remove('hidden')

        /*
		setTimeout(() => {
            titleAndText.classList.remove('hidden')
            wrapperForm.classList.remove('hidden')
            dataSent.classList.add('hidden')

            stepIcon5.classList.remove('active')
            stepIcon1.classList.remove('passed')
            stepIcon2.classList.remove('passed')
            stepIcon3.classList.remove('passed')
            stepIcon4.classList.remove('passed')
            stepIcon5.classList.remove('passed')
            stepIcon1.classList.add('active')

            formStep5.classList.remove('step-active')
            formStep1.classList.add('step-active')
        }, 3000)
		*/
    })


    // Prev

    // Step 2
    btnPrevToStep1.addEventListener('click', () => {
        stepIcon1.classList.remove('passed')
        stepIcon2.classList.remove('active')
        formStep2.classList.remove('step-active')
        formStep1.classList.add('step-active')
        stepIcon1.classList.add('active')
    })

    // Step 3
    btnPrevToStep2.addEventListener('click', () => {
        stepIcon2.classList.remove('passed')
        stepIcon3.classList.remove('active')
        formStep3.classList.remove('step-active')
        formStep2.classList.add('step-active')
        stepIcon2.classList.add('active')
    })
    
    // Step 4
    btnPrevToStep3.addEventListener('click', () => {
        stepIcon3.classList.remove('passed')
        stepIcon4.classList.remove('active')
        formStep4.classList.remove('step-active')
        formStep3.classList.add('step-active')
        stepIcon3.classList.add('active')
    })
    
    // Step 5
    btnPrevToStep4.addEventListener('click', () => {
        stepIcon4.classList.remove('passed')
        stepIcon5.classList.remove('active')
        formStep5.classList.remove('step-active')
        formStep4.classList.add('step-active')
        stepIcon4.classList.add('active')
    })


    // Custom field file

    // Получаем ссылки на элементы DOM
    var fileInput = document.getElementById('choose-files');
    var fileDisplay = document.getElementById('choose-files-names');

    // Добавляем прослушиватель события change к элементу выбора файла
    fileInput.addEventListener('change', displaySelectedFiles);

    // Функция, которая будет вызываться при изменении выбора файла
    function displaySelectedFiles() {
        fileDisplay.innerHTML = ""; // Очищаем содержимое перед обновлением

        if (fileInput.files.length > 0) {
            var fileNames = [];
            for (var i = 0; i < fileInput.files.length; i++) {
                fileNames.push(fileInput.files[i].name);
            }
            fileDisplay.innerHTML = fileNames.join(", ");
        } else {
            fileDisplay.innerHTML = "No file chosen";
        }
    }
}

// Ajax JavaScript
document.getElementById("sending-doc-to-notary-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение отправки формы

    var form = document.getElementById("sending-doc-to-notary-form");
    var formData = new FormData(form);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "обработчик.php", true); // Укажите URL вашего обработчика на сервере
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                document.getElementById("result").innerHTML = xhr.responseText;
            } else {
                document.getElementById("result").innerHTML = "Произошла ошибка при отправке данных";
            }
        }
    };
    xhr.send(formData);
});