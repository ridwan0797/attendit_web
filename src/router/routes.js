
const routes = [
  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Dashboard.vue') }
    ]
  },
  {
    path: '/pegawai',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/pegawai/Index.vue') },
      { path: '/pegawai/create', component: () => import('pages/pegawai/Form.vue') }
    ]
  },
  {
    path: '/perusahaan',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/perusahaan/lokasi', component: () => import('src/pages/perusahaan/lokasi/Index.vue') },
      { path: '/perusahaan/departemen', component: () => import('src/pages/perusahaan/departemen/Index.vue') }
    ]
  },
  {
    path: '/absensi',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/absensi/absen/Index.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Login.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
