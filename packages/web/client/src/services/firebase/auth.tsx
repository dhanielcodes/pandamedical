import { auth } from './index';

export const signInWithFacebookPopover = async () =>
  auth().signInWithPopup(new auth.FacebookAuthProvider());

export const signInWithGooglePopover = async () =>
  auth().signInWithPopup(new auth.GoogleAuthProvider());

export const signOut = async () => auth().signOut();
