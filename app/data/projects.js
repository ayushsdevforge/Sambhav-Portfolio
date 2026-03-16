export const projects = [
  {
  id: 1,
  title: 'VulnSage – AI Powered Vulnerability Scanner',
  description: 'Developed an AI-powered vulnerability assessment tool that scans web applications to identify security weaknesses such as SQL Injection, XSS, and misconfigurations. The system analyzes application behavior, detects vulnerabilities, and generates detailed security reports to assist in faster remediation.',
  image: '/images/vulnsage.jpeg',
  tags: ['Python', 'AI', 'Vulnerability Assessment', 'Web Security', 'OWASP', 'Automation'],
  featured: true,
  details: [
    'Automated scanning of web applications for security vulnerabilities',
    'Detection of common OWASP Top 10 vulnerabilities such as SQL Injection and XSS',
    'AI-assisted analysis for identifying potential security risks',
    'Detailed vulnerability reports with severity classification',
    'Helps developers and security teams quickly remediate issues'
  ],
  github: 'https://github.com/sambhavmehra/vulnsage',
  demo: null
}
,
  {
    id: 2,
    title: 'Integration of SIEM with IDS',
    description: 'Developed a custom IDS and SIEM system that monitors real-time network traffic, detects threats using rule-based and ML techniques, auto-blocks malicious IPs, and provides centralized logging and alerting for rapid incident response.',
    image: '/images/siem.jpeg',
    tags: ['Python', 'Streamlit', 'IDS', 'SIEM', 'Machine Learning', 'Network Security'],
    featured: true,
    details: [
      'Real-time network traffic monitoring and analysis',
      'Rule-based and ML-powered threat detection',
      'Automatic IP blocking for malicious actors',
      'Centralized logging and alerting system',
      'Rapid incident response capabilities'
    ],
    github: 'https://github.com/sambhavmehra/siem-ids-integration',
    demo: null
  }
,
  {
    id: 3,
    title: 'SHARVA: Cyber Security Chatbot',
    description: 'Developed SHARVA, a Linux-based advanced AI assistant with dual functionality, offering both a general mode for everyday tasks and a specialized security mode for cybersecurity professionals.',
    image: '/images/sharva.png',
    tags: ['Python', 'Groq API', 'AI', 'Chatbot', 'Linux', 'Cybersecurity'],
    featured: true,
    details: [
      'Dual-mode AI assistant (General & Security)',
      'Linux-based implementation',
      'Specialized cybersecurity knowledge base',
      'Natural language processing for security queries',
      'Integration with security tools and databases'
    ],
    github: 'https://github.com/sambhavmehra/sharva-chatbot',
    demo: null
  },
  {
    id: 4,
    title: 'SOAR SOC Assistant',
    description: 'Developed a comprehensive SOAR platform for SOC teams with integration of virtual chatbot assistant, AI-powered incident analysis, automated response, auto-block threats, and AI report generation.',
    image: '/images/soar.png',
    tags: ['Python', 'Flask', 'React', 'Agentic AI', 'ML', 'SOAR', 'SOC'],
    featured: true,
    details: [
      'Virtual chatbot assistant for SOC teams',
      'AI-powered incident analysis and classification',
      'Automated threat response and mitigation',
      'Automatic threat blocking capabilities',
      'AI-generated security reports and insights'
    ],
    github: 'https://github.com/sambhavmehra/soar-soc-assistant',
    demo: null
  },
  {
    id: 5,
    title: 'Secure Electronic Health Records (SEHR)',
    description: 'A blockchain-based system that allows patients to securely upload, store, manage, and share their medical records with full privacy, integrity, and controlled access through decentralized ledger technology.',
    image: '/images/sehr.jpeg',
    tags: ['Python', 'Blockchain', 'MetaMask', 'Ganache', 'HTML', 'CSS', 'JavaScript'],
    featured: true,
    details: [
      'Blockchain-based secure storage',
      'Patient-controlled access management',
      'Decentralized ledger for data integrity',
      'Privacy-preserving record sharing',
      'MetaMask integration for authentication'
    ],
    github: 'https://github.com/sambhavmehra/secure-ehr',
    demo: null
  }
];
