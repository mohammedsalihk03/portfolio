import React from 'react';
import { Download, ArrowUpRight, FileText } from 'lucide-react';
import PageIntro from '../components/common/PageIntro';
import Reveal from '../components/common/Reveal';
import { personalInfo } from '../data/portfolioData';

export default function ResumePage() {
  return (
    <div className="site-wrap pb-24">
      <PageIntro
        kicker="Resume"
        title="The document"
        description="Preview the PDF, open it in a new tab, or download a copy. The file itself is unchanged."
      />

      <Reveal className="flex flex-wrap gap-3 mb-10">
        <a
          href={personalInfo.resumePdfPath}
          download="Mohammed_Salih_K_Resume.pdf"
          className="btn-fill"
        >
          Download PDF <Download size={16} />
        </a>
        <a
          href={personalInfo.resumePdfPath}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
        >
          Open in new tab <ArrowUpRight size={16} />
        </a>
      </Reveal>

      <Reveal className="resume-frame">
        <object data={personalInfo.resumePdfPath} type="application/pdf">
          <div className="flex flex-col items-center justify-center min-h-[420px] p-10 text-center gap-4">
            <FileText size={32} />
            <p className="thought-copy max-w-md">
              This browser cannot show an embedded PDF. Download or open the file directly.
            </p>
            <a
              href={personalInfo.resumePdfPath}
              download="Mohammed_Salih_K_Resume.pdf"
              className="btn-fill"
            >
              Download PDF
            </a>
          </div>
        </object>
      </Reveal>
    </div>
  );
}
