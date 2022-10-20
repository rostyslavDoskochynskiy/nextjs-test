interface Name {
  first: string;
  last: string;
}

interface Picture {
  large: string;
}

interface Login {
  uuid: string;
}

export interface User {
  email: string;
  gender: string;
  name: Name;
  picture: Picture;
  login: Login;
}

interface UserList {
  results: User[];
}

export default UserList;
