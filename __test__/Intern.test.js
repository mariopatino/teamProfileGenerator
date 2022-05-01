const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe('Intern', () => {
      test('creating an Intern objetc, as a subclass of the employee class', () => {
            const intern = new Intern();
            expect(intern).toBeInstanceOf(Employee);
      }),
      test('setting the school property at instantiation of intern object', () => {
            const school = "Universidad Autonoma de Mexico";
            const intern = new Intern("Cesar Eduardo", 123456, "cesar@mail.com", school);
            expect(intern.school).toBe(school);
      }),
      test('calling getSchool() to return the school property provided at creation', () => {
            const school = "Universidad Autonoma de Mexico"";
            const intern = new Intern("Cesar", 123456, "cesar@mail.com", school);
            expect(intern.getSchool()).toBe(school);
      })
})
