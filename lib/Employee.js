class Employee {
    constructor(name = '') {
      this.types = ['associate', 'asistant manager', 'Manager'];
      this.name = name;
  
      if (this.name === 'associate') {
        this.value = Math.floor(Math.random() * 10 + 30);
      } else if(this.name === 'Asistant Manager') {
        this.value = Math.floor(Math.random() * 5 + 7);
      } else {

      }
    }
  }
    
    module.exports = Employee;