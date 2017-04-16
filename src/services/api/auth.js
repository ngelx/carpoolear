import network from '../network.js'
import ApiWithTags from './ApiWithTags'

class Auth extends ApiWithTags {

  /** AUTH API **/
  
  /**
   * User login
   * @param {Object} creds {
   *    @param {String} email
   *    @param {String} password
   *    @param {String} device_id
   *    @param {String} device_type
   *    @param {Integer} app_version
   *  }
   * @return {} token
  */
  login (creds) {
    return this.post('/api/login', creds)
  }

  /**
   * User logout.
   * @return {}
  */
  logout() {
    return this.post('/api//logout')
  }

  /**
   * Retoken.
   * @param {Object} data {
   *    @param {Integer} app_version
   *  }
   * @return {} token
  */
  retoken(data) {
    return this.post('/api/retoken', data)
  }

  /**
   * Activate.
   * @param {Object} data {
   *    @param {String} device_id
   *    @param {String} device_type
   *    @param {Integer} app_version
   *  }
   * @param {String} activationToken
   * @return {} token
  */
  activate(activationToken, data) {
    return this.post('/api/activate/' + activationToken, data)
  }

  /**
   * Reset password by email.
   * @param {Object} data {
   *    @param {String} email
   *  }
   * @return {}
  */
  resetPassword(data) {
    return this.post('/api/reset-password', data)
  }

  /**
   * Change password by email.
   * @param {Object} data {
   *    @param {String} password
   *    @param {String} password_confirmation
   *  }
   * @return {}
  */
  changePassword(token, data) {
    return this.post('/api/change-password/' + token, data)
  }

  /** USERS API  */

  /**
   * Register an user.
   * @param {Object} data {
   *    @param {String} name
   *    @param {String} email
   *    @param {String} password
   *    @param {String} password_confirmation
   *    @param {Boolean} terms_and_conditions
   *    @param {Date} birthday (Optional)
   *    @param {String} nro_doc (Optional)
   *    @param {String} gender (Masculino / Femenino) (Optional)
   *    @param {String} description (Optional)
   *    @param {String} mobile_phone (Optional)
   *  }
   * @return {} 
  */
  register(data) {
    return this.post('/api/users', data)
  }

  /**
   * Update an user.
   * @param {Object} data {
   *    @param {String} name
   *    @param {String} email
   *    @param {String} password
   *    @param {String} password_confirmation
   *    @param {Date} birthday (Optional)
   *    @param {String} nro_doc (Optional)
   *    @param {String} gender (Masculino / Femenino) (Optional)
   *    @param {String} description (Optional)
   *    @param {String} mobile_phone (Optional)
   *  }
   * @return {} 
  */
    update(data) {
      return this.put('/api/users', data)
  }
  
  /**
   * Update user photo.
   * @param {Object} data {
   *    @param {File} profile (Image)
   *  }
   * @return {} 
  */
    updatePhoto(data) {
      return this.put('/api/users/photo', data)
    }
  
  /**
   * Update user photo.
   * @param {Object} data {
   *    @param {File} profile (Image)
   *  }
   * @return {} 
  */
    updatePhoto(userId) {
      return this.get('/api/users/' + userId)
    }
}

export { Auth as default }