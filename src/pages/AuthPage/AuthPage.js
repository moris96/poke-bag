import SignUpForm from "../../components/SignUpForm/SingUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"

export default function AuthPage(props){
    return(
        <main>
            <h1>Login to return or Signup to get started!</h1>
            <SignUpForm setUser={props.setUser}/>
            <LoginForm setUser={props.setUser} />
        </main>
    )
}
