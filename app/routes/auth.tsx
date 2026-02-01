
import {useNavigate , useLocation} from 'react-router' ;
import {usePuterStore} from "~/lib/puter";
import {useEffect} from "react";

/* an array to render an object that has a title */
export let meta = () => ([
    {title: " Resumind|Auth "} ,
    {name:'Description' , content:"Log into Your Account"}
])

const auth = () => {
    const {isLoading , auth} = usePuterStore();
    const location = useLocation();
    const next = location.search.split('next=')[1];
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading && auth.isAuthenticated) {
            navigate(next || '/');
        }
    }, [isLoading, auth.isAuthenticated, navigate, next]);

    return(
        <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen flex items-center justify-center justify-center">
            <div className={"gradient-border shadow-lg"}>
                <section className="flex flex-col gap-6 bg-white rounded-2xl p-10">
                    <div className="flex flex-col gap-2S item-center text-center">
                        <h1>Welcome</h1>
                        <h2>Log In to Continue</h2>
                    </div>

                    <div>

                        {isLoading ? (
                            <button className="auth-button animate-pulse">
                                <p>Signing In</p>
                            </button>
                        ):(
                            <>
                                {auth.isAuthenticated ? (
                                    <button className="auth-button" onClick={auth.signOut}>
                                        <p>Log out</p>
                                    </button>
                                ):(
                                    <button className="auth-button" onClick={auth.signIn}>
                                        <p>Log In</p>
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                </section>
            </div>
        </main>
    )
}
export default auth;