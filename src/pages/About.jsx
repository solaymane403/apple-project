import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  Heart,
  Rocket,
  Globe,
  TrendingUp,
  Shield
} from 'lucide-react';
import './About.css';

function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const values = [
    {
      icon: <Heart />,
      title: 'Customer First',
      description: 'We put our customers at the heart of everything we do, ensuring exceptional service and support.'
    },
    {
      icon: <Award />,
      title: 'Quality Products',
      description: 'Only authentic Apple products with full warranty and guaranteed authenticity.'
    },
    {
      icon: <Shield />,
      title: 'Secure Shopping',
      description: 'Your data and transactions are protected with industry-leading security measures.'
    },
    {
      icon: <Rocket />,
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping to get your products to you as fast as possible.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://i.pravatar.cc/300?img=1',
      description: 'Visionary leader with 15+ years in tech retail.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://i.pravatar.cc/300?img=13',
      description: 'Technology expert ensuring seamless digital experience.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Customer Success',
      image: 'https://i.pravatar.cc/300?img=5',
      description: 'Dedicated to making every customer interaction exceptional.'
    },
    {
      name: 'David Kim',
      role: 'Product Manager',
      image: 'https://i.pravatar.cc/300?img=14',
      description: 'Curating the best selection of Apple products.'
    }
  ];

  const milestones = [
    { year: '2015', event: 'Company Founded', description: 'Started with a small store in Silicon Valley' },
    { year: '2017', event: 'Online Launch', description: 'Expanded to e-commerce platform' },
    { year: '2019', event: '50,000 Customers', description: 'Reached major customer milestone' },
    { year: '2021', event: 'International Shipping', description: 'Began serving customers worldwide' },
    { year: '2023', event: '100+ Cities', description: 'Expanded delivery to over 100 cities' },
    { year: '2024', event: 'Innovation Award', description: 'Recognized for outstanding customer service' }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <motion.section className="about-hero" {...fadeInUp}>
        <div className="container">
          <div className="about-hero-content">
            <h1>About Apple Store</h1>
            <p>Your trusted partner for premium Apple products since 2015</p>
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <motion.div className="mission-content" {...fadeInUp}>
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                To provide the best Apple product shopping experience by offering superior products, 
                exceptional customer service, and expert advice. We believe in making technology 
                accessible and enjoyable for everyone.
              </p>
              <p>
                Since 2015, we've been committed to bringing the latest Apple innovations to our 
                customers with unmatched service and support. Our team of Apple experts is here to 
                help you find the perfect product for your needs.
              </p>
            </div>
            <div className="mission-stats">
              <div className="stat-box">
                <Users size={48} />
                <h3>50,000+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="stat-box">
                <Globe size={48} />
                <h3>100+</h3>
                <p>Cities Served</p>
              </div>
              <div className="stat-box">
                <TrendingUp size={48} />
                <h3>100,000+</h3>
                <p>Products Sold</p>
              </div>
              <div className="stat-box">
                <Target size={48} />
                <h3>4.9/5</h3>
                <p>Customer Rating</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="container">
          <motion.div className="section-header" {...fadeInUp}>
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </motion.div>
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline">
        <div className="container">
          <motion.div className="section-header" {...fadeInUp}>
            <h2>Our Journey</h2>
            <p>Milestones that shaped our story</p>
          </motion.div>
          <div className="timeline-content">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content-box">
                  <h3>{milestone.event}</h3>
                  <p>{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <motion.div className="section-header" {...fadeInUp}>
            <h2>Meet Our Team</h2>
            <p>The people behind your perfect Apple experience</p>
          </motion.div>
          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="team-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <span className="role">{member.role}</span>
                <p>{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <motion.div className="about-cta-content" {...fadeInUp}>
            <h2>Ready to Experience the Difference?</h2>
            <p>Join thousands of satisfied customers and discover why we're the top choice for Apple products.</p>
            <motion.a 
              href="/shop" 
              className="btn-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Shopping
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;
