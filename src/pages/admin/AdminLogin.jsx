import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Eye, EyeOff } from "lucide-react";

import { loginAdmin } from "../../services/firebase/auth";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await loginAdmin(email, password);

      navigate("/admin/dashboard");
    } catch (error) {
      alert("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f8f5f2] px-6">
      <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-sm">
        <p className="uppercase tracking-[4px] text-sm text-[#b59b82] mb-4">
          Preeth!Zign Admin
        </p>

        <h1 className="text-4xl mb-10">Login</h1>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email */}
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-[#e5ddd3] px-5 py-4 rounded-xl outline-none"
            required
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                w-full
                border
                border-[#e5ddd3]
                px-5
                py-4
                pr-14
                rounded-xl
                outline-none
              "
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="
                absolute
                right-5
                top-1/2
                -translate-y-1/2
                text-gray-500
                hover:text-black
                transition
              "
            >
              {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
            </button>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-black
              text-white
              py-4
              rounded-xl
              hover:bg-[#b38b59]
              transition
              duration-300
            "
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AdminLogin;
