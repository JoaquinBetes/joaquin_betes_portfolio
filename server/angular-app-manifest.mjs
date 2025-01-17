
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/joaquin_betes_portfolio/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 8025, hash: '5d019c53f8118f10d38db6fd5c4966bcde945637d25ab523eeeb3d41090f32ff', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1232, hash: 'f15fa8437502e6524343490d8f3253bf26c8b2dd1e4bab819468c5a9f2ba3f8e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-PWJBKSSL.css': {size: 341153, hash: '4hBG488Jrqs', text: () => import('./assets-chunks/styles-PWJBKSSL_css.mjs').then(m => m.default)}
  },
};
