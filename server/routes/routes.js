const passport = require('passport');
const Link = require('../models/Link');

module.exports = (app) => {

app.get('/auth/zoom', passport.authenticate('zoom'));

app.get(
  '/auth/zoom/callback',
  passport.authenticate('zoom', { failureRedirect: '/fail' }),
  function(req, res) {
    // Successful authentication
    res.redirect(`/?user=${req.user.id}`)
  }
);
app.get('/', (req, res) => {
  res.send(req.query.user);
});

app.get(
  "/auth/google",
  passport.authenticate("google", {
      scope: ["profile", "email"],
  })
);
//handles the callback from google passport -> code into actual profile data
//diff between /auth/google is that this call back will see the auth code that came from the /auth/google
app.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  (req,res)=>{
      //res has a redirect function 
      res.redirect('/');
  });

app.get(
  '/api/logout',
  (req,res) =>{
      req.logout();//req is completel destroyed by passport with that .logout()
      res.redirect('/');
   }
);

app.get(
  '/api/current_user',
  (req,res)=>{
      res.send(req.user);
   }
)
app.get('/fail',(req,res) => {
    res.json({ id: 201721 });
})
app.get('/main',(req,res) => {
  res.send(req.user);
})

app.get('/api/current_user',
  (req,res)=>{
    res.send("hello");
   });
app.post('/api/get_links', 
  (req,res)=>{
    const filter = { userId : req.body.userId};
    Link.find(filter)
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        console.log(error);
      })
 }
);

app.post('/api/add_link', 
  (req,res)=>{
    const link = new Link({
      userId: req.body.userId,
      title: req.body.title,
      description : req.body.description,
      url: req.body.url
    });
    link.save()
    
  }
);
app.post('/api/delete_link', 
  (req,res)=>{
    const filter = { _id : req.body.id};
    Link.findOneAndRemove(filter)
    .then((result) => {
      res.send(result)
    })
    .catch((err) => console.log(err));
 }
);
app.post('/api/edit_link', 
  (req,res)=>{
    const filter = { _id : req.body.id}
    const update = {title: req.body.title, description: req.body.description, url: req.body.url}
    Link.findOneAndUpdate(filter,update)
    .then((result) => {
      res.send(result)
    })
    .catch((err) => console.log(err));
 }
);
}
