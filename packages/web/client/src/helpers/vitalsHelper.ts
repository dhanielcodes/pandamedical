export const vitalInfo = (vital: string) => {
  switch (vital) {
    case 'blood_pressure':
      return {
        title: 'Blood Pressure',
        unit: 'mmhg',
        description: 'this is just test for BP',
      };
    case 'heart_rate':
      return {
        title: 'Heart Rate',
        unit: 'bpm',
        description: 'this is just test for Heart Rate',
      };
    case 'oxygen_saturation':
      return {
        title: 'Oxygen Saturation',
        unit: '%',
        description: 'this is just test for Oxygen Saturation',
      };
    case 'temperature':
      return {
        title: 'Temperature',
        unit: 'Celsius °C',
        description: 'this is just test for Temperature',
      };
    case 'respiration_rate':
      return {
        title: 'Respiration Rate',
        unit: 'breaths/min',
        description: 'this is just test for Respiration Rate',
      };
    case 'weight':
      return {
        title: 'Weight',
        unit: 'kg',
        description: 'this is just test for Weight',
      };
    case 'height':
      return {
        title: 'Height',
        unit: 'cm',
        description: 'this is just test for Height',
      };
    case 'bmi':
      return {
        title: 'Body Mass Index (BMI)',
        unit: 'kg/m2',
        description: 'this is just test for BMI',
      };
    case 'bsa':
      return {
        title: 'Body Surface Area',
        unit: 'm2',
        description: 'this is just test for Body Surface Area',
      };
    default:
      return {};
  }
};

export const vitalCardImage = (vital: string) => {
  switch (vital) {
    case 'heart_rate':
      return '../../../shared/themes/assets/images/vitals-heart-rate.svg';
    case 'oxygen_saturation':
      return '../../../shared/themes/assets/images/vitals-oxygen.svg';
    case 'weight':
      return '../../../shared/themes/assets/images/vitals-weight.svg';
    case 'respiration_rate':
      return '../../../shared/themes/assets/images/vitals-lungs.svg';
    case 'blood_pressure':
      return '../../../shared/themes/assets/images/vitals-bp.svg';
    case 'height':
      return '../../../shared/themes/assets/images/vitals-height.svg';
    case 'temperature':
      return '../../../shared/themes/assets/images/vitals-temp.svg';
    case 'bmi':
      return '../../../shared/themes/assets/images/vitals-bmi.svg';
    case 'bsa':
      return '../../../shared/themes/assets/images/vitals-bsa.svg';
    default:
      return '';
  }
};
