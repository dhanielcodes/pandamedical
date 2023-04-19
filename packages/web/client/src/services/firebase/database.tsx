export interface UserCredentials {
  firstName: string;
  lastName: string;
  username: string;
  phoneNumber: string;
  email: string;
  createdAt: object;
  userId: string;
  dob: any;
}

export const oauthSignUpService = async (data: any) => {
  const { user } = data;

  if (!user) {
    return Promise.reject();
  }

  const token: string = await user!.getIdToken();
  const firstName = user.displayName?.split(' ')[0] ?? '';
  const lastName = user.displayName?.split(' ')[1] ?? '';

  const userCredentials: Partial<UserCredentials> = {
    firstName,
    lastName,
    email: user.email!,
  };
  const pandamedicalData: any = {
    ...userCredentials,
    phone: user.phoneNumber ?? '+2347059648295',
    dateOfBirth:
      userCredentials.dob || `01-01-${new Date().getFullYear() - 20}`,
    gender: 'OTHER',
    profilePic: user.photoURL,
    accessToken: data.credential!.accessToken,
    refreshToken: user.refreshToken,
  };
  const platform = data.credential!.providerId.split('.')[0];
  return fetch(`${process.env.REACT_APP_BASE_URL}/auth/social/${platform}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-auth': token,
    },
    body: JSON.stringify(pandamedicalData),
  }).then((response) => response.json());
};
