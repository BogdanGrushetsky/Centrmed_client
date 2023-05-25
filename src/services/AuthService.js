import $api from '../http';

export default class AuthService {
  static async login(email, password, role) {
    if (role === 'doctor') {
      return $api.post('/doctorApi/login', { email, password });
    }
    if (role === 'patient') {
      return $api.post('/login', { email, password });
    }
  }

  static async registration(email, password, role) {
    if (role === 'doctor') {
      return $api.post('/doctorApi/registration', { email, password });
    }
    if (role === 'patient') {
      return $api.post('/registration', { email, password });
    }
  }

  static async logout() {
    return $api.post('/logout');
  }
}
