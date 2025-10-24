import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  PaperAirplaneIcon 
} from '@heroicons/react/24/outline';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  };

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: "Our Office",
      details: ["4th 5t NW, Washington DC 20530", "United States"],
      color: "bg-blue-500"
    },
    {
      icon: PhoneIcon,
      title: "Phone Numbers",
      details: ["+88 01750 000 000", "+88 01750 000 001"],
      color: "bg-green-500"
    },
    {
      icon: EnvelopeIcon,
      title: "Email Address",
      details: ["info@gmail.com", "support@legal-solutions.com"],
      color: "bg-purple-500"
    },
    {
      icon: ClockIcon,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 2:00 PM"],
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to discuss your legal needs? Our team is here to provide expert guidance and support for your case.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Contact Form */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="card bg-white shadow-2xl border border-gray-100"
          >
            <div className="card-body p-8">
              <motion.h2 
                variants={itemVariants}
                className="card-title text-3xl font-bold text-gray-800 mb-2"
              >
                Send us a Message
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-gray-600 mb-8"
              >
                Fill out the form below and we'll get back to you within 24 hours.
              </motion.p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants} className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">Full Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="input input-bordered input-lg bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    required
                  />
                </motion.div>
                
                <motion.div variants={itemVariants} className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">Email Address</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="input input-bordered input-lg bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">Phone Number</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="input input-bordered input-lg bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">Subject</span>
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="select select-bordered select-lg bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="business-law">Business Law</option>
                    <option value="family-law">Family Law</option>
                    <option value="criminal-defense">Criminal Defense</option>
                    <option value="real-estate">Real Estate Law</option>
                    <option value="employment">Employment Law</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>

                <motion.div variants={itemVariants} className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">Message</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your legal needs in detail..."
                    className="textarea textarea-bordered textarea-lg h-32 bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none"
                    required
                  ></textarea>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="form-control mt-8"
                >
                  <motion.button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn btn-lg ${
                      isSubmitting 
                        ? 'btn-disabled' 
                        : 'btn-primary bg-gradient-to-r from-blue-600 to-purple-600 border-none text-white shadow-lg hover:shadow-xl'
                    } transition-all duration-300`}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="loading loading-spinner"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <PaperAirplaneIcon className="w-5 h-5" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
                className="card bg-white shadow-xl border border-gray-100"
              >
                <div className="card-body p-6">
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <item.icon className="w-6 h-6" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{item.title}</h3>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 leading-relaxed">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Emergency Card */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="card bg-gradient-to-br from-red-500 to-pink-600 text-white shadow-2xl"
            >
              <div className="card-body p-6 text-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <PhoneIcon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Emergency Legal Assistance</h3>
                <p className="mb-4 opacity-90">Need immediate legal help? Available 24/7</p>
                <motion.button 
                  className="btn btn-accent btn-lg text-white border-none shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Call Now: (555) 123-HELP
                </motion.button>
              </div>
            </motion.div>

            {/* Map Preview */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="card bg-white shadow-xl border border-gray-100 overflow-hidden"
            >
              <div className="card-body p-0">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Visit Our Office</h3>
                  <p className="opacity-90">We're located in the heart of Washington DC</p>
                </div>
                <div className="p-6">
                  <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="text-center text-gray-500"
                    >
                      <MapPinIcon className="w-12 h-12 mx-auto mb-2" />
                      <p>Interactive Map</p>
                      <p className="text-sm">Washington DC Location</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Success Message (Optional) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Why Choose Our Legal Services?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              {[
                "✓ 24/7 Client Support",
                "✓ Free Initial Consultation",
                "✓ Experienced Legal Team",
                "✓ Confidential & Secure",
                "✓ Flexible Payment Options",
                "✓ 98% Success Rate"
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="flex items-center space-x-2 text-green-600 font-semibold"
                >
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;