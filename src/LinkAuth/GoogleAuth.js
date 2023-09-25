const CLIENT_ID = '913247934733-5ubt084h8ohcpngodtvcmvmu4ucn0rtd.apps.googleusercontent.com'
const REDIRECT_URI = 'http://localhost:3000/oauth/google'

export const GOOGLE_AUTH_URL =
    `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=profile`