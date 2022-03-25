class Customer {
    id;
    name;
    sales;

    constructor(id = 0, name = "", sales = 0) {
        this.id = id;
        this.name = name;
        this.sales = sales;
    }

    log() {
        console.log(this.id, this.name, this.sales);
    }
}

let customers = [
    new Customer(1, "MAX", 1000),
    new Customer(2, "P&G", 100000),
    new Customer(3, "Kroger", 50000),
    new Customer(4, "Meijer", 200000)

]

for(let customer of customers) {
    customer.log(); 
}

const loaded = () => {
    display(customers);
}

const display = () => {
    const tbodyCtrl = document.getElementById("custs")
    tbodyCtrl.innerHTML = "";
    for(let custs of customers) {
        let tr = "<tr>";
        tr += `<td>${custs.id}`;
        tr += `<td>${custs.name}`;
        tr += `<td>${custs.sales}`;
        tr += "<tr>";
        tbodyCtrl.innerHTML += tr;
    }
}

const add = () => {
    let inpIdCtrl = document.getElementById("pId");
    let inpNameCtrl = document.getElementById("pName");
    let inpSalesCtrl = document.getElementById("pSales");
    let cust = new Customer();
    cust.id = +inpIdCtrl.value;
    cust.name = inpNameCtrl.value;
    cust.sales = +inpSalesCtrl.value;
    customers.push(cust);
    display(customers);
}