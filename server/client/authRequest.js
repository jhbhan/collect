



if (req.query.code) {

    // Step 3: 
    // Request an access token using the auth code
  console.log("code is: "+ req.query.code);
  let url = 'https://zoom.us/oauth/token?grant_type=authorization_code&code=' + req.query.code + '&redirect_uri=' + AppSettings.zoomRedirectURL;
  console.log("url is: "+ url);
  let encoded_auth = Buffer.from(AppSettings.zoomClientId+":"+AppSettings.zoomClientSecret).toString('base64');
  const options = {
    url: url,
    method: 'POST',
    headers: {
        'Authorization': `basic ${encoded_auth}`
    }
  };

  console.log(options);

    request(options, (error, response, body) => {
        if(error){
            console.log("Error when getting Zoom token = " + error);
            res.redirect('/fail');
        }
        console.log(body);
        // Parse response to JSON
        body = JSON.parse(body);

        // Logs your access and refresh tokens in the browser
        console.log(`access_token: ${body.access_token}`);
        console.log(`refresh_token: ${body.refresh_token}`);

        if (body.access_token) {
            return body;
        } else {
            console.log("Error when getting Zoom token = " + error);
            res.redirect('/fail');
        }

    }).auth(AppSettings.zoomClientId, AppSettings.zoomClientSecret);

    return;

    }

// Step 2: 
// If no authorization code is available, redirect to Zoom OAuth to authorize
res.redirect('https://zoom.us/oauth/authorize?response_type=code&client_id='
+ AppSettings.zoomClientId
+'&redirect_uri='
+ AppSettings.zoomRedirectURL)