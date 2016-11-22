var api = require('instagram-node').instagram();
var redirect_uri = 'http://localhost:3000/handleauth/';
var profileInfo = null;

api.use(require('../../config.json'));

module.exports = {

  handleauth: function(req, res) {
    api.authorize_user(req.query.code, redirect_uri, function(err, result) {
        if (err) {
          console.log(err.body);
          res.send('{}');
        } else {
          profileInfo = result;
        }
        res.redirect('/profile');
    });  
  },

  authorize_user: function(req, res) {
      res.redirect(api.get_authorization_url(redirect_uri, { scope: ['likes'], state: 'a state' }));
  },

  profileInfo: function(){
    return profileInfo;
  }

};