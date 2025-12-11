import React from 'react'
import { useSelector } from 'react-redux';

const UserData = ({ setShowPoup, id }) => {
  const alluser = useSelector((state) => state.app.users);
  const user = alluser.find((user) => user.id === id);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-[350px] md:w-[400px] max-w-full">

      {/* Close Button */}
      <button
        onClick={() => setShowPoup(false)}
        className="float-right text-red-500 font-bold cursor-pointer text-xl hover:text-red-700"
      >
        ✕
      </button>

      <h2 className="text-2xl font-semibold mb-4 text-center">User Details</h2>

      <div className="space-y-3">
        <div><span className="font-semibold">Name:</span> {user.name}</div>
        <div><span className="font-semibold">Email:</span> {user.email}</div>
        <div><span className="font-semibold">Age:</span> {user.age}</div>
        <div><span className="font-semibold">Gender:</span> {user.gender}</div>
      </div>

    </div>
  );
};

export default UserData;
