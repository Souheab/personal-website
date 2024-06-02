export default function SignUp() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-100">
      <form className="flex flex-col justify-center items-center border p-8 bg-white rounded">
        <h1 className="text-slate-600 mb-5 text-xl">Sign Up for an account on souheab.com!</h1>
        <div className="w-full text-slate-950 my-2">
          <div>Email</div>
          <input className="border p-4 rounded my-2 text-slate-800 w-full" type="email" placeholder="Email" />
        </div>
        <div className="w-full text-slate-950 my-2">
          <div>Password</div>
          <input className="border p-4 rounded my-2 text-slate-800 w-full" type="password" placeholder="Password" />
        </div>
        <div className="w-full text-slate-950 my-2">
          <div>Confirm Password</div>
          <input className="border p-4 rounded my-2 text-slate-800 w-full" type="password" placeholder="Password" />
        </div>
        <button className="m-2 p-2 border rounded bg-blue-500 text-white w-full">Sign Up</button>
      </form>
    </div>
  );
}
