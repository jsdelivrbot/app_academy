export const signIn = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user
  });
};

export const signUp = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/user',
    data: user
  });
};

export const signOut = () => {
  return $.ajax({
    method: 'delete',
    url: '/api/session'
  });
};
