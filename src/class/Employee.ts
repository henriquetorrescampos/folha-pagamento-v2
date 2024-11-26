import { randomUUID } from "crypto";

class Employee {
  id: string;
  name: string;
  position: string;
  hourlyRate: number;
  hoursWorked: number;

  constructor(
    // atributos
    name: string,
    position: string,
    hourlyRate: number, // valor da hora
    hoursWorked: number, // horas trabalhadas
    id: string = randomUUID()
  ) {
    this.name = name;
    this.position = position;
    this.hourlyRate = hourlyRate;
    this.hoursWorked = hoursWorked;
    this.id = id;
  }

  // metodos
  recordHours(hours: number): number {
    return (this.hoursWorked += hours);
  }

  calculateMonthlyPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }

  getId(): string {
    return this.id;
  }
}

// armazena employee instances
const workers: Array<Employee> = [];

function addWorker(worker: Employee) {
  workers.push(worker);

  return workers;
}

// worker: ñ é a classe Employee, é a instância do objeto
function registerHours(worker: Employee, hours: number) {
  return worker.recordHours(hours);
}

function totalHours(worker: Employee) {
  return worker.hoursWorked;
}

function monthSalary(worker: Employee) {
  return worker.calculateMonthlyPay();
}

function calculateInss(worker: Employee) {
  let totalSalary = worker.calculateMonthlyPay();
  let inss = 0;

  if (totalSalary >= 4000.04) {
    inss = totalSalary * (14 / 100);
  } else if (totalSalary >= 2666.69) {
    inss = totalSalary * (12 / 100);
  } else if (totalSalary >= 1412.01) {
    inss = totalSalary * (9 / 100);
  } else {
    inss = totalSalary * (7.5 / 100);
  }

  if (inss > 908.85) {
    inss = 908.85;
  }

  return inss;
}

function labourReport(worker: Employee) {
  console.log("\n------- REPORT OF WORKER ------- \n");

  let total;

  console.log(`ID: ${worker.id}`);
  console.log(`Name: ${worker.name}`);
  console.log(`Position: ${worker.position}`);
  console.log(`Total hours worked: ${totalHours(worker)}`);
  console.log(`Total INSS: ${calculateInss(worker)}`);
  console.log(`Gorss salary: ${monthSalary(worker)}`);
  console.log(`Net salary: ${monthSalary(worker) - calculateInss(worker)}`);
  console.log("-----------------//-----------------");
}

// instanciando classe Employee
const firstEmployee = new Employee("Henrique", "Estagiario", 50, 40);

addWorker(firstEmployee);

registerHours(firstEmployee, 10);

monthSalary(firstEmployee);

calculateInss(firstEmployee);

labourReport(firstEmployee);
