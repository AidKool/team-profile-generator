const Employee = require('../lib/employee');

describe('Employee', function () {
  describe('Initialization', function () {
    it('should return an "Employee" object containing properties named "name", "id", and "email"', function () {
      const name = 'Paul';
      const id = '3';
      const email = 'paul@email.com';
      const paul = new Employee(name, id, email);
      expect(paul.name).toEqual(name);
      expect(paul.id).toEqual(id);
      expect(paul.email).toEqual(email);
    });
  });

  describe('getName', function () {
    it('should return the "Employee" name', function () {
      const name = 'Paul';
      const id = '3';
      const email = 'paul@email.com';
      const paul = new Employee(name, id, email);
      expect(paul.getName()).toEqual(name);
    });
  });
  
  describe('getId', function () {
    it('should return the "Employee" id', function () {
      const name = 'Paul';
      const id = '3';
      const email = 'paul@email.com';
      const paul = new Employee(name, id, email);
      expect(paul.getId()).toEqual(id);
    });
  });

  describe('getEmail', function () {
    it('should return the "Employee" email', function () {
      const name = 'Paul';
      const id = '3';
      const email = 'paul@email.com';
      const paul = new Employee(name, id, email);
      expect(paul.getEmail()).toEqual(email);
    });
  });

  describe('getRole', function () {
    it('should return the "Employee" role', function () {
      const name = 'Paul';
      const id = '3';
      const email = 'paul@email.com';
      const paul = new Employee(name, id, email);
      expect(paul.getRole()).toEqual('Employee');
    });
  });

});
