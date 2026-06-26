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
  // Level 1 — Senior Faculty / PI
  // ════════════════════════════════════════════
  {
    slug: 'zhang-li',
    name: '张力 / ZHANG Li',
    nameZh: '张力',
    role: 'Chief Physician, Distinguished Professor, Doctoral Supervisor, Vice President',
    roleZh: '主任医师、上海交通大学特聘教授、博士生导师',
    level: 1,
    img: '/assets/team/zhangli.png',
    desc: 'Chief Physician, Distinguished Professor at Shanghai Jiao Tong University, Doctoral Supervisor, and Vice President of Xinhua Hospital Affiliated to Shanghai Jiao Tong University School of Medicine. Dedicated to the diagnosis and treatment of coronary artery disease, valvular heart disease, hypertension, and heart failure, as well as various complex cardiovascular disorders. In the field of interventional cardiovascular diagnosis and therapy, specializes particularly in interventional diagnostic and therapeutic procedures for coronary artery disease, valvular heart disease, and hypertrophic obstructive cardiomyopathy. Demonstrates extensive experience and exceptional technical proficiency in managing complex and high-risk lesions, including left main coronary artery disease, multivessel disease, chronic total occlusions, severely calcified lesions, as well as transcatheter aortic valve replacement (TAVR) for severe aortic stenosis and regurgitation.',
    descZh: '主任医师、上海交通大学特聘教授、博士生导师，上海交通大学医学院附属新华医院副院长。致力于冠心病、心脏瓣膜病、高血压和心力衰竭的诊治及各种心血管疑难杂症。在心血管介入诊治方面，尤其擅长冠心病、瓣膜性心脏病以及肥厚型梗阻性心肌病的介入诊断与治疗，特别在复杂高危病变包括左主干病变、多支病变、慢性完全闭塞病变、重度钙化病变、以及经导管主动脉瓣置换（TAVR）治疗重度主动脉瓣狭窄及关闭不全等方面具有丰富的经验和娴熟的技术。',
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
        title: 'Causal Role for Neutrophil Elastase in Thoracic Aortic Dissection in Mice',
        authors: 'YANG Mei, Xinmiao Zhou, Stuart W. A. Pearce, Zhisheng Yang, CHEN Qishan, Kaiyuan Niu, Chenxin Liu, Jun Luo, Dan Li, Yue Shao, Cheng Zhang, Dan Chen, Qingchen Wu, Pedro R. Cutillas, Lin Zhao, Qingzhong Xiao, ZHANG Li',
        venue: 'ATVB (2023)',
        img: '/assets/cards/ATVB-cover.png',
        links: [{ label: 'ATVB', url: 'https://doi.org/10.1161/ATVBAHA.123.319281' }],
      },
    ],
    honors: [
      'National Outstanding Young Scientist Fund Recipient',
      'Chief Scientist of the National Key Research and Development Program',
      'Member of the Cardiovascular Disease Branch of the Chinese Medical Association',
      'Standing Committee Member of the Cardiovascular Physicians Branch of the Chinese Medical Doctor Association',
      'Fellow of the American College of Cardiology (FACC), Fellow of the European Society of Cardiology (FESC)',
      'Second Prize of the Chinese Medical Science and Technology Award, 2 items (first contributor)',
      'First Prize of the Ministry of Education Award for Progress in Science and Technology (first contributor)',
      'Third Prize of the Huaxia Medical Science and Technology Award (first contributor)',
      'Shulan Medical Youth Award',
      'Shanghai Craftsman, Shanghai "Medical Craftsman"',
      'Recipient of the Special Government Allowance of the State Council',
    ],
    honorsZh: [
      '国家杰出青年科学基金获得者',
      '国家重点研发计划首席科学家',
      '中华医学会心血管病分会委员',
      '中国医师协会心血管医师分会常委',
      '美国心脏病学会专家会员（FACC）、欧洲心脏病学会专家会员（FESC）',
      '中华医学科技奖二等奖2项（第一完成人）',
      '教育部科技进步一等奖（第一完成人）',
      '华夏医学科技三等奖（第一完成人）',
      '树兰医学青年奖',
      '上海工匠、上海“医务工匠”',
      '享受国务院特殊津贴',
    ],
  },

  // ════════════════════════════════════════════
  // Level 2 — Senior Faculty
  // ════════════════════════════════════════════
  {
    slug: 'chen-qishan',
    name: '陈齐山 / CHEN Qishan',
    nameZh: '陈齐山',
    role: 'Associate Chief Physician, Associate Researcher, Master\'s Supervisor',
    roleZh: '副主任医师、副研究员，博士生导师',
    level: 2,
    img: '/assets/team/chenqishan.jpg',
    desc: 'Associate Chief Physician, Associate Researcher, and Doctoral Supervisor. Has long been dedicated to the optimized management and minimally invasive interventional treatment of common cardiovascular diseases and critical emergencies, including coronary artery disease, hypertension, cardiomyopathy, and heart failure.',
    descZh: '副主任医师、副研究员，博士生导师。长期致力于冠心病、高血压、心肌病、心力衰竭等心血管常见病和危急重症的优化管理和微创介入治疗。',
    email: 'lastufo@hotmail.com',
    publications: [
      {
        title: 'Nrf3-Mediated Mitochondrial Superoxide Promotes Cardiomyocyte Apoptosis and Impairs Cardiac Functions by Suppressing Pitx2',
        authors: 'CHEN Qishan, Ancheng Zheng, Xiaolei Xu, Zhenning Shi, YANG Mei, Shasha Sun, Leyu Wang, Yumeng Wang, Haige Zhao, Qingzhong Xiao, ZHANG Li',
        venue: 'Circulation (2025)',
        img: '/assets/cards/nrf3-cover.png',
        links: [{ label: 'Circulation', url: 'https://doi.org/10.1161/CIRCULATIONAHA.124.070286' }],
      },
      {
        title: 'Causal Role for Neutrophil Elastase in Thoracic Aortic Dissection in Mice',
        authors: 'YANG Mei, Xinmiao Zhou, Stuart W. A. Pearce, Zhisheng Yang, CHEN Qishan, Kaiyuan Niu, Chenxin Liu, Jun Luo, Dan Li, Yue Shao, Cheng Zhang, Dan Chen, Qingchen Wu, Pedro R. Cutillas, Lin Zhao, Qingzhong Xiao, ZHANG Li',
        venue: 'ATVB (2023)',
        img: '/assets/cards/ATVB-cover.png',
        links: [{ label: 'ATVB', url: 'https://doi.org/10.1161/ATVBAHA.123.319281' }],
      },
    ],
    honors: [
      'National High-Level Talent Special Support Program – Young Top-Notch Talent',
      'Shanghai Oriental Talent',
      'Zhejiang Provincial Distinguished Young Scholar',
      'Second Prize of the Chinese Medical Science and Technology Award (co-contributor)',
      'Second Prize of the Ministry of Education Award for Progress in Science and Technology (co-contributor)',
      'Third Prize of the Huaxia Medical Science and Technology Award (co-contributor)',
    ],
    honorsZh: [
      '国家高层次人才特殊支持计划青年拔尖人才',
      '上海市东方英才',
      '浙江省“杰青”',
      '中华医学科技奖二等奖（参与人）',
      '教育部科技进步二等奖（参与人）',
      '华夏医学科技三等奖（参与人）',
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
    descZh: '助理研究员，从事心血管医学与转化研究。',
    email: 'susannayang@126.com',
    publications: [
      {
        title: 'Nrf3-Mediated Mitochondrial Superoxide Promotes Cardiomyocyte Apoptosis and Impairs Cardiac Functions by Suppressing Pitx2',
        authors: 'CHEN Qishan, Ancheng Zheng, Xiaolei Xu, Zhenning Shi, YANG Mei, Shasha Sun, Leyu Wang, Yumeng Wang, Haige Zhao, Qingzhong Xiao, ZHANG Li',
        venue: 'Circulation (2025)',
        img: '/assets/cards/nrf3-cover.png',
        links: [{ label: 'Circulation', url: 'https://doi.org/10.1161/CIRCULATIONAHA.124.070286' }],
      },
      {
        title: 'Causal Role for Neutrophil Elastase in Thoracic Aortic Dissection in Mice',
        authors: 'YANG Mei, Xinmiao Zhou, Stuart W. A. Pearce, Zhisheng Yang, CHEN Qishan, Kaiyuan Niu, Chenxin Liu, Jun Luo, Dan Li, Yue Shao, Cheng Zhang, Dan Chen, Qingchen Wu, Pedro R. Cutillas, Lin Zhao, Qingzhong Xiao, ZHANG Li',
        venue: 'ATVB (2023)',
        img: '/assets/cards/ATVB-cover.png',
        links: [{ label: 'ATVB', url: 'https://doi.org/10.1161/ATVBAHA.123.319281' }],
      },
    ],
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
    descZh: '主治医师，致力于心血管医学研究和临床工作。',
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
    descZh: '主治医师，致力于心血管医学研究和临床工作。',
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
    descZh: '住院医师，致力于心血管医学研究和临床工作。',
    email: '',
    publications: [
      {
        title: 'Nrf3-Mediated Mitochondrial Superoxide Promotes Cardiomyocyte Apoptosis and Impairs Cardiac Functions by Suppressing Pitx2',
        authors: 'CHEN Qishan, Ancheng Zheng, Xiaolei Xu, Zhenning Shi, YANG Mei, Shasha Sun, Leyu Wang, Yumeng Wang, Haige Zhao, Qingzhong Xiao, ZHANG Li',
        venue: 'Circulation (2025)',
        img: '/assets/cards/nrf3-cover.png',
        links: [{ label: 'Circulation', url: 'https://doi.org/10.1161/CIRCULATIONAHA.124.070286' }],
      },
    ],
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
    descZh: '住院医师，致力于心血管医学研究和临床工作。',
    email: '',
    publications: [
      {
        title: 'Nrf3-Mediated Mitochondrial Superoxide Promotes Cardiomyocyte Apoptosis and Impairs Cardiac Functions by Suppressing Pitx2',
        authors: 'CHEN Qishan, Ancheng Zheng, Xiaolei Xu, Zhenning Shi, YANG Mei, Shasha Sun, Leyu Wang, Yumeng Wang, Haige Zhao, Qingzhong Xiao, ZHANG Li',
        venue: 'Circulation (2025)',
        img: '/assets/cards/nrf3-cover.png',
        links: [{ label: 'Circulation', url: 'https://doi.org/10.1161/CIRCULATIONAHA.124.070286' }],
      },
    ],
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
    descZh: '住院医师，致力于心血管医学研究和临床工作。',
    email: '',
    publications: [
      {
        title: 'Nrf3-Mediated Mitochondrial Superoxide Promotes Cardiomyocyte Apoptosis and Impairs Cardiac Functions by Suppressing Pitx2',
        authors: 'CHEN Qishan, Ancheng Zheng, Xiaolei Xu, Zhenning Shi, YANG Mei, Shasha Sun, Leyu Wang, Yumeng Wang, Haige Zhao, Qingzhong Xiao, ZHANG Li',
        venue: 'Circulation (2025)',
        img: '/assets/cards/nrf3-cover.png',
        links: [{ label: 'Circulation', url: 'https://doi.org/10.1161/CIRCULATIONAHA.124.070286' }],
      },
    ],
    honors: [],
    honorsZh: [],
  },
];
