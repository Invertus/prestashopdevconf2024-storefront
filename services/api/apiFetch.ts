// In-memory token store for server only.
let accessToken: string | null = null;
let tokenExpiryTime: number | null = null; // Store the expiry time

const setAccessToken = (token: string) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('accessToken', token);
  } else {
    accessToken = token;
  }
}

const setTokenExpiryTime = (expiryTime: number) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('tokenExpirityTime', expiryTime.toString());
  } else {
    tokenExpiryTime = expiryTime;
  }
}

const getAccessToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem('accessToken');
  } else {
    return accessToken;
  }
}

const getTokenExpiryTime = (): number | null => {
  if (typeof window !== 'undefined') {
    return Number(window.localStorage.getItem('tokenExpirityTime'));
  } else {
    return tokenExpiryTime;
  }
}

// Function to fetch a new access token
async function fetchAccessToken() {
    const res = await fetch(`${process.env.API_URL}access_token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'grant_type': 'client_credentials',
          'client_id': process.env.API_CLIENT_ID,
          'client_secret': process.env.API_CLIENT_SECRET,
          'scope': ['product_read']
        }),
      })

  if (!res.ok) {
    throw new Error('Failed to fetch access token');
  }

  const data = await res.json();
  setAccessToken(data.access_token);
  setTokenExpiryTime(Date.now() + data.expires_in * 1000);
}

// Function to get the access token, refreshing it if necessary
async function refreshAccessToken() {
    const tokenExpiryTime = getTokenExpiryTime();
    if (!getAccessToken() || (tokenExpiryTime !== null && Date.now() >= tokenExpiryTime)) {
      await fetchAccessToken();
    }
    return accessToken;
}

// Function to make API requests with automatic token handling
async function apiFetch(url: string, options: { _retry?: boolean, method?: 'GET'  } = {}) {
    const token = await refreshAccessToken();
  
    const response = await fetch(url, {
      ...options,
      headers: {
        Authorization: `Bearer ${token}`, // Add the access token to the request
      },
    });
  
    if (response.status === 401 && !options._retry) {
      // Token might have expired or be invalid, try refreshing and retry
      options._retry = true;
      await fetchAccessToken(); // Force refresh the token
      return apiFetch(url, options); // Retry the request with the new token
    }
  
    return response;
  }
  
  export default apiFetch;

