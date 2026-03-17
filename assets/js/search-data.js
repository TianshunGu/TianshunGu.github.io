// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-talks",
          title: "Talks",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Selected publications and full publication list.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-paper-titled-attribution-analysis-of-urban-social-resilience-differences-under-rainstorm-disaster-impact-insights-from-an-interpretable-spatial-machine-learning-framework-published-in-sustainable-cities-and-society-has-been-recognized-as-an-esi-highly-cited-hot-paper-this-study-integrates-interpretable-spatial-machine-learning-to-uncover-the-drivers-of-social-resilience-disparities-under-extreme-rainfall-events",
          title: '📄 Our paper titled “Attribution analysis of urban social resilience differences under rainstorm...',
          description: "",
          section: "News",},{id: "news-selected-for-the-phd-program-of-the-young-scientists-support-project-2025-by-the-china-association-for-science-and-technology-cast-this-program-supports-outstanding-early-career-researchers-and-phd-students-in-advancing-frontier-scientific-research-read-more-wechat-article-in-chinese",
          title: '🏆 Selected for the PhD Program of the Young Scientists Support Project (2025)...',
          description: "",
          section: "News",},{id: "news-our-study-on-the-intensification-of-spatiotemporal-clustering-of-extreme-precipitation-under-urbanization-has-been-published-in-journal-of-hydrology-jcr-q1-top-tier-this-work-provides-new-insights-into-how-urbanization-reshapes-the-organization-and-persistence-of-extreme-rainfall-events-read-more-wechat-article-in-chinese",
          title: '📄 Our study on the intensification of spatiotemporal clustering of extreme precipitation under...',
          description: "",
          section: "News",},{id: "news-our-study-on-the-attribution-of-spatially-compounding-heatwave-flood-events-has-been-published-in-journal-of-geophysical-research-atmospheres-nature-index-journal-this-work-advances-the-understanding-of-compound-climate-extremes-by-disentangling-the-mechanisms-driving-the-co-occurrence-of-heatwaves-and-flooding-at-regional-scales-read-more-wechat-article-in-chinese",
          title: '📄 Our study on the attribution of spatially compounding heatwave–flood events has been...',
          description: "",
          section: "News",},{id: "news-invited-by-dr-yan-zhang-i-participated-in-the-gischat-seminar-series-no-26-host-gis-building-and-managing-my-own-platform-using-urban-geography-illumination-a-public-science-communication-platform-on-urban-geography-as-a-case-study-i-shared-the-journey-of-building-and-developing-this-platform-along-with-reflections-on-its-evolution-and-future-direction-full-article-wechat-in-chinese",
          title: '🎤 Invited by Dr. Yan Zhang, I participated in the GISChat Seminar Series...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%75%74%73%67%65%6F@%63%75%67.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/TianshunGu", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-6359-8028", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=_F0Jv-kAAAAJ", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
