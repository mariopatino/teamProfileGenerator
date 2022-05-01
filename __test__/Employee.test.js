// 

const Employee = require('../lib/Employee');

describe('Employee', () => {
      test('should create employee instance', () => {
            const employee= new Employee();
            expect(typeof employee).toBe('object');
      }),
      test('should return a string "Employee" when called getRole()', () => {
            const employee = new Employee("Mario", 301511, "mario@mail.com");
            expect(employee.getRole()).toBe('Employee');
      })
      test('creating employee instance with the name property provided at initialization', () => {
            const employeeName = "name test";
            const employee = new Employee(employeeName);
            expect(employee.name).toBe('name test');
      }),
      test('should returns the name of the employeewhen when call getName()', () => {
            const employee = new Employee('name test');
            expect(employee.getName()).toBe('name test');
      }),
      test('should create employee instance with the id property supplied at instantiation', () => {
            const employeeId = "897634";
            let employee = new Employee("Name", employeeId);
            expect(employee.id).toBe(employeeId);
      }),
      test('should returns the id of the employee when call getId()', () => {
            const employeeId = "897699";
            let employee = new Employee("Name", employeeId);
            expect(employee.getId()).toBe(employeeId);
      }),
      test('should create employee instance with the email property supplied at instantiation', () => {
            const employeeEmail = "dulce@mail.com.com";
            let employee = new Employee("Dulce", 896524, employeeEmail);
            expect(employee.email).toBe(employeeEmail);
      }),
      test('should returns the email of the employee when call getEmail()', () => {
            const employeeEmail = "dulce@mail.com";
            let employee = new Employee("Dulce", 123456, employeeEmail);
            expect(employee.getEmail()).toBe(employeeEmail);
      })
      })
