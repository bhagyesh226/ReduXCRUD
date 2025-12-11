import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'
import { searchData } from '../features/userdateSlice';

const Navebar = () => {
    const count = useSelector((state) => state.app.users.length);
    const [searchuser, setSearchuser] = React.useState('');
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(searchData(searchuser))
    }, [searchuser])
    return (
        <div>
            <nav className='border-b shadow-2xl p-4 flex justify-between'>
                <div className='flex justify-between w-full'>
                    {/* right side  */}
                    <div className='flex gap-3 justify-center items-center'>
                        <div className='text-3xl text-zinc-600 '>Logo</div>
                        <div className='flex gap-2 text-zinc-500 '>
                            <div className='text-zinc-500 hover:text-zinc-600 hover:border-b-2 border-zinc-600 tranltion-all duration-300'>
                                <Link to='/'>Add User</Link>
                            </div>
                            <div className='text-zinc-500 hover:text-zinc-600 hover:border-b-2 border-zinc-600 tranltion-all duration-300'>
                                <Link to='/ShowAll'>Show All User({count})</Link>
                            </div>
                        </div>
                    </div>
                    {/* left side  */}
                    <div>
                        <input type="search" placeholder='search...' onChange={(e) => setSearchuser(e.target.value)} className=' p-2 rounded-2xl bg-zinc-200' />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navebar