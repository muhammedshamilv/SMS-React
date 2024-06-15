class LocalStorageService {
  static setToken = (access_token, refresh_token) => {
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_token', refresh_token);
  };

  static rememberUser = (remember) => {
    localStorage.setItem('remember', remember + '');
  };

  static checkRemember = () => {
    return localStorage.getItem('remember') === 'true';
  };

  static getAccessToken = () => {
    return localStorage.getItem('access_token');
  };

  static getRefreshToken = () => {
    const rToken = localStorage.getItem('refresh_token');
    if (rToken) {
      return rToken;
    } else return;
  };

  static clearToken = () => {
    localStorage.clear();
  };

  static setUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
  };

  static getUser = () => {
    const loggedUser = localStorage.getItem('user');
    return loggedUser ? JSON.parse(loggedUser) : null;
  };
}
export default LocalStorageService;
