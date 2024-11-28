import {
  Employee,
  addWorker,
  calculateInss,
  labourReport,
  monthSalary,
  registerHours,
  totalHours,
} from "./class/Employee";

// instanciando classe Employee
const firstEmplyee = new Employee("Henrique", "Analista", 50, 40);

addWorker(firstEmplyee);

registerHours(firstEmplyee, 10);

monthSalary(firstEmplyee);

calculateInss(firstEmplyee);

labourReport(firstEmplyee);

totalHours(firstEmplyee);
