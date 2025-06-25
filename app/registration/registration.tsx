import React, { useState, ChangeEvent } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  dateOfBirth: string;
  country: string;
  terms: boolean;
  promotions: boolean;
}

interface PasswordStrength {
  score: number;
  label: string;
  color: string;
}

const FryStickRegister: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    country: '',
    terms: false,
    promotions: false,
  });

  const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>({
    score: 0,
    label: '',
    color: '#888'
  });

  const calculatePasswordStrength = (password: string): PasswordStrength => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    const strengthMap = {
      0: { label: '', color: '#888' },
      1: { label: 'Very Weak', color: '#ff4444' },
      2: { label: 'Weak', color: '#ff8800' },
      3: { label: 'Fair', color: '#ffcc00' },
      4: { label: 'Good', color: '#88cc00' },
      5: { label: 'Strong', color: '#44cc44' },
    };

    return {
      score,
      label: strengthMap[score as keyof typeof strengthMap].label,
      color: strengthMap[score as keyof typeof strengthMap].color,
    };
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: checkbox.checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));

      if (name === 'password') {
        setPasswordStrength(calculatePasswordStrength(value));
      }
    }
  };

  const handleSubmit = () => {
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    if (!formData.terms) {
      alert('Please accept the Terms & Conditions');
      return;
    }
    
    // Age validation (18+)
    const birthDate = new Date(formData.dateOfBirth);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    
    if (age < 18) {
      alert('You must be 18 or older to register');
      return;
    }
    
    console.log('Registration Data:', formData);
    alert('Registration successful! Welcome to FryStick!');
    
    // Here you would typically send data to your backend
    // fetch('/api/register', { method: 'POST', body: JSON.stringify(formData) })
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`${provider} login clicked`);
    // Implement social login logic here
  };

  return (
    <div className="min-h-screen text-white" style={{
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
    }}>
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 md:px-8" style={{
        background: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 107, 53, 0.2)'
      }}>
        <div className="flex items-center gap-2 text-2xl font-bold text-orange-500">
          <span className="text-3xl">🍟</span>
          FryStick
        </div>
        
        <ul className="hidden md:flex gap-8 list-none">
          <li><a href="#home" className="text-white no-underline px-4 py-2 rounded-lg transition-all hover:text-orange-500 hover:bg-orange-500/10">Home</a></li>
          <li><a href="#live-matches" className="text-white no-underline px-4 py-2 rounded-lg transition-all hover:text-orange-500 hover:bg-orange-500/10">Live Matches</a></li>
          <li><a href="#sports" className="text-white no-underline px-4 py-2 rounded-lg transition-all hover:text-orange-500 hover:bg-orange-500/10">Sports</a></li>
          <li><a href="#promotions" className="text-white no-underline px-4 py-2 rounded-lg transition-all hover:text-orange-500 hover:bg-orange-500/10">Promotions</a></li>
        </ul>
        
        <div>
          <a 
            href="#login" 
            className="bg-transparent text-white border-2 border-orange-500 px-6 py-2 rounded-full no-underline transition-all hover:bg-orange-500 hover:text-white"
          >
            Login
          </a>
        </div>
      </nav>

      {/* Register Form */}
      <div className="max-w-md mx-auto mt-12 mb-8 p-8 md:p-12 rounded-3xl" style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 107, 53, 0.2)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
      }}>
        <div className="text-center mb-8">
          <h2 className="text-3xl text-orange-500 mb-2">Create Account</h2>
          <p className="text-gray-400 text-sm">Join the ultimate sports betting experience</p>
        </div>

        <div>
          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <label htmlFor="firstName" className="block mb-2 text-gray-200 font-medium">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter first name"
                className="w-full p-3 rounded-xl text-white text-base transition-all focus:outline-none focus:border-orange-500 focus:shadow-lg"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="lastName" className="block mb-2 text-gray-200 font-medium">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter last name"
                className="w-full p-3 rounded-xl text-white text-base transition-all focus:outline-none focus:border-orange-500 focus:shadow-lg"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-gray-200 font-medium">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full p-3 rounded-xl text-white text-base transition-all focus:outline-none focus:border-orange-500 focus:shadow-lg"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="block mb-2 text-gray-200 font-medium">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter phone number"
              className="w-full p-3 rounded-xl text-white text-base transition-all focus:outline-none focus:border-orange-500 focus:shadow-lg"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
              required
            />
          </div>

          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <label htmlFor="password" className="block mb-2 text-gray-200 font-medium">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Create password"
                className="w-full p-3 rounded-xl text-white text-base transition-all focus:outline-none focus:border-orange-500 focus:shadow-lg"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
                required
              />
              {passwordStrength.label && (
                <div className="mt-1 text-sm" style={{ color: passwordStrength.color }}>
                  Strength: {passwordStrength.label}
                </div>
              )}
            </div>
            <div className="flex-1">
              <label htmlFor="confirmPassword" className="block mb-2 text-gray-200 font-medium">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm password"
                className="w-full p-3 rounded-xl text-white text-base transition-all focus:outline-none focus:border-orange-500 focus:shadow-lg"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
                required
              />
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <label htmlFor="dateOfBirth" className="block mb-2 text-gray-200 font-medium">Date of Birth</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className="w-full p-3 rounded-xl text-white text-base transition-all focus:outline-none focus:border-orange-500 focus:shadow-lg"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="country" className="block mb-2 text-gray-200 font-medium">Country</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full p-3 rounded-xl text-white text-base transition-all focus:outline-none focus:border-orange-500 focus:shadow-lg"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
                required
              >
                <option value="">Select Country</option>
                <option value="IN">India</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="AU">Australia</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleInputChange}
              className="accent-orange-500"
              required
            />
            <label htmlFor="terms" className="text-gray-400 text-sm">
              I agree to the <a href="#terms" className="text-orange-500 no-underline hover:underline">Terms & Conditions</a> and <a href="#privacy" className="text-orange-500 no-underline hover:underline">Privacy Policy</a>
            </label>
          </div>

          <div className="flex items-center gap-2 mb-8">
            <input
              type="checkbox"
              id="promotions"
              name="promotions"
              checked={formData.promotions}
              onChange={handleInputChange}
              className="accent-orange-500"
            />
            <label htmlFor="promotions" className="text-gray-400 text-sm">
              I want to receive promotional emails and updates
            </label>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full p-4 rounded-xl text-white text-lg font-semibold cursor-pointer transition-all mb-6 hover:transform hover:-translate-y-1"
            style={{
              background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
              border: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #ff8c42 0%, #ff6b35 100%)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 107, 53, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Create Account
          </button>
        </div>

        <div className="text-center text-gray-400">
          Already have an account? <a href="#login" className="text-orange-500 no-underline font-semibold hover:underline">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default FryStickRegister;