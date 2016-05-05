
var employee = [];
var unique = [];
function calculate() {
	'use scrict';
    console.log("calculate()");
  
 
  
  

 
  

  
var pad = "00000000";
var n =  Math.floor((Math.random() * 99999999) + 1);
var result = (pad+n).slice(-pad.length);
  
  
  
  
  
  
  var DateHolder = new Date();
var hireDateString = DateHolder.toString();
hiredate = hireDateString.slice(0,15);
  
  
  
  
  
  
  
  fname = document.getElementById('fname').value;


lname = document.getElementById('lname').value;


dept = document.getElementById('dept').value;
  
  
  var person = {
    firstName:document.getElementById('fname').value,
    lastName:document.getElementById('lname').value,
    department:document.getElementById('dept').value,
   employeeid:result,
   hiredate:hiredate,
};

  employee.push(person);
  
  
  
  
 
  

     console.log(employee);
  console.log("total employees = "+employee.length);
  
  
  
  
  
  fullName = lname +", "+ fname;  
  document.getElementById("employeeAdd").innerHTML="Employee Added";
document.getElementById("displayName").innerHTML="Name: " + fullName;
document.getElementById("displayDept").innerHTML="Department: " + dept;
  document.getElementById("displayId").innerHTML="Employee ID: " + result;
  document.getElementById("displayDate").innerHTML="Hire Date: " + hiredate;
  
document.getElementById("displayTotal").innerHTML="Total Employees: " + employee.length;  
  
 
  

  
  
  
  
  
  
	return false;    
} // End of calculate() function.

function init() {
	'use strict';
    console.log("init()");
	document.getElementById('theForm').onsubmit = calculate;
} // End of init() function.
console.log("page is loaded.");
window.onload = init;
