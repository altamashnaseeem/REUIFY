import { SignUp } from "@clerk/nextjs";


function Signup(){
    return (
        <div className="w-full h-screen flex justify-center items-center">
          <SignUp
           appearance={{
            elements: {
              footer: {
                display: 'none',
              },
            },

          }}
          />
        </div>
    )
}
export default Signup;
