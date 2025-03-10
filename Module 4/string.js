class Employee {
    constructor( empId, empName, dept, salary ){
        this.empId = empId;
        this.empName = empName;
        this.dept = dept;
        this.salary = salary;
    };
};

const emp1 = new Employee(101, "Neha", "IT", 5000);

const html1 = "<h1> Hello " + emp1.empName + "</h1>" +
            "<h1> Your Id is : " + emp1.empId +"</h1>" +
            "<h1> Your Department is : " + emp1.dept +"</h1>"+
            "<h1> Your salary is : " + emp1.salary +"</h1>";

document.body.innerHTML = html1;