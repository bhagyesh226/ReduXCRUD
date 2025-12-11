import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import { UpdateUsers } from '../features/userdateSlice';

const UpDate = () => {
  const [updateData, setUpdateData] = React.useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    id: ""
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { users } = useSelector((state) => state.app);

  useEffect(() => {
    if (id && users.length > 0) {
      const user = users.find((user) => user.id === id);
      if (user) setUpdateData(user);
    }
  }, []);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(UpdateUsers(updateData));
    navigate('/ShowAll');
  };

  return (
    <div className='pt-5 justify-center items-center max-auto flex flex-col gap-4'>
      <div className='text-4xl font-semibold uppercase'>Update User</div>

      <form
        className='bg-zinc-200 rounded-3xl hover:shadow-2xl transition-all duration-300'
        onSubmit={handleSubmit}
      >
        <div className='p-4 gap-2'>
          
          {/* Name */}
          <div className='gap-2 flex py-2'>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              required
              value={updateData.name}
              onChange={newData}
              placeholder="Enter name"
              className="border-0 p-0.5 rounded-sm"
            />
          </div>

          {/* Email */}
          <div className='gap-2 flex py-2'>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              required
              value={updateData.email}
              onChange={newData}
              placeholder="Enter email"
              className="border-0 p-0.5 rounded-sm"
            />
          </div>

          {/* Age */}
          <div className='gap-2 flex py-2'>
            <label>Age:</label>
            <input
              type="number"
              name="age"
              required
              value={updateData.age}
              onChange={newData}
              placeholder="Enter age"
              className="border-0 p-0.5 rounded-sm"
            />
          </div>

          {/* Gender */}
          <div className='flex gap-4 py-2'>
            <div>
              <label>Male</label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={updateData.gender === "male"}
                onChange={newData}
              />
            </div>

            <div>
              <label>Female</label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={updateData.gender === "female"}
                onChange={newData}
              />
            </div>
          </div>

          {/* Button */}
          <div className='flex justify-center items-center'>
            <button
              type="submit"
              className="hover:bg-blue-600 font-semibold px-4 py-2 mt-4 rounded-md bg-blue-500 text-white"
            >
              Update User
            </button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default UpDate;
