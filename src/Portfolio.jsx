import React from "react";
import "./Portfolio.css";

const projects = [
  {
    type: "01 · Network security",
    title: "Rogue Device Authenticator",
    status: "In progress",
    description:
      "A local-network security project exploring device discovery, trusted-device verification, and suspicious-device detection.",
    tags: ["ARP", "Nmap", "Python", "Flask", "SQLite"],
    details:
      "The design combines local-network discovery, a SQLite device registry, decision logic, and a Flask dashboard. The available context describes trusted, pending, and rogue device states, but final implementation and hardening still require verification.",
    sections: [
      ["Security motivation", "Unknown devices on a local network can be an early signal of misconfiguration or unauthorized access. RDA is intended to make that signal visible and give an analyst a repeatable review path."],
      ["Architecture and data flow", "A discovery pass identifies local hosts; ARP observations and Nmap fingerprinting provide device attributes; the registry stores known-device information; decision logic assigns a review state; the Flask dashboard and logs expose the result."],
      ["Trust model", "The proposed state model is trusted, pending, or rogue. A match against a registry can support triage, but it should not be treated as proof of identity. Zero Trust principles require verification and least privilege rather than implicit trust."],
      ["Testing and evidence to capture", "Capture the source files, a sanitized discovery output, registry records for each state, dashboard screenshots, log entries, and repeatable test scenarios for known, new, changed, and unavailable devices."],
      ["Limitations and future work", "MAC addresses can be spoofed and OS fingerprints are probabilistic. Automated blocking with iptables is proposed unless the implementation and safe rollback behavior are verified. Future work includes stronger identity signals, alert review, and controlled response testing."],
    ],
  },
  {
    type: "02 · Network engineering",
    title: "Kivu Microfinance Bank — Network Design",
    status: "Case study",
    description:
      "An enterprise-network design case study focused on structure, segmentation, connectivity, and security controls for a microfinance environment.",
    tags: ["Network design", "Subnetting", "Segmentation"],
    details:
      "This case study frames an enterprise network for a microfinance environment around business services, separation of trust zones, controlled inter-network communication, and manageable administration.",
    sections: [
      ["Requirements and design rationale", "Record the services, user groups, sensitive data flows, availability needs, and administrative boundaries that drive the design. Security decisions should be traceable to those requirements."],
      ["Topology and addressing", "Document the topology, address plan, subnet boundaries, and naming conventions. Exact subnets, VLAN IDs, device counts, and routing protocols are intentionally not stated until the design files confirm them."],
      ["Controls and validation", "Describe routing between zones, access-control intent, management access, and infrastructure hardening. Validate required paths and denied paths separately, then retain the topology, configuration excerpts, and test table as evidence."],
      ["Trade-offs and next record", "A segmented design improves containment but adds routing and administration complexity. The next evidence needed is the actual diagram, addressing plan, policy matrix, and observed connectivity results."],
    ],
  },
  {
    type: "03 · Ethical hacking lab",
    title: "Metasploitable 2 — Security Assessment",
    status: "Lab assessment",
    description:
      "A controlled, intentionally vulnerable lab for learning service enumeration, identifying weaknesses, and translating findings into remediation priorities.",
    tags: ["Kali Linux", "Nmap", "Enumeration"],
    details:
      "This is an authorized, isolated assessment workflow for an intentionally vulnerable target. The portfolio records the method without claiming open ports, vulnerabilities, exploits, or severity ratings that have not been verified.",
    sections: [
      ["Scope and safety", "Define the isolated lab boundary, target address, authorization, snapshot or reset process, and activities that are explicitly in scope. Do not assess systems outside that boundary."],
      ["Reconnaissance and enumeration", "Use Kali Linux and Nmap where supported by the lab context to establish host reachability and enumerate services. Insert the verified command output and target details before drawing conclusions."],
      ["Assessment and evidence", "For every observed service, record the evidence, the assessment question, the reproducible steps, and the affected component. Separate an observed version or banner from a confirmed vulnerability."],
      ["Remediation and retest", "Map confirmed findings to a remediation recommendation, then repeat the relevant check after the change. Evidence should include sanitized output and a clear before-versus-after explanation."],
    ],
  },
  {
    type: "04 · Security analytics",
    title: "Wireless Anomaly Detection",
    status: "Validation needed",
    description:
      "An analytical project exploring how unusual wireless-network activity might be identified from observed data.",
    tags: ["Python", "Data analysis", "Anomaly detection"],
    details:
      "The objective is to identify unusual wireless-network behavior without overstating what the data can prove. The implementation, dataset, and evaluation protocol must determine whether the result is rule-based or model-based.",
    sections: [
      ["Detection problem", "Define what counts as unusual behavior, which network entities are observed, and what decision the analysis is expected to support."],
      ["Data and methodology", "Record the dataset source, collection window, fields, labels, preprocessing, and selected features. Do not name a model or dataset until it is present in the project evidence."],
      ["Evaluation", "Use a held-out evaluation approach where appropriate and report precision, recall, false positives, false negatives, and a confusion matrix only when their definitions and context are recorded."],
      ["Limitations and next step", "Wireless datasets can be biased by environment, device mix, and collection conditions. Confirm generalization with additional representative traffic and document the evaluation protocol before publishing a result."],
    ],
  },
  {
    type: "05 · Network defense",
    title: "Network Segmentation & Defense",
    status: "Planned",
    description:
      "A defensive design case study covering separation of network zones, access policies, and how connectivity should be restricted between systems.",
    tags: ["VLANs", "ACLs", "Firewall policy"],
    details:
      "This planned defense case study will explain how trust boundaries, least-privilege communication, and policy verification work together. It is not presented as an implemented or tested segmentation deployment.",
    sections: [
      ["Threat model", "Define the assets, likely unauthorized paths, trust boundaries, and security objectives before choosing zones or controls."],
      ["Zones and policy", "Document the proposed VLAN or subnet separation, routing boundaries, ACL or firewall intent, management access, and monitoring points. Exact configuration belongs here once supplied."],
      ["Validation plan", "Test required service flows as positive cases and prohibited flows as negative cases. Record expected versus actual behavior, policy versions, and any exceptions."],
      ["Limitations", "A design diagram alone does not prove enforcement. Implementation status should change only after configurations and repeatable connectivity results are available."],
    ],
  },
  {
    type: "06 · Network investigation",
    title: "DNS & Packet Analysis",
    status: "Lab / document evidence",
    description:
      "A technical investigation into DNS requests and responses, protocol behavior, and packet-level evidence using controlled lab traffic.",
    tags: ["DNS", "Wireshark", "Linux", "TCP/IP"],
    details:
      "This investigation follows DNS requests and responses at packet level, correlating transactions and protocol fields to explain observed behavior. No capture result is claimed without a supplied PCAP or sanitized analysis record.",
    sections: [
      ["Lab setup and objective", "Record the client, resolver, test condition, capture interface, and question being investigated. Keep the capture environment controlled and reproducible."],
      ["Wireshark workflow", "Use a capture filter or display filter appropriate to the question, then correlate request and response identifiers, names, response codes, and timing. Record the exact filter used."],
      ["Interpretation", "Distinguish observed packets from conclusions. Relevant record types and protocol fields should be discussed only when present in the capture and needed to answer the investigation question."],
      ["Security implications and limits", "DNS observations can support troubleshooting or identify suspicious patterns, but a capture has limited visibility into encrypted or off-path activity. Preserve the PCAP, filter, annotated packets, and conclusion together."],
    ],
  },
];

const skillGroups = [
  {
    title: "Network security",
    skills: [
      { name: "Network Security", level: "Project experience" },
      { name: "Computer Networking", level: "Practiced" },
      { name: "Cyber Security Risk", level: "Learning" },
    ],
  },
  {
    title: "Security analysis",
    skills: [{ name: "Threat detection concepts", level: "Learning" }],
  },
  {
    title: "Systems & tools",
    skills: [
      { name: "Linux", level: "Practiced" },
      { name: "Wireshark", level: "Practiced" },
      { name: "Git & GitHub", level: "Learning" },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "Python", level: "Practiced" },
      { name: "Scripting", level: "Learning" },
    ],
  },
];

function ProjectCaseStudy({ project, index }) {
  return (
    <details className="project-card">
      <summary>
        <span className="project-number">0{index + 1}</span>
        <span className="project-details">
          <span className="project-type">{project.type}</span>
          <span className="project-title-row">
            <span className="project-title">{project.title}</span>
            <span className={`project-status status-${project.status.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
              {project.status}
            </span>
          </span>
          <span className="project-description">{project.description}</span>
          <span className="tags">
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </span>
        </span>
        <span className="project-arrow" aria-hidden="true">↗</span>
      </summary>
      <div className="case-study">
        <p className="case-study-label">Technical case study</p>
        <p>{project.details}</p>
        <div className="case-study-grid">
          {project.sections.map(([title, content]) => (
            <span key={title}><strong>{title}</strong><small>{content}</small></span>
          ))}
        </div>
        <p className="case-study-footer">Evidence status: methodology is described above; publish findings only when the underlying files, captures, diagrams, or test records are available.</p>
      </div>
    </details>
  );
}

export default function Portfolio() {
  return (
    <div className="portfolio">
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Benedict Kirui home">
          BK<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <a
          className="nav-linkedin"
          href="https://www.linkedin.com/in/benedict-kirui-413540357/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>
      </nav>

      <main id="top">
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow">Cybersecurity <span>·</span> Network defense <span>·</span> Security analysis</p>
            <h1>
              I investigate how
              <br />
              systems fail.
              <br />
              <em>Then I defend them.</em>
            </h1>
            <p className="hero-intro">
              I&apos;m Benedict Kirui, a Computer Networks & Cyber Security
              student at Strathmore University in Nairobi. I build security
              labs, investigate network behavior, and document what I learn
              through practical projects.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <span>↘</span>
              </a>
              <a className="button button-quiet" href="#contact">
                Get in touch
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <img
              src={`${process.env.PUBLIC_URL}/images/benedict-portrait.png`}
              alt="Portrait of Benedict Kirui"
              className="hero-profile-photo"
            />
            <div className="hero-photo-ring" aria-hidden="true" />
            <div className="status-card">
              <span className="status-dot" />
              <span>Hands-on security learning</span>
            </div>
          </div>
        </section>

        <div className="rule shell" />

        <section className="about shell section-grid" id="about">
          <div className="section-label">
            <span>01</span>
            <span>About me</span>
          </div>
          <div className="section-content about-content">
            <h2>Curious by nature. Methodical by design.</h2>
            <p className="large-copy">
              I&apos;m Benedict Kirui, a Computer Networks & Cyber Security
              student at Strathmore University, Nairobi, Kenya. I&apos;m
              interested in what happens beneath the surface of a network: how
              devices communicate, how weaknesses appear, and how systems can
              be monitored and defended.
            </p>
            <p>
              My learning is built around practical work. I explore network
              discovery, traffic analysis, Linux administration, security
              testing, and defensive system design through labs and technical
              projects.
            </p>
            <p>
              I&apos;m developing toward network security engineering and
              security analysis, with a focus on understanding the evidence
              behind a finding, documenting the investigation, and improving
              the system afterward.
            </p>
            <div className="facts">
              <div>
                <strong>04</strong>
                <span>Technical projects</span>
              </div>
              <div>
                <strong>06</strong>
                <span>Confirmed skills</span>
              </div>
              <div>
                <strong>2026</strong>
                <span>Learning target</span>
              </div>
            </div>
          </div>
        </section>

        <section className="work shell section-grid" id="work">
          <div className="section-label">
            <span>02</span>
            <span>Technical work</span>
          </div>
          <div className="section-content">
            <div className="section-heading">
              <h2>From network behavior to security decisions.</h2>
              <span className="muted">Labs, investigations & systems</span>
            </div>
            <div className="project-list">
              {projects.map((project, index) => <ProjectCaseStudy key={project.title} project={project} index={index} />)}
            </div>
          </div>
        </section>

        <section className="skills shell section-grid" id="skills">
          <div className="section-label">
            <span>03</span>
            <span>Technical toolkit</span>
          </div>
          <div className="section-content">
            <div className="section-heading">
              <h2>Tools for understanding and defense.</h2>
              <span className="muted">Hands-on & developing</span>
            </div>
            <div className="skill-grid">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  {group.skills.map((skill) => (
                    <div className="skill-item" key={skill.name}>
                      <span>{skill.name}</span>
                      <small>{skill.level}</small>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="education-card">
              <span className="education-mark">SU</span>
              <div>
                <p className="project-type">Education</p>
                <h3>Strathmore University</h3>
                <p>Building foundations in networking, systems, security principles, and practical problem-solving.</p>
              </div>
              <span className="muted">Nairobi, KE</span>
            </div>
            <div className="community-card">
              <span className="community-mark">+</span>
              <div>
                <p className="project-type">Community</p>
                <h3>Strathmore Cyber Security Group</h3>
                <p>Active member learning, sharing, and growing with the cybersecurity community.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact shell" id="contact">
          <p className="eyebrow">04 · Get in touch</p>
          <h2>Good security starts<br />with <em>better questions.</em></h2>
          <p className="contact-intro">
            I&apos;m open to connecting with cybersecurity professionals,
            collaborating on technical projects, and learning from people
            building secure systems.
          </p>
          <a className="contact-email" href="mailto:bndctkirui@gmail.com">
            bndctkirui@gmail.com <span>↗</span>
          </a>
          <div className="contact-links">
            <a href="https://github.com/Artof-cod3" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/benedict-kirui-413540357/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://www.instagram.com/_.ben.nn_/" target="_blank" rel="noreferrer">Instagram · @_.ben.nn_ ↗</a>
          </div>
        </section>
      </main>

      <footer className="footer shell">
        <span>© 2026 Benedict Kirui</span>
        <span>Built with curiosity & care.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
