//data
var customers = [
    {
        "Name": "Ahmed",
        "Email": "ahmed@yahoo.com",
        "balance": 1000
    },
    {
        "Name": "Mahomoud",
        "Email": "mahomoud@yahoo.com",
        "balance": 2000
    },
    {
        "Name": "Norr",
        "Email": "norr@yahoo.com",
        "balance": 3000
    },
    {
        "Name": "Sara",
        "Email": "sara@yahoo.com",
        "balance": 4000
    },
    {
        "Name": "Sama",
        "Email": "sama@yahoo.com",
        "balance": 5000
    },
    {
        "Name": "Esraa",
        "Email": "esraa@yahoo.com",
        "balance": 6000
    },
    {
        "Name": "Nagam",
        "Email": "nagam@yahoo.com",
        "balance": 7000
    },
    {
        "Name": "Mostafa",
        "Email": "mostafa@yahoo.com",
        "balance": 8000
    },
    {
        "Name": "Tamem",
        "Email": "tamem@yahoo.com",
        "balance": 9000
    },
    {
        "Name": "Kassem",
        "Email": "kasem@yahoo.com",
        "balance": 10000
    }
]

var tbody = document.getElementsByTagName('tbody')[0]
var select = document.getElementsByTagName('select')[0]

//get select options value from customer array
function getoptions() {
    for (let i = 0; i < customers.length; i++) {
        var option = document.createElement('option')
        option.value = i
        option.innerText = customers[i].Email
        select.appendChild(option)
    }
}

//draw table function
function drawtable() {
    for (let i = 0; i < customers.length; i++) {
        var tr = document.createElement("tr")
        var th = document.createElement("th")
        var tdName = document.createElement("td")
        var tdEmail = document.createElement("td")
        var tdbalance = document.createElement("td")

        tdName.textContent = customers[i].Name
        tdEmail.textContent = customers[i].Email
        tdbalance.textContent = customers[i].balance

        th.textContent = i + 1
        tr.appendChild(th)
        tr.appendChild(tdName)
        tr.appendChild(tdEmail)
        tr.appendChild(tdbalance)

        tbody.appendChild(tr)
    }
}

//initial
drawtable()
getoptions()
document.getElementsByTagName('form')[0].style.display = "none"

//clear table function
function cleartable() {
    for (let i = 0; i < 10; i++) {
        tbody.firstElementChild.remove()
    }
}

//toggle form
var sendmoneybtn = document.getElementsByTagName('button')
sendmoneybtn[0].addEventListener('click', () => {
    document.getElementsByTagName('form')[0].style.display = document.getElementsByTagName('form')[0].style.display === 'none' ? '' : 'none';
})

//send money button
sendmoneybtn[1].addEventListener('click', (e) => {
    if (document.getElementsByTagName('input')[0].value == '') {
        document.getElementsByTagName('small')[0].style.display = "block"
    }
    else {
        document.getElementsByTagName('small')[0].style.display = "none"
        var i = document.getElementsByTagName('select')[0].value
        customers[i].balance += Math.floor(document.getElementsByTagName('input')[0].value)
        cleartable()
        drawtable()
    }
    document.getElementsByTagName('input')[0].value = ''
    e.preventDefault()
})