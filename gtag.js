export const GA_TRACKING_ID = 'G-M65SJ1JCXL';

export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const trackButtonClick = (label) => {
  event({
    action: 'click',
    category: 'Button',
    label: label,
  });
};

export const trackArticleRead = (label) => {
  event({
    action: 'read',
    category: 'Article',
    label: label,
  });
};
