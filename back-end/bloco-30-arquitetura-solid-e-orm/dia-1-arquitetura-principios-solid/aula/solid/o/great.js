notAllowed = ['peu@internacional.com', 'mariotto@pcgamer.com']

const verifyNotAllowedUsers = (email, array) => 
{
    let result = array.find((element)=>{
        return element === email
    })
    return result === email
}

verifyNotAllowedUsers('cassio@gmail.com', notAllowed)