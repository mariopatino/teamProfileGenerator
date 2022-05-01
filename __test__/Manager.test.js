const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe('Manager', () => {
      test('Creating a Manager object as an instance of the employee class', () => {
            const manager = new Manager();
            expect(manager).toBeInstanceOf(Employee);
      }),
      test('Addingthe office number property to be set at initialization', () => {
            const officeNumber = '5533446677';
            const manager = new Manager("Juan Perez", 123456, "juan@mail.com", officeNumber);
            expect(manager.officeNumber).toBe(officeNumber);
      }),
      test('getOfficeNumber() will return the office number of Manager object it is setting on', () => {
            const officeNumber = '5533446677';
            const manager = new Manager("Juan Perez", 123456, "juan@mail.com", officeNumber);
            expect(manager.getOfficeNumber()).toBe(officeNumber);
      })
})
