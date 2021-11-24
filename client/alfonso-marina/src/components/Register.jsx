import {useState} from 'react'

const SignIn =()=>{
    const [signIn, setsignIn] = useState('')

    function inputChange(e){
        setsignIn((prevState)=>{
            return{
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }
    return <div>
        <div>hello I am Register Page</div>
    </div>
}

export default SignIn