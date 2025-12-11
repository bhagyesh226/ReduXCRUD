import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteUsers, fetchUsers } from '../features/userdateSlice';
import { useNavigate } from 'react-router';
import UserData from './UserData';

const ShowAllDate = () => {
    const [showPoup, setShowPoup] = React.useState(false);
    const [id, setId] = React.useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { users, loading, searchData } = useSelector((state) => state.app);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    if (loading) {
        return <div className="text-center p-10 text-xl font-semibold">Loading...</div>;
    }

    return (
        <div className="max-w-3xl mx-auto mt-5">

            {/* Popup */}
            {showPoup && (
                <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
                    <UserData id={id} setShowPoup={setShowPoup} />
                </div>
            )}

            {/* User Cards */}
            {users && (
                users.filter((ele) => {
                    if (searchData.length === 0) {
                        return ele;
                    } else {
                        return ele.name.toLowerCase().includes(searchData.toLowerCase());
                    }
                }).length === 0 ? (
                    <div className="text-center text-xl font-semibold text-red-500 mt-5">
                        No user found with this name
                    </div>
                ) : (
                    users
                        .filter((ele) => {
                            if (searchData.length === 0) {
                                return ele;
                            } else {
                                return ele.name.toLowerCase().includes(searchData.toLowerCase());
                            }
                        })
                        .map((data) => (
                            <div
                                key={data.id}
                                className="flex justify-between items-center border rounded-xl shadow-sm p-4 m-2 bg-white hover:shadow-lg transition shadow-md"
                            >
                                {/* User Info */}
                                <div>
                                    <div className="text-lg font-semibold">{data.name}</div>
                                    <div className="text-gray-600">{data.email}</div>
                                    <div className="text-gray-600 capitalize">{data.gender}</div>
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => [setShowPoup(true), setId(data.id)]}
                                        className="px-4 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600"
                                    >
                                        VIEW
                                    </button>

                                    <button
                                        onClick={() => navigate(`/upDate/${data.id}`)}
                                        className="px-4 py-1 rounded-md bg-green-500 text-white hover:bg-green-600"
                                    >
                                        EDIT
                                    </button>

                                    <button
                                        onClick={() => dispatch(DeleteUsers(data.id))}
                                        className="px-4 py-1 rounded-md bg-red-500 text-white hover:bg-red-600"
                                    >
                                        DELETE
                                    </button>
                                </div>
                            </div>
                        ))
                )
            )}

        </div>
    );
};

export default ShowAllDate;
