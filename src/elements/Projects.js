import React from 'react';
import ChromaGrid from '../components/reactbits/ChromaGrid';


export const Projects = () => {
  const projects = [
    {
      id: 1,
      tag: 'BI / Analytics SaaS',
      title: 'GIL — Financial Analytics Platform',
      description:
        'A multi-tenant BI SaaS at People Axis, letting businesses import financial data and view KPIs, alerts, and dashboards in real time.',
      challenge:
        'Rebuilt a multi-step CSV/Excel data-integration wizard that kept breaking on mismatched transform types and missing schema columns, then redesigned the validation flow so bad data fails predictably instead of corrupting downstream tenant data.',
      stack: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Drizzle ORM'],
    },
    {
      id: 2,
      tag: 'Multi-Portal E-Commerce',
      title: 'Rituals24 — Pooja Booking Platform',
      description:
        'A three-portal platform (admin, pandit, customer) for booking poojas, temple darshan tickets, and pooja-kit purchases.',
      challenge:
        'Three separate portals sharing one domain kept overwriting each other\u2019s session cookies. Redesigned the auth layer with role-scoped cookie names and factory-based middleware, then built guest cart/wishlist persistence that survives login without losing state.',
      stack: ['Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'AWS Chime'],
    },
    {
      id: 3,
      tag: 'Media Pipeline',
      title: 'Procevia — Social Media & Content Management SaaS',
      description:
        'A platform for managing video production workflows, versioning, and automated social media publishing.',
      challenge:
        'Built a BullMQ-driven background worker that transcodes uploaded video into HLS segments and compressed 720p renditions on Wasabi storage, plus a scheduler that queues posts across LinkedIn, YouTube, and Instagram without blocking the main app.',
      stack: ['Node.js', 'TypeScript', 'MongoDB', 'Redis', 'BullMQ', 'React'],
    },
    {
      id: 4,
      tag: 'E-Commerce',
      title: 'House of Sabha — E-Commerce Storefront',
      description:
        'A Next.js e-commerce storefront for a fashion brand, with a custom CMS for managing products, banners, and collections.',
      challenge:
        'Implemented drag-and-drop reordering for interleaved product images and banners, where naive form submission would scramble the order — solved with an imageManifest pattern that preserves exact sequence through FormData.',
      stack: ['Next.js', 'MongoDB', 'AWS S3', 'Google Analytics', 'Razorpay'],
    },
    {
      id: 5,
      tag: 'Travel & Booking',
      title: 'Trrip — Voucher & Partner System',
      description:
        'A travel voucher platform with a superadmin panel, partner-side app, and agent tools for managing customer trip vouchers.',
      challenge:
        'Built the voucher creation module and partner approval workflow from partial specs, coordinating OTP-based partner login (SMS/email) with agent-side trip status handling across two distinct user roles.',
      stack: ['React', 'Node.js', 'MongoDB'],
    },
  ];

  return (
    <div id="projects" className="container m-auto px-4 sm:px-10 py-16 relative bg-gradient-to-b from-black to-[#0d0d0d]">
      <h2 className="font-bold text-4xl sm:text-5xl mb-4" style={{ color: '#89F336' }}>
        Projects
      </h2>
      <p className="text-gray-400 text-lg mb-12 max-w-2xl">
        Production platforms built end-to-end at Anthill Networks — hover a card to see it light up.
      </p>

      <ChromaGrid items={projects} />
    </div>
  );
};