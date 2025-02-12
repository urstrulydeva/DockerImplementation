public class Singleton {
    private static Singleton instance;
        public static Singleton createInstance(){
        if(instance!=null){
                System.out.println("Instance already instantiated");
            return instance;
        }
        System.out.println("Instance instantiated");
        return instance= new Singleton();
        
    }
    public static Singleton callInstance(Singleton instance){
            System.out.println("Calling instance");
            return createInstance();
        
    }
    public static void main(String[] args) {
       Singleton instance=null;
       //System.out.println(instance);
       callInstance(instance);
       

        
    }
    
}
