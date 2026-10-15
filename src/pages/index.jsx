import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import styles from './index.module.css';

const quickStart = `pu_options_page([
    'id'       => 'theme-settings',
    'title'    => 'Theme Settings',
    'ui_theme' => 'air',
    'sections' => [
        pu_section('general', [
            pu_text('site_title', ['label' => 'Site title']),
            pu_color('brand_color', ['label' => 'Brand color']),
            pu_toggle('sticky_header', ['label' => 'Sticky header']),
        ]),
    ],
]);`;

const features = [
  ['⚡', 'Modern API', '53 field types, responsive design controls, conditional logic, options pages and metaboxes.'],
  ['↩', 'Vafpress compatible', 'Remove the abandoned Vafpress runtime and migrate existing themes progressively without losing stored data.'],
  ['🔒', 'Secure by default', 'Central sanitization and validation, safe legacy boundaries, concurrent-save protection and inert code storage.'],
];

export default function Home() {
  return (
    <Layout title="Pressundo Framework" description="Modern WordPress options and metaboxes with Vafpress compatibility.">
      <main>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroGrid}>
              <div>
                <div className={styles.eyebrow}>PRESSUNDO FRAMEWORK · PUBLIC API V1</div>
                <h1><Translate id="home.hero.title">Modern WordPress options, without legacy baggage.</Translate></h1>
                <p className={styles.lead}><Translate id="home.hero.subtitle">Build modern options pages and metaboxes — or remove Vafpress from existing projects and migrate progressively.</Translate></p>
                <div className={styles.actions}>
                  <Link className="button button--primary button--lg" to="/getting-started/installation"><Translate id="home.getStarted">Get started</Translate></Link>
                  <Link className="button button--secondary button--lg" to="/vafpress-migration"><Translate id="home.migrate">Migrate from Vafpress</Translate></Link>
                </div>
                <div className={styles.metrics}>
                  <div><strong>53</strong><span><Translate id="home.metric.fields">field types</Translate></span></div>
                  <div><strong>3</strong><span><Translate id="home.metric.skins">UI skins</Translate></span></div>
                  <div><strong>20/20</strong><span><Translate id="home.metric.vafpress">Vafpress fields</Translate></span></div>
                  <div><strong>v1</strong><span><Translate id="home.metric.api">public API</Translate></span></div>
                </div>
              </div>
              <div className={styles.codeCard}>
                <div className={styles.codeHeader}><span>theme-options.php</span><span>● ● ●</span></div>
                <CodeBlock language="php">{quickStart}</CodeBlock>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.featureGrid}>{features.map(([icon,title,body]) => (
              <article className={styles.feature} key={title}><div className={styles.featureIcon}>{icon}</div><h2>{title}</h2><p>{body}</p></article>
            ))}</div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.paths)}>
          <div className="container">
            <div className={styles.sectionHeading}><span>CHOOSE YOUR PATH</span><h2><Translate id="home.path.title">Start new, or modernize what already works.</Translate></h2></div>
            <div className={styles.pathGrid}>
              <article><span className={styles.badge}>NEW PROJECT</span><h3>Build with the modern API</h3><p>Start with <code>pu_options_page()</code>, <code>pu_metabox()</code> and the complete field library.</p><Link to="/getting-started/quick-start">Open the 5-minute quick start →</Link></article>
              <article><span className={styles.badge}>EXISTING THEME</span><h3>Remove Vafpress safely</h3><p>Keep <code>VP_Option</code> and <code>VP_Metabox</code> temporarily, preserve existing data, then migrate one field at a time.</p><Link to="/vafpress-migration/remove-vafpress">Read the migration guide →</Link></article>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className="container"><div className={styles.ctaInner}><div><span>READY?</span><h2>Build your first Pressundo options page.</h2></div><Link className="button button--primary button--lg" to="/getting-started/quick-start">Quick start</Link></div></div>
        </section>
      </main>
    </Layout>
  );
}
