import { Dispatch, ReducerAction, Reducer } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
// import firebase from '../../../services/firebase';
import createDefaultProvider from '../createDefaultProvider';
import { oauthSignUpService } from '../../../services/firebase/database';
import {
  signInWithFacebookPopover,
  signInWithGooglePopover,
} from '../../../services/firebase/auth';
import axiosCustom from '../../../utilities/axios';

const initialState: AuthState = {
  user: localStorage.getItem('panda_user')
    ? JSON.parse(localStorage.getItem('panda_user') || '{}')
    : null,
  authenticated: localStorage.getItem('panda_authenticated')
    ? JSON.parse(localStorage.getItem('panda_authenticated') || 'false')
    : false,
  loadingAuthState: false,
  auth_token: localStorage.getItem('auth_token') || null,
  error: {},
};

export enum AuthActionType {
  INITIAL = 'INITIAL',
  SET_USER = 'SET_USER',
  SET_AUTH = 'SET_AUTH',
  SET_VERIFYING = 'SET_VERIFYING',
  SET_AUTH_FAILED = 'SET_AUTH_FAILED',
  SET_AUTH_TOKEN = 'SET_AUTH_TOKEN',
  SET_AUTH_LOADING = 'SET_AUTH_LOADING',
}

type Action = {
  type: keyof typeof AuthActionType;
  payload: any;
};

export const authReducer = (
  state = initialState,
  { type, payload }: Action,
) => {
  switch (type) {
    case AuthActionType.SET_USER:
      localStorage.setItem('panda_user', JSON.stringify(payload));
      return { ...state, user: { ...payload } };
    case AuthActionType.SET_AUTH_LOADING:
      return { ...state, loadingAuthState: payload };
    case AuthActionType.SET_AUTH:
      localStorage.setItem('panda_authenticated', payload);
      return { ...state, authenticated: payload };
    case AuthActionType.SET_VERIFYING:
      return { ...state, ...payload };
    case AuthActionType.SET_AUTH_TOKEN:
      localStorage.setItem('auth_token', payload);
      return { ...state, auth_token: payload };
    case AuthActionType.SET_AUTH_FAILED:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export interface AuthState {
  error?: any;
  user: { [key: string]: any } | null;
  authenticated?: boolean;
  loadingAuthState?: boolean;
  auth_token: string | null;
}

type AuthReducer = Reducer<AuthState, Action>;

export const authActions = (
  dispatch: Dispatch<ReducerAction<AuthReducer>>,
) => ({
  // eslint-disable-next-line arrow-body-style
  signin: async (
    userData: { email: string; password: string },
    history: any,
    // eslint-disable-next-line arrow-body-style
  ) => {
    dispatch({
      type: AuthActionType.SET_AUTH_LOADING,
      payload: true,
    });
    return axios
      .post(`${process.env.REACT_APP_BASE_URL}/auth/login`, userData)
      .then(async (res) => {
        if (res.data) {
          dispatch({
            type: AuthActionType.SET_AUTH_TOKEN,
            payload: res.data?.data?.token,
          });
          const loggedInUserData = await axiosCustom().get('/auth/me');
          dispatch({
            type: AuthActionType.SET_USER,
            payload: loggedInUserData?.data?.data?.user,
          });
          dispatch({
            type: AuthActionType.SET_AUTH,
            payload: true,
          });
          dispatch({
            type: AuthActionType.SET_AUTH_LOADING,
            payload: false,
          });
          history.push('/dashboard');
        } else {
          toast.error('Something went wrong!', { className: 'toasty' });
          dispatch({
            type: AuthActionType.SET_AUTH_LOADING,
            payload: false,
          });
        }
      })
      .catch((error) => {
        const err = error?.response?.data?.errMessage;
        dispatch({ type: AuthActionType.SET_AUTH_FAILED, payload: err });
        toast.error(err, { className: 'toasty' });
        dispatch({
          type: AuthActionType.SET_AUTH_LOADING,
          payload: false,
        });
      });
  },
  physicianSignin: async (
    userData: { email: string; password: string },
    history: any,
    // eslint-disable-next-line arrow-body-style
  ) => {
    dispatch({
      type: AuthActionType.SET_AUTH_LOADING,
      payload: true,
    });
    return axios
      .post(`${process.env.REACT_APP_BASE_URL}/auth/physician/login`, userData)
      .then(async (res) => {
        if (res.data) {
          dispatch({
            type: AuthActionType.SET_AUTH_TOKEN,
            payload: res.data?.data?.token,
          });
          const loggedInUserData = await axiosCustom().get('/auth/me');
          dispatch({
            type: AuthActionType.SET_USER,
            payload: loggedInUserData?.data?.data?.user,
          });
          dispatch({
            type: AuthActionType.SET_AUTH,
            payload: true,
          });
          dispatch({
            type: AuthActionType.SET_AUTH_LOADING,
            payload: false,
          });
          history.push('/doctor/dashboard');
        } else {
          toast.error('Something went wrong!', { className: 'toasty' });
          dispatch({
            type: AuthActionType.SET_AUTH_LOADING,
            payload: false,
          });
        }
      })
      .catch((error) => {
        const err = error?.response?.data?.errMessage;
        dispatch({ type: AuthActionType.SET_AUTH_FAILED, payload: err });
        toast.error(err, { className: 'toasty' });
        dispatch({
          type: AuthActionType.SET_AUTH_LOADING,
          payload: false,
        });
      });
  },
  // eslint-disable-next-line arrow-body-style
  signup: async (user: any, history: any) => {
    dispatch({
      type: AuthActionType.SET_AUTH_LOADING,
      payload: true,
    });
    return axios
      .post(`${process.env.REACT_APP_BASE_URL}/user/register`, user)
      .then(async (res) => {
        if (res.data) {
          dispatch({
            type: AuthActionType.SET_AUTH_TOKEN,
            payload: res.data?.data?.token,
          });
          const loggedInUserData = await axiosCustom().get('/auth/me');
          dispatch({
            type: AuthActionType.SET_USER,
            payload: loggedInUserData?.data?.data?.user,
          });
          dispatch({
            type: AuthActionType.SET_AUTH,
            payload: true,
          });
          dispatch({
            type: AuthActionType.SET_AUTH_LOADING,
            payload: false,
          });
          history.push('/dashboard');
        } else {
          toast.error('Something went wrong!', { className: 'toasty' });
          dispatch({
            type: AuthActionType.SET_AUTH_LOADING,
            payload: false,
          });
        }
      })
      .catch((error) => {
        const err = error?.response?.data?.errMessage;
        dispatch({ type: AuthActionType.SET_AUTH_FAILED, payload: err });
        toast.error(err, { className: 'toasty' });
        dispatch({
          type: AuthActionType.SET_AUTH_LOADING,
          payload: false,
        });
      });
  },
  signInWithGoogle: async (history: any) => {
    try {
      dispatch({
        type: AuthActionType.SET_AUTH_LOADING,
        payload: true,
      });
      const data = await signInWithGooglePopover();
      if (!data) {
        const errorMessage = 'Sign in with Google failed';
        toast.error(errorMessage, { className: 'toasty' });
        throw new Error(errorMessage);
      }
      const oauthData = await oauthSignUpService(data);
      if (oauthData.status !== 200) {
        toast.error(oauthData?.errMessage, { className: 'toasty' });
        throw Error(oauthData);
      }
      dispatch({
        type: AuthActionType.SET_AUTH_TOKEN,
        payload: oauthData.data?.token,
      });
      const loggedInUserData = await axiosCustom().get('/auth/me');
      dispatch({
        type: AuthActionType.SET_USER,
        payload: loggedInUserData?.data?.data?.user,
      });
      dispatch({
        type: AuthActionType.SET_AUTH,
        payload: true,
      });
      dispatch({
        type: AuthActionType.SET_AUTH_LOADING,
        payload: false,
      });
      history.push('/dashboard');

      return null;
    } catch (error) {
      dispatch({ type: AuthActionType.SET_AUTH_FAILED, payload: error });
      toast.error(error, { className: 'toasty' });
      dispatch({
        type: AuthActionType.SET_AUTH_LOADING,
        payload: false,
      });
      return error;
    }
  },
  signInWithFacebook: async (history: any) => {
    try {
      const data = await signInWithFacebookPopover();
      if (!data) {
        const errorMessage = 'Sign in with Facebook failed';
        toast.error(errorMessage, { className: 'toasty' });
        throw new Error(errorMessage);
      }
      const oauthData = await oauthSignUpService(data);
      if (oauthData.status !== 200) {
        toast.error(oauthData?.errMessage, { className: 'toasty' });
        throw Error(oauthData);
      }
      dispatch({
        type: AuthActionType.SET_USER,
        payload: { user: {}, error: {} },
      });
      dispatch({
        type: AuthActionType.SET_AUTH,
        payload: true,
      });
      dispatch({
        type: AuthActionType.SET_AUTH_TOKEN,
        payload: oauthData.data?.token,
      });
      history.push('/dashboard');

      return null;
    } catch (error) {
      dispatch({ type: AuthActionType.SET_AUTH_FAILED, payload: error });
      return error;
    }
  },
  updateUser: async (user: { [key: string]: any }) => {
    dispatch({
      type: AuthActionType.SET_USER,
      payload: user,
    });
  },
  verifyUser: async () => {
    try {
      const data = await axiosCustom().get('/auth/me');
      if (data) {
        const currentUser = data?.data?.data?.user;
        dispatch({
          type: AuthActionType.SET_USER,
          payload: currentUser,
        });
        dispatch({
          type: AuthActionType.SET_AUTH,
          payload: true,
        });
      }
      return null;
    } catch (error) {
      dispatch({ type: AuthActionType.SET_AUTH_FAILED, payload: error });

      dispatch({
        type: AuthActionType.SET_AUTH,
        payload: false,
      });
      dispatch({
        type: AuthActionType.SET_USER,
        payload: null,
      });
      return error;
    }
  },
  logout: async () => {
    try {
      dispatch({
        type: AuthActionType.SET_USER,
        payload: null,
      });
      dispatch({
        type: AuthActionType.SET_AUTH,
        payload: false,
      });
      dispatch({
        type: AuthActionType.SET_AUTH_TOKEN,
        payload: '',
      });
      return null;
    } catch (error) {
      dispatch({ type: AuthActionType.SET_AUTH_FAILED, payload: error });
      return error;
    }
  },
});

type DispatchAction = typeof authActions;

const { Provider, Context } = createDefaultProvider<
  AuthReducer,
  DispatchAction,
  AuthState
>(authReducer, authActions, initialState);

export { Provider as AuthProvider, Context as AuthContext };
