
import { useState } from "react"
import styled from "styled-components"
import { auth } from "../firebase";
import { Form, Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword, signInWithEmailLink } from "firebase/auth";
import { Error, Input, Switcher, Title, Wrapper } from "../components/auth-components";
import GithubButton from "../components/github-button";
import LoadingScreen from "../components/loading-screen";
// const errors = {
//   "auth/email-already-in-use":"That email already exists."
// }
const My_study = 'bg-blue-500'

export default function CreateAccount(){
    const navigate = useNavigate()
    const[isLoading,setLoading] = useState(false)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")
    const onChange = (e:React.ChangeEvent<HTMLInputElement> )=>{
        const {target:{name,value} } =e

        if(name==="email"){setEmail(value)
        } else if(name==="password"){setPassword(value)}

    }
    const onSubmit  = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError("")
        if(isLoading || email==="" ||password==="") return
        try {
            setLoading(true)
            await signInWithEmailAndPassword(auth, email,password)
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
        <Title>Login ⚡</Title>
        <Form onSubmit={onSubmit}>
            <Input onChange={onChange} name="email" placeholder="Email" type="email" required/>
            <Input onChange={onChange} name="password" placeholder="Password" type="password" required/>
            {isLoading ? (
                    <LoadingScreen />
                ) : (
                    <Input type="submit" value="Log in" />
                )}
        </Form>
        {error !=="" ? <Error>{error}</Error> : null}
        <Switcher>
            Don't have an account? <Link to="/create-account">Create one &rarr;</Link>
        </Switcher>
        <GithubButton/>
            <My_study> asdf</My_study>
    </Wrapper>
}

