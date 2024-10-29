import { SignIn } from "@clerk/nextjs";


function Signin(){
    return (
        <div className="w-full h-screen flex justify-center items-center">
          <SignIn
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

export default Signin