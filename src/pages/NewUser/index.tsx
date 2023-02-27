import {
  UserForm,
  UserItem,
  UserRadio,
  UserButton,
  NewUserContainer,
} from './styles';

export const NewUser = () => {
  return (
    <NewUserContainer>
      <h1>New User</h1>
      <UserForm>
        <UserItem>
          <label>Username</label>
          <input type="text" placeholder="john" />
        </UserItem>
        <UserItem>
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </UserItem>
        <UserItem>
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </UserItem>
        <UserItem>
          <label>Password</label>
          <input type="password" placeholder="password" />
        </UserItem>
        <UserItem>
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </UserItem>
        <UserItem>
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </UserItem>
        <UserItem>
          <label>Gender</label>
          <UserRadio>
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label htmlFor="other">Other</label>
          </UserRadio>
        </UserItem>
        <UserItem>
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </UserItem>
        <UserButton>Create</UserButton>
      </UserForm>
    </NewUserContainer>
  );
};
