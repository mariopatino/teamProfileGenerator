const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');


      test('should create an instance of the engineer class as a subclass of the employee',() => {
            const engineer = new Engineer("test");
            expect(engineer).toBeInstanceOf(Employee);
      }),
      test('should create an instance of the engineer class with the github property supplied at instantiation', ()=> {
            const github = 'testGithub';
            let engineer = new Engineer("Carlos", 123456, "carlos@email.com", github);
            expect(engineer.github).toBe(github);
      }),
      test('should return the github property supplied at instantiation when call getGithub with it', () => {
            const github = 'testGithub';
            const engineer = new Engineer("Carlos", 567890, "carlos@email.com", github);
            expect(engineer.getGitHub()).toBe(github);
      })
