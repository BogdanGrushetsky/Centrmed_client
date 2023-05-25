import { makeAutoObservable } from 'mobx';
import AuthService from '../services/AuthService';
import axios from 'axios';
import { API_URL } from '../http';

export default class Store {
  user = {};
  isAuth = false;
  isLoading = false;
  role = '';
  reredner = false;
  errorModalState = false
  errorText = '';
  constructor() {
    makeAutoObservable(this);
  }
  setRerender() {
    this.reredner = !this.reredner
  }

  setAuth(bool) {
    this.isAuth = bool;
  }

  setUser(user) {
    this.user = user;
  }

  setRole(role) {
    this.role = role;
  }

  setLoading(bool) {
    this.isLoading = bool;
  }
  showError() {
    this.errorModalState = true
  }
  hideError() {
    this.errorModalState = false
  }
  setTextError(textError) {
    this.showError()
    this.errorText = textError?.response?.data?.message || textError?.message
  }

  async login(email, password, role) {
    try {
      const response = await AuthService.login(email, password, role);
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user || response.data.doctor);
      if (response.data.user) {
        this.setRole(response.data?.user.scenario);
        localStorage.setItem('role', response.data?.user.scenario);
        return 'user'
      } else {
        this.setRole(response.data?.doctor.scenario);
        localStorage.setItem('role', response.data?.doctor.scenario);
        return 'doctor'
      }
    } catch (e) {
      console.log(e.response?.data?.message);
      return false
    }
  }

  async registration(email, password, role) {
    try {
      const response = await AuthService.registration(email, password, role);
      console.log(response);
      // localStorage.setItem('token', response.data.accessToken);
      // if (response.data.user) {
      //   this.setRole(response.data?.user.scenario);
      //   localStorage.setItem('role', response.data?.user.scenario);
      // } else {
      //   this.setRole(response.data?.doctor.scenario);
      //   localStorage.setItem('role', response.data?.doctor.scenario);
      // }
      // this.setAuth(true);
      // this.setUser(response.data.user);
      return true
    } catch (e) {
      console.log(e.response?.data?.message);
      return e.response?.data?.message
    }
  }

  async logout() {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      this.setRole('');
      this.setAuth(false);
      this.setUser({});
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async checkAuth() {
    this.setLoading(true);

    try {
      const checkDoctorRole = localStorage.getItem('role') === 'doctor';
      const response = await axios.get(
        `${API_URL}${checkDoctorRole ? '/doctorApi' : ''}/refresh`,
        {
          withCredentials: true,
        }
      );
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      if (response.data.user) {
        this.setUser(response.data.user);
        this.setRole(response.data?.user.scenario);
        localStorage.setItem('role', response.data?.user.scenario);
      } else {
        this.setUser(response.data.doctor);
        this.setRole(response.data?.doctor.scenario);
        localStorage.setItem('role', response.data?.doctor.scenario);
      }
      return true
    } catch (e) {
      console.log(e)
      console.log(e.response?.data?.message);
      console.log(localStorage.getItem('role') === 'doctor');
      this.logout()
    } finally {
      this.setLoading(false);
    }
  }
}
