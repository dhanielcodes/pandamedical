
import 'package:flutter_test/flutter_test.dart';
import 'package:pandamedical/views/register/register_bloc.dart';


Future<void> main() async {

  var _bloc = RegisterBloc();
     await _bloc.add(InitRegister());
  test('password visibility toggle test (default value: false)', (){
    expect(true, _bloc.state.showPassword);
  });

  test('password visibility toggle test (on toggle clicked)', (){
    expect(false, !_bloc.state.showPassword);
  });

  test('successful email validation', (){
    expect(true, RegisterBloc().validateEmail('abc@mail.com'));
  });
  test('unsuccessful test email validation', (){
    expect(false, RegisterBloc().validateEmail('abc@mail.'));
  });
  test('not successful password validation', (){
    expect(false, RegisterBloc().validatePassword('Nonumber@'));
  });
  test('successful password validation', (){
    expect(true, RegisterBloc().validatePassword('Mysignature1@'));
  });

  test('successful phone number validation', (){
    expect(true, RegisterBloc().validatePhone('1234567890'));
  });

  test('failed phone number validation', (){
    expect(false, RegisterBloc().validatePhone('123456789'));
  });
  
}
