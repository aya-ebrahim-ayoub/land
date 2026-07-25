import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Building2, 
  CalendarDays, 
  Calculator, 
  Users, 
  LineChart, 
  Coffee,
  ShieldCheck,
  ChevronLeft,
  Smartphone,
  CheckCircle,
  Headset
} from 'lucide-react';
import './App.css';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

function App() {
  const { scrollY } = useScroll();
  
  // Parallax effects for backgrounds
  const yExterior = useTransform(scrollY, [0, 1000], [0, 300]);
  const yLobby = useTransform(scrollY, [500, 2000], [0, 300]);
  const yRoom = useTransform(scrollY, [1500, 3000], [0, 300]);

  return (
    <div className="app-wrapper">
      
      {/* Hero Section - Hotel Exterior */}
      <section className="parallax-section" id="hero-section">
        <motion.div 
          className="parallax-bg" 
          style={{ 
            backgroundImage: `url('/hotel_exterior.png')`,
            y: yExterior
          }} 
        />
        <div className="parallax-overlay"></div>
        <div className="container relative-content hero-content-wrapper">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="hero-badge">
              نظام سحابي متكامل 100%
            </motion.div>
            <motion.h1 variants={fadeUpVariant} className="hero-title">
              نظام إدارة الفنادق <br/>
              <span className="text-gradient">والشقق المخدومة</span>
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="hero-subtitle">
              منصة سحابية متكاملة لإدارة وتشغيل منشآت الضيافة بكفاءة واحترافية. متوافق مع متطلبات هيئة الزكاة والضريبة والجمارك (ZATCA) ومنصة شموس.
            </motion.p>
            <motion.div variants={fadeUpVariant} className="hero-stats">
              <div className="hero-stat-item">
                <div className="hero-stat-icon"><CheckCircle size={20} /></div>
                <span className="hero-stat-text">دعم فني 24/7</span>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-icon"><ShieldCheck size={20} /></div>
                <span className="hero-stat-text">معتمد من ZATCA</span>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-icon"><Building2 size={20} /></div>
                <span className="hero-stat-text">أكثر من 500 منشأة</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="section-padding why-us-section" id="why-us">
        <div className="container relative-content">
          <div className="why-us-grid">
            <motion.div 
              className="why-us-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeUpVariant} className="section-title text-right">
                لماذا <span className="text-primary">نزلكم؟</span>
              </motion.h2>
              <motion.p variants={fadeUpVariant} className="why-us-text">
                نحن نضمن لك راحة البال من خلال التكامل التقني الكامل مع الأنظمة الحكومية في المملكة العربية السعودية، مع أدوات ترفع من كفاءة التشغيل وتزيد من أرباحك.
              </motion.p>
              <motion.ul variants={staggerContainer} className="why-us-list">
                <motion.li variants={fadeUpVariant}><CheckCircle size={24} className="text-primary"/> تحديثات فورية للبيانات مع منصة شموس</motion.li>
                <motion.li variants={fadeUpVariant}><CheckCircle size={24} className="text-primary"/> إصدار فواتير ضريبية معتمدة من ZATCA</motion.li>
                <motion.li variants={fadeUpVariant}><CheckCircle size={24} className="text-primary"/> تقارير امتثال تلقائية لوزارة السياحة</motion.li>
                <motion.li variants={fadeUpVariant}><CheckCircle size={24} className="text-primary"/> تعديل أسعار مئات الشقق في ثوانٍ (Bulk Edit)</motion.li>
              </motion.ul>
            </motion.div>
            
            <motion.div 
              className="why-us-visual"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="image-mockup-container">
                <img src="/mockup.png" alt="نزلكم داشبورد" className="mockup-image" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section (Section 3) */}
      <section className="features-section-bg" id="features-section">
        <div className="glow-blob glow-blob-1"></div>
        <div className="glow-blob glow-blob-2"></div>
        <div className="container relative-content section-padding">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUpVariant} className="section-title">
              حلول ذكية تغطي جميع <span className="text-primary">جوانب التشغيل</span>
            </motion.h2>
            <motion.p variants={fadeUpVariant} className="section-subtitle">
              أدوات متكاملة صممت خصيصاً لتلبية احتياجات الفنادق والشقق المفروشة في المملكة، لتسهيل عمليات التشغيل اليومية وزيادة الكفاءة والأرباح.
            </motion.p>

            <div className="features-grid">
              <motion.div variants={fadeUpVariant} className="feature-card glass-panel">
                <div className="feature-icon"><CalendarDays /></div>
                <h3 className="feature-title">إدارة الحجوزات والتسكين</h3>
                <p className="feature-desc">برنامج إدارة فنادق سحابي شامل لإدارة الحجوزات، التسكين، والمغادرة، ومتابعة توفر الغرف والشقق المفروشة لحظياً.</p>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="feature-card glass-panel">
                <div className="feature-icon"><Calculator /></div>
                <h3 className="feature-title">المحاسبة والفوترة الإلكترونية</h3>
                <p className="feature-desc">نظام مالي متكامل، متوافق كلياً مع متطلبات هيئة الزكاة والضريبة والجمارك (ZATCA) للمرحلتين الأولى والثانية.</p>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="feature-card glass-panel">
                <div className="feature-icon"><LineChart /></div>
                <h3 className="feature-title">تقارير وتحليلات متقدمة</h3>
                <p className="feature-desc">أكثر من 50 تقرير تفصيلي حول نسبة الإشغال، RevPAR، والأداء المالي للفندق لمساعدتك في اتخاذ قرارات استراتيجية.</p>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="feature-card glass-panel">
                <div className="feature-icon"><Coffee /></div>
                <h3 className="feature-title">إدارة العمليات والصيانة</h3>
                <p className="feature-desc">تحكم في كل تفاصيل عقارك، من إضافة الغرف، وخدمات الغرف والمغسلة بنظام POS متصل بالفاتورة الموحدة للنزيل.</p>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="feature-card glass-panel">
                <div className="feature-icon"><Users /></div>
                <h3 className="feature-title">تجربة ضيف أفضل (CRM)</h3>
                <p className="feature-desc">نظام CRM متطور يحفظ سجلات النزلاء التاريخية وتفضيلاتهم لتحسين تجربة الإقامة وزيادة ولاء العملاء لمنشأتك.</p>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="feature-card glass-panel">
                <div className="feature-icon"><Smartphone /></div>
                <h3 className="feature-title">نقاط البيع (POS)</h3>
                <p className="feature-desc">إدارة شاملة لخدمات المطاعم والمقاهي مع ربط فوري بنظام إدارة الفندق (PMS) لإصدار فاتورة إلكترونية موحدة للنزيل.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integrations Section - Hotel Room */}
      <section className="parallax-section" id="integrations-section">
        <motion.div 
          className="parallax-bg" 
          style={{ 
            backgroundImage: `url('/hotel_room.png')`,
            y: yRoom
          }} 
        />
        <div className="parallax-overlay"></div>
        <div className="container relative-content section-padding stats-section">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 variants={fadeUpVariant} className="section-title">
              تكامل تام مع <span className="text-primary">الأنظمة الحكومية</span>
            </motion.h2>
            <motion.p variants={fadeUpVariant} className="section-subtitle">
              نحن نضمن لك راحة البال من خلال التكامل التقني الكامل في المملكة العربية السعودية. لا داعي للقلق بشأن الامتثال أو نقل البيانات يدويًا.
            </motion.p>
            
            <div className="integrations-grid">
              <motion.div variants={fadeUpVariant} className="integration-item glass-panel">
                <div className="integration-icon">
                  <span style={{fontSize: '2rem', fontWeight: 900}}>ZATCA</span>
                </div>
                <h4>الفاتورة الإلكترونية</h4>
              </motion.div>
              
              <motion.div variants={fadeUpVariant} className="integration-item glass-panel">
                <div className="integration-icon">
                  <ShieldCheck size={40} />
                </div>
                <h4>منصة شموس</h4>
              </motion.div>
              
              <motion.div variants={fadeUpVariant} className="integration-item glass-panel">
                <div className="integration-icon">
                  <Building2 size={40} />
                </div>
                <h4>الرصد السياحي</h4>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer (No parallax, just solid dark base) */}
      <footer className="footer relative-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <a href="#" className="logo" style={{marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.5rem', fontWeight: 'bold'}}>
                <Building2 className="logo-icon" size={32} />
                نزلكم
              </a>
              <p className="text-muted">
                نظام إدارة الفنادق والشقق المخدومة الأحدث في المملكة. نجمع بين سهولة الاستخدام وقوة الأداء.
              </p>
            </div>
            
            <div className="footer-col">
              <h4>روابط سريعة</h4>
              <div className="footer-links">
                <a href="#">الرئيسية</a>
                <a href="#">لماذا نزلكم</a>
                <a href="#">المميزات</a>
                <a href="#">الربط الحكومي</a>
              </div>
            </div>

            <div className="footer-col">
              <h4>تواصل معنا</h4>
              <div className="footer-links">
                <a href="#" style={{display: 'flex', alignItems: 'center', gap: 8}}><Smartphone size={16}/> +966 55 907 0429</a>
                <a href="#">info@nozulkum.com</a>
                <a href="#">جدة، طريق المدينة المنورة</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2026 شركة نزلكم لتقنية المعلومات. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
