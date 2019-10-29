class Formatter {
  //add static methods here
     static capitalize (name) {
        name.charAt(0).toUpperCase() + name.slice(1);
     }
     
          static sanitize  (name) {
       return name.replace(/[^A-Za-z0-9-']+/g, '');
     }
     
    static titleize   (name) {
      let words = name.split(" ")
       
     }
}