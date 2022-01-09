const Intern = require('../lib/intern');

describe('Intern', function () {
  describe('Initialization', function () {
    it('should return a "Intern" object containing properties named "name", "id", "email", and "school"', function () {
      const name = 'Paul';
      const id = '3';
      const email = 'paul@email.com';
      const school = 'University of Manchester'
      const paul = new Intern(name, id, email, school);
      expect(paul.name).toEqual(name);
      expect(paul.id).toEqual(id);
      expect(paul.email).toEqual(email);
      expect(paul.school).toEqual(school);
    });
  });

  describe('getName', function () {
    it('should return the "Intern" name', function () {
      const name = 'Paul';
      const id = '3';
      const email = 'paul@email.com';
      const school = 'University of Manchester'
      const paul = new Intern(name, id, email, school);
      expect(paul.getName()).toEqual(name);
    });
  });

  describe('getId', function () {
    it('should return the "Intern" id', function () {
      const name = 'Paul';
      const id = '3';
      const email = 'paul@email.com';
      const school = 'University of Manchester'
      const paul = new Intern(name, id, email, school);
      expect(paul.getId()).toEqual(id);
    });
  });

  describe('getEmail', function () {
    it('should return the "Intern" email', function () {
      const name = 'Paul';
      const id = '3';
      const email = 'paul@email.com';
      const school = 'University of Manchester'
      const paul = new Intern(name, id, email, school);
      expect(paul.getEmail()).toEqual(email);
    });
  });

  describe('getSchool', function () {
    it('should return the "Intern" school', function () {
      const name = 'Paul';
      const id = '3';
      const email = 'paul@email.com';
      const school = 'University of Manchester'
      const paul = new Intern(name, id, email, school);
      expect(paul.getSchool()).toEqual(school);
    });
  });

  describe('getRole', function () {
    it('should return the "Intern" role', function () {
      const name = 'Paul';
      const id = '3';
      const email = 'paul@email.com';
      const school = 'University of Manchester'
      const paul = new Intern(name, id, email, school);
      expect(paul.getRole()).toEqual('Intern');
    });
  });
});
