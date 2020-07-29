//Selecting parking form 
let form = document.querySelector("#parking-form")
let validForm 

// Valid function on event
function validate(event) {
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

//Invalid Function
function markFormAsInvalid() {
    validForm = false
}
//Remove Error Message function
function removeErrorMessage() {
    let errorDiv = document.querySelector("#error-msg")
    if (errorDiv) {
        errorDiv.innnerHTML = ""
    }
}
//Remove Valid Message function
function removeValidMessage() {
    let validMsg = document.querySelector("#valid-message")
    if (validMsg) {
        validMsg.remove()
    }
}

// Name Validation 
function validateName () {
    const inputName = document.querySelector("#name")
    const name = inputName.value
    const nameDiv = document.querySelector("#name-field")

    if (name) {
        nameDiv.classList.remove("input-invalid")
        nameDiv.classList.add("input-valid")
    } else {
        console.log("Name input is invalid")
        nameDiv.classList.remove("input-valid")
        nameDiv.classList.add("input-invalid")
        markFormAsInvalid()
    }
}

// Car Year Validation 
function validateCarYear () {
    const inputCarYear = document.querySelector("#car-year")
    const carYear = inputCarYear.value
    const carDiv = document.querySelector("#car-field")

    if (carYear) {
        carDiv.classList.remove("input-invalid")
        carDiv.classList.add("input-valid")
    } else {
        console.log("Name input is invalid")
        carDiv.classList.remove("input-valid")
        carDiv.classList.add("input-invalid")
        markFormAsInvalid()
    }
}

// Car Make Validation 
function validateCarMake () {
    const inputCarMake = document.querySelector("#car-make")
    const carMake = inputCarMake.value
    const carDiv = document.querySelector("#car-field")

    if (carMake) {
        carDiv.classList.remove("input-invalid")
        carDiv.classList.add("input-valid")
    } else {
        console.log("Name input is invalid")
        carDiv.classList.remove("input-valid")
        carDiv.classList.add("input-invalid")
        markFormAsInvalid()
    }
}

// Car Model Validation 
function validateCarModel () {
    const inputCarModel = document.querySelector("#car-model")
    const carModel = inputCarModel.value
    const carDiv = document.querySelector("#car-field")

    if (carModel) {
        carDiv.classList.remove("input-invalid")
        carDiv.classList.add("input-valid")
    } else {
        console.log("Name input is invalid")
        carDiv.classList.remove("input-valid")
        carDiv.classList.add("input-invalid")
        markFormAsInvalid()
    }
}

// Start Date Validation
function validateStartDate () {
    const inputStartDate = document.querySelector("#start-date")
    const startDate = inputStartDate.value
    const startDateDiv = document.querySelector("#start-date-field")

    if (startDate) {
        startDateDiv.classList.remove("input-invalid")
        startDateDiv.classList.add("input-valid")
    } else {
        console.log("Name input is invalid")
        startDateDiv.classList.remove("input-valid")
        startDateDiv.classList.add("input-invalid")
        markFormAsInvalid()
    }
}

// Number of Days Validation
function validateDays () {
    const inputDays = document.querySelector("#days")
    const days = inputDays.value
    const daysDiv = doument.querySelector("#days-field")

    if (days) {
        daysDiv.classList.remove("input-invalid")
        daysDiv.classList.add("input-valid")
    } else {
        console.log("Name input is invalid")
        daysDiv.classList.remove("input-valid")
        daysDiv.classList.add("input-invalid")
        markFormAsInvalid()
    }
}

// Credit Card Validation 
function validateCard () {
    const inputCard = document.querySelector("#credit-card")
    const card = inputCard.value
    const cardDiv = document.querySelector("#credit-card-field")

    if (card) {
        cardDiv.classList.remove("input-invalid")
        cardDiv.classList.add("input-valid")
    } else {
        console.log("Name input is invalid")
        cardDiv.classList.remove("input-valid")
        cardDiv.classList.add("input-invalid")
        markFormAsInvalid()
    }
}

// CVV Validation 
function validateCvv () {
    const inputCvv = document.querySelector("#cvv")
    const cvv = inputCvv.value
    const cvvDiv = document.querySelector("#cvv-field")

    if (cvv) {
        cvvDiv.classList.remove("input-invalid")
        cvvDiv.classList.add("input-valid")
    } else {
        console.log("Name input is invalid")
        cvvDiv.classList.remove("input-valid")
        cvvDiv.classList.add("input-invalid")
        markFormAsInvalid()
    }
}

// Expiration Date Validation 
function validateExpiration () {
    const inputExpiration = document.querySelector("#expiration")
    const expiration = inputExpiration.value
    const expirationDiv = document.querySelector("#expiration-field")

    if (expiration) {
        expirationDiv.classList.remove("input-invalid")
        expirationDiv.classList.add("input-valid")
    } else {
        console.log("Name input is invalid")
        expirationDiv.classList.remove("input-valid")
        expirationDiv.classList.add("input-invalid")
        markFormAsInvalid()
    }
}

//Valid Function
function showValidMessage () {
    if (validForm) {
      const validMsgEl = document.createElement('h2')
      validMsgEl.id = 'valid-message'
      const validMsgText = document.createTextNode('This form is valid!')
      validMsgEl.appendChild(validMsgText)
      document.querySelector('main').appendChild(validMsgEl)
    }
  }

//Add event lister to form run validation function on submission
form.addEventListener("sumbit", validate)