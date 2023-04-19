export const specialtyInfo = (specialty: string) => {
  switch (specialty) {
    case 'allery_and_immunology':
      return {
        name: 'allergy and immunology',
        title: 'allergist / immunologist',
      };
    case 'family_medicine':
      return {
        name: 'otolaryngology–head and neck surgery',
        title: 'otolaryngologist-head and neck surgeon (ENT specialist)',
      };
    case 'dermatology':
      return {
        name: 'dermatology',
        title: 'dermatologist',
      };
    case 'obstetrics_and_gynecology':
      return {
        name: 'obstetrics and Gynecology',
        title: 'obstetrician-gynecologist',
      };
    case 'ophthalmology':
      return {
        name: 'ophthalmology',
        title: 'ophthalmologist',
      };
    case 'internal_medicine':
      return {
        name: 'internal medicine',
        title: 'internist',
      };
    case 'pathology':
      return {
        name: 'pathology',
        title: 'pathologist',
      };
    case 'pediatrics':
      return {
        name: 'pediatrics',
        title: 'pediatrician',
      };
    case 'psychiatry':
      return {
        name: 'psychiatry',
        title: 'psychiatrist',
      };
    case 'radiology':
      return {
        name: 'radiology',
        title: 'radiologist',
      };
    case 'surgery':
      return {
        name: 'surgery',
        title: 'surgeon',
      };
    case 'Urology':
      return {
        name: 'urology',
        title: 'urologist',
      };
    default:
      return {};
  }
};
