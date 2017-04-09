export const signUp = (userData) => (
  $.ajax({
    method: 'POST',
    url: 'api/users',
    data: userData
  })
);

export const signIn = (userData) => (
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: userData
  })
);

export const signOut = () => (
  $.ajax({
    method: 'DELETE',
    url: 'api/session'
  })
);
