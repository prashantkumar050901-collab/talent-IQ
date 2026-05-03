import "./app.css";
import { SignInButton, SignOutButton, UserButton } from "@clerk/react";
import "./App.css";


function App() {
 

  return (
    <>
    <h1>welcome to the app</h1>

    <signedout>
    <SignInButton mode="modal" >
      <button >login</button>
      </SignInButton>
    </signedout>

    <signedIn>
      <SignOutButton />
    </signedIn>

    
        <UserButton/>
    
    
    </>
  );
}
export default App;