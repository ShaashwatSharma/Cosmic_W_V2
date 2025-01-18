export const Signin=()=> {
    return (
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login Page</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&family=Bebas+Neue&family=Geist+Mono:wght@100..900&family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&family=Host+Grotesk:ital,wght@0,300..800;1,300..800&family=Lexend:wght@100..900&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        .glass {\n            background: rgba(255, 255, 255, 0.1);\n            backdrop-filter: blur(10px);\n            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n            border: 1px solid rgba(255, 255, 255, 0.2);\n        }\n    "
    }}
  />
  <div className="w-full max-w-[450px] m-4 glass text-white rounded-lg p-8 font-[Montserrat] text-sm">
    <div className="welcome flex flex-col items-start">
      <h2 className="text-3xl font-bold text-center mb-4">Welcome Back</h2>
      <p className="text-center text-gray-300 mb-6">
        Don’t have an account?
        <a
          href="signup.html"
          className="text-purple-400 hover:underline hover:text-purple-500 transition-all duration-200 "
        >
          Sign up.
        </a>
      </p>
    </div>
    <form>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="name@company.com"
          className="w-full px-4 py-2 bg-gray-800/50 text-white rounded-md ring-1 ring-gray-700 focus:ring-purple-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="••••••••••"
          className="w-full px-4 py-2 bg-gray-800/50 text-white rounded-md ring-1 ring-gray-700 focus:ring-purple-500"
        />
      </div>
      <div className="flex items-center justify-between mb-6">
        <div className="inline-flex items-center">
          <label
            className="flex items-center cursor-pointer relative"
            htmlFor="remember"
          >
            <input
              type="checkbox"
              id="remember"
              className="peer h-4 w-4 cursor-pointer appearance-none rounded shadow border border-gray-500 bg-transparent checked:bg-purple-500"
            />
            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </label>
          <label
            className="cursor-pointer ml-2 text-gray-300 text-sm"
            htmlFor="remember"
          >
            Remember me
          </label>
        </div>
        <a
          href="#"
          className="text-sm text-purple-400 hover:underline hover:text-purple-500 transition-all duration-200 "
        >
          Forgot password?
        </a>
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-medium py-2 rounded-md transition"
      >
        Sign in to your account
      </button>
    </form>
    <div className="mt-6 flex items-center justify-center">
      <span className="w-full h-px bg-gray-600" />
      <span className="px-3 text-gray-400 text-sm">or</span>
      <span className="w-full h-px bg-gray-600" />
    </div>
    <div className="mt-6 space-y-3">
      <button
        type="button"
        className="w-full flex items-center justify-center px-4 py-2 rounded-md shadow ring-1 ring-gray-500 bg-gray-800/50 text-white font-semibold hover:bg-gray-700 font-[Montserrat]"
      >
        <img
          src="https://www.svgrepo.com/show/355037/google.svg"
          alt="Google"
          className="w-5 h-5 mr-2 "
        />
        Sign in with Google
      </button>
      <button
        type="button"
        className="w-full flex items-center justify-center px-4 py-2 rounded-md shadow bg-black text-white font-semibold hover:bg-gray-700 font-[Montserrat]"
      >
        <img
          src="apple-logo-svgrepo-com.svg"
          alt="Apple"
          className="w-5 h-5 mr-2 invert"
        />
        Sign in with Apple
      </button>
    </div>
  </div>
</>

    )
}