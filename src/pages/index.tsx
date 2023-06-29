import React from 'react'
import clsx from 'clsx'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'

import styles from './index.module.css'

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext()
    return (
        <header style={{ background: 'url(social.png) center/cover no-repeat' }} className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
            </div>
        </header>
    )
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext()
    return (
        <Layout
            title={siteConfig.title}
            description={siteConfig.tagline}>
            <HomepageHeader />
            <main>
                <div className="container">
                    <p>
                    This documentation covers everything you might want to know about Payday 2 Shaders.<br/>
                    And is very much a work in progress.<br/>
                    <br/>
                    Begin by reading the <a href="docs/intro">Introduction</a> to get a general idea of what this is all about.<br/>
                    </p>
                </div>
            </main>
        </Layout>
    )
}
