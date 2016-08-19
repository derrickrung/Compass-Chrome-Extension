
let home = document.getElementById('#home');
let address;

// form.onsubmit = function() {
// 		let address = home.value;
// 		alert(address)
// 	}
}


function myListener(event) {
                address = home.value;


//                 if (salary && hourly) {
//                         showSalary.innerHTML = "Enter 1 Value Please";
//                         return showSalary.innerHTML;

//                 } else if (!salary && !hourly) {
//                         showSalary.innerHTML = "Enter 1 Value Please";
//                         return showSalary.innerHTML;
//                 } else {
//                         if (home) {
//                             chrome.storage.sync.set({ 'address': address }, function() {
//                             console.log(address);
//                             });
//                                 showSalary.innerHTML = `Current Hourly Rate: $${round(convertToHourly(salary), 2)}`;
//                                 return showSalary.innerHTML;
//                         } else {
//                             chrome.storage.sync.set({ 'salary': convertToSalary(hourly) }, function() {
//                             console.log("salary", convertToSalary(hourly));
//                             });
//                                 showSalary.innerHTML = `Current Hourly Rate: $${hourly}`;
//                                 return showSalary.innerHTML;
//                         }
//                 }
console.log(address)
}

  submit.addEventListener('click', myListener);