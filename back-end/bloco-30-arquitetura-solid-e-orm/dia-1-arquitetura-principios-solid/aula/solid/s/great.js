const addUser = (name, phone, size) =>{
    let user = {
        name: name,
        phone: phone,
        size: size
    }
    users.push(user)

    return{
        user
    }
}

const calculateIMC = (size, weight) => {
    let size = size / 100;
    let imc = weight / (size * size);

    return{
        imc
    }
}