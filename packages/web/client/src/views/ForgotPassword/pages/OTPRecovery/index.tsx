import React, { useContext, useState } from 'react';
import OtpInput from 'react-otp-input';
import { RouteComponentProps } from 'react-router-dom';
import { toast } from 'react-toastify';
import BackBtn from '../../../../shared/components/BackBtn';
import PhoneImage from '../../../../shared/themes/assets/images/sms-locked.svg';
import { AuthContext } from '../../../../store/context';
import axiosCustom from '../../../../utilities/axios';

const OTPRecovery = ({ history }: RouteComponentProps) => {
  const [otpValue, setOtp] = useState('');
  const { state } = useContext(AuthContext);
  const phone = state?.user?.phone;

  const handleOtp = (otp: string) => {
    setOtp(otp);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const checkOtpData = await axiosCustom().post(
        '/user/password/check/otp',
        {
          otp: otpValue,
          phone,
        },
      );
      if (!checkOtpData) {
        return toast.error('Something went wrong!', { className: 'toasty' });
      }
      const checkedOtpToken = checkOtpData.headers['x-auth'];
      localStorage.setItem('auth_token', checkedOtpToken);

      const verifyOtpData = await axiosCustom().get(
        '/user/password/verify/otp',
      );
      if (!verifyOtpData) {
        return toast.error('Something went wrong!', { className: 'toasty' });
      }
      const resetToken = verifyOtpData.data.data.token;
      localStorage.setItem('auth_token', resetToken);
      toast.success(verifyOtpData.data.message, { className: 'toasty' });

      setTimeout(() => {
        history.push('/forgot-password/reset-password');
      }, 3000);
    } catch (error) {
      toast.error(error?.response?.data?.errMessage, { className: 'toasty' });
    }
    return null;
  };

  const resendOtp = async () => {
    axiosCustom()
      .post('/user/password/forgotpassword', { phone })
      .catch((err) => {
        toast.error(err?.response?.data?.errMessage, { className: 'toasty' });
      });
    toast.success('OTP has been resent', { className: 'toasty' });
  };

  return (
    <div className="ForgotPassword OTP">
      <BackBtn />
      <h4>Please Enter 6-digit Recovery Code</h4>

      <img src={PhoneImage} alt="phone" className="ForgotPassword-otp-image" />

      <form className="OTP-form" onSubmit={handleSubmit}>
        <OtpInput
          value={otpValue}
          onChange={handleOtp}
          numInputs={6}
          shouldAutoFocus
          containerStyle="ForgotPassword-container-style"
          inputStyle="input-style"
          focusStyle="focus-style"
          isInputNum
        />

        <p className="OTP-help">
          I didn’t receive the code,{' '}
          <button type="button" className="OTP-resend" onClick={resendOtp}>
            Resend
          </button>
        </p>

        <input className="btn-primary" type="submit" value="Continue" />
      </form>
    </div>
  );
};

export default OTPRecovery;
