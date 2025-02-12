//Singleton Pattern
//Not more than one instance of the class must be created
class SingletonPattern{
  static final SingletonPattern instance=SingletonPattern._internal();
  factory SingletonPattern(){
    return instance;
  }
  SingletonPattern._internal();
  void showMessage(){
    print("Singleton Instance");
  }

}
void main(){
  var s1=SingletonPattern();
  var s2=SingletonPattern();
  s1.showMessage();
  print(s1==s2);
}