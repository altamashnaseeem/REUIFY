import { SignUp } from "@clerk/nextjs";


function Signup(){
    return (
        <div className="w-full h-screen flex justify-center items-center">
          <SignUp/>
        </div>
    )
}
export default Signup;
