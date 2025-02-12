//Allows multiple objects to handle a request without explicitly showing which handler will process it
abstract class Handler{
  Handler? successor;
  void handle(String request){
    successor?.handle(request);
  }
}
class ConcreteHandlerOne extends Handler{
  @override
  bool operator ==(Object other) {
    // TODO: implement ==
    return super == other;
  }
}