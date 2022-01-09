const Manager = require('../lib/manager');

describe('Manager', function () {
  describe('Initialization', function () {
    it('should return a "Manager" object containing properties named "name", "id", "email", and "officeNumber"', function () {
      const name = 'Paul';
      const id = '3';
      const email = 'paul@email.com';
      const officeNumber = 5;
      const paul = new Manager(name, id, email, officeNumber);
      expect(paul.name).toEqual(name);
      expect(paul.id).toEqual(id);
      expect(paul.email).toEqual(email);
      expect(paul.officeNumber).toEqual(officeNumber)
    });
  });

  describe('getName', function () {
    it('should return the "Manager" name', function () {
      const name = 'Paul';
      const id = '3';
      const email = 'paul@email.com';
      const officeNumber = 5;
      const paul = new Manager(name, id, email, officeNumber);
      expect(paul.getName()).toEqual(name);
    });
  });

  describe('getId', function () {
    it('should return the "Manager" id', function () {
      const name = 'Paul';
      const id = '3';
      const email = 'paul@email.com';
      const officeNumber = 5;
      const paul = new Manager(name, id, email, officeNumber);
      expect(paul.getId()).toEqual(id);
    });
  });

  describe('getEmail', function () {
    it('should return the "Manager" email', function () {
      const name = 'Paul';
      const id = '3';
      const email = 'paul@email.com';
      const officeNumber = 5;
      const paul = new Manager(name, id, email, officeNumber);
      expect(paul.getEmail()).toEqual(email);
    });
  });

  describe('getOfficeNumber', function () {
    it('should return the "Manager" officeNumber', function () {
      const name = 'Paul';
      const id = '3';
      const email = 'paul@email.com';
      const officeNumber = 5;
      const paul = new Manager(name, id, email, officeNumber);
      expect(paul.getOfficeNumber()).toEqual(officeNumber);
    });
  });

  describe('getRole', function () {
    it('should return the "Manager" role', function () {
      const name = 'Paul';
      const id = '3';
      const email = 'paul@email.com';
      const officeNumber = 5;
      const paul = new Manager(name, id, email, officeNumber);
      expect(paul.getRole()).toEqual('Manager');
    });
  });
});
