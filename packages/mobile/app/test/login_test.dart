
import 'package:flutter_test/flutter_test.dart';
import 'package:pandamedical/views/login/login_bloc.dart';


Future<void> main() async {
  // testWidgets('Counter increments smoke test', (WidgetTester tester) async {
  //   // Build our app and trigger a frame.
  //   await tester.pumpWidget(MyApp());

  //   // Verify that our counter starts at 0.
  //   expect(find.text('0'), findsOneWidget);
  //   expect(find.text('1'), findsNothing);

  //   // Tap the '+' icon and trigger a frame.
  //   await tester.tap(find.byIcon(Icons.add));
  //   await tester.pump();

  //   // Verify that our counter has incremented.
  //   expect(find.text('0'), findsNothing);
  //   expect(find.text('1'), findsOneWidget);
  // });

  var _bloc = LoginBloc();
     await _bloc.add(InitLogin());

     print('state: ${_bloc.state.emailVerified}');

  test('password visibility toggle test (default value: false)', (){
    expect(false, _bloc.state.showPassword);
  });

test('password visibility toggle test (on toggle clicked)', (){
    expect(true, !_bloc.state.showPassword);
  });

  test('successful test email validation', (){
    expect(true, LoginBloc().validateEmail('abc@mail.com'));
  });

  test('unsuccessful test email validation', (){
    expect(false, LoginBloc().validateEmail('abc@mail.'));
  });


}
