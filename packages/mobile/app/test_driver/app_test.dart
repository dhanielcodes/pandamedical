import 'package:flutter_driver/flutter_driver.dart';
import 'package:test/test.dart';

void main() {
  group('MyApp', () {

    //General widgets finder
    final backButtonFieldFinder = find.byValueKey('goBack');
    final emailTextFieldFinder = find.byValueKey('email');
    final passwordTextFieldFinder = find.byValueKey('password');
    final togglePasswordFinder = find.byValueKey('togglePassword');

    //Splash Screen widgets finder
    final getStartedButtonFieldFinder = find.byValueKey('getStarted');
    final signInButtonFieldFinder = find.byValueKey('signIn');
    
    //Login screen widgets finder
    final loginButtonFieldFinder = find.byValueKey('logIn');

    //Sign Up screen widgets finder
    final firstnameTextFieldFinder = find.byValueKey('firstname');
    final lastnameTextFieldFinder = find.byValueKey('lastname');
    final confirmPasswordTextFieldFinder = find.byValueKey('confirmPassword');
    final phoneTextFieldFinder = find.byValueKey('phone');
    // final genderDropMenuFinder = find.byValueKey('genderMenu');
    // final maleValueFinder = find.byValueKey('male');
    // final femaleValueFinder = find.byValueKey('female');
    final joinNowButtonFieldFinder = find.byValueKey('joinNow');

    //OTP screen widgets finder
    final otpTextFieldFinder = find.byValueKey('otp');
    final resendTextFinder = find.byValueKey('resendOtp');
    final continueButtonFieldFinder = find.byValueKey('continue');

    //pin set up screen
    final setPinTextFieldFinder = find.byValueKey('setPin');
    final resetPinTextFieldFinder = find.byValueKey('resetPin');
    final setPinButtonFinder = find.byValueKey('setPinBtn');
    final resetPinButtonFinder = find.byValueKey('resetPinBtn');
//final loginButtonFinder = find.byValueKey('loginBtn');

    FlutterDriver driver;

    // Connect to the Flutter driver before running any tests.
    setUpAll(() async {
      driver = await FlutterDriver.connect();
    });

    // Close the connection to the driver after the tests have completed.
    tearDownAll(() async {
      if (driver != null) {
        await driver.close();
      }
    });

    //welcome screen
    test('Run App', () async {
      await driver.clearTimeline();

      await driver.runUnsynchronized(() async {
        
        //go to login view
        await driver.tap(signInButtonFieldFinder);

        /*
        LOGIN VIEW
        */

        //find the email input field
        await driver.tap(emailTextFieldFinder);
        // Use the 'driver.enterText' method to enter the text to your input field.
        await driver.enterText('name@email.com');
        //find the password input field
        await driver.tap(passwordTextFieldFinder);
        // Use the 'driver.enterText' method to enter the text to your input field.
        await driver.enterText('password');
        //toggle password visibility
        await driver.tap(togglePasswordFinder);
        //find login button
        await driver.tap(loginButtonFieldFinder);
        //go back to splash screen
        print('go back to splash screen');
        await driver.tap(backButtonFieldFinder);
        //Go to registration screen - click "Get Started" Button
        await driver.tap(getStartedButtonFieldFinder);

        /*
        REGISTRATION VIEW
        */

      //find the firstname input field
        await driver.tap(firstnameTextFieldFinder);
        //enter the text to your input field.
        await driver.enterText('Sarah');
        //find the lastname input field
        await driver.tap(lastnameTextFieldFinder);
        //enter the text to your input field.
        await driver.enterText('Connor');
      //find the email input field
        await driver.tap(emailTextFieldFinder);
        //enter the text to your input field.
        await driver.enterText('name@email.com');
        //find the password input field
        await driver.tap(passwordTextFieldFinder);
        //enter the text to your input field.
        await driver.enterText('password');
        //find the confirm password input field
        await driver.tap(confirmPasswordTextFieldFinder);
        //enter the text to your input field.
        await driver.enterText('password');
        //toggle password visibility
        await driver.tap(togglePasswordFinder);
        //find the phone number input field
        await driver.tap(phoneTextFieldFinder);
        //enter the text to your input field.
        await driver.enterText('092033847');

        //find the gender menu dropdown menu
        // await driver.tap(genderDropMenuFinder);
        // //find the male value option
        // await driver.tap(maleValueFinder);
        // //find the gender menu dropdown menu
        // await driver.tap(genderDropMenuFinder);
        // //find the female value option
        // await driver.tap(femaleValueFinder);

        //find join now button button
        await driver.tap(joinNowButtonFieldFinder);
        //go back to splash screen
        //await driver.tap(backButtonFieldFinder);
        //Go to registration screen - click "Get Started" Button
        //await driver.tap(getStartedButtonFieldFinder);

        /*
        OTP VIEW
        */

      //find join now button button
        await driver.tap(otpTextFieldFinder);
        
        await driver.enterText('1234');
        //go back to splash screen
        await driver.tap(resendTextFinder);
        //Go to registration screen - click "Get Started" Button
        await driver.tap(continueButtonFieldFinder);

        //set pin view
        await driver.tap(setPinTextFieldFinder);
        await driver.enterText('1234');
        //go back to splash screen
        await driver.tap(setPinButtonFinder);
        //re type pin view
        await driver.tap(resetPinTextFieldFinder);
        await driver.enterText('1234');
        //go back to splash screen
        await driver.tap(resetPinButtonFinder);

      });
      
      

    });

    // test('Field investigation', () async {
    //   // Use the `driver.tap` method to find the input field.
    //   await driver.tap(emailTextFieldFinder);
    //   // verify that your input field is empty.
    //   await driver.waitFor(find.text(''));
    //   // Use the 'driver.enterText' method to enter the text to your input field.
    //   await driver.enterText('email@email.com');
    //   // verify that your input field contains entered text from the step above.
    //   await driver.waitFor(find.text('email@email.com'));
    // });
  });
}
