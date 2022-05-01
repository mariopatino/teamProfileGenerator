// 

const Employee = require('../lib/Employee');

describe('Employee', () => {
      test('should create employee instance', () => {
            const employee= new Employee();
            expect(typeof employee).toBe('object');
      }),
      test('when called, getRole() should return a string "Employee"', () => {
            const employee = new Employee("Mario", 301511, "mario@mail.com");
            expect(employee.getRole()).toBe('Employee');
      })
      test('should create employee instance with the name property supplied at instantiation', () => {
            const employeeName = "name test";
            const employee = new Employee(employeeName);
            expect(employee.name).toBe('name test');
      }),
      test('when called, getName() returns the name of the employee', () => {
            const employee = new Employee('name test');
            expect(employee.getName()).toBe('name test');
      }),
      test('should create employee instance with the id property supplied at instantiation', () => {
            const employeeId = "897634";
            let employee = new Employee("Name", employeeId);
            expect(employee.id).toBe(employeeId);
      }),
      test('when called, getId() returns the id of the employee', () => {
            const employeeId = "897699";
            let employee = new Employee("Name", employeeId);
            expect(employee.getId()).toBe(employeeId);
      }),
      test('should create employee instance with the email property supplied at instantiation', () => {
            const employeeEmail = "dulce@mail.com.com";
            let employee = new Employee("Dulce", 896524, employeeEmail);
            expect(employee.email).toBe(employeeEmail);
      }),
      test('when called, getEmail() returns the email of the employee', () => {
            const employeeEmail = "dulce@mail.com";
            let employee = new Employee("Dulce", 123456, employeeEmail);
            expect(employee.getEmail()).toBe(employeeEmail);
      })
      })
