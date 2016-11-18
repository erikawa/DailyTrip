var api = require('instagram-node').instagram();
var redirect_uri = 'http://localhost:3000/handleauth/';
var profileInfo = null;

api.use({
  client_id: 'e8760072df4b4734a3737657c1063063',
  client_secret: 'c7141f553afe4f11abb7e24fcfbe0371'
});

module.exports = {

  handleauth: function(req, res) {
    api.authorize_user(req.query.code, redirect_uri, function(err, result) {
        if (err) {
          console.log(err.body);
          res.send("{}");
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