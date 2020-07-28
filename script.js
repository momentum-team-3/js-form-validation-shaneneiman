let form = document.querySelector("#parking-form")
let validForm

form.addEventListener("sumbit", validate)

function validate (event) {
    event.preventDefault()
    removeErrorMessage()
    removeValidMessage()

    validForm = true
        validateName()
        validateCarYear()
        validateCarMake()
        validateCarModel()
        validateStartDate()
        validateDays()
        validateCard()
        validateCvv()
        validateExpiration()

        showValidMessage()
}

function markFormAsInvalid() {
    validForm = false
}

function removeErrorMessage() {
    let errorDiv = document.querySelector("#error-msg")
    if (errorDiv) {
        errorDiv.innnerHTML = ""
    }
}

function removeValidMessage() {
    let validMsg = document.querySelector("#valid-message")
    if (validMsg) {
        validMsg.remove()
    }
}

// Name Validation 
function validateName () {
    const inputName = document.querySelector("#name-field")
    const name = inputName.value
    const parentEl = inputName.parentElement

    if (name) {
        parentEl.classList.remove("input-invalid")
        parentEl.classList.add("input-valid")
    } else {
        console.log("Name input is invalid")
        parentEl.classList.remove("input-valid")
        parentEl.classList.add("input-invalid")
        markFormAsInvalid()
    }
}

// Car Year Validation 
function validateCarYear () {
    const inputCarYear = document.querySelector("#car-year")
    const carYear = inputCarYear.value
    const parentEl = inputName.parentElement

    if (carYear) {
        parentEl.classList.remove("input-invalid")
        parentEl.classList.add("input-valid")
    } else {
        console.log("Name input is invalid")
        parentEl.classList.remove("input-valid")
        parentEl.classList.add("input-invalid")
        markFormAsInvalid()
    }
}

// Car Make Validation 
function validateCarMake () {
    const inputCarMake = document.querySelector("#car-make")
    const carMake = inputCarMake.value
    const parentEl = inputName.parentElement

    if (carMake) {
        parentEl.classList.remove("input-invalid")
        parentEl.classList.add("input-valid")
    } else {
        console.log("Name input is invalid")
        parentEl.classList.remove("input-valid")
        parentEl.classList.add("input-invalid")
        markFormAsInvalid()
    }
}

// Car Model Validation 
function validateCarModel () {
    const inputCarModel = document.querySelector("#car-model")
    const carModel = inputCarModel.value
    const parentEl = inputName.parentElement

    if (carModel) {
        parentEl.classList.remove("input-invalid")
        parentEl.classList.add("input-valid")
    } else {
        console.log("Name input is invalid")
        parentEl.classList.remove("input-valid")
        parentEl.classList.add("input-invalid")
        markFormAsInvalid()
    }
}

// Start Date Validation
function validateStartDate () {
    const inputStartDate = document.querySelector("#start-date-field")
    const startDate = inputStartDate.value
    const parentEl = inputName.parentElement

    if (startDate) {
        parentEl.classList.remove("input-invalid")
        parentEl.classList.add("input-valid")
    } else {
        console.log("Name input is invalid")
        parentEl.classList.remove("input-valid")
        parentEl.classList.add("input-invalid")
        markFormAsInvalid()
    }
}

// Number of Days Validation
function validateDays () {
    const inputDays = document.querySelector("#days-field")
    const days = inputDays.value
    const parentEl = inputName.parentElement

    if (days) {
        parentEl.classList.remove("input-invalid")
        parentEl.classList.add("input-valid")
    } else {
        console.log("Name input is invalid")
        parentEl.classList.remove("input-valid")
        parentEl.classList.add("input-invalid")
        markFormAsInvalid()
    }
}

// Credit Card Validation 
function validateCard () {
    const inputCard = document.querySelector("#credit-card-field")
    const card = inputCard.value
    const parentEl = inputName.parentElement

    if (card) {
        parentEl.classList.remove("input-invalid")
        parentEl.classList.add("input-valid")
    } else {
        console.log("Name input is invalid")
        parentEl.classList.remove("input-valid")
        parentEl.classList.add("input-invalid")
        markFormAsInvalid()
    }
}

// CVV Validation 
function validateCvv () {
    const inputCvv = document.querySelector("#cvv-field")
    const cvv = inputCvv.value
    const parentEl = inputName.parentElement

    if (cvv) {
        parentEl.classList.remove("input-invalid")
        parentEl.classList.add("input-valid")
    } else {
        console.log("Name input is invalid")
        parentEl.classList.remove("input-valid")
        parentEl.classList.add("input-invalid")
        markFormAsInvalid()
    }
}

// Expiration Date Validation 
function validateExpiration () {
    const inputExpiration = document.querySelector("#expiration-field")
    const Expiration = inputExpiration.value
    const parentEl = inputName.parentElement

    if (Expiration) {
        parentEl.classList.remove("input-invalid")
        parentEl.classList.add("input-valid")
    } else {
        console.log("Name input is invalid")
        parentEl.classList.remove("input-valid")
        parentEl.classList.add("input-invalid")
        markFormAsInvalid()
    }
}

function showValidMessage () {
    if (formIsValid) {
      const validMsgEl = document.createElement('h2')
      validMsgEl.id = 'valid-message'
      const validMsgText = document.createTextNode('This form is valid!')
      validMsgEl.appendChild(validMsgText)
      document.querySelector('main').appendChild(validMsgEl)
    }
  }