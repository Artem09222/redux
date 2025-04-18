import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';  
import styles from './App.module.css';
import RegisterForm from './components/RegisterForm/RegisterForm';
import { useMediaQuery } from "react-responsive";
import Header from './components/Header/Header';
import RightStatisticsSection from './components/RightStatisticsSection/RightStatisticsSection';
import LeftStatisticsSection from './components/LeftStatisticsSection/LeftStatisticsSection';
import StatisticsRigntSection from './components/LeftStatisticsSection/StatisticsRigntSection/StatisticsRigntSection';

function App() {
  const [activeRightSection, setActiveRightSection] = useState('Home')
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  const isMobile = useMediaQuery({ maxWidth: 767 }); // Телефони
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 }); // Планшети
  const isDesktop = useMediaQuery({ minWidth: 1025 }); // Комп’ютери

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) {
      setIsAuthenticated(true);
      setUserName(savedUser.name);
    }
  }, []);
  
  const handleLogOut = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false); 
    setUserName('');
  };

  useEffect(() => {
    const savedSection = localStorage.getItem('activeRightSection');
    if (savedSection) {
        setActiveRightSection(savedSection);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('activeRightSection', activeRightSection);
  }, [activeRightSection]);

  const changedRightSection = () => {
    switch (activeRightSection) {
      case 'Home':
        return <RightStatisticsSection />;
      case 'Statistics':
        return <StatisticsRigntSection />;
      default:
        return null;
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, x: isMobile ? 0 : isTablet ? -50 : -100 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: isMobile ? 0.6 : isTablet ? 0.8 : 1 }}
      className={styles.app}
    >
      {isAuthenticated ? (
        <>
          <motion.div
            initial={{ opacity: 0, y: isMobile ? -30 : isTablet ? -50 : -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.6 : isTablet ? 0.8 : 1, delay: 0.2 }}
            className={styles.headerBlock}
          >
            <Header userName={userName} onLogOut={handleLogOut} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: isMobile ? 10 : isTablet ? 20 : -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.6 : isTablet ? 0.8 : 1, delay: 0.4 }}
            className={styles.container}
          >
            <motion.div
              initial={{ opacity: 0, x: isMobile ? 0 : isTablet ? -30 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: isMobile ? 0.6 : isTablet ? 0.8 : 1 }}
              className={styles.leftStatisticsSection}
            >
              <LeftStatisticsSection onSectionChange={setActiveRightSection} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isMobile ? 0 : isTablet ? 30 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: isMobile ? 0.6 : isTablet ? 0.8 : 1 }}
              className={styles.main}
            >
              {changedRightSection()}
            </motion.div>
          </motion.div>
        </>
      ) : (
        <RegisterForm setUser={(name) => {
          setUserName(name);
          setIsAuthenticated(true);
        }} />
      )}
    </motion.div>
  );
}

export default App;
