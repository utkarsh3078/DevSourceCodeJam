import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function SignUp({ count, setCount }) {
    const navigate = useNavigate(); // For navigation after login

    useEffect(() => {
        if (setCount) {
            setCount(0); // Reset the count (or whatever you want to do) when the component is mounted
        }
    }, [setCount]); // Ensures setCount is available and avoids errors

    const handleSignUpClick = () => {
        if (setCount) {
            setCount(1); // Set count before navigating to the signup page
        }
    };

    return (
        <div className="flex justify-center w-[100%] items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Enter your name ('don't use your real name)</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your made up name"
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Log In
                        </button>
                    </div>
                </form>
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                        have an account?{" "}
                        <Link 
                            to="/login" 
                            className="text-blue-500 hover:underline"
                            onClick={handleSignUpClick} // Click handler to set count before navigation
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
