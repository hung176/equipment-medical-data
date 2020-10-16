export default function authenticate(form) {
  const allUser = [
    {
      id: 1,
      username: 'admin1',
      password: 'abc@124',
      name: 'Admin1'
    },
    {
      id: 2,
      username: 'admin2',
      password: 'abc@123',
      name: 'Admin2'
    }
  ];

  return new Promise((resolve, reject) => {
    const user = allUser.find(user => user.username === form.username && user.password === form.password);

    setTimeout(() => {
      if(user) {
        const { id, username, name } = user;
        resolve({ id, username, name });
      } else {
        reject("Invalid user name or password");
      }
    }, 1000);
  });
}