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

// worker: Employee o parâmetro deve ser do tipo/type Employee, ou seja, instância da classe Employee
function registerHours(worker: Employee, hours: number) {
  return worker.recordHours(hours);
}

const firstEmployee = new Employee("Henrique", "Estagiario", 50, 40);
addWorker(firstEmployee);

console.log(registerHours(firstEmployee, 10));
