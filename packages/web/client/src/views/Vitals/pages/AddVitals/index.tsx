/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Modal } from 'react-responsive-modal';
import { RouteComponentProps } from 'react-router-dom';
import 'react-responsive-modal/styles.css';
import validator from 'validator';
import { useForm, useFieldArray } from 'react-hook-form';
import { toast } from 'react-toastify';
import BackArrow from '../../../../shared/themes/assets/images/back-grey.svg';
import VitalsImg from '../../../../shared/themes/assets/images/vitals-graph.svg';
import CalendarImage from '../../../../shared/themes/assets/images/calendar.svg';
import VitalPlus from '../../../../shared/themes/assets/images/vital-plus.svg';
import VitalRemove from '../../../../shared/themes/assets/images/vitals-remove.svg';
import SelectCaret from '../../../../shared/themes/assets/images/select-caret.svg';
import { vitalInfo } from '../../../../helpers/vitalsHelper';
import axiosCustom from '../../../../utilities/axios';
import { AuthContext } from '../../../../store/context';
import { commentPattern } from '../../../../helpers/inputHelper';
import Menu from '../../../../shared/components/Menu';
import Toolbar from '../../../../shared/components/Toolbar';
import Button from '../../../../shared/components/Button';

const AddVitals = ({ history }: RouteComponentProps) => {
  const { state, updateUser } = useContext(AuthContext);
  const { user } = state;
  const [vitalsDate, setVitalsDate] = useState(new Date());

  const [time, setTime] = useState('00:00');
  const [comment, setComment] = useState('');

  const [errorMessages, setErrorMessages] = useState({
    vitalsDate: '',
    time: '',
    comment,
  });

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const {
    register,
    control,
    handleSubmit,
    setError,
    clearErrors,
    errors,
    getValues,
    watch,
  } = useForm({
    defaultValues: {
      vitals: [
        {
          vital: 'blood_pressure',
          value: '',
          bp_systolic: '',
          bp_diastolic: '',
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'vitals',
  });

  watch();

  const handleDate = (date: Date) => setVitalsDate(date);

  const checkVitalsDate = () => {
    if (!vitalsDate) {
      setErrorMessages({
        ...errorMessages,
        vitalsDate: 'This field is required',
      });
      return false;
    }
    setErrorMessages({
      ...errorMessages,
      vitalsDate: '',
    });
    return true;
  };

  const checkVitalsTime = () => {
    if (!time) {
      setErrorMessages({
        ...errorMessages,
        time: 'This field is required',
      });
      return false;
    }
    setErrorMessages({
      ...errorMessages,
      time: '',
    });
    return true;
  };

  const checkComment = () => {
    if (!comment) {
      setErrorMessages({
        ...errorMessages,
        comment: 'This field is required',
      });
      return false;
    }
    if (!commentPattern.test(comment.trim())) {
      setErrorMessages({
        ...errorMessages,
        comment: 'Invalid character input',
      });
      return false;
    }
    setErrorMessages({
      ...errorMessages,
      comment: '',
    });
    return true;
  };

  const onSubmit = async (vitalsReadings: any) => {
    const { vitals } = vitalsReadings;

    const vitalsData = vitals.map((v: any) => {
      if (v.vital === 'blood_pressure') {
        return {
          vitals_key: v.vital,
          vitals_default_value: v.bp_systolic,
          vitals_secondary_value: v.bp_diastolic,
          ...vitalInfo(v.vital),
        };
      }
      return {
        vitals_key: v.vital,
        vitals_default_value: v.value,
        vitals_secondary_value: null,
        ...vitalInfo(v.vital),
      };
    });

    const userVitals = {
      comment,
      vitals: vitalsData,
      user_id: user?.id,
      date_entered: vitalsDate,
      timestamp: time,
      source: 'patient generated',
      observer_id: user?.id,
      created_by: `${user?.firstName} ${user?.lastName}`,
    };

    if (
      Object.keys(errors).length === 0 &&
      errors.constructor === Object &&
      checkVitalsDate() &&
      checkVitalsTime() &&
      checkComment()
    ) {
      const data = await axiosCustom()
        .post('/vitals', userVitals)
        .catch((err) => {
          const errorMessage = err?.response?.data?.errMessage;
          toast.error(errorMessage, { className: 'toasty' });
        });

      if (data) {
        const userData = await axiosCustom().get('/auth/me');
        const userDetails = userData?.data?.data?.user;
        updateUser(userDetails);
        history.push('/vitals');
      }
    }
  };

  return (
    <div className="Vitals">
      <div className="Vitals-header">
        <span className="Vitals-header-text-back">
          <div onClick={() => history.goBack()}>
            <img src={BackArrow} alt="back" className="Vitals-back" />
          </div>
          <p>Add Vital(s)</p>
        </span>

        <div className="Vitals-img">
          <img src={VitalsImg} alt="vitals" />
        </div>
      </div>

      <div className="Vitals-body-container">
        <div className="Vitals-body">
          <form className="Vitals-form" onSubmit={handleSubmit(onSubmit)}>
            {fields.map((item, index) => (
              <div className="Vitals-vital-value" key={item.id}>
                <div>
                  <label
                    htmlFor={`vitals[${index}].vital`}
                    className="Vitals-label"
                  >
                    Vital
                  </label>
                </div>
                <div className="Vitals-dropdown-container">
                  <select
                    id={`vitals[${index}].vital`}
                    className="Vitals-dropdown"
                    defaultValue={item.vital}
                    name={`vitals[${index}].vital`}
                    ref={register({ required: 'This field is required' })}
                    onBlur={(e) => {
                      const { value } = e.target;
                      if (!value.trim()) {
                        setError(`vitals[${index}].vital`, {
                          type: 'manual',
                          message: 'This field is required',
                        });
                      } else {
                        clearErrors(`vitals[${index}].vital`);
                      }
                    }}
                  >
                    <option value="blood_pressure">Blood Pressure</option>
                    <option value="heart_rate">Heart Rate</option>
                    <option value="oxygen_saturation">Oxygen Saturation</option>
                    <option value="temperature">Temperature</option>
                    <option value="respiration_rate">Respiration Rate</option>
                    <option value="weight">Weight</option>
                    <option value="height">Height</option>
                    <option value="bmi">Body Mass Index (BMI)</option>
                    <option value="bsa">Body Surface Area</option>
                  </select>

                  <img
                    src={SelectCaret}
                    alt="select"
                    className="Profile-select-caret"
                  />
                </div>

                {getValues(`vitals[${index}].vital`) === 'blood_pressure' ? (
                  <>
                    <div>
                      <label htmlFor="bp-systolic" className="Vitals-label">
                        BP Systolic
                      </label>
                    </div>

                    <div>
                      <input
                        type="number"
                        step="0.001"
                        id="bp-systolic"
                        className="Vitals-value"
                        name={`vitals[${index}].bp_systolic`}
                        defaultValue={item.bp_systolic}
                        ref={register({ required: 'This field is required' })}
                        onBlur={(e) => {
                          const { value } = e.target;
                          if (!value.trim()) {
                            setError(`vitals[${index}].bp_systolic`, {
                              type: 'manual',
                              message: 'This field is required',
                            });
                          } else if (!validator.isNumeric(value.trim())) {
                            setError(`vitals[${index}].bp_systolic`, {
                              type: 'manual',
                              message: 'Value must be a number',
                            });
                          } else {
                            clearErrors(`vitals[${index}].bp_systolic`);
                          }
                        }}
                      />
                    </div>
                    <div className="error-msg">
                      {errors.vitals &&
                        errors?.vitals[index]?.bp_systolic?.message}
                    </div>

                    <div>
                      <label htmlFor="bp-diastolic" className="Vitals-label">
                        BP Diastolic
                      </label>
                    </div>

                    <div>
                      <input
                        type="number"
                        step="0.001"
                        id="bp-diastolic"
                        className="Vitals-value"
                        name={`vitals[${index}].bp_diastolic`}
                        defaultValue={item.bp_diastolic}
                        ref={register({ required: 'This field is required' })}
                        onBlur={(e) => {
                          const { value } = e.target;
                          if (!value.trim()) {
                            setError(`vitals[${index}].bp_diastolic`, {
                              type: 'manual',
                              message: 'This field is required',
                            });
                          } else if (!validator.isNumeric(value.trim())) {
                            setError(`vitals[${index}].bp_diastolic`, {
                              type: 'manual',
                              message: 'Value must be a number',
                            });
                          } else {
                            clearErrors(`vitals[${index}].bp_diastolic`);
                          }
                        }}
                      />
                    </div>
                    <div className="error-msg">
                      {errors.vitals &&
                        errors?.vitals[index]?.bp_diastolic?.message}
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label
                        htmlFor={`vitals[${index}].value`}
                        className="Vitals-label"
                      >
                        Value
                      </label>
                    </div>

                    <div>
                      <input
                        type="number"
                        step="0.001"
                        className="Vitals-value"
                        name={`vitals[${index}].value`}
                        id={`vitals[${index}].value`}
                        defaultValue={item.value}
                        ref={register({ required: 'This field is required' })}
                        onBlur={(e) => {
                          const { value } = e.target;
                          if (!value.trim()) {
                            setError(`vitals[${index}].value`, {
                              type: 'manual',
                              message: 'This field is required',
                            });
                          } else if (!validator.isNumeric(value.trim())) {
                            setError(`vitals[${index}].value`, {
                              type: 'manual',
                              message: 'Value must be a number',
                            });
                          } else {
                            clearErrors(`vitals[${index}].value`);
                          }
                        }}
                      />
                    </div>
                    <div className="error-msg">
                      {errors.vitals && errors?.vitals[index]?.value?.message}
                    </div>
                  </>
                )}
                <div className="Vitals-add-container">
                  <div
                    className="Vitals-add-btn"
                    onClick={() =>
                      append({
                        vital: 'blood_pressure',
                        value: '',
                        bp_systolic: '',
                        bp_diastolic: '',
                      })
                    }
                  >
                    <img src={VitalPlus} alt="add" className="Vitals-add" />
                  </div>
                </div>

                {index !== 0 && (
                  <div
                    className="Vitals-add-btn Vitals-remove-btn"
                    onClick={() => remove(index)}
                  >
                    <img
                      src={VitalRemove}
                      alt="remove"
                      className="Vitals-remove"
                    />
                  </div>
                )}
              </div>
            ))}

            <div className="Vitals-date-time-comment">
              <div>
                <label htmlFor="date" className="Vitals-label">
                  Date
                </label>
              </div>

              <div className="InputField date-field border-input">
                <DatePicker
                  placeholderText="DD/MM/YYYY"
                  selected={vitalsDate}
                  onChange={handleDate}
                  onSelect={() =>
                    // eslint-disable-next-line implicit-arrow-linebreak
                    setErrorMessages({ ...errorMessages, vitalsDate: '' })
                  }
                  onBlur={checkVitalsDate}
                  showYearDropdown
                  showMonthDropdown
                  dateFormat="dd/LL/yyyy"
                />
                <img
                  src={CalendarImage}
                  alt="calendar"
                  className="InputField-icon InputField-cal-icon Vitals-icon"
                />
                <div className="error-msg">{errorMessages.vitalsDate}</div>
              </div>

              <div>
                <label htmlFor="time" className="Vitals-label">
                  Time
                </label>
              </div>

              <div>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  onBlur={checkVitalsTime}
                  placeholder="HR:MIN"
                  className="Vitals-time Vitals-value"
                />
              </div>
              <div className="error-msg">{errorMessages.time}</div>

              <div>
                <label htmlFor="comment" className="Vitals-label">
                  Comment
                </label>
              </div>

              <div>
                <textarea
                  name="comment"
                  id="comment"
                  className="Vitals-comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  onBlur={checkComment}
                />
              </div>
              <div className="error-msg">{errorMessages.comment}</div>
            </div>

            <Button submit text="Add Vitals" className="btn-classic" />
          </form>
        </div>
      </div>

      <Toolbar onButtonClick={onOpenModal} />

      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          modal: 'Dashboard-modal',
        }}
      >
        <Menu />
      </Modal>
    </div>
  );
};

export default AddVitals;
