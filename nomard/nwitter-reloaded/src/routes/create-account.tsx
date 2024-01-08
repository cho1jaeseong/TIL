import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react"
import { auth } from "../firebase";
import { Form, Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { Error, Input, Switcher, Title, Wrapper } from "../components/auth-components";
import GithubButton from "../components/github-button";
import LoadingScreen from "../components/loading-screen";
// const errors = {
//   "auth/email-already-in-use":"That email already exists."
// }



export default function CreateAccount(){
    const navigate = useNavigate()
    const[isLoading,setLoading] = useState(false)
    const [name,setName]=useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")
    const onChange = (e:React.ChangeEvent<HTMLInputElement> )=>{
        const {target:{name,value} } =e
        if(name ==='name'){
            setName(value)
        } else if(name==="email"){setEmail(value)
        } else if(name==="password"){setPassword(value)}

    }
    const onSubmit  = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError("")
        if(isLoading || name ===""||email==="" ||password==="") return
        try {
            setLoading(true)
           const credentials= await createUserWithEmailAndPassword(auth,email,password)
           await updateProfile(credentials.user, {displayName:name})
           navigate("/")
        } catch(e){
            if(e instanceof FirebaseError){
              setError(e.message)
            }
        } finally{
            setLoading(false)
        }
    }

    return <Wrapper>
        <Title>Join ⚡</Title>
        <Form onSubmit={onSubmit}>
            <Input onChange={onChange} name="name" placeholder="Name" type="text" required/>
            <Input onChange={onChange} name="email" placeholder="Email" type="email" required/>
            <Input onChange={onChange} name="password" placeholder="Password" type="password" required/>
            {isLoading ? (
                    <LoadingScreen/>
                ) : (
                    <Input onChange={onChange} type="submit" value="Create Account" />
                )}
        </Form>
        {error !=="" ? <Error>{error}</Error> : null}
        <Switcher>
            Already have an account? <Link to="/login">login &rarr;</Link>
        </Switcher>
        <GithubButton/>
    </Wrapper>
}

