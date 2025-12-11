import React from 'react'
import { useDispatch } from 'react-redux';
import { creatUser } from '../features/userdateSlice';
import { useNavigate } from 'react-router';

const AddUser = () => {
  const [userData, setUserData] = React.useState({
    name: "",
    email: "",
    age: "",
    gender: ""
  });
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const getData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(creatUser(userData));

    // reset inputs
    setUserData({
      name: "",
      email: "",
      age: "",
      gender: ""
    });
    navigate('/ShowAll');
  };

  return (
    <div className='pt-5 justify-center items-center max-auto flex flex-col gap-4 '>
      <div className='text-4xl font-semibold uppercase'>Creat user </div>
      <form className='bg-zinc-200 rounded-3xl hover:shadow-2xl tranltion-all duration-300' onSubmit={handleOnSubmit}>
        <div className='p-4 gap-2'>
          <div className='gap-2 flex py-2'>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              required
              value={userData.name}
              onChange={getData}
              placeholder="Enter your name"
              className="border-0 p-0.5 rounded-sm"
            />
          </div>

          <div className='gap-2 flex py-2'>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              required
              value={userData.email}
              onChange={getData}
              placeholder="Enter your email"
              className="border-0 p-0.5 rounded-sm"
            />
          </div>

          <div className='gap-2 flex py-2'>
            <label>Age:</label>
            <input
              type="number"
              name="age"
              required
              value={userData.age}
              onChange={getData}
              placeholder="Enter your age"
              className="border-0 p-0.5 rounded-sm"
            />
          </div>
          <div className='flex gap-4 py-2'>
            <div>
              <label>Male</label>
              <input
                type="radio"
                name="gender"
                required
                value="male"
                checked={userData.gender === "male"}
                onChange={getData}
              />
            </div>

            <div>
              <label>Female</label>
              <input
                type="radio"
                name="gender"
                value="female"
                required
                checked={userData.gender === "female"}
                onChange={getData}
              />
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <button
            type="submit"
            className="hover:bg-blue-600 font-semibold px-4 py-2 mt-4 rounded-md bg-blue-500 text-white"
          >
            Add User
          </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
