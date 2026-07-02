// ===== 团队成员数据 =====
// 为团队页面提供结构化成员信息，包含个人资料、论文列表和荣誉奖项

export type TeamLevel = 1 | 2 | 3 | 4 | 5;

export interface TeamMember {
  slug: string;
  name: string;
  nameZh: string;
  role: string;
  level: TeamLevel;
  img: string;
  desc: string;
  email: string;
  publications: Array<{
    title: string;
    authors: string;
    venue: string;
    img: string;
    links: Array<{ label: string; url: string }>;
    roles?: Array<'first' | 'cofirst' | 'corresponding'>;
  }>;
  honors: string[];
}

export const team: TeamMember[] = [
  // ════════════════════════════════════════════
  // Level 1 — Senior Faculty / PI
  // ════════════════════════════════════════════
  {
    slug: 'zhang-li',
    name: '张力 / ZHANG Li',
    nameZh: '张力',
    role: 'Vice President of Xinhua Hospital Affiliated to Shanghai Jiao Tong University School of Medicine\n\nChief Physician\n\nDistinguished Professor of Shanghai Jiao Tong University\n\nDoctoral Supervisor',
    level: 1,
    img: '/assets/team/zhangli.png',
    desc: 'Professor Li Zhang, M.D., Ph.D., is Vice President of Xinhua Hospital Affiliated to Shanghai Jiao Tong University School of Medicine, Director of the Department of Cardiology, Director of the National Clinical Key Specialty (Cardiology), Deputy Director of the Institute of Cardiovascular Development and Regenerative Medicine, Distinguished Professor of Shanghai Jiao Tong University School of Medicine, Chief Physician, and Doctoral Supervisor.\n\nHe is a recipient of the National Science Fund for Distinguished Young Scholars and serves as Chief Scientist of the National Key Research and Development Program of China. He is also a Committee Member of the Chinese Society of Cardiology, Chinese Medical Association, Deputy Head of its Coronary Artery Disease Group, and Standing Committee Member of the Cardiovascular Physicians Branch of the Chinese Medical Doctor Association.\n\nProfessor Zhang\'s research focuses on the basic and translational science of cardiovascular diseases, with particular clinical expertise in coronary intervention and transcatheter treatment of valvular heart disease.\n\nAs corresponding or first author, he has published more than 70 SCI-indexed papers in leading journals, including Cell Stem Cell, Circulation, and Circulation Research. He holds two Chinese invention patents and has led nine major research grants, including Key Projects of the National Natural Science Foundation of China and international cooperative programs, as well as a National Key R&D Program project on Stem Cell Research and Organ Repair.\n\nAs the first recipient, Professor Zhang has received two Second Prizes of the Chinese Medical Science and Technology Award, one Second Prize of the Ministry of Education Science and Technology Progress Award, and one Third Prize of the Huaxia Medical Science and Technology Award. His individual honors include the TreeShan Young Physician Award, the Shanghai Craftsman Award, the Shanghai Medical Craftsman Award, and the State Council Special Government Allowance.',
    email: 'li.zhang@shsmu.edu.cn',
    publications: [
      {
        title: 'Nrf3-Mediated Mitochondrial Superoxide Promotes Cardiomyocyte Apoptosis and Impairs Cardiac Functions by Suppressing Pitx2',
        authors: 'CHEN Qishan, Ancheng Zheng, Xiaolei Xu, Zhenning Shi, YANG Mei, Shasha Sun, Leyu Wang, Yumeng Wang, Haige Zhao, Qingzhong Xiao, ZHANG Li',
        venue: 'Circulation (2025)',
        img: '/assets/cards/nrf3-cover.png',
        links: [{ label: 'Circulation', url: 'https://doi.org/10.1161/CIRCULATIONAHA.124.070286' }],
        roles: ['corresponding'],
      },
      {
        title: 'Chronic Kidney Disease Is Associated with Increased Risk of Sudden Cardiac Death',
        authors: 'LI Yalan, Ruchao Jiang, Chenxi Ouyang, Jie Wang, Qingwei Yu, Jingjing Cai, ZHANG Li, Yao Lu',
        venue: 'Nature Communications (2025)',
        img: '/assets/cards/publication-sky.png',
        links: [{ label: 'Nature Communications', url: 'https://doi.org/10.1038/s41467-025-64254-9' }],
        roles: ['corresponding'],
      },
      {
        title: 'Inhibition of Fap Promotes Cardiac Repair by Stabilizing BNP',
        authors: 'SUN Yuxi, Mengqiu Ma, Dandan Cao, Ancheng Zheng, Yiying Zhang, Yang Su, Jianfang Wang, Yanhua Xu, Mi Zhou, Yansong Tang, Yifan Liu, Teng Ma, Aoyuan Fan, Xiaoying Zhang, Qiaoling Zhu, Jiachen Qin, Chunyang Mo, Yawei Xu, ZHANG Li, Dachun Xu, Rui Yue',
        venue: 'Circulation Research (2023)',
        img: '/assets/cards/publication-sky.png',
        links: [{ label: 'Circulation Research', url: 'https://doi.org/10.1161/CIRCRESAHA.122.320933' }],
        roles: ['corresponding'],
      },
      {
        title: 'Nonbone Marrow CD34+ Cells Are Crucial for Endothelial Repair of Injured Artery',
        authors: 'JIANG Liujun, CHEN Ting, SUN Shasha, WANG Ruilin, DENG Jiacheng, LYU Lingxia, WU Hong, YANG Mei, PU Xiangyuan, DU Luping, CHEN Qishan, HU Yanhua, HU Xiaosheng, ZHOU Yijiang, XU Qingbo, ZHANG Li',
        venue: 'Circulation Research (2021)',
        img: '/assets/cards/publication-blue.png',
        links: [{ label: 'Circulation Research', url: 'https://doi.org/10.1161/CIRCRESAHA.121.319494' }],
        roles: ['corresponding'],
      },
      {
        title: 'CD34+ PI16+ Fibroblast Progenitors Aggravate Neointimal Lesions of Allograft Arteries via CCL11/CCR3-PI3K/AKT Pathway',
        authors: 'XU Xiaodong, ZHU Pengwei, WANG Han, CHEN Kai, LIU Liang, DU Luping, JIANG Liujun, HU Yanhua, ZHOU Xuhao, ZHANG Bohuan, PU Xiangyuan, HU Xiaosheng, XU Qingbo, ZHANG Li, LI Weidong',
        venue: 'Theranostics (2025)',
        img: '/assets/cards/publication-sky.png',
        links: [{ label: 'Theranostics', url: 'https://doi.org/10.7150/thno.104153' }],
        roles: ['corresponding'],
      },
      {
        title: 'Novel Roles of Nrf3-Trim5 Axis in Vascular Smooth Muscle Cell Dysfunctions and Neointimal Hyperplasia',
        authors: 'CHEN Qishan, SUN Shasha, SHI Zhenning, WANG Leyu, WANG Yumeng, ZHENG Ancheng, XU Xiaolei, YANG Mei, SUN Kun, XIAO Qingzhong, ZHANG Li',
        venue: 'Cardiovascular Research (2025)',
        img: '/assets/cards/publication-sky.png',
        links: [{ label: 'Cardiovascular Research', url: 'https://doi.org/10.1093/cvr/cvaf084' }],
        roles: ['corresponding'],
      },
      {
        title: 'Causal Role for Neutrophil Elastase in Thoracic Aortic Dissection in Mice',
        authors: 'YANG Mei, Xinmiao Zhou, Stuart W. A. Pearce, Zhisheng Yang, CHEN Qishan, Kaiyuan Niu, Chenxin Liu, Jun Luo, Dan Li, Yue Shao, Cheng Zhang, Dan Chen, Qingchen Wu, Pedro R. Cutillas, Lin Zhao, Qingzhong Xiao, ZHANG Li',
        venue: 'ATVB (2023)',
        img: '/assets/cards/ATVB-cover.png',
        links: [{ label: 'ATVB', url: 'https://doi.org/10.1161/ATVBAHA.123.319281' }],
        roles: ['corresponding'],
      },
    ],
    honors: [
      'Recipient of the National Science Fund for Distinguished Young Scholars',
      'Chief Scientist of the National Key Research and Development Program of China',
      'Committee Member, Chinese Society of Cardiology, Chinese Medical Association',
      'Deputy Head, Coronary Artery Disease Group, Chinese Society of Cardiology',
      'Standing Committee Member, Cardiovascular Physicians Branch, Chinese Medical Doctor Association',
      'Second Prize of the Chinese Medical Science and Technology Award (First Recipient, twice)',
      'Second Prize of the Ministry of Education Science and Technology Progress Award (First Recipient)',
      'Third Prize of the Huaxia Medical Science and Technology Award (First Recipient)',
      'TreeShan Young Physician Award',
      'Shanghai Craftsman',
      'Shanghai Medical Craftsman',
      'Recipient of the State Council Special Government Allowance',
    ],
  },
  // ════════════════════════════════════════════
  // Level 2 — Senior Faculty
  // ════════════════════════════════════════════
  {
    slug: 'chen-qishan',
    name: '陈齐山 / CHEN Qishan',
    nameZh: '陈齐山',
    role: 'Associate Chief Physician\n\nAssociate Researcher\n\nDoctoral Supervisor',
    level: 2,
    img: '/assets/team/chenqishan.jpg',
    desc: 'Qishan Chen, M.D., Ph.D., is Deputy Director of the Department of Cardiovascular Medicine (presiding over daily work) at Xinhua Hospital Affiliated to Shanghai Jiao Tong University School of Medicine, Associate Chief Physician, Associate Researcher, and Doctoral Supervisor.\n\nHe is a recipient of the National High-Level Talent Special Support Program for Young Top-Notch Talents. He also serves as a Young Committee Member of the Cardiovascular Disease Branch of the Shanghai Medical Association, a Young Committee Member of the Cardiovascular Committee of the Chinese Association of Pathophysiology, and a Young Committee Member of the Cardiovascular Metabolism Alliance.\n\nHis work focuses on the clinical diagnosis and treatment of common cardiovascular diseases, critical cardiovascular illnesses, and cardiometabolic diseases, as well as related basic and translational research.\n\nHe has led three grants from the National Natural Science Foundation of China, the Shanghai Original Exploration Program, the Zhejiang Provincial Distinguished Young Scholars Program, among others, and has participated as a key member in a National Key Research and Development Program of the Ministry of Science and Technology.\n\nAs first or corresponding author, he has published more than twenty papers in international academic journals including Circulation and Hepatology. He has been selected for the Shanghai Oriental Talent Program and the Shanghai High-Level Local University Innovation Team. As a major contributor, he has received one Second Prize of the Chinese Medical Science and Technology Award, one Second Prize of the Ministry of Education Science and Technology Progress Award, and one Third Prize of the Huaxia Medical Science and Technology Award.',
    email: 'lastufo@hotmail.com',
    publications: [
      {
        title: 'Nrf3-Mediated Mitochondrial Superoxide Promotes Cardiomyocyte Apoptosis and Impairs Cardiac Functions by Suppressing Pitx2',
        authors: 'CHEN Qishan, Ancheng Zheng, Xiaolei Xu, Zhenning Shi, YANG Mei, Shasha Sun, Leyu Wang, Yumeng Wang, Haige Zhao, Qingzhong Xiao, ZHANG Li',
        venue: 'Circulation (2025)',
        img: '/assets/cards/nrf3-cover.png',
        links: [{ label: 'Circulation', url: 'https://doi.org/10.1161/CIRCULATIONAHA.124.070286' }],
        roles: ['first'],
      },
      {
        title: 'Causal Role for Neutrophil Elastase in Thoracic Aortic Dissection in Mice',
        authors: 'YANG Mei, Xinmiao Zhou, Stuart W. A. Pearce, Zhisheng Yang, CHEN Qishan, Kaiyuan Niu, Chenxin Liu, Jun Luo, Dan Li, Yue Shao, Cheng Zhang, Dan Chen, Qingchen Wu, Pedro R. Cutillas, Lin Zhao, Qingzhong Xiao, ZHANG Li',
        venue: 'ATVB (2023)',
        img: '/assets/cards/ATVB-cover.png',
        links: [{ label: 'ATVB', url: 'https://doi.org/10.1161/ATVBAHA.123.319281' }],
      },
      {
        title: 'Nonbone Marrow CD34+ Cells Are Crucial for Endothelial Repair of Injured Artery',
        authors: 'JIANG Liujun, CHEN Ting, SUN Shasha, WANG Ruilin, DENG Jiacheng, LYU Lingxia, WU Hong, YANG Mei, PU Xiangyuan, DU Luping, CHEN Qishan, HU Yanhua, HU Xiaosheng, ZHOU Yijiang, XU Qingbo, ZHANG Li',
        venue: 'Circulation Research (2021)',
        img: '/assets/cards/publication-blue.png',
        links: [{ label: 'Circulation Research', url: 'https://doi.org/10.1161/CIRCRESAHA.121.319494' }],
      },
      {
        title: 'Novel Roles of Nrf3-Trim5 Axis in Vascular Smooth Muscle Cell Dysfunctions and Neointimal Hyperplasia',
        authors: 'CHEN Qishan, SUN Shasha, SHI Zhenning, WANG Leyu, WANG Yumeng, ZHENG Ancheng, XU Xiaolei, YANG Mei, SUN Kun, XIAO Qingzhong, ZHANG Li',
        venue: 'Cardiovascular Research (2025)',
        img: '/assets/cards/publication-sky.png',
        links: [{ label: 'Cardiovascular Research', url: 'https://doi.org/10.1093/cvr/cvaf084' }],
        roles: ['first'],
      },
    ],
    honors: [
      'National High-Level Talent Special Support Program – Young Top-Notch Talent',
      'Young Committee Member, Shanghai Society of Cardiology',
      'Young Committee Member, Cardiovascular Committee, Chinese Association of Pathophysiology',
      'Young Committee Member, Cardiovascular Metabolism Alliance',
      'Shanghai Oriental Talent',
      'Member, Shanghai High-Level Local University Innovation Team',
      'Zhejiang Provincial Distinguished Young Scholars Program',
      'Second Prize of the Chinese Medical Science and Technology Award (Major Contributor)',
      'Second Prize of the Ministry of Education Science and Technology Progress Award (Major Contributor)',
      'Third Prize of the Huaxia Medical Science and Technology Award (Major Contributor)',
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
    level: 3,
    img: '',
    desc: 'Assistant Researcher involved in basic and translational cardiovascular research.',
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
        roles: ['first'],
      },
      {
        title: 'Nonbone Marrow CD34+ Cells Are Crucial for Endothelial Repair of Injured Artery',
        authors: 'JIANG Liujun, CHEN Ting, SUN Shasha, WANG Ruilin, DENG Jiacheng, LYU Lingxia, WU Hong, YANG Mei, PU Xiangyuan, DU Luping, CHEN Qishan, HU Yanhua, HU Xiaosheng, ZHOU Yijiang, XU Qingbo, ZHANG Li',
        venue: 'Circulation Research (2021)',
        img: '/assets/cards/publication-blue.png',
        links: [{ label: 'Circulation Research', url: 'https://doi.org/10.1161/CIRCRESAHA.121.319494' }],
      },
      {
        title: 'Novel Roles of Nrf3-Trim5 Axis in Vascular Smooth Muscle Cell Dysfunctions and Neointimal Hyperplasia',
        authors: 'CHEN Qishan, SUN Shasha, SHI Zhenning, WANG Leyu, WANG Yumeng, ZHENG Ancheng, XU Xiaolei, YANG Mei, SUN Kun, XIAO Qingzhong, ZHANG Li',
        venue: 'Cardiovascular Research (2025)',
        img: '/assets/cards/publication-sky.png',
        links: [{ label: 'Cardiovascular Research', url: 'https://doi.org/10.1093/cvr/cvaf084' }],
      },
    ],
    honors: [],
  },
  {
    slug: 'sun-yuxi',
    name: '孙玉玺 / SUN Yuxi',
    nameZh: '孙玉玺',
    role: 'Attending Physician',
    level: 3,
    img: '',
    desc: 'Attending Physician focusing on clinical management of cardiovascular diseases.',
    email: '',
    publications: [
      {
        title: 'Inhibition of Fap Promotes Cardiac Repair by Stabilizing BNP',
        authors: 'SUN Yuxi, Mengqiu Ma, Dandan Cao, Ancheng Zheng, Yiying Zhang, Yang Su, Jianfang Wang, Yanhua Xu, Mi Zhou, Yansong Tang, Yifan Liu, Teng Ma, Aoyuan Fan, Xiaoying Zhang, Qiaoling Zhu, Jiachen Qin, Chunyang Mo, Yawei Xu, ZHANG Li, Dachun Xu, Rui Yue',
        venue: 'Circulation Research (2023)',
        img: '/assets/cards/publication-sky.png',
        links: [{ label: 'Circulation Research', url: 'https://doi.org/10.1161/CIRCRESAHA.122.320933' }],
        roles: ['first'],
      },
    ],
    honors: [],
  },
  {
    slug: 'dai-bing',
    name: '戴兵 / DAI Bing',
    nameZh: '戴兵',
    role: 'Attending Physician',
    level: 3,
    img: '',
    desc: 'Attending Physician specializing in cardiovascular clinical care and interventional procedures.',
    email: '',
    publications: [],
    honors: [],
  },
  {
    slug: 'li-jinyan',
    name: '李金燕 / LI Jinyan',
    nameZh: '李金燕',
    role: 'Research Assistant',
    level: 3,
    img: '',
    desc: 'Research assistant, assisting in the operation of the laboratory and participating in basic and translational cardiovascular research.',
    email: '',
    publications: [],
    honors: [],
  },

  // ════════════════════════════════════════════
  // Level 3 — 主治医师 / 助理研究员 (continued)
  // ════════════════════════════════════════════
  {
    slug: 'xu-xiaolei',
    name: '徐肖磊 / XU Xiaolei',
    nameZh: '徐肖磊',
    role: 'Attending Physician',
    level: 3,
    img: '',
    desc: 'Attending Physician focusing on clinical management of cardiovascular diseases.',
    email: '',
    publications: [
      {
        title: 'Nrf3-Mediated Mitochondrial Superoxide Promotes Cardiomyocyte Apoptosis and Impairs Cardiac Functions by Suppressing Pitx2',
        authors: 'CHEN Qishan, Ancheng Zheng, Xiaolei Xu, Zhenning Shi, YANG Mei, Shasha Sun, Leyu Wang, Yumeng Wang, Haige Zhao, Qingzhong Xiao, ZHANG Li',
        venue: 'Circulation (2025)',
        img: '/assets/cards/nrf3-cover.png',
        links: [{ label: 'Circulation', url: 'https://doi.org/10.1161/CIRCULATIONAHA.124.070286' }],
      },
      {
        title: 'Novel Roles of Nrf3-Trim5 Axis in Vascular Smooth Muscle Cell Dysfunctions and Neointimal Hyperplasia',
        authors: 'CHEN Qishan, SUN Shasha, SHI Zhenning, WANG Leyu, WANG Yumeng, ZHENG Ancheng, XU Xiaolei, YANG Mei, SUN Kun, XIAO Qingzhong, ZHANG Li',
        venue: 'Cardiovascular Research (2025)',
        img: '/assets/cards/publication-sky.png',
        links: [{ label: 'Cardiovascular Research', url: 'https://doi.org/10.1093/cvr/cvaf084' }],
      },
    ],
    honors: [],
  },
  {
    slug: 'shi-zhenning',
    name: '石镇宁 / SHI Zhenning',
    nameZh: '石镇宁',
    role: 'Attending Physician',
    level: 3,
    img: '',
    desc: 'Attending Physician focusing on clinical management of cardiovascular diseases.',
    email: '',
    publications: [
      {
        title: 'Nrf3-Mediated Mitochondrial Superoxide Promotes Cardiomyocyte Apoptosis and Impairs Cardiac Functions by Suppressing Pitx2',
        authors: 'CHEN Qishan, Ancheng Zheng, Xiaolei Xu, Zhenning Shi, YANG Mei, Shasha Sun, Leyu Wang, Yumeng Wang, Haige Zhao, Qingzhong Xiao, ZHANG Li',
        venue: 'Circulation (2025)',
        img: '/assets/cards/nrf3-cover.png',
        links: [{ label: 'Circulation', url: 'https://doi.org/10.1161/CIRCULATIONAHA.124.070286' }],
      },
      {
        title: 'Novel Roles of Nrf3-Trim5 Axis in Vascular Smooth Muscle Cell Dysfunctions and Neointimal Hyperplasia',
        authors: 'CHEN Qishan, SUN Shasha, SHI Zhenning, WANG Leyu, WANG Yumeng, ZHENG Ancheng, XU Xiaolei, YANG Mei, SUN Kun, XIAO Qingzhong, ZHANG Li',
        venue: 'Cardiovascular Research (2025)',
        img: '/assets/cards/publication-sky.png',
        links: [{ label: 'Cardiovascular Research', url: 'https://doi.org/10.1093/cvr/cvaf084' }],
      },
    ],
    honors: [],
  },

  // ════════════════════════════════════════════
  // Level 4 — 住院医师
  // ════════════════════════════════════════════
  {
    slug: 'sun-shasha',
    name: '孙厦厦 / SUN Shasha',
    nameZh: '孙厦厦',
    role: 'Resident Physician',
    level: 4,
    img: '',
    desc: 'Resident Physician engaged in clinical cardiology training and research.',
    email: '',
    publications: [
      {
        title: 'Nrf3-Mediated Mitochondrial Superoxide Promotes Cardiomyocyte Apoptosis and Impairs Cardiac Functions by Suppressing Pitx2',
        authors: 'CHEN Qishan, Ancheng Zheng, Xiaolei Xu, Zhenning Shi, YANG Mei, Shasha Sun, Leyu Wang, Yumeng Wang, Haige Zhao, Qingzhong Xiao, ZHANG Li',
        venue: 'Circulation (2025)',
        img: '/assets/cards/nrf3-cover.png',
        links: [{ label: 'Circulation', url: 'https://doi.org/10.1161/CIRCULATIONAHA.124.070286' }],
      },
      {
        title: 'Nonbone Marrow CD34+ Cells Are Crucial for Endothelial Repair of Injured Artery',
        authors: 'JIANG Liujun, CHEN Ting, SUN Shasha, WANG Ruilin, DENG Jiacheng, LYU Lingxia, WU Hong, YANG Mei, PU Xiangyuan, DU Luping, CHEN Qishan, HU Yanhua, HU Xiaosheng, ZHOU Yijiang, XU Qingbo, ZHANG Li',
        venue: 'Circulation Research (2021)',
        img: '/assets/cards/publication-blue.png',
        links: [{ label: 'Circulation Research', url: 'https://doi.org/10.1161/CIRCRESAHA.121.319494' }],
      },
      {
        title: 'Novel Roles of Nrf3-Trim5 Axis in Vascular Smooth Muscle Cell Dysfunctions and Neointimal Hyperplasia',
        authors: 'CHEN Qishan, SUN Shasha, SHI Zhenning, WANG Leyu, WANG Yumeng, ZHENG Ancheng, XU Xiaolei, YANG Mei, SUN Kun, XIAO Qingzhong, ZHANG Li',
        venue: 'Cardiovascular Research (2025)',
        img: '/assets/cards/publication-sky.png',
        links: [{ label: 'Cardiovascular Research', url: 'https://doi.org/10.1093/cvr/cvaf084' }],
      },
    ],
    honors: [],
  },
  {
    slug: 'zheng-ancheng',
    name: '郑安成 / ZHENG Ancheng',
    nameZh: '郑安成',
    role: 'Resident Physician',
    level: 4,
    img: '',
    desc: 'Resident Physician engaged in clinical cardiology training and research.',
    email: '',
    publications: [
      {
        title: 'Nrf3-Mediated Mitochondrial Superoxide Promotes Cardiomyocyte Apoptosis and Impairs Cardiac Functions by Suppressing Pitx2',
        authors: 'CHEN Qishan, Ancheng Zheng, Xiaolei Xu, Zhenning Shi, YANG Mei, Shasha Sun, Leyu Wang, Yumeng Wang, Haige Zhao, Qingzhong Xiao, ZHANG Li',
        venue: 'Circulation (2025)',
        img: '/assets/cards/nrf3-cover.png',
        links: [{ label: 'Circulation', url: 'https://doi.org/10.1161/CIRCULATIONAHA.124.070286' }],
      },
      {
        title: 'Inhibition of Fap Promotes Cardiac Repair by Stabilizing BNP',
        authors: 'SUN Yuxi, Mengqiu Ma, Dandan Cao, Ancheng Zheng, Yiying Zhang, Yang Su, Jianfang Wang, Yanhua Xu, Mi Zhou, Yansong Tang, Yifan Liu, Teng Ma, Aoyuan Fan, Xiaoying Zhang, Qiaoling Zhu, Jiachen Qin, Chunyang Mo, Yawei Xu, ZHANG Li, Dachun Xu, Rui Yue',
        venue: 'Circulation Research (2023)',
        img: '/assets/cards/publication-sky.png',
        links: [{ label: 'Circulation Research', url: 'https://doi.org/10.1161/CIRCRESAHA.122.320933' }],
      },
      {
        title: 'Novel Roles of Nrf3-Trim5 Axis in Vascular Smooth Muscle Cell Dysfunctions and Neointimal Hyperplasia',
        authors: 'CHEN Qishan, SUN Shasha, SHI Zhenning, WANG Leyu, WANG Yumeng, ZHENG Ancheng, XU Xiaolei, YANG Mei, SUN Kun, XIAO Qingzhong, ZHANG Li',
        venue: 'Cardiovascular Research (2025)',
        img: '/assets/cards/publication-sky.png',
        links: [{ label: 'Cardiovascular Research', url: 'https://doi.org/10.1093/cvr/cvaf084' }],
      },
    ],
    honors: [],
  },
];
