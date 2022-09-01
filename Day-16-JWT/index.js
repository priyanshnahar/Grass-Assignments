const express = require("express");
const app = express();
const PORT = 9000;
const jwt = require("jsonwebtoken");
const secret = "Secret";

app.use(express.json());

function generateJWTToken(username) {
  return jwt.sign(
    {
      data: username,
    },
    secret,
    { expiresIn: 60 * 60 }
  );
}
// console.log(generateJWTToken("priyansh"));

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization'];
    // console.log(req.headers.authorization);
    console.log(authHeader);
    const token = authHeader.split('.')[1];
    // console.log(token)
    if(token === null) return res.send('No token received');

    const decodeToken = jwt.verify(token, secret, function (err, user){
      if (err) return res.send({Error: err});
        req.user == user;if (err)
    })
    next();
}


app.post("/token", (request, response) => {
  const token = generateJWTToken(request.body.name)
  response.json(token);
});


app.post("/tokenverify", authenticateToken, (request, response) => {
//   const token = generateJWTToken(request.body.name);
  response.json('OK');
});
app.listen(PORT, console.log("Server listening on port" + PORT));
