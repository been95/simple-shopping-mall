export const userLogin = async ({ email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === '이메일' && password === '비밀번호') {
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });
};
