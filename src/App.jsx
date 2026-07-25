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
  Headset,
  Phone,
  Mail,
  Globe,
  FileText,
  Target,
  Cloud,
  Languages,
  Layers,
  Plug,
  Rocket,
  ClipboardList,
  Home,
  Landmark,
  BedDouble,
  TrendingUp,
  Activity,
  ArrowLeft,
  PieChart,
  Repeat
} from 'lucide-react';
import SystemPages from './SystemPages';
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
              <motion.div variants={staggerContainer} className="why-us-rows">
                <motion.div variants={fadeUpVariant} className="why-us-row">
                  <div className="wu-row-icon"><ShieldCheck size={24} className="text-primary"/></div>
                  <div className="wu-row-content">
                    <h4>تكامل حكومي شامل</h4>
                    <p>فواتير معتمدة من الزكاة (ZATCA)، ربط مباشر مع منصة شموس، وامتثال تلقائي لوزارة السياحة.</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeUpVariant} className="why-us-row">
                  <div className="wu-row-icon"><LineChart size={24} className="text-primary"/></div>
                  <div className="wu-row-content">
                    <h4>تحكم ذكي وسريع</h4>
                    <p>تحديث أسعار مئات الشقق في ثوانٍ (Bulk Edit)، ومزامنة فورية للبيانات لزيادة أرباحك.</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="why-us-visual"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="image-mockup-container">
                {/* Decorative layers behind the image */}
                <span className="mockup-glow" aria-hidden="true"></span>
                <span className="mockup-dots" aria-hidden="true"></span>

                <div className="mockup-frame">
                  <img src="/photo_5990314325551287759_y.jpg" alt="نظام نزلكم يعمل على الحاسب والجوال" className="mockup-image" />
                </div>

                {/* Floating glass badges */}
                <motion.div
                  className="mockup-badge mockup-badge-top"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="mockup-badge-icon badge-icon-green"><ShieldCheck size={20} /></div>
                  <div className="mockup-badge-text">
                    <strong>متوافق 100%</strong>
                    <span>فوترة ZATCA معتمدة</span>
                  </div>
                </motion.div>

                <motion.div
                  className="mockup-badge mockup-badge-bottom"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="mockup-badge-icon badge-icon-blue"><LineChart size={20} /></div>
                  <div className="mockup-badge-text">
                    <strong>92%</strong>
                    <span>متوسط نسبة الإشغال</span>
                  </div>
                </motion.div>

                <motion.div
                  className="mockup-badge mockup-badge-side"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <span className="mockup-live-dot"></span>
                  <span>مزامنة فورية</span>
                </motion.div>
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

      {/* System Pages Section */}
      <SystemPages />

      {/* Integrations Section */}
      <section className="features-section-bg" id="integrations-section">
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
            
            <div className="timeline-container">
              <div className="timeline-line"></div>
              
              <motion.div variants={fadeUpVariant} className="timeline-item content-right zatca-item">
                <div className="timeline-icon">
                  <img src="/fatoora-mark.png" alt="فاتورة Fatoora" />
                </div>
                <div className="timeline-content">
                  <h4>الفاتورة الإلكترونية (ZATCA)</h4>
                  <p>نظام مفوتر معتمد من هيئة الزكاة والضريبة والجمارك (المرحلة الأولى والثانية) مع رمز QR مشفر لضمان الامتثال التام.</p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeUpVariant} className="timeline-item content-left shmous-item">
                <div className="timeline-icon">
                  <img src="/shmous-logo.png" alt="Shmous" />
                </div>
                <div className="timeline-content">
                  <h4>منصة شموس الأمنية</h4>
                  <p>نظام متوافق مع شموس للربط التقني المباشر مع وزارة الداخلية لإرسال بيانات النزلاء لحظة التسكين والمغادرة آلياً دون تدخل بشري.</p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeUpVariant} className="timeline-item content-right ntmp-item">
                <div className="timeline-icon">
                  <img src="/ntmp-logo.png" alt="NTMP" />
                </div>
                <div className="timeline-content">
                  <h4>الرصد السياحي (NTMP)</h4>
                  <p>امتثال كامل لمتطلبات وزارة السياحة السعودية ونقل بيانات الإشغال والأسعار لمنصة الرصد السياحي آلياً لضمان تجنب أي مخالفات.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Profile & Plan Section */}
      <section className="features-section-bg" id="profile-plan">
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
              الملف التعريفي <span className="text-primary">وخطة الربط</span>
            </motion.h2>
            <motion.p variants={fadeUpVariant} className="section-subtitle">
              نظرة تفصيلية على النظام المراد ربط الخدمة به، وخطة العمل المعتمدة للربط التقني، والفئات المستهدفة من هذا الربط.
            </motion.p>

            {/* 01 — System Profile */}
            <motion.div variants={fadeUpVariant} className="pp-block">
              <div className="pp-head">
                <span className="pp-head-num">01</span>
                <div className="pp-head-text">
                  <h3>ملف تعريفي بالنظام المراد ربط الخدمة به</h3>
                  <p>بيانات النظام الأساسية والبنية التقنية التي يتم الربط من خلالها</p>
                </div>
                <span className="pp-head-icon"><FileText size={22} /></span>
              </div>

              <div className="pp-spec glass-panel">
                <div className="pp-spec-row">
                  <div className="pp-spec-key"><Building2 size={18} /><span>اسم النظام</span></div>
                  <div className="pp-spec-val">نزلكم — نظام إدارة الفنادق والشقق المخدومة</div>
                </div>
                <div className="pp-spec-row">
                  <div className="pp-spec-key"><Layers size={18} /><span>نوع النظام</span></div>
                  <div className="pp-spec-val">نظام إدارة منشآت ضيافة (PMS) متكامل مع نقاط بيع (POS) ونظام محاسبي</div>
                </div>
                <div className="pp-spec-row">
                  <div className="pp-spec-key"><Cloud size={18} /><span>بيئة التشغيل</span></div>
                  <div className="pp-spec-val">نظام سحابي 100% يعمل عبر المتصفح والجوال دون الحاجة إلى تثبيت</div>
                </div>
                <div className="pp-spec-row">
                  <div className="pp-spec-key"><Plug size={18} /><span>آلية الربط التقني</span></div>
                  <div className="pp-spec-val">واجهات برمجية (REST API) مؤمّنة بمفاتيح تشفير مع تبادل بيانات لحظي</div>
                </div>
                <div className="pp-spec-row">
                  <div className="pp-spec-key"><ShieldCheck size={18} /><span>حالة الامتثال</span></div>
                  <div className="pp-spec-val">
                    <span className="pp-tag">ZATCA — المرحلتان</span>
                    <span className="pp-tag">منصة شموس</span>
                    <span className="pp-tag">الرصد السياحي NTMP</span>
                  </div>
                </div>
                <div className="pp-spec-row">
                  <div className="pp-spec-key"><Languages size={18} /><span>اللغات والدعم</span></div>
                  <div className="pp-spec-val">واجهة عربية وإنجليزية كاملة مع دعم فني على مدار الساعة 24/7</div>
                </div>
              </div>
            </motion.div>

            {/* 02 — Work Plan & Audience */}
            <motion.div variants={fadeUpVariant} className="pp-block">
              <div className="pp-head">
                <span className="pp-head-num">02</span>
                <div className="pp-head-text">
                  <h3>خطة العمل والفئة المستهدفة من الربط بالخدمة</h3>
                  <p>مراحل تنفيذ الربط مع الجهات، والفئات المستفيدة من الخدمة</p>
                </div>
                <span className="pp-head-icon"><Target size={22} /></span>
              </div>

              <h4 className="pp-sub-title"><ClipboardList size={18} /> خطة العمل</h4>
              <div className="pp-roadmap">
                <div className="pp-roadmap-line" aria-hidden="true"></div>
                {[
                  { n: '1', t: 'الدراسة وتحديد المتطلبات', d: 'حصر متطلبات الجهة وتحديد البيانات المطلوب تبادلها والصلاحيات.' },
                  { n: '2', t: 'التهيئة وإصدار المفاتيح', d: 'تجهيز بيئة الاختبار وإصدار مفاتيح الربط وتوثيق واجهات التكامل.' },
                  { n: '3', t: 'التطوير والاختبار', d: 'تنفيذ الربط واختباره تجريبياً للتأكد من دقة وصحة البيانات المرسلة.' },
                  { n: '4', t: 'الإطلاق الفعلي', d: 'تفعيل الربط على البيئة التشغيلية بمزامنة آلية دون تدخل بشري.' },
                  { n: '5', t: 'التدريب والدعم', d: 'تدريب فريق المنشأة ومتابعة الأداء ومعالجة الملاحظات باستمرار.' },
                ].map((s) => (
                  <div className="pp-stage" key={s.n}>
                    <span className="pp-stage-num">{s.n}</span>
                    <div className="pp-stage-card">
                      <h5>{s.t}</h5>
                      <p>{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pp-note">
                <span className="pp-note-icon"><Rocket size={18} /></span>
                <p>مدة تنفيذ الربط تُحدد حسب حجم المنشأة وعدد الوحدات.</p>
              </div>

              <h4 className="pp-sub-title pp-sub-title-gap"><Users size={18} /> الفئة المستهدفة من الربط</h4>
              <div className="pp-audience-grid">
                <div className="pp-aud-card">
                  <span className="pp-aud-icon"><Building2 size={22} /></span>
                  <h5>الفنادق والمنتجعات</h5>
                  <p>المنشآت الفندقية بمختلف تصنيفاتها الراغبة في أتمتة العمليات والامتثال النظامي.</p>
                </div>
                <div className="pp-aud-card">
                  <span className="pp-aud-icon"><Home size={22} /></span>
                  <h5>الشقق المخدومة والمفروشة</h5>
                  <p>ملاك ومشغلو الوحدات السكنية المفروشة الذين يحتاجون ربطاً مباشراً مع الجهات.</p>
                </div>
                <div className="pp-aud-card">
                  <span className="pp-aud-icon"><BedDouble size={22} /></span>
                  <h5>مجمعات الإسكان والاستراحات</h5>
                  <p>وحدات الضيافة الموسمية التي تتطلب إدارة إشغال وتسعير مرن على مدار العام.</p>
                </div>
                <div className="pp-aud-card">
                  <span className="pp-aud-icon"><Landmark size={22} /></span>
                  <h5>الجهات الحكومية والرقابية</h5>
                  <p>الجهات المستفيدة من دقة وفورية البيانات التشغيلية والأمنية والضريبية للمنشآت.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Market Size & Growth Section */}
      <section className="features-section-bg" id="market-size">
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
              حجم الشركة <span className="text-primary">في السوق</span>
            </motion.h2>
            <motion.p variants={fadeUpVariant} className="section-subtitle">
              مؤشرات حضورنا في السوق السعودي، وعدد العملاء والعمليات الحالي والمتوقع بعد الربط بالخدمة.
            </motion.p>

            {/* Market presence */}
            <motion.div variants={fadeUpVariant} className="ms-presence">
              <div className="ms-presence-item">
                <span className="ms-presence-icon"><Building2 size={22} /></span>
                <strong>+500</strong>
                <span className="ms-presence-label">منشأة مشغّلة على النظام</span>
              </div>
              <div className="ms-presence-item">
                <span className="ms-presence-icon"><PieChart size={22} /></span>
                <strong>13</strong>
                <span className="ms-presence-label">منطقة إدارية مغطاة بالمملكة</span>
              </div>
              <div className="ms-presence-item">
                <span className="ms-presence-icon"><ShieldCheck size={22} /></span>
                <strong>100%</strong>
                <span className="ms-presence-label">امتثال للأنظمة الحكومية</span>
              </div>
            </motion.div>

            {/* Growth comparison */}
            <div className="ms-grid">
              {/* Clients */}
              <motion.div variants={fadeUpVariant} className="ms-card">
                <div className="ms-card-head">
                  <span className="ms-card-icon"><Users size={22} /></span>
                  <div>
                    <h3>عدد العملاء</h3>
                    <p>الحالي والمتوقع بعد الربط بالخدمة</p>
                  </div>
                </div>

                <div className="ms-compare">
                  <div className="ms-metric">
                    <span className="ms-metric-label">العدد الحالي</span>
                    <strong className="ms-metric-value">800 – 1000</strong>
                    <span className="ms-metric-unit">عميل</span>
                  </div>
                  <span className="ms-arrow"><ArrowLeft size={22} /></span>
                  <div className="ms-metric ms-metric-future">
                    <span className="ms-metric-label">المتوقع بعد الربط</span>
                    <strong className="ms-metric-value">1500 – 2000</strong>
                    <span className="ms-metric-unit">عميل</span>
                  </div>
                </div>

                <div className="ms-bar">
                  <div className="ms-bar-fill" style={{ width: '55%' }}></div>
                </div>
                <div className="ms-growth">
                  <TrendingUp size={16} />
                  <span>نمو متوقع يقارب <strong>%100</strong> في قاعدة العملاء</span>
                </div>
              </motion.div>

              {/* Operations */}
              <motion.div variants={fadeUpVariant} className="ms-card">
                <div className="ms-card-head">
                  <span className="ms-card-icon"><Activity size={22} /></span>
                  <div>
                    <h3>عدد العمليات</h3>
                    <p>الحالي والمتوقع بعد الربط بالخدمة</p>
                  </div>
                </div>

                <div className="ms-compare">
                  <div className="ms-metric">
                    <span className="ms-metric-label">العدد الحالي</span>
                    <strong className="ms-metric-value">+100</strong>
                    <span className="ms-metric-unit">ألف عملية شهرياً</span>
                  </div>
                  <span className="ms-arrow"><ArrowLeft size={22} /></span>
                  <div className="ms-metric ms-metric-future">
                    <span className="ms-metric-label">المتوقع بعد الربط</span>
                    <strong className="ms-metric-value">+250</strong>
                    <span className="ms-metric-unit">ألف عملية شهرياً</span>
                  </div>
                </div>

                <div className="ms-bar">
                  <div className="ms-bar-fill" style={{ width: '40%' }}></div>
                </div>
                <div className="ms-growth">
                  <Repeat size={16} />
                  <span>مزامنة آلية لحظية لكل عملية دون تدخل بشري</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer relative-content">
        <div className="container">
          <motion.div
            className="footer-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-brand-top">
                <div className="footer-logo">
                  <img src="/nozulkum-logo.png" alt="نزلكم لإدارة الفنادق" className="footer-logo-img" />
                </div>
                <p className="footer-about">
                  نفخر بتقديم نظام إدارة فنادق يجمع بين السهولة والشمولية. إدارة فنادقنا تأتي مع
                  مجموعة من المميزات المتكاملة لتلبية احتياجاتكم.
                </p>
              </div>
              <div className="footer-badges">
                <span className="footer-badges-label">متوافق مع</span>
                <div className="footer-badges-list">
                  <span className="footer-badge"><img src="/shmous-logo.png" alt="شموس" /></span>
                  <span className="footer-badge"><img src="/fatoora-logo.png" alt="فاتورة Fatoora - الفوترة الإلكترونية" /></span>
                  <span className="footer-badge"><img src="/ntmp-logo.png" alt="منصة الرصد السياحي" /></span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="footer-contact">
              <h4 className="footer-heading">تواصل معنا</h4>
              <a href="tel:+966559070429" className="footer-contact-row">
                <span className="footer-contact-icon"><Phone size={18} /></span>
                <span className="footer-contact-value">+966559070429</span>
              </a>
              <a href="mailto:info@nozulkum.sa" className="footer-contact-row">
                <span className="footer-contact-icon"><Mail size={18} /></span>
                <span className="footer-contact-value">info@nozulkum.sa</span>
              </a>
              <a href="https://www.nozulkum.sa" target="_blank" rel="noreferrer" className="footer-contact-row">
                <span className="footer-contact-icon"><Globe size={18} /></span>
                <span className="footer-contact-value">www.nozulkum.sa</span>
              </a>
            </div>

            {/* Visual */}
            <div className="footer-visual">
              <div className="footer-circle">
                <img src="/hotel_exterior.png" alt="منشآت الضيافة" />
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;
