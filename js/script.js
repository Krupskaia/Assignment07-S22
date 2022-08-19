// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm')
let employeesTable = document.getElementById('employees')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = document.querySelector('#empCount')
let totalEmployees =  parseInt(document.querySelector('#empCount').value)
if (isNaN(totalEmployees)) {
    totalEmployees = 0
}


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    let newEmployeeId = document.querySelector('#id').value
    let newEmployeeName = document.querySelector('#name').value
    let newEmployeeExtension = document.querySelector('#extension').value
    let newEmployeeEmail = document.querySelector('#email').value
    let newEmployeeDepartment = document.querySelector('#department').value
    
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = employeesTable.insertRow()
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellId = row.insertCell(0)    
    let cellName = row.insertCell(1)    
    let cellExtension = row.insertCell(2)    
    let cellEmail = row.insertCell(3)    
    let cellDepartment = row.insertCell(4)    

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let textId = document.createTextNode(newEmployeeId)
    cellId.appendChild(textId)
    let textName = document.createTextNode(newEmployeeName)
    cellName.appendChild(textName)
    let textExtension = document.createTextNode(newEmployeeExtension)
    cellExtension.appendChild(textExtension)
    let textEmail = document.createTextNode(newEmployeeEmail)
    cellEmail.appendChild(textEmail)
    let textDepartment = document.createTextNode(newEmployeeDepartment)
    cellDepartment.appendChild(textDepartment)


    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-sm float-right'    
    let textDelete = document.createTextNode('X')
    deleteBtn.appendChild(textDelete)
    let cellDelete = row.insertCell(5)
    cellDelete.appendChild(textDelete)

    // RESET THE FORM
    document.querySelector('#id').value = ''
    document.querySelector('#name').value = ''
    document.querySelector('#extension').value = ''
    document.querySelector('#email').value = ''
    document.querySelector('#department').value = ''

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById("id").focus();
    

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    totalEmployees = totalEmployees + 1
    empCount.innerHTML = totalEmployees

})

// DELETE EMPLOYEE
employeesTable.addEventListener('click', (e) => {
    // CHECK TO SEE IF THE .delete CLASS EXISTS ON LI
         // CONFIRM THE DELETION
        if (confirm(`Are you sure you want to delete task ${e.target.parentElement.innerText}?`)) {
            // SELECT THE PARENT LI ELEMENT AND THEN DELETE IT
            employeesTable.deleteRow(e.target.parentElement.rowIndex);
            
            totalEmployees = totalEmployees - 1
            empCount.innerHTML = totalEmployees
        }
    
    })

