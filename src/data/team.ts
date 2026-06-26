export type TeamLevel = 1 | 2 | 3 | 4 | 5;

export interface TeamMember {
  slug: string;
  name: string;
  nameZh: string;
  role: string;
  roleZh: string;
  level: TeamLevel;
  img: string;
  desc: string;
  descZh: string;
  email: string;
  publications: Array<{
    title: string;
    authors: string;
    venue: string;
    img: string;
    links: Array<{ label: string; url: string }>;
  }>;
  honors: string[];
  honorsZh: string[];
}

export const team: TeamMember[] = [
  // ════════════════════════════════════════════
  // Level 1 — PI / 课题组长
  // ════════════════════════════════════════════
  {
    slug: 'zhang-li',
    name: '张力 / ZHANG Li',
    nameZh: '张力',
    role: 'Principal Investigator',
    roleZh: '课题组长',
    level: 1,
    img: '/assets/team/zhangli.png',
    desc: 'Professor, Chief Physician, Doctoral Supervisor, and Vice President of Xinhua Hospital affiliated to Shanghai Jiao Tong University School of Medicine. The group focuses on interventional cardiology, vascular regeneration, organoid-chip platforms, and AI-enabled cardiovascular health strategies.',
    descZh: '主任医师、上海交通大学特聘教授、博士生导师，上海交通大学医学院附属新华医院副院长。课题组聚焦冠心病介入诊疗、血管再生修复、血管类器官与类器官芯片平台，以及人工智能赋能的心血管主动健康策略。',
    email: 'li.zhang@shsmu.edu.cn',
    publications: [
      {
        title: 'Nrf3-Mediated Mitochondrial Superoxide Promotes Cardiomyocyte Apoptosis and Impairs Cardiac Functions by Suppressing Pitx2',
        authors: 'CHEN Qishan, Ancheng Zheng, Xiaolei Xu, Zhenning Shi, YANG Mei, Shasha Sun, Leyu Wang, Yumeng Wang, Haige Zhao, Qingzhong Xiao, ZHANG Li',
        venue: 'Circulation (2025)',
        img: '/assets/cards/nrf3-cover.png',
        links: [{ label: 'Circulation', url: 'https://doi.org/10.1161/CIRCULATIONAHA.124.070286' }],
      },
      {
        title: 'Representative work in cardiovascular regeneration and remodeling',
        authors: 'Zhang Lab and collaborators',
        venue: 'Circulation / Circulation Research / Cell Stem Cell',
        img: '/assets/cards/publication-blue.png',
        links: [],
      },
    ],
    honors: [
      'National Science Fund for Distinguished Young Scholars',
      'Chief Scientist, National Key Research and Development Program',
      'FACC and FESC Fellow',
    ],
    honorsZh: [
      '国家杰出青年科学基金获得者',
      '国家重点研发计划首席科学家',
      '美国心脏病学会专家会员（FACC）、欧洲心脏病学会专家会员（FESC）',
    ],
  },

  // ════════════════════════════════════════════
  // Level 2 — 副主任医师
  // ════════════════════════════════════════════
  {
    slug: 'chen-qishan',
    name: '陈齐山 / CHEN Qishan',
    nameZh: '陈齐山',
    role: 'Associate Chief Physician, Professor',
    roleZh: '副主任医师 / 教授',
    level: 2,
    img: '/assets/team/chenqishan.jpg',
    desc: 'Professor, Associate Chief Physician, and Doctoral Supervisor. His work bridges coronary heart disease care, clinical research, and cardiovascular translational medicine.',
    descZh: '教授、副主任医师、博士生导师。长期致力于冠心病诊治、临床研究与心血管转化医学研究。',
    email: 'chenqishan@shsmu.edu.cn',
    publications: [
      {
        title: 'Nrf3-Mediated Mitochondrial Superoxide Promotes Cardiomyocyte Apoptosis and Impairs Cardiac Functions by Suppressing Pitx2',
        authors: 'CHEN Qishan, Ancheng Zheng, Xiaolei Xu, Zhenning Shi, YANG Mei, Shasha Sun, Leyu Wang, Yumeng Wang, Haige Zhao, Qingzhong Xiao, ZHANG Li',
        venue: 'Circulation (2025)',
        img: '/assets/cards/nrf3-cover.png',
        links: [{ label: 'Circulation', url: 'https://doi.org/10.1161/CIRCULATIONAHA.124.070286' }],
      },
    ],
    honors: [
      'Young Top-Notch Talent Program',
      'Shanghai Oriental Talent Program',
    ],
    honorsZh: [
      '国家高层次人才特殊支持计划青年拔尖人才',
      '上海市东方英才',
    ],
  },

  // ════════════════════════════════════════════
  // Level 3 — 主治医师 / 助理研究员
  // ════════════════════════════════════════════
  {
    slug: 'yang-mei',
    name: '杨眉 / YANG Mei',
    nameZh: '杨眉',
    role: 'Assistant Researcher',
    roleZh: '助理研究员',
    level: 3,
    img: '',
    desc: 'Assistant Researcher involved in basic and translational cardiovascular research.',
    descZh: '助理研究员，从事心血管基础与转化研究。',
    email: '',
    publications: [],
    honors: [],
    honorsZh: [],
  },
  {
    slug: 'dai-bing',
    name: '戴兵 / DAI Bing',
    nameZh: '戴兵',
    role: 'Attending Physician',
    roleZh: '主治医师',
    level: 3,
    img: '',
    desc: 'Attending Physician specializing in cardiovascular clinical care and interventional procedures.',
    descZh: '主治医师，专注于心血管临床诊疗与介入手术。',
    email: '',
    publications: [],
    honors: [],
    honorsZh: [],
  },
  {
    slug: 'sun-yuxi',
    name: '孙玉玺 / SUN Yuxi',
    nameZh: '孙玉玺',
    role: 'Attending Physician',
    roleZh: '主治医师',
    level: 3,
    img: '',
    desc: 'Attending Physician focusing on clinical management of cardiovascular diseases.',
    descZh: '主治医师，致力于心血管疾病临床诊疗。',
    email: '',
    publications: [],
    honors: [],
    honorsZh: [],
  },

  // ════════════════════════════════════════════
  // Level 4 — 住院医师
  // ════════════════════════════════════════════
  {
    slug: 'xu-xiaolei',
    name: '徐肖磊 / XU Xiaolei',
    nameZh: '徐肖磊',
    role: 'Resident Physician',
    roleZh: '住院医师',
    level: 4,
    img: '',
    desc: 'Resident Physician engaged in clinical cardiology training and research.',
    descZh: '住院医师，从事心血管内科临床培训与研究。',
    email: '',
    publications: [],
    honors: [],
    honorsZh: [],
  },
  {
    slug: 'shi-zhenning',
    name: '石镇宁 / SHI Zhenning',
    nameZh: '石镇宁',
    role: 'Resident Physician',
    roleZh: '住院医师',
    level: 4,
    img: '',
    desc: 'Resident Physician engaged in clinical cardiology training and research.',
    descZh: '住院医师，从事心血管内科临床培训与研究。',
    email: '',
    publications: [],
    honors: [],
    honorsZh: [],
  },
  {
    slug: 'sun-shasha',
    name: '孙厦厦 / SUN Shasha',
    nameZh: '孙厦厦',
    role: 'Resident Physician',
    roleZh: '住院医师',
    level: 4,
    img: '',
    desc: 'Resident Physician engaged in clinical cardiology training and research.',
    descZh: '住院医师，从事心血管内科临床培训与研究。',
    email: '',
    publications: [],
    honors: [],
    honorsZh: [],
  },
];
