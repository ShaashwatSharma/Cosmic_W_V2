export const signup=()=> {
    return (
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sign-Up Page</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        .glass {\n            background: rgba(255, 255, 255, 0.1);\n            backdrop-filter: blur(10px);\n            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n            border: 1px solid rgba(255, 255, 255, 0.2);\n        }\n    "
    }}
  />
  <div className="w-full max-w-[450px] m-4 glass text-white rounded-lg p-8  font-[Montserrat] text-sm">
    <div className="welcome flex flex-col items-start" />
    <h2 className="text-3xl font-bold mb-4">Create Your Account</h2>
    <p className="text-gray-300 mb-6">
      Already have an account?
      <a
        href="login.html"
        className="text-purple-400 hover:underline hover:text-purple-500 transition-all duration-200"
      >
        Sign in
      </a>
      .
    </p>
    <form>
      <div className="mb-4">
        <label htmlFor="full-name" className="block text-sm font-medium mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="full-name"
          placeholder="John Doe"
          className="w-full px-4 py-2 bg-gray-800/50 text-white rounded-md ring-1 ring-gray-700 focus:ring-purple-500"
        />
      </div>
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
      <div className="mb-4">
        <label
          htmlFor="confirm-password"
          className="block text-sm font-medium mb-1"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirm-password"
          placeholder="••••••••••"
          className="w-full px-4 py-2 bg-gray-800/50 text-white rounded-md ring-1 ring-gray-700 focus:ring-purple-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-medium py-2 rounded-md transition"
      >
        Sign Up
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
        className="w-full flex items-center justify-center px-4 py-2 rounded-md shadow ring-1 ring-gray-500 bg-gray-800/50 text-white font-semibold hover:bg-gray-700"
      >
        <img
          src="https://www.svgrepo.com/show/355037/google.svg"
          alt="Google"
          className="w-5 h-5 mr-2"
        />
        Sign up with Google
      </button>
      <button
        type="button"
        className="w-full flex items-center justify-center px-4 py-2 rounded-md shadow bg-black text-white font-semibold hover:bg-gray-700"
      >
        <img
          src="/apple-logo-svgrepo-com.svg"
          alt="Apple"
          className="w-5 h-5 mr-2 invert"
        />
        Sign up with Apple
      </button>
    </div>
  </div>
</>

    )
}