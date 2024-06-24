// CSS
import './UserCard.css'

function UserCard({ user }) {

    return (
        <>
            <div className="user-card">
                <div className='info-1'>
                    <span className='info-username'>{user.username}</span>
                </div>
                <div className='info-2'>
                    <span className='info-name'>{user.name} </span><span className='info-lastname'>{user.lastName}</span>
                </div>
                <div className='info-3'>
                    <span className='info-email'>{user.email}</span>
                </div>
            </div>
        </>
    )
}

export default UserCard