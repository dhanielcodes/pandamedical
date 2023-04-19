import moment from 'moment';

export const greeting = () => {
  const timeOfDay = moment().format('H');
  const hour = Number(timeOfDay);

  if (hour >= 0 && hour <= 11) return 'good morning';
  if (hour >= 12 && hour <= 16) return 'good afternoon';
  if (hour >= 16 && hour <= 23) return 'good evening';
  return 'hello';
};

export const getUserAvatar = (
  user: { [key: string]: any } | null,
  maleAvatar: string,
  femaleAvatar: string,
) => {
  if (user?.profilePic) return user?.profilePic;
  if (user?.gender === 'FEMALE') return femaleAvatar;
  return maleAvatar;
};

export const calculateAge = (birthday: Date) => {
  // birthday is a date
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
