
const UserItem = ({ userId, name, age, email }) => {
    

    return (
        <li>
            <h3>Name: {name}.</h3>
            <p>ID: {userId}. Age: {age}. Email: {email}</p>
        </li>
    )
}

export default UserItem;