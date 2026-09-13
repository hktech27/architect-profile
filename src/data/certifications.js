/**
 * src/data/certifications.js
 *
 * Credentials organized into four capability groups for Screen 07.
 * url: Credly or issuer verification link.
 */

export const certificationGroups = [
  {
    id: 'arch-cloud',
    group: 'Architecture & Cloud',
    items: [
      {
        name: 'AWS Certified Solutions Architect – Associate',
        url: 'https://www.credly.com/badges/ad71a8fc-ddbb-481c-a400-963a6ad2c1f2/public_url',
        issuer: 'AWS',
      },
      {
        name: 'AWS Certified Cloud Practitioner',
        url: 'https://www.credly.com/badges/fd516abd-88ed-401a-aebd-52231612a8a7/public_url',
        issuer: 'AWS',
      },
      {
        name: 'IBM Generative & Agentic AI Architect',
        url: 'https://www.credly.com/badges/bb5e8fd3-7951-44d8-a81c-4067e7c5941e/public_url',
        issuer: 'IBM',
      },
    ],
  },
  {
    id: 'ai-consulting',
    group: 'AI & Consulting',
    items: [
      {
        name: 'IBM Consulting – Core Experienced',
        url: 'https://www.credly.com/badges/74712160-0d6d-474b-be82-6eac186aabb3/public_url',
        issuer: 'IBM',
      },
      {
        name: 'IBM Generative & Agentic AI Consultant / Business Analyst',
        url: 'https://www.credly.com/badges/37dd80f1-24c9-4539-9079-c6fecc757c37/public_url',
        issuer: 'IBM',
      },
    ],
  },
  {
    id: 'industry-tech',
    group: 'Industry & Technology',
    items: [
      {
        name: 'Insurance Insights and Solutions (Silver)',
        url: 'https://www.credly.com/badges/bad5b6f0-6603-4aae-8ab9-b136066df69a/public_url',
        issuer: 'IBM',
      },
      {
        name: 'Mainframe Application Services – Full Stack zOS Application Development',
        url: 'https://www.credly.com/badges/e0204f0e-f898-4827-a4be-c106edb3144e/public_url',
        issuer: 'IBM',
      },
    ],
  },
  {
    id: 'leadership-delivery',
    group: 'Leadership & Delivery',
    items: [
      {
        name: 'IBM Associate Project Manager',
        url: 'https://www.credly.com/badges/b974f95a-a911-4aa3-9ef2-e5fb800f4593/public_url',
        issuer: 'IBM',
      },
      {
        name: 'Disciplined Agile Senior Scrum Master (DASSM)',
        url: 'https://www.credly.com/badges/48e7a92a-39a3-4111-af79-5ada0cf335a9/public_url',
        issuer: 'PMI',
      },
      {
        name: 'ITIL Foundation Certificate in IT Service Management',
        url: 'https://mylogin.exin.nl/?Script=GetLinkedInPost&CandidateCertificateGUID=4D1658C0-BBC9-410A-8A51-8FC017DCE7BF&ts=1296656078',
        issuer: 'EXIN',
      },
      {
        name: 'Certified ScrumMaster (CSM)',
        url: 'https://certification.scrumalliance.org/accounts/717624/certifications/799743',
        issuer: 'Scrum Alliance',
      },
    ],
  },
]
