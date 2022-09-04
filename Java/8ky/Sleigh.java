public class Sleigh {

    public static Boolean authenticate(String name, String password){
        
        if(name == "Santa Claus" && password == "Ho Ho Ho!"){
            return true;
        }
        return false;
      }
  }