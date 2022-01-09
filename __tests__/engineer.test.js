const Engineer = require('../lib/engineer');

describe('Engineer', function () {
  describe('Initialization', function () {
    it('should return a "Engineer" object containing properties named "name", "id", "email", and "github"', function () {
      const name = 'Paul';
      const id = '3';
      const email = 'paul@email.com';
      const github = 'https://github.com/paul';
      const paul = new Engineer(name, id, email, github);
      expect(paul.name).toEqual(name);
      expect(paul.id).toEqual(id);
      expect(paul.email).toEqual(email);
      expect(paul.github).toEqual(github);
    });
  });

  describe('getName', function () {
    it('should return the "Engineer" name', function () {
      const name = 'Paul';
      const id = '3';
      const email = 'paul@email.com';
      const github = 'https://github.com/paul';
      const paul = new Engineer(name, id, email, github);
      expect(paul.getName()).toEqual(name);
    });
  });

  describe('getId', function () {
    it('should return the "Engineer" id', function () {
      const name = 'Paul';
      const id = '3';
      const email = 'paul@email.com';
      const github = 'https://github.com/paul';
      const paul = new Engineer(name, id, email, github);
      expect(paul.getId()).toEqual(id);
    });
  });

  describe('getEmail', function () {
    it('should return the "Engineer" email', function () {
      const name = 'Paul';
      const id = '3';
      const email = 'paul@email.com';
      const github = 'https://github.com/paul';
      const paul = new Engineer(name, id, email, github);
      expect(paul.getEmail()).toEqual(email);
    });
  });

  describe('getGithub', function () {
    it('should return the "Engineer" github', function () {
      const name = 'Paul';
      const id = '3';
      const email = 'paul@email.com';
      const github = 'https://github.com/paul';
      const paul = new Engineer(name, id, email, github);
      expect(paul.getGithub()).toEqual(github);
    });
  });

  describe('getRole', function () {
    it('should return the "Engineer" role', function () {
      const name = 'Paul';
      const id = '3';
      const email = 'paul@email.com';
      const github = 'https://github.com/paul';
      const paul = new Engineer(name, id, email, github);
      expect(paul.getRole()).toEqual('Engineer');
    });
  });
});
