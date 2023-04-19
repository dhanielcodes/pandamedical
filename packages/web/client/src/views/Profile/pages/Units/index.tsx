/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import { Modal } from 'react-responsive-modal';
import { toast } from 'react-toastify';
import { RouteComponentProps } from 'react-router-dom';
import 'react-responsive-modal/styles.css';
import Menu from '../../../../shared/components/Menu';
import Toolbar from '../../../../shared/components/Toolbar';
import BackArrow from '../../../../shared/themes/assets/images/back-grey.svg';
import UnitIcon from '../../../../shared/themes/assets/images/profile-unit.svg';
import Button from '../../../../shared/components/Button';
import { AuthContext } from '../../../../store/context';
import axiosCustom from '../../../../utilities/axios';
import Loader from '../../../../shared/components/Loader';

interface RouteParams {
  vitalPosition: string;
  vital: string;
}

const Units = ({ history }: RouteComponentProps<RouteParams>) => {
  const [loading, setLoading] = useState(false);
  const { state, updateUser } = useContext(AuthContext);
  const { user } = state;

  const [userUnitSystem, setUnitSystem] = useState(user?.unit_system);

  const unitSystems = {
    imperial: 'IMPERIAL',
    metric: 'METRIC',
  };

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userData = {
      unit_system: userUnitSystem,
    };
    try {
      setLoading(true);
      const data = await axiosCustom().put('/user/update', userData);
      if (data) {
        updateUser({ ...user, ...userData });
        toast.success('Unit system updated', {
          className: 'toasty',
        });
        setLoading(false);
      }
    } catch (error) {
      toast.error(error?.response?.data?.errMessage, { className: 'toasty' });
      setLoading(false);
    }
  };

  return (
    <div className="Profile">
      {loading && <Loader />}
      <div className="Profile-header">
        <span className="Profile-header-text-back">
          <div onClick={() => history.goBack()}>
            <img src={BackArrow} alt="back" className="Profile-back" />
          </div>

          <p>Change Unit System</p>
        </span>

        <div className="Profile-img">
          <img src={UnitIcon} alt="unit" />
        </div>
      </div>

      <div className="Profile-body-container">
        <div className="Profile-body">
          <form
            className="Profile-form Profile-units-form"
            onSubmit={handleSubmit}
          >
            <div className="Profile-radio-option">
              <label htmlFor="imperial" className="Profile-radio-label">
                Imperial
              </label>
              <div className="Profile-radio-examples">
                <p className="Profile-radio-option-examples">
                  ft, lbs, fahrenhiet
                </p>
                <input
                  type="radio"
                  id="imperial"
                  name="unit"
                  value={unitSystems.imperial}
                  className="Profile-radio"
                  checked={unitSystems.imperial === userUnitSystem}
                  onChange={(e) => setUnitSystem(e.target.value)}
                />
              </div>
            </div>

            <div className="Profile-radio-option">
              <label htmlFor="metric" className="Profile-radio-label">
                Metric
              </label>
              <div className="Profile-radio-examples">
                <p className="Profile-radio-option-examples">
                  cm, Kg , celsius
                </p>
                <input
                  type="radio"
                  id="metric"
                  name="unit"
                  value={unitSystems.metric}
                  className="Profile-radio"
                  checked={unitSystems.metric === userUnitSystem}
                  onChange={(e) => setUnitSystem(e.target.value)}
                />
              </div>
            </div>

            <Button
              submit
              text="Update"
              className="btn-classic Profile-unit-btn"
            />
          </form>
        </div>
      </div>

      <Toolbar onButtonClick={onOpenModal} backgroundColor="#fff" />

      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{ modal: 'Dashboard-modal' }}
      >
        <Menu />
      </Modal>
    </div>
  );
};

export default Units;
