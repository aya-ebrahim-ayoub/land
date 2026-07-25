import React from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  BedDouble,
  CalendarDays,
  ShoppingCart,
  Wallet,
  Users,
  Briefcase,
  LineChart,
  Archive,
  Bell,
  Settings,
  ShieldCheck,
  Check
} from 'lucide-react';
import './SystemPages.css';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const PAGES = [
  {
    id: 'dashboard',
    icon: LayoutDashboard,
    name: 'لوحة التحكم',
    group: 'الرئيسية',
    image: '/screens/dashboard.png',
    image2: '/screens/dashboard-2.png',
    tagline: 'نبض المنشأة في شاشة واحدة',
    desc: 'أول ما تدخل النظام تشوف صورة كاملة عن وضع منشأتك لحظياً: الإشغال، الإيرادات، الوصول والمغادرة، وحالة الربط.',
    features: [
      'مؤشرات لحظية للإشغال والإيراد اليومي',
      'متابعة الربط الحكومي (ZATCA · شموس · الرصد)',
      'مركز إشعارات فوري بكل حركة داخل النظام'
    ]
  },
  {
    id: 'units',
    icon: BedDouble,
    name: 'الوحدات السكنية',
    group: 'إدارة الحجوزات',
    image: '/screens/units.png',
    image2: '/screens/units-2.png',
    tagline: 'خريطة حيّة لكل غرفة ووحدة',
    desc: 'شاشة إدارة الوحدات تعطيك تحكماً كاملاً في كل غرفة وشقة داخل المنشأة، مع حالة تشغيلية ونظافة محدّثة لحظة بلحظة.',
    features: [
      'عدادات فورية لحالة كل الغرف (فارغ، مشغول، نظافة)',
      'إضافة وتعديل جماعي للوحدات السكنية (Bulk Edit)',
      'عرض شبكي وجدولي مع تصدير سريع للبيانات'
    ]
  },
  {
    id: 'bookings',
    icon: CalendarDays,
    name: 'الحجوزات',
    group: 'إدارة الحجوزات',
    image: '/screens/bookings.png',
    tagline: 'من الحجز حتى المغادرة بدون ورق',
    desc: 'إدارة كاملة لدورة حياة الحجز: إنشاء، تأكيد، تسكين، تمديد، ومغادرة — مع سجل مالي مرتبط بكل حجز.',
    features: [
      'حجز فردي أو جماعي بأسعار يومية وشهرية مرنة',
      'تصنيف واضح وجدول تفصيلي لحالة كل حجز',
      'طباعة العقود والفواتير الإلكترونية مباشرة'
    ]
  },
  {
    id: 'orders',
    icon: ShoppingCart,
    name: 'الطلبات',
    group: 'إدارة الحجوزات',
    image: '/screens/orders.png',
    tagline: 'خدمات النزيل مربوطة بفاتورته',
    desc: 'كل خدمة إضافية — مغسلة، مطعم، خدمة غرف — تتسجّل كطلب مرتبط برقم الحجز والشقة وتترحّل تلقائياً لفاتورة النزيل.',
    features: [
      'إضافة طلبات (مغسلة، مطعم) وربطها بالغرفة',
      'ترحيل مباشر إلى الفاتورة الموحدة للنزيل',
      'احتساب تلقائي للضريبة والمجموع الكلي'
    ]
  },
  {
    id: 'finance',
    icon: Wallet,
    name: 'الإدارة المالية',
    group: 'المالية',
    image: '/screens/finance.png',
    tagline: 'سندات وفواتير متوافقة مع ZATCA',
    desc: 'مركز مالي واحد يجمع سندات الاستلام وسندات الصرف والفواتير، مع دعم كامل لطرق الدفع والعملات المتعددة.',
    features: [
      'سندات استلام وصرف متوافقة مع ZATCA',
      'تعدد طرق الدفع ودعم العملات المختلفة',
      'ارتباط مباشر بالصناديق والشيفتات'
    ]
  },
  {
    id: 'guests',
    icon: Users,
    name: 'الضيوف',
    group: 'إدارة الضيوف',
    image: '/screens/guests.png',
    tagline: 'قاعدة بيانات نزلاء متكاملة',
    desc: 'سجل موحّد لكل نزيل بهويته وجنسيته وتاريخ إقاماته، جاهز للإرسال الآلي لمنصة شموس لحظة التسكين.',
    features: [
      'تسجيل بيانات الهوية بدقة وإرسالها لشموس',
      'سجل تفصيلي للإقامات وتفضيلات الضيف (CRM)',
      'تصنيف النزلاء (مواطن، مقيم، زائر)'
    ]
  },
  {
    id: 'agencies',
    icon: Briefcase,
    name: 'شركات الحجز',
    group: 'إدارة الضيوف',
    image: '/screens/agencies.png',
    tagline: 'وكالات وشركات بأسعار تعاقدية',
    desc: 'إدارة وكالات الحجز والشركات المتعاقدة مع منشأتك، وربط حجوزاتها بكشف حساب مستقل.',
    features: [
      'إدارة أسعار تعاقدية وعمولات خاصة بكل وكالة',
      'كشف حساب مستقل لكل شركة أو وكالة',
      'ربط الحجوزات مباشرة بالجهة المتعاقدة'
    ]
  },
  {
    id: 'reports',
    icon: LineChart,
    name: 'التقارير',
    group: 'أخرى',
    image: '/screens/reports.png',
    tagline: 'مكتبة تقارير مالية وتشغيلية',
    desc: 'مكتبة تقارير منظّمة بالبحث والتصنيف، تعطيك أرقاماً دقيقة تبني عليها قراراتك التشغيلية والمالية.',
    features: [
      'أكثر من 50 تقرير مالي وتشغيلي ببحث فوري',
      'تصدير مباشر لتقارير منصة بلدي وغيرها',
      'تصفية دقيقة وحفظ التقارير المفضلة'
    ]
  },
  {
    id: 'archive',
    icon: Archive,
    name: 'الأرشيف',
    group: 'أخرى',
    image: '/screens/archive.png',
    tagline: 'سجل تدقيق لا يضيع منه شيء',
    desc: 'كل إجراء يحدث في النظام يُسجَّل في الأرشيف، فتعرف من فعل ماذا ومتى بدقة كاملة.',
    features: [
      'سجل تدقيق كامل لكل حركة أو تعديل بالنظام',
      'أرشيف مالي وتشغيلي منفصل لسهولة المراجعة',
      'تتبع زمني دقيق لكل إجراء باسم الموظف'
    ]
  },
  {
    id: 'notifications',
    icon: Bell,
    name: 'الإشعارات',
    group: 'أخرى',
    image: '/screens/notifications.png',
    tagline: 'تنبيهات لحظية للفريق كله',
    desc: 'مركز إشعارات يبقيك على اطلاع بكل حركة تسكين أو مغادرة، ويتيح لك مخاطبة فريق العمل داخل النظام.',
    features: [
      'تنبيهات فورية لكل حركة تسجيل أو مغادرة',
      'إمكانية التواصل المباشر مع فريق العمل',
      'ربط كل إشعار برقم الحجز والوحدة'
    ]
  },
  {
    id: 'settings',
    icon: Settings,
    name: 'الإعدادات',
    group: 'أخرى',
    image: '/screens/settings.png',
    image2: '/screens/settings-2.png',
    tagline: 'أكثر من 12 شاشة تحكّم',
    desc: 'مركز إعدادات شامل يجعل النظام يتشكّل حسب طبيعة منشأتك: الأسعار، الضرائب، الصلاحيات، الخدمات، وغيرها.',
    features: [
      'تحكم كامل ببيانات الفندق والأسعار والمواسم',
      'إدارة دقيقة لمستخدمي النظام وصلاحياتهم',
      'إعدادات الضرائب والخدمات ونقاط البيع'
    ]
  }
];

function PageShot({ page }) {
  const [failed, setFailed] = React.useState(false);
  const [failed2, setFailed2] = React.useState(false);
  const Icon = page.icon;

  return (
    <>
      <div className="sp-browser">
        <div className="sp-browser-bar">
          <span className="sp-dot sp-dot-red"></span>
          <span className="sp-dot sp-dot-yellow"></span>
          <span className="sp-dot sp-dot-green"></span>
          <div className="sp-url">app.nozulkum.sa</div>
        </div>
        <div className="sp-browser-body">
          {failed ? (
            <div className="sp-shot-placeholder">
              <Icon size={40} />
              <span>{page.name}</span>
              <small>{page.image}</small>
            </div>
          ) : (
            <img
              src={page.image}
              alt={`شاشة ${page.name} في نظام نزلكم`}
              className="sp-shot"
              onError={() => setFailed(true)}
            />
          )}
        </div>
      </div>

      {/* Secondary screenshot floating over the main one */}
      {page.image2 && !failed2 && (
        <motion.div
          className="sp-browser sp-browser-float"
          initial={{ opacity: 0, y: 24, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="sp-browser-bar">
            <span className="sp-dot sp-dot-red"></span>
            <span className="sp-dot sp-dot-yellow"></span>
            <span className="sp-dot sp-dot-green"></span>
          </div>
          <div className="sp-browser-body">
            <img
              src={page.image2}
              alt={`عرض إضافي لشاشة ${page.name}`}
              className="sp-shot"
              onError={() => setFailed2(true)}
            />
          </div>
        </motion.div>
      )}
    </>
  );
}

function SystemPages() {
  return (
    <section className="features-section-bg system-pages-section" id="system-pages">
      <div className="glow-blob glow-blob-1"></div>
      <div className="glow-blob glow-blob-2"></div>

      <div className="container relative-content section-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUpVariant} className="section-title">
            جولة داخل <span className="text-primary">صفحات النظام</span>
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="section-subtitle">
            نظام نزلكم مبني على شاشات مترابطة تغطي دورة العمل بالكامل — من الوحدة السكنية وحتى الفاتورة
            الإلكترونية والتقرير النهائي.
          </motion.p>

          <motion.div variants={fadeUpVariant} className="sp-stats-strip">
            <div className="sp-stat">
              <div className="sp-stat-icon"><LayoutDashboard size={22} /></div>
              <div className="sp-stat-body">
                <span className="sp-stat-num">+11</span>
                <span className="sp-stat-label">شاشة رئيسية</span>
              </div>
            </div>
            <div className="sp-stat">
              <div className="sp-stat-icon"><LineChart size={22} /></div>
              <div className="sp-stat-body">
                <span className="sp-stat-num">+30</span>
                <span className="sp-stat-label">تقرير تفصيلي</span>
              </div>
            </div>
            <div className="sp-stat">
              <div className="sp-stat-icon"><Settings size={22} /></div>
              <div className="sp-stat-body">
                <span className="sp-stat-num">+12</span>
                <span className="sp-stat-label">شاشة إعدادات</span>
              </div>
            </div>
            <div className="sp-stat">
              <div className="sp-stat-icon"><ShieldCheck size={22} /></div>
              <div className="sp-stat-body">
                <span className="sp-stat-num">+3</span>
                <span className="sp-stat-label">تكاملات حكومية</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Zig-Zag rows */}
      <div className="container relative-content sp-rows">
        {PAGES.map((page, index) => {
          const Icon = page.icon;
          const reversed = index % 2 === 1;
          return (
            <motion.article
              key={page.id}
              className={`sp-row ${reversed ? 'is-reversed' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="sp-row-text">
                <h3 className="sp-row-title">
                  <span className="sp-row-icon"><Icon size={18} /></span>
                  {page.name}
                </h3>
                <p className="sp-row-tagline">{page.tagline}</p>
                <p className="sp-row-desc">{page.desc}</p>
                <ul className="sp-row-list">
                  {page.features.map((f, i) => (
                    <li key={i}>
                      <Check size={16} className="sp-check" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sp-row-visual">
                <PageShot page={page} />
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default SystemPages;
