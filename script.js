//Task Day1



// var employeeName="Varalakshmi";
// console.log(employeeName);


// let employeeAge=22;
// console.log(employeeAge);


// const companyName="Stackly";
// console.log(companyName);


// var employeeName="Varalakshmi";
// let employeeAge=22;
// const companyName="Stackly";
// console.log(employeeName);
// console.log(employeeAge);
// console.log(companyName);


// alert("Welcome to Employee Portal")


// let taskCompleted=confirm("Have you completed the today's tasks?");
// console.log(taskCompleted);


// let employeeName=prompt("Enter your name");
// console.log(employeeName);


// let employeeName=prompt("Enter your name");
// document.writeln("Welcome"+employeeName);


// console.warn("Task submitted successfully");


// console.error("Task Submission failed");


// let employeeAge=22;
// console.log("Before Promotion",employeeAge);
// employeeAge=23;
// console.log("After Promotion",employeeAge);

//--------------------------------------------------------------------------------------------------------------

//Task Day2
//Task 1

// let name = "Naveen";
// let id = "EMP101";
// let department = "Development";
// let salary = 50000;
// let permanent = true;

// console.log("Employee Details");
// console.log("----------------");
// console.log("Name        : " + name);
// console.log("ID          : " + id);
// console.log("Department  : " + department);
// console.log("Salary      : " + salary);
// console.log("Permanent   : " + permanent);




//Task 2

// let skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Node.js"];

// console.log("First Skill  : " + skills[0]);
// console.log("Third Skill  : " + skills[2]);
// console.log("Last Skill   : " + skills[skills.length - 1]);
// console.log("Total Skills : " + skills.length);




//Task 3

// let company = {
//     companyName: "Stackly IT",
//     location: "Coimbatore",
//     employees: 100,
//     technologies: ["HTML", "CSS", "JavaScript", "React"]
// };

// console.log("Company Name : " + company.companyName);
// console.log("Location : " + company.location);
// console.log("Second Technology : " + company.technologies[1]);
// console.log("Total Technologies : " + company.technologies.length);



//Task 4

// let basicSalary = 30000;
// let bonus = 5000;

// let totalSalary = basicSalary + bonus;
// let tax = totalSalary * 10 / 100;
// let finalSalary = totalSalary - tax;

// console.log("Total Salary : " + totalSalary);
// console.log("Tax : " + tax);
// console.log("Final Salary : " + finalSalary);



// Task 5

// let attendance = 92;

// let result = attendance >= 75 ? "Eligible for Exam" : "Not Eligible";

// console.log(result);




// Task 6

// let username = "admin";
// let password = "12345";

// if (username == "admin" && password == "12345") {
//     console.log("Login Successful");
// } else {
//     console.log("Invalid Credentials");
// }


// Task 7

// let productName = "Laptop";
// let productPrice = 45000;
// let quantity = 2;

// let total = productPrice * quantity;

// console.log("Product : " + productName);
// console.log("Price : " + productPrice);
// console.log("Quantity : " + quantity);
// console.log("Total : " + total);




// Task 8

// let visitors = 100;

// console.log(++visitors);
// console.log(visitors++);
// console.log(--visitors);
// console.log(visitors--);


// Task 9

// console.log(10 == "10");
// console.log(10 === "10");
// console.log(20 != "20");
// console.log(20 !== "20");
// console.log(5 < 10);
// console.log(15 >= 20);
// console.log(100 <= 100);




// Task 10

// let empName = prompt("Enter Employee Name");
// let empAge = prompt("Enter Employee Age");

// let join = confirm("Do you want to join our company?");

// if (join) {
//     alert("Welcome " + empName);
// } else {
//     alert("Thank You");
// }



//final challenge

// let employee = {
//     name: "Naveen",
//     id: "EMP101",
//     department: "Development",
//     experience: 3,
//     salary: 50000
// };

// let skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Node.js"];

// let company = {
//     companyName: "Stackly IT",
//     location: "Coimbatore"
// };

// let username = "admin";
// let password = "12345";

// let loginStatus = (username == "admin" && password == "12345") ? "Success" : "Failed";

// let attendance = 92;
// let examStatus = attendance >= 75 ? "Eligible" : "Not Eligible";

// let bonus = 5000;
// let finalSalary = employee.salary + bonus;

// let join = confirm("Do you want to join our company?");

// if (join) {
//     alert("Welcome " + employee.name);
// } else {
//     alert("Thank You");
// }

// console.log("==============================");
// console.log("      EMPLOYEE PORTAL");
// console.log("==============================");
// console.log("Employee Name : " + employee.name);
// console.log("Employee ID   : " + employee.id);
// console.log("Department    : " + employee.department);
// console.log("Experience    : " + employee.experience + " Years");
// console.log("Salary        : ₹" + employee.salary);
// console.log("Bonus         : ₹" + bonus);
// console.log("Final Salary  : ₹" + finalSalary);
// console.log("Skills        : " + skills.join(", "));
// console.log("Attendance    : " + attendance + "%");
// console.log("Exam Status   : " + examStatus);
// console.log("Login Status  : " + loginStatus);
// console.log("Company       : " + company.companyName);
// console.log("Location      : " + company.location);
// console.log("==============================");




//Bonus Task
//ATM System


// let accountHolder = "Naveen";
// let accountNumber = "1234567890";
// let balance = 50000;

// let withdrawAmount = Number(prompt("Enter Withdraw Amount"));

// let remainingBalance = balance - withdrawAmount;

// let transaction = confirm("Do you want to withdraw money?");

// let status = transaction ? "Transaction Successful" : "Transaction Cancelled";

// alert("Welcome " + accountHolder);

// console.log("========================");
// console.log("       ATM SYSTEM");
// console.log("========================");
// console.log("Account Holder : " + accountHolder);
// console.log("Account Number : " + accountNumber);
// console.log("Available Balance : " + balance);
// console.log("Withdraw Amount : " + withdrawAmount);
// console.log("Remaining Balance : " + remainingBalance);
// console.log("Transaction Status : " + status);
// console.log("========================");



//----------------------------------------------------------------------------------------------------------------

//Task Day3


// Task 1: Employee Information System

// let name = prompt("Enter Employee Name");
// let age = prompt("Enter Employee Age");
// let department = prompt("Enter Employee Department");
// let salary = Number(prompt("Enter Employee Salary"));

// let employee = {
//     name: name,
//     age: age,
//     department: department,
//     salary: salary
// };

// console.log(employee);

// if (salary > 30000) {
//     console.log("Eligible for Bonus");
// } else {
//     console.log("Not Eligible");
// }


// Task 2: Supermarket Billing

// let productName = prompt("Enter Product Name");
// let productPrice = Number(prompt("Enter Product Price"));
// let quantity = Number(prompt("Enter Quantity"));

// let totalBill = productPrice * quantity;

// if (totalBill > 5000) {
//     totalBill = totalBill - (totalBill * 10 / 100);
// }

// console.log("Final Amount: " + totalBill);



// Task 3: Student Result Portal

// let studentName = prompt("Enter Student Name");
// let marks = Number(prompt("Enter Marks"));

// if (marks >= 90) {
//     console.log("Grade A");
// } else if (marks >= 75) {
//     console.log("Grade B");
// } else if (marks >= 50) {
//     console.log("Grade C");
// } else {
//     console.log("Fail");
// }



// Task 4: Bank ATM Eligibility

// let userName = prompt("Enter User Name");
// let balance = Number(prompt("Enter Account Balance"));
// let withdrawal = Number(prompt("Enter Withdrawal Amount"));

// if (withdrawal <= balance) {
//     console.log("Transaction Successful");
// } else {
//     console.log("Insufficient Balance");
// }



// Task 5: Login Validation

// let username = "admin";
// let password = "12345";

// let enteredUsername = prompt("Enter Username");
// let enteredPassword = prompt("Enter Password");

// if (enteredUsername === username && enteredPassword === password) {
//     console.log("Login Successful");
// } else {
//     console.log("Invalid Username or Password");
// }



// Task 6: Online Food Order

// let foods = [
//     "Pizza",
//     "Burger",
//     "Pasta",
//     "Biryani",
//     "Dosa",
//     "Idli",
//     "Noodles",
//     "Sandwich"
// ];

// console.log("First Item:", foods[0]);
// console.log("Last Item:", foods[foods.length - 1]);
// console.log("Total Items:", foods.length);

// for (let item of foods) {
//     console.log(item);
// }



// Task 7: Company Employee Directory

// let employeeDetails = {
//     name: "Naveen",
//     age: 25,
//     department: "IT",
//     salary: 40000,
//     experience: 3
// };

// for (let key in employeeDetails) {
//     console.log(key + " : " + employeeDetails[key]);
// }



// Task 8: Traffic Signal System

// let signal = prompt("Enter Signal Color");

// switch (signal.toLowerCase()) {
//     case "red":
//         console.log("Stop");
//         break;
//     case "yellow":
//         console.log("Ready");
//         break;
//     case "green":
//         console.log("Go");
//         break;
//     default:
//         console.log("Invalid Signal");
// }




// Task 9: Age Category Checker

// let userAge = Number(prompt("Enter Age"));

// if (userAge >= 0 && userAge <= 12) {
//     console.log("Child");
// } else if (userAge >= 13 && userAge <= 19) {
//     console.log("Teenager");
// } else if (userAge >= 20 && userAge <= 59) {
//     console.log("Adult");
// } else {
//     console.log("Senior Citizen");
// }



// Task 10: Employee Attendance

// let employeeName = prompt("Enter Employee Name");
// let attendance = prompt("Enter Attendance");

// console.log("Welcome " + employeeName);

// attendance.toLowerCase() === "present"
//     ? console.log("Attendance: Present")
//     : console.log("Attendance: Absent");














