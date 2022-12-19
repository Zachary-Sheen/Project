  class Times{
   name = "";
   firstTime = "";
   secondTime = "";


     constructor(nom,qT,dueDate,){
        this.name = nom;
        this.firstTime = qT;
        this.secondTime = dueDate;
      
     }

     name(){
        return this.name;
     }
     
     QTH(){
        return this.quizTestHW;
     }

     due(){
        return this.due;
     }
  }
