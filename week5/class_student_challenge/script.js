class Student {
    constructor(name, email, community){
       this.name = name;
       this.email = email;
       this.community = community;
    }

    greeting(){
        setTimeout(() => {
            console.log(`Hi, my name is ${this.name}`)
        }, 1000);
    }
}

class Bootcamp {
    constructor(name, level, students = []){
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(stuObj){
       let stuRegistered = this.students.find(s => s.email === stuObj.email);
       if(!stuRegistered){
           this.students.push(stuObj);
           console.log(`${stuObj.email} now registered for ${this.name}`);
       }
        return this.students;
    }
}