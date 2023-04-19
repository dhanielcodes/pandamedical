/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Modal } from 'react-responsive-modal';
import { RouteComponentProps } from 'react-router-dom';
import 'react-responsive-modal/styles.css';
import { useForm, useFieldArray } from 'react-hook-form';
import { toast } from 'react-toastify';
import BackArrow from '../../../../shared/themes/assets/images/back-grey.svg';
import VitalsImg from '../../../../shared/themes/assets/images/vitals-graph.svg';
import CalendarImage from '../../../../shared/themes/assets/images/calendar.svg';
import SearchImage from '../../../../shared/themes/assets/images/lab-result-search.svg';
import ClearSearchImage from '../../../../shared/themes/assets/images/clear-search.svg';
import VitalPlus from '../../../../shared/themes/assets/images/vital-plus.svg';
import VitalRemove from '../../../../shared/themes/assets/images/vitals-remove.svg';
import axiosCustom from '../../../../utilities/axios';
import { AuthContext } from '../../../../store/context';
import { commentPattern } from '../../../../helpers/inputHelper';
import Menu from '../../../../shared/components/Menu';
import Toolbar from '../../../../shared/components/Toolbar';

const AddLabResults = ({ history }: RouteComponentProps) => {
  const { state } = useContext(AuthContext);
  const { user } = state;
  const [observer, setObserver] = useState('');
  const [resultsDate, setResultsDate] = useState(new Date());
  const [time, setTime] = useState('00:00');
  const [comment, setComment] = useState('');

  const [errorMessages, setErrorMessages] = useState({
    observer: '',
    resultsDate: '',
    time: '',
    comment,
  });

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const {
    register,
    control,
    getValues,
    setValue,
    handleSubmit,
    setError,
    clearErrors,
    errors,
    watch,
  } = useForm({
    defaultValues: {
      labResults: [
        {
          lab_result: '',
          value: '',
          unit: '',
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'labResults',
  });

  watch();

  const handleDate = (date: Date) => setResultsDate(date);

  const checkLabDate = () => {
    if (!resultsDate) {
      setErrorMessages({
        ...errorMessages,
        resultsDate: 'This field is required',
      });
      return false;
    }
    setErrorMessages({
      ...errorMessages,
      resultsDate: '',
    });
    return true;
  };

  const checkLabTime = () => {
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

  const onSubmit = async (results: any) => {
    const { labResults } = results;

    const labResultsData = labResults.map((result: any) => ({
      lab_key: result.lab_result.replace(/ /g, '_'),
      lab_default_value: result.value,
      lab_secondary_value: null,
      description: `${user?.firstName} ${user?.lastName}`,
      unit: result.unit,
      lab_name: result.lab_result,
    }));

    const userLabResults = {
      comment,
      lab_tests: labResultsData,
      user_id: user?.id,
      date_entered: resultsDate,
      timestamp: time,
      source: 'patient generated',
      observer_id: user?.id,
      created_by: observer,
    };

    if (
      Object.keys(errors).length === 0 &&
      errors.constructor === Object &&
      checkLabDate() &&
      checkLabTime() &&
      checkComment()
    ) {
      const data = await axiosCustom()
        .post('/labtestresults', userLabResults)
        .catch((err) => {
          const errorMessage = err?.response?.data?.errMessage;
          toast.error(errorMessage, { className: 'toasty' });
        });

      if (data) {
        history.push('/lab-results');
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
          <p>Add Lab Result(s)</p>
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
                    htmlFor={`labResults[${index}].value`}
                    className="Vitals-label"
                  >
                    Lab Result
                  </label>
                </div>

                <div className="Vitals-search-container">
                  <input
                    type="text"
                    placeholder="Search Results"
                    className="Vitals-value Vitals-search"
                    name={`labResults[${index}].lab_result`}
                    id={`labResults[${index}].lab_result`}
                    defaultValue={item.lab_result}
                    ref={register({ required: 'This field is required' })}
                    onBlur={(e) => {
                      const { value } = e.target;
                      if (!value.trim()) {
                        setError(`labResults[${index}].lab_result`, {
                          type: 'manual',
                          message: 'This field is required',
                        });
                      } else if (!commentPattern.test(value.trim())) {
                        setError(`labResults[${index}].lab_result`, {
                          type: 'manual',
                          message: 'Invalid character input',
                        });
                      } else {
                        clearErrors(`labResults[${index}].lab_result`);
                      }
                    }}
                  />
                  <img
                    src={SearchImage}
                    alt="search"
                    className="Vitals-search-icon"
                  />
                  {getValues(`labResults[${index}].lab_result`) && (
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                    <div
                      onClick={() =>
                        setValue(`labResults[${index}].lab_result`, '')
                      }
                    >
                      <img
                        src={ClearSearchImage}
                        alt="clear-search"
                        className="Vitals-clear-search-icon"
                      />
                    </div>
                  )}
                </div>
                <div className="error-msg">
                  {errors.labResults &&
                    errors?.labResults[index]?.lab_result?.message}
                </div>

                <div>
                  <label
                    htmlFor={`labResults[${index}].value`}
                    className="Vitals-label"
                  >
                    Value
                  </label>
                </div>

                <div>
                  <input
                    type="text"
                    className="Vitals-value"
                    name={`labResults[${index}].value`}
                    id={`labResults[${index}].value`}
                    defaultValue={item.value}
                    ref={register({ required: 'This field is required' })}
                    onBlur={(e) => {
                      const { value } = e.target;
                      if (!value.trim()) {
                        setError(`labResults[${index}].value`, {
                          type: 'manual',
                          message: 'This field is required',
                        });
                      } else {
                        clearErrors(`labResults[${index}].value`);
                      }
                    }}
                  />
                </div>
                <div className="error-msg">
                  {errors.labResults &&
                    errors?.labResults[index]?.value?.message}
                </div>

                <div>
                  <label
                    htmlFor={`labResults[${index}].value`}
                    className="Vitals-label"
                  >
                    Unit
                  </label>
                </div>

                <div>
                  <input
                    type="text"
                    className="Vitals-value"
                    name={`labResults[${index}].unit`}
                    id={`labResults[${index}].unit`}
                    defaultValue={item.unit}
                    ref={register({ required: 'This field is required' })}
                    onBlur={(e) => {
                      const { value } = e.target;
                      if (!value.trim()) {
                        setError(`labResults[${index}].unit`, {
                          type: 'manual',
                          message: 'This field is required',
                        });
                      } else {
                        clearErrors(`labResults[${index}].unit`);
                      }
                    }}
                  />
                </div>
                <div className="error-msg">
                  {errors.labResults &&
                    errors?.labResults[index]?.unit?.message}
                </div>

                <div className="Vitals-add-container">
                  <div
                    className="Vitals-add-btn"
                    onClick={() =>
                      append({
                        lab_result: '',
                        value: '',
                        unit: '',
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
                <label htmlFor="time" className="Vitals-label">
                  Observed by:
                </label>
              </div>

              <div>
                <input
                  type="text"
                  value={observer}
                  onChange={(e) => setObserver(e.target.value)}
                  className="Vitals-time Vitals-value"
                />
              </div>
              <div className="error-msg">{errorMessages.observer}</div>

              <div>
                <label htmlFor="date" className="Vitals-label">
                  Date
                </label>
              </div>

              <div className="InputField date-field border-input">
                <DatePicker
                  placeholderText="DD/MM/YYYY"
                  selected={resultsDate}
                  onChange={handleDate}
                  onSelect={() =>
                    // eslint-disable-next-line implicit-arrow-linebreak
                    setErrorMessages({ ...errorMessages, resultsDate: '' })
                  }
                  onBlur={checkLabDate}
                  showYearDropdown
                  showMonthDropdown
                  dateFormat="dd/LL/yyyy"
                />
                <img
                  src={CalendarImage}
                  alt="calendar"
                  className="InputField-icon InputField-cal-icon Vitals-icon"
                />
                <div className="error-msg">{errorMessages.resultsDate}</div>
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
                  onBlur={checkLabTime}
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

            <input
              type="submit"
              className="btn-classic"
              value="Add Lab Results"
            />
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

export default AddLabResults;
