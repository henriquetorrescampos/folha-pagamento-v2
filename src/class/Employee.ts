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

function monthSalary(worker: Employee) {
  return worker.calculateMonthlyPay();
}

// instanciando classe Employee
const firstEmployee = new Employee("Henrique", "Estagiario", 50, 40);
addWorker(firstEmployee);

// registerHours(firstEmployee, 10);
console.log(monthSalary(firstEmployee));
