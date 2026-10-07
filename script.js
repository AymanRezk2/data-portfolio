document.addEventListener('DOMContentLoaded', () => {
    // ------------------ Preloader ------------------
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.classList.add('hidden');
        });
    }

    // =====================================================
    // TRANSLATIONS (EN / AR)
    // =====================================================
    const translations = {
        en: {
            "nav.home": "Home",
            "nav.about": "About",
            "nav.services": "Services",
            "nav.projects": "Projects",
            "nav.experience": "Experience",
            "nav.contact": "Contact",

            "hero.title": "Hi, I'm Ayman Rezk.",
            "hero.subtitle": 'I turn messy business data into <span class="highlight-cyan">tools that actually work</span> — so every decision you make is backed by <span class="highlight-cyan">real data, not guesses</span>',
            "hero.description": 'Data Analyst specializing in <strong>Power BI dashboards</strong> and <strong>custom business tools</strong> — every solution is tailored to your business, not a generic template.',
            "hero.ctaPrimary": "See My Dashboards",
            "hero.ctaSecondary": "Get In Touch",

            "featured.title": "Featured Work",
            "featured.badge": "🏆 Top 1 Project — DEPI",
            "featured.heading": "NeuroWheel — Brain-Controlled Wheelchair",
            "featured.description": 'Built a Brain-Computer Interface (BCI) system using <strong>EEG signals + Deep Learning</strong> that achieved <strong>90% accuracy</strong>. Ranked <strong>#1 in company track</strong> and received a monetary award.',
            "featured.cta": "View on GitHub",

            "about.title": "About Me",
            "about.p1": "I'm Ayman Rezk, a data analyst who transforms messy, scattered data into actionable insights. I focus on uncovering hidden opportunities, clarifying risks, and delivering insights that truly impact business decisions.",
            "about.p2": "I've worked across end-to-end analytics: cleaning data, exploring patterns, building dashboards, and creating clear stories that non-technical stakeholders can trust and act upon.",
            "about.p3": "My work isn't just about numbers — it's about honesty, accuracy, and delivering value I'm proud of before it reaches the client.",

            "stats.years": "Years in Data Analytics",
            "stats.clients": "Happy Clients",
            "stats.projects": "Dashboards & Analyses",
            "stats.students": "Students Mentored",
            "stats.automation": "Manual Work Reduced",

            "services.title": "Services I Offer",
            "services.s1.title": "Power BI & Excel Dashboards",
            "services.s1.desc": 'Interactive dashboards that turn your raw data into clear KPIs — built in <strong>Power BI</strong> or <strong>Excel</strong>, designed around <strong>your business questions</strong>.<br><br><span class="service-highlight">Delivered in 3–7 days</span>',
            "services.s2.title": "End-to-End Data Analysis",
            "services.s2.desc": 'Full analytics pipeline — from <strong>data cleaning</strong>, through <strong>exploratory analysis (EDA)</strong>, to a final <strong>report with actionable recommendations</strong>.<br><br><span class="service-highlight">Clean data + insights + next steps</span>',
            "services.s3.title": "Google Sheets & Apps Script",
            "services.s3.desc": 'Custom <strong>business tools built inside Google Workspace</strong> — automated reports, data entry forms, approval workflows, notifications, and any internal tool your team needs.<br><br><span class="service-highlight">Built around how your team works</span>',

            "process.title": "How I Work",
            "process.s1.title": "Discovery Call",
            "process.s1.desc": "Understand your business, your data, and the decisions you actually need to make.",
            "process.s2.title": "Data Audit",
            "process.s2.desc": "Clean, validate, and structure your data — or tell you honestly if it's not ready yet.",
            "process.s3.title": "Analysis & Build",
            "process.s3.desc": "Build dashboards, models, or automation with clear checkpoints at every stage.",
            "process.s4.title": "Delivery & Handoff",
            "process.s4.desc": "You get the deliverable + a walkthrough session + documentation you can keep.",

            "skills.title": "My Skills",
            "skills.cat1": "Programming Languages",
            "skills.cat2": "Libraries & Frameworks",
            "skills.cat3": "Tools & Platforms",
            "skills.cat4": "Communication & Business Skills",
            "skills.presentation": "Presentation & Storytelling",
            "skills.problem": "Problem Solving",
            "skills.opportunity": "Opportunity Analysis",
            "skills.collab": "Collaboration & Teamwork",
            "skills.decision": "Decision Support",

            "certs.title": "Certifications & Awards",
            "certs.view": 'View Certificate ',
            "certs.c1.title": "Top 1 Project — DEPI",
            "certs.c1.desc": "Microsoft AI & Data Science Track",
            "certs.c2.title": "Data — Google",
            "certs.c2.desc": "Foundations: Data, Data, Everywhere",
            "certs.c3.title": "Data Analysis — NTI",
            "certs.c3.desc": "National Telecommunication Institute",
            "certs.c4.title": "Data Science — MAIM",
            "certs.c4.desc": "Graduated 70/70",
            "certs.c5.title": "SQL Basic",
            "certs.c5.desc": "HackerRank Certification",
            "certs.c6.title": "Introduction to SQL",
            "certs.c6.desc": "DataCamp / Online Course",
            "certs.c7.title": "Freelancing from Scratch",
            "certs.c7.desc": "Freelancing Basics",
            "certs.c8.title": "Freelancing Intermediate",
            "certs.c8.desc": "Freelance Business Model",
            "certs.c9.title": "ITIDA Gigs",
            "certs.c9.desc": "3-month freelance training program",

            "learning.title": "What I'm Learning",
            "learning.l1.title": "Advanced Data Storytelling",
            "learning.l1.desc": 'Sharpening how I frame findings for leadership — using visuals, context, and narrative structure to move from "what happened" to "what we should do next".',
            "learning.l2.title": "SQL & Data Warehousing",
            "learning.l2.desc": "Deepening expertise in writing efficient SQL, working with relational models, and connecting analytical workflows to production-grade data sources.",
            "learning.l3.title": "Advanced Apps Script",
            "learning.l3.desc": "Building more complex Google Workspace automations — connecting Sheets, Gmail, Calendar, Drive, and external APIs into seamless workflows.",

            "exp.title": "Experience & Education",
            "exp.e1.title": "Freelance Data Analyst",
            "exp.e1.desc": '• Delivered <strong>25+ data analysis projects</strong> for small businesses using Python, Power BI, and Excel.<br>• Built <strong>interactive Power BI dashboards</strong> to track KPIs.<br>• <strong>Automated data reporting processes</strong>, reducing manual effort by up to <strong>70%</strong>.',
            "exp.e2.title": "Freelance Data Analysis Coach",
            "exp.e2.desc": 'Mentored a cohort of <strong>66 students</strong> on starting and growing in the data analysis freelancing industry — covering portfolio building, market-ready skills, and client communication.',
            "exp.e3.title": "Payroll Analyst Intern",
            "exp.e3.desc": '• Gained understanding of Payroll fundamentals and key KPIs.<br>• <strong>Automated an Excel-based payroll review process</strong>, reducing processing time from <strong>15 min → 2 min (~87%)</strong>.',
            "exp.e4.title": "Data Analyst Intern",
            "exp.e4.desc": '• Hands-on Data Analysis training focused on real-world applications.<br>• Worked extensively with <strong>Excel, SQL, and Power BI</strong> to build dashboards and extract actionable insights.',
            "exp.e5.title": "Microsoft AI & Data Science Trainee",
            "exp.e5.desc": '• Built a Brain-Computer Interface (BCI) project "NeuroWheel" using EEG signals + Deep Learning with <strong>90% accuracy</strong>.<br>• <strong>Ranked Top 1 project</strong> and received a monetary award.',
            "exp.e6.title": "B.Sc. in Data Science",
            "exp.e6.desc": "Specialized in data science, statistics, and machine learning — combining theory with practical analytics projects.",
            "exp.resume": "Download Resume",

            "proj.title": "Power BI Dashboards",
            "proj.p1.title": "Project Health Scorecard",
            "proj.p1.desc": "Built a Power BI dashboard to evaluate project health in Nigeria, tracking status, managers, budgets, and expenses.",
            "proj.p2.title": "Superstore Performance Excel",
            "proj.p2.desc": "Built an Excel dashboard to analyze Superstore performance across sales, profit, geography, and customer segments.",
            "proj.p3.title": "Supermarket Sales Dashboard",
            "proj.p3.desc": "Built a Power BI dashboard analyzing 3 months of sales across 3 branches, tracking transactions, customer segments, and time patterns.",
            "proj.p4.title": "Perfume Sales Dashboard",
            "proj.p4.desc": "Built a Power BI dashboard analyzing pricing, categories, brands, and discount impact.",
            "proj.p5.title": "Sales Overview Dashboard",
            "proj.p5.desc": "Designed an executive sales overview consolidating KPIs, regional performance, and month-over-month trends.",
            "proj.p6.title": "Financial Sales Overview",
            "proj.p6.desc": "Created a financial performance dashboard covering sales, profit, customer segments, and yearly trends.",

            "github.title": "Featured Coding Projects",

            "testi.title": "Client Testimonials",

            "testi.t1.original": '"ألف شكر على سرعة تحضير المشروع ودقة العمل، مبدع جدًا وعمله احترافي وفاهم جدًا. خطير وفنان، تستاهل ألف نجمة."',
            "testi.t1.translation": '"Thanks for the fast delivery and precise work — professional and talented. You deserve a thousand stars."',

            "testi.t2.original": '"أيمن ما شاء الله عليك، قدرت تحول البيانات إلى لوحة واضحة واحترافية. هذا هو الشغل اللي نعتمد عليه. استمر يا مبدع."',
            "testi.t2.translation": '"Ayman, you turned the data into a clear, professional dashboard — exactly what we rely on. Keep it up."',

            "testi.t3.original": '"ما شاء الله سرعة وفهم، وكل حاجة كانت مثالية وفوقها شكرا مرة."',
            "testi.t3.translation": '"Fast and understanding — everything was perfect, and then some. Thanks again."',

            "testi.t4.original": '"عمل احترافي وفي وقت قياسي."',
            "testi.t4.translation": '"Professional work delivered in record time."',

            "testi.t5.original": '"أستاذ أيمن أنت إنسان خلوق ومهتم بعملك. مرن في التعديلات ويسمع لطلبات العميل ولا يمل، كما أنه يقترح أفكار مفيدة."',
            "testi.t5.translation": '"A respectful professional who cares about his work — flexible with revisions, listens to client requests, and suggests useful ideas."',

            "testi.t6.original": '"إنسان رائع وسريع بالتعامل، وإن شاء الله هذه ليست آخر مرة أتعامل معه. أنصح الجميع يجرب وماراح يندم إن شاء الله."',
            "testi.t6.translation": '"A great and fast professional — this won\'t be our last time working together. I recommend everyone tries."',

            "contact.title": "Let's Work Together",
            "contact.heading": "Ready to Turn Your Data into Decisions?",
            "contact.desc": 'Have a dataset, a reporting challenge, or a business question you want to explore? Share the context, and I\'ll help you uncover the story behind the numbers — <strong>tailored to your business</strong>.',
            "contact.whatsapp": "Chat on WhatsApp",
            "contact.email": "Send Email",
            "contact.promise": "✓ Free 15-min consultation · ✓ Response within 2 hours",
            "contact.emailLabel": "Email:",
            "contact.phoneLabel": "Phone:",
            "contact.locationLabel": "Location:",
            "contact.location": "Alexandria, Egypt",

            "whatsapp.tooltip": "Chat with me",

            "footer.tagline": "Turning business data into tools that work.",
            "footer.quickLinks": "Quick Links",
            "footer.connect": "Connect",
            "footer.rights": "All rights reserved."
        },

        ar: {
            "nav.home": "الرئيسية",
            "nav.about": "نبذة",
            "nav.services": "الخدمات",
            "nav.projects": "المشاريع",
            "nav.experience": "الخبرات",
            "nav.contact": "تواصل",

            "hero.title": "أهلاً، أنا أيمن رزق.",
            "hero.subtitle": 'أحوّل بياناتك الفوضوية إلى <span class="highlight-cyan">أدوات شغّالة فعلاً</span> — عشان كل قرار تتخذه يكون مبني على <span class="highlight-cyan">بيانات حقيقية، مش تخمين</span>',
            "hero.description": 'محلل بيانات متخصص في <strong>لوحات Power BI</strong> و <strong>بناء أدوات أعمال مخصصة</strong> — كل حل مصمم خصيصاً لعملك، مش قالب جاهز.',
            "hero.ctaPrimary": "شاهد لوحاتي",
            "hero.ctaSecondary": "تواصل معي",

            "featured.title": "عمل مميز",
            "featured.badge": "🏆 المشروع الأول — DEPI",
            "featured.heading": "NeuroWheel — كرسي متحرك بالتحكم الذهني",
            "featured.description": 'بناء نظام واجهة دماغ-حاسوب (BCI) باستخدام <strong>إشارات EEG + التعلم العميق</strong> بدقة <strong>90%</strong>. حصل على المركز <strong>#1</strong> في مسار الشركة وحصل على جائزة مالية.',
            "featured.cta": "شاهد على GitHub",

            "about.title": "نبذة عني",
            "about.p1": "أنا أيمن رزق، محلل بيانات أحوّل البيانات الفوضوية إلى رؤى قابلة للتنفيذ. أركّز على كشف الفرص المخفية وتوضيح المخاطر وتقديم رؤى تؤثر فعلياً على قرارات الأعمال.",
            "about.p2": "عملت عبر تحليلات شاملة: تنظيف البيانات، استكشاف الأنماط، بناء اللوحات، وإنشاء قصص واضحة يمكن لأصحاب القرار الوثوق بها والتصرف بناءً عليها.",
            "about.p3": "عملي ليس مجرد أرقام — بل أمانة ودقة وتقديم قيمة أفتخر بها قبل أن تصل للعميل.",

            "stats.years": "سنوات في تحليل البيانات",
            "stats.clients": "عميل سعيد",
            "stats.projects": "لوحة وتحليل",
            "stats.students": "طالب تم تدريبهم",
            "stats.automation": "تقليل العمل اليدوي",

            "services.title": "الخدمات التي أقدمها",
            "services.s1.title": "لوحات Power BI و Excel",
            "services.s1.desc": 'لوحات تفاعلية تحوّل بياناتك الخام إلى مؤشرات أداء واضحة — مبنية في <strong>Power BI</strong> أو <strong>Excel</strong>، مصممة حول <strong>أسئلة عملك</strong>.<br><br><span class="service-highlight">تُسلَّم في 3–7 أيام</span>',
            "services.s2.title": "تحليل بيانات شامل",
            "services.s2.desc": '   خطوات تحليل بيانات كاملة — من <strong>تنظيف البيانات</strong>، عبر <strong>التحليل الاستكشافي (EDA)</strong>، إلى <strong>تقرير نهائي بتوصيات قابلة للتنفيذ</strong>.<br><br><span class="service-highlight">بيانات نظيفة + رؤى + خطوات تالية</span>',
            "services.s3.title": "Google Sheets و Apps Script",
            "services.s3.desc": 'أدوات أعمال <strong>مخصصة داخل Google Workspace</strong> — تقارير تلقائية، نماذج إدخال بيانات، سير عمل موافقات، إشعارات، وأي أداة داخلية يحتاجها فريقك.<br><br><span class="service-highlight">مبنية على طريقة عمل فريقك</span>',

            "process.title": "كيف أعمل",
            "process.s1.title": "مكالمة استكشافية",
            "process.s1.desc": "فهم عملك وبياناتك والقرارات التي تحتاج فعلاً لاتخاذها.",
            "process.s2.title": "تدقيق البيانات",
            "process.s2.desc": "تنظيف والتحقق من صحة وهيكلة بياناتك — أو إخبارك بصدق إن لم تكن جاهزة.",
            "process.s3.title": "التحليل والبناء",
            "process.s3.desc": "بناء اللوحات أو النماذج أو الأتمتة مع نقاط مراجعة واضحة في كل مرحلة.",
            "process.s4.title": " التسليم النهائي",
            "process.s4.desc": "تحصل على المخرجات + جلسة شرح + وثائق تحتفظ بها.",

            "skills.title": "مهاراتي",
            "skills.cat1": "لغات البرمجة",
            "skills.cat2": "المكتبات والأطر",
            "skills.cat3": "الأدوات والمنصات",
            "skills.cat4": "مهارات التواصل والأعمال",
            "skills.presentation": "العرض والسرد القصصي",
            "skills.problem": "حل المشكلات",
            "skills.opportunity": "تحليل الفرص",
            "skills.collab": "التعاون والعمل الجماعي",
            "skills.decision": "دعم القرار",

            "certs.title": "الشهادات والجوائز",
            "certs.view": "اعرض الشهادة",  
            "certs.c1.title": "المشروع الأول — DEPI",
            "certs.c1.desc": "مسار Microsoft AI & Data Science",
            "certs.c2.title": "البيانات — Google",
            "certs.c2.desc": "الأساسيات: البيانات، البيانات، في كل مكان",
            "certs.c3.title": "تحليل البيانات — NTI",
            "certs.c3.desc": "المعهد القومي للاتصالات",
            "certs.c4.title": "علوم البيانات — MAIM",
            "certs.c4.desc": "تخرج بتقدير 70/70",
            "certs.c5.title": "SQL الأساسي",
            "certs.c5.desc": "شهادة HackerRank",
            "certs.c6.title": "مقدمة في SQL",
            "certs.c6.desc": "DataCamp / دورة أونلاين",
            "certs.c7.title": "العمل الحر من الصفر",
            "certs.c7.desc": "أساسيات العمل الحر",
            "certs.c8.title": "العمل الحر المتقدم",
            "certs.c8.desc": "نموذج أعمال العمل الحر",
            "certs.c9.title": "ITIDA Gigs",
            "certs.c9.desc": "برنامج تدريبي للعمل الحر لمدة 3 أشهر",

            "learning.title": "ما أتعلمه حالياً",
            "learning.l1.title": "السرد القصصي المتقدم للبيانات",
            "learning.l1.desc": 'تطوير طريقة عرض النتائج للقيادة — باستخدام المرئيات والسياق والبنية السردية للانتقال من "ماذا حدث" إلى "ما يجب أن نفعله".',
            "learning.l2.title": "SQL ومستودعات البيانات",
            "learning.l2.desc": "تعميق الخبرة في كتابة SQL بكفاءة، والعمل مع النماذج العلائقية، وربط سير العمل التحليلي بمصادر البيانات الإنتاجية.",
            "learning.l3.title": "Apps Script المتقدم",
            "learning.l3.desc": "بناء أتمتة أكثر تعقيداً في Google Workspace — ربط Sheets و Gmail و Calendar و Drive وواجهات API الخارجية في سير عمل سلس.",

            "exp.title": "الخبرات والتعليم",
            "exp.e1.title": "محلل بيانات مستقل",
            "exp.e1.desc": '• تسليم <strong>+25 مشاريع تحليل بيانات</strong> للشركات الصغيرة باستخدام Python و Power BI و Excel.<br>• بناء <strong>لوحات Power BI تفاعلية</strong> لتتبع مؤشرات الأداء.<br>• <strong>أتمتة عمليات التقارير</strong>، مما قلل الجهد اليدوي بنسبة تصل إلى <strong>70%</strong>.',
            "exp.e2.title": "مدرب تحليل بيانات مستقل",
            "exp.e2.desc": 'تدريب دفعة من <strong>66 طالباً</strong> على بدء وتنمية مسيرتهم في العمل الحر بمجال تحليل البيانات — تغطية بناء المحفظة والمهارات الجاهزة للسوق والتواصل مع العملاء.',
            "exp.e3.title": "متدرب محلل رواتب",
            "exp.e3.desc": '• فهم أساسيات الرواتب ومؤشرات الأداء الرئيسية.<br>• <strong>أتمتة عملية مراجعة الرواتب على Excel</strong>، مما قلل وقت المعالجة من <strong>15 دقيقة → 2 دقيقة (~87%)</strong>.',
            "exp.e4.title": "متدرب محلل بيانات",
            "exp.e4.desc": '• تدريب عملي على تحليل البيانات يركز على التطبيقات الواقعية.<br>• عمل مكثف مع <strong>Excel و SQL و Power BI</strong> لبناء اللوحات واستخلاص رؤى قابلة للتنفيذ.',
            "exp.e5.title": "متدرب Microsoft AI & Data Science",
            "exp.e5.desc": '• بناء مشروع واجهة دماغ-حاسوب (BCI) "NeuroWheel" باستخدام إشارات EEG + التعلم العميق بدقة <strong>90%</strong>.<br>• <strong>المركز الأول</strong> في مسار الشركة مع جائزة مالية.',
            "exp.e6.title": "بكالوريوس علوم البيانات",
            "exp.e6.desc": "تخصص في علوم البيانات والإحصاء وتعلم الآلة — دمج النظرية مع مشاريع تحليلية عملية.",
            "exp.resume": "تحميل السيرة الذاتية",

            "proj.title": "لوحات Power BI",
            "proj.p1.title": "بطاقة صحة المشاريع",
            "proj.p1.desc": "بناء لوحة Power BI لتقييم صحة المشاريع في نيجيريا، مع تتبع الحالة والمديرين والميزانيات والنفقات.",
            "proj.p2.title": "أداء Superstore على Excel",
            "proj.p2.desc": "بناء لوحة Excel لتحليل أداء Superstore عبر المبيعات والأرباح والجغرافيا وشرائح العملاء.",
            "proj.p3.title": "لوحة مبيعات السوبرماركت",
            "proj.p3.desc": "بناء لوحة Power BI لتحليل 3 أشهر من المبيعات عبر 3 فروع، مع تتبع المعاملات وشرائح العملاء وأنماط الوقت.",
            "proj.p4.title": "لوحة مبيعات العطور",
            "proj.p4.desc": "بناء لوحة Power BI لتحليل التسعير والفئات والعلامات التجارية وتأثير الخصومات.",
            "proj.p5.title": "لوحة نظرة عامة على المبيعات",
            "proj.p5.desc": "تصميم نظرة عامة تنفيذية للمبيعات تجمع مؤشرات الأداء والأداء الإقليمي والاتجاهات الشهرية.",
            "proj.p6.title": "نظرة عامة على المبيعات المالية",
            "proj.p6.desc": "إنشاء لوحة أداء مالي تغطي المبيعات والأرباح وشرائح العملاء والاتجاهات السنوية.",

            "github.title": "مشاريع برمجية مميزة",

            "testi.title": "آراء العملاء",

            "testi.t1.original": '"ألف شكر على سرعة تحضير المشروع ودقة العمل، مبدع جدًا وعمله احترافي وفاهم جدًا. خطير وفنان، تستاهل ألف نجمة."',
            // "testi.t1.translation": '',

            "testi.t2.original": '"أيمن ما شاء الله عليك، قدرت تحول البيانات إلى لوحة واضحة واحترافية. هذا هو الشغل اللي نعتمد عليه. استمر يا مبدع."',
            "testi.t2.translation": '',

            "testi.t3.original": '"ما شاء الله سرعة وفهم، وكل حاجة كانت مثالية وفوقها شكرا مرة."',
            "testi.t3.translation": '',

            "testi.t4.original": '"عمل احترافي وفي وقت قياسي."',
            "testi.t4.translation": '',

            "testi.t5.original": '"أستاذ أيمن أنت إنسان خلوق ومهتم بعملك. مرن في التعديلات ويسمع لطلبات العميل ولا يمل، كما أنه يقترح أفكار مفيدة."',
            "testi.t5.translation": '',

            "testi.t6.original": '"إنسان رائع وسريع بالتعامل، وإن شاء الله هذه ليست آخر مرة أتعامل معه. أنصح الجميع يجرب وماراح يندم إن شاء الله."',
            "testi.t6.translation": '',

            "contact.title": "لنعمل معاً",
            "contact.heading": "جاهز لتحويل بياناتك إلى قرارات؟",
            "contact.desc": 'لديك مجموعة بيانات، أو تحدي في التقارير، أو سؤال عمل تريد استكشافه؟ شاركني السياق، وسأساعدك على كشف القصة خلف الأرقام — <strong>مصممة خصيصاً لعملك</strong>.',
            "contact.whatsapp": "محادثة واتساب",
            "contact.email": "إرسال بريد إلكتروني",
            "contact.promise": "✓ استشارة مجانية 15 دقيقة · ✓ رد خلال ساعتين",
            "contact.emailLabel": "البريد:",
            "contact.phoneLabel": "الهاتف:",
            "contact.locationLabel": "الموقع:",
            "contact.location": "الإسكندرية، مصر",

            "whatsapp.tooltip": "تحدث معي",

            "footer.tagline": "تحويل بيانات الأعمال إلى أدوات شغّالة.",
            "footer.quickLinks": "روابط سريعة",
            "footer.connect": "تواصل",
            "footer.rights": "جميع الحقوق محفوظة."
        }
    };

    // ------------------ Language Toggle ------------------
    const langToggle = document.getElementById('lang-toggle');
    const langLabel = document.getElementById('lang-label');
    const htmlEl = document.documentElement;

    function setLanguage(lang) {
        const dict = translations[lang];
        if (!dict) return;

        // Set dir and lang attributes
        htmlEl.setAttribute('lang', lang);
        htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        // ⭐ STEP 1: Destroy Slick FIRST (before updating text)
        if (window.jQuery && $('.testimonials-container').hasClass('slick-initialized')) {
            $('.testimonials-container').slick('unslick');
        }

        // Update all elements with data-i18n (text only)
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) el.textContent = dict[key];
        });

        // Update all elements with data-i18n-html (allows HTML inside)
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (dict[key] !== undefined) el.innerHTML = dict[key];
        });

        // ⭐ STEP 2: Update testimonials — original Arabic text
        document.querySelectorAll('[data-testi]').forEach(el => {
            const num = el.getAttribute('data-testi');
            const key = `testi.t${num}.original`;
            if (dict[key] !== undefined) {
                el.textContent = dict[key];
            }
        });

        // ⭐ STEP 3: Update testimonials — English translation
        document.querySelectorAll('[data-testi-trans]').forEach(el => {
            const num = el.getAttribute('data-testi-trans');
            const key = `testi.t${num}.translation`;
            const value = dict[key];

            if (value === undefined) return;

            if (value === '') {
                // Arabic mode: hide translation COMPLETELY
                el.textContent = '';
                el.classList.add('hidden-translation');
            } else {
                // English mode: show translation
                el.innerHTML = `<em>${value}</em>`;
                el.classList.remove('hidden-translation');
            }
        });

        // Update label on toggle button
        if (langLabel) langLabel.textContent = lang === 'ar' ? 'EN' : 'AR';

        // ⭐ STEP 4: Re-init Slick AFTER all text is updated
        if (window.jQuery && $('.testimonials-container').length) {
            setTimeout(() => {
                $('.testimonials-container').slick({
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    adaptiveHeight: true,
                    autoplay: true,
                    autoplaySpeed: 6000,
                    arrows: false,
                    pauseOnHover: true,
                    pauseOnFocus: true,
                    rtl: lang === 'ar'
                });
            }, 100);
        }

        // Save preference
        localStorage.setItem('lang', lang);
    }

    // Load saved language or default to English
    const savedLang = localStorage.getItem('lang') || 'en';
    setLanguage(savedLang);

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const currentLang = htmlEl.getAttribute('lang') || 'en';
            const newLang = currentLang === 'en' ? 'ar' : 'en';
            setLanguage(newLang);
        });
    }

    // ------------------ Theme (Dark as Default) ------------------
    if (!localStorage.getItem('theme')) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }

    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme && themeIcon) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
    }

    if (themeToggle && themeIcon) {
        themeToggle.addEventListener('click', () => {
            const theme = document.documentElement.getAttribute('data-theme');
            if (theme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                themeIcon.classList.replace('fa-sun', 'fa-moon');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeIcon.classList.replace('fa-moon', 'fa-sun');
            }
        });
    }

    // ------------------ Hamburger Menu ------------------
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNavLinks = document.querySelector('.mobile-nav-links');

    if (hamburgerMenu && mobileNavLinks) {
        hamburgerMenu.addEventListener('click', () => {
            const isOpen = mobileNavLinks.classList.toggle('active');
            hamburgerMenu.setAttribute('aria-expanded', isOpen);
        });

        mobileNavLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNavLinks.classList.remove('active');
                hamburgerMenu.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ------------------ Scroll-to-top ------------------
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    window.addEventListener('scroll', () => {
        if (!scrollToTopBtn) return;
        scrollToTopBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
    });

    // ------------------ Smooth Scrolling ------------------
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;
            const targetEl = document.querySelector(targetId);
            if (!targetEl) return;
            e.preventDefault();
            targetEl.scrollIntoView({
                behavior: prefersReducedMotion ? 'auto' : 'smooth'
            });
        });
    });

    // ------------------ Animate on Scroll ------------------
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    // ------------------ Fetch GitHub Projects ------------------
    async function fetchGithubProjects() {
        const projectsGrid = document.getElementById('github-projects-grid');
        if (!projectsGrid) return;

        const projectRepos = [
            'https://api.github.com/repos/AymanRezk2/BCI-Intent-Detection',
            'https://api.github.com/repos/AymanRezk2/50_Startups_Liner_regration',
            'https://api.github.com/repos/AymanRezk2/car-insurance-claim-EDA',
            'https://api.github.com/repos/AymanRezk2/student-performance-analysis-prediction'
        ];

        projectsGrid.innerHTML = '<div class="spinner"></div>';

        try {
            const fetchPromises = projectRepos.map(url =>
                fetch(url)
                    .then(res => res.ok ? res.json() : null)
                    .catch(() => null)
            );

            const allReposData = await Promise.all(fetchPromises);
            const validRepos = allReposData.filter(repo => repo !== null);

            if (validRepos.length === 0) {
                projectsGrid.innerHTML = '<p class="muted-text">GitHub projects will appear here once available.</p>';
                return;
            }

            validRepos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
            projectsGrid.innerHTML = '';

            validRepos.forEach(repo => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card');
                const projectName = repo.name.replace(/[-_]/g, ' ');
                const projectDescription = repo.description
                    ? (repo.description.length > 110 ? repo.description.substring(0, 110) + '…' : repo.description)
                    : 'Exploratory data analysis and modeling focused on uncovering drivers behind key business outcomes.';

                projectCard.innerHTML = `
                    <div class="project-icon"><i class="fas fa-code"></i></div>
                    <div class="project-content">
                        <h3 class="project-title">${projectName}</h3>
                        <p class="project-description">${projectDescription}</p>
                        <div class="project-links">
                            <a href="${repo.html_url}" class="project-link" target="_blank" rel="noopener">
                                <i class="fab fa-github"></i> View on GitHub
                            </a>
                        </div>
                    </div>
                `;
                projectsGrid.appendChild(projectCard);
            });
        } catch {
            projectsGrid.innerHTML = '<p class="muted-text">Failed to load GitHub projects. Please try again later.</p>';
        }
    }

    fetchGithubProjects();

// ------------------ Testimonials Carousel ------------------
// (Initialized inside setLanguage function to support AR/EN properly)

    // ------------------ Update Year ------------------
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});