//1- Create a small program that holds personal information (e.g., full name, gender, phone, address) inside a link list.

// 2- Create a method for the program that searches for a node in a linked list based on full name and displays other information (from succeeding nodes)
// For example:
// Search("Mo") - > prints "Mo, Male, 017600000, Potsdammer Platz str"

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class PersonalInformation{
   constructor(){
       this.head= null;
   }
   InsertNode(data){
       let myNode = new Node(data);
       if(this.head ==null){
           this.head==myNode;
       }else{
           let Current = this.head;
           while(Current.next!=null){
               Current=Current.next;
           }
           Current.next = mynode;
       }
   }

   SearchName(name){
      
      while(this.name != null){
          let personalInfo = new PersonalInformation(name)
          console.log(personalInfo);
          break;
      }
   }

}


let fullname = new Node("Florin Fiath");
let gender = new Node("male");
let phone = new Node ("0170333555");
let address = new Node("Munchener Strasse 9 ,Munchen");  



console.log(fullname);
console.log(gender);
console.log(phone);
console.log(address);

