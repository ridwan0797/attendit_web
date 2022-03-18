
const routes = [
  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Dashboard.vue'), meta: { name: 'Dashboard' } }
    ]
  },
  {
    path: '/pegawai',
    component: () => import('layouts/MainLayout.vue'),
    meta: { name: 'Pegawai' },
    children: [
      { path: '/pegawai/edit/:id', component: () => import('src/pages/pegawai/Form.vue'), meta: { mode: 'edit', name: 'Pegawai' } },
      { path: '/pegawai/:id', component: () => import('src/pages/pegawai/View.vue'), meta: { mode: 'view', name: 'Pegawai' } },
      { path: '/pegawai/create', component: () => import('src/pages/pegawai/NewForm.vue'), meta: { mode: 'create', name: 'Pegawai' } },
      {
        path: '',
        component: () => import('pages/pegawai/Index.vue'),
        meta: { name: 'Pegawai' },
        children: [
          // { path: '/pegawai/:id/edit', component: () => import('src/pages/pegawai/Form.vue'), meta: { mode: 'edit', name: 'Pegawai' } }
        ]
      }
    ]
  },
  {
    path: '/perusahaan',
    component: () => import('layouts/MainLayout.vue'),
    meta: { name: 'Perusahaan' },
    children: [
      {
        path: '/perusahaan/lokasi',
        component: () => import('src/pages/perusahaan/lokasi/Index.vue'),
        meta: { name: 'Lokasi Perusahaan' },
        children: [
          { path: '/perusahaan/lokasi/create', component: () => import('src/pages/perusahaan/lokasi/Form.vue'), meta: { name: 'Lokasi Perusahaan', mode: 'create' } }]
      },
      { path: '/perusahaan/lokasi/:id', component: () => import('src/pages/perusahaan/lokasi/View.vue'), meta: { name: 'Lokasi Perusahaan', mode: 'view' } },
      { path: '/perusahaan/departemen', component: () => import('src/pages/perusahaan/departemen/Index.vue'), meta: { name: 'Departemen Perusahaan' } }
    ]
  },
  {
    path: '/absensi',
    component: () => import('layouts/MainLayout.vue'),
    meta: { name: 'Absensi' },
    children: [
      { path: '/absensi/', component: () => import('src/pages/absensi/absen/Index.vue'), meta: { name: 'Data Absensi' } },
      { path: '/absensi/import-absensi', component: () => import('src/pages/absensi/import/Index.vue'), meta: { name: 'Import Absensi' } }
    ]
  },
  {
    path: '/sakit',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/sakit-izin/sakit/Index.vue'), meta: { name: 'Data Sakit' } },
      { path: '/sakit/create', component: () => import('src/pages/sakit-izin/sakit/Form.vue'), meta: { mode: 'create', name: 'Data Sakit' } },
      { path: '/sakit/edit/:id', component: () => import('src/pages/sakit-izin/sakit/Form.vue'), meta: { mode: 'edit', name: 'Data Sakit' } }
    ]
  },
  {
    path: '/izin',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/sakit-izin/izin/Index.vue'), meta: { name: 'Data Izin' } },
      { path: '/izin/create', component: () => import('src/pages/settings/hak-akses/Form.vue'), meta: { mode: 'create', name: 'izin' } },
      { path: '/izin/edit/:id', component: () => import('src/pages/settings/hak-akses/Form.vue'), meta: { mode: 'edit', name: 'izin' } }
    ]
  },
  {
    path: '/shift-kerja',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/settings/shift/Index.vue'), meta: { name: 'Shift Kerja' } },
      { path: '/shift-kerja/create', component: () => import('src/pages/settings/shift/Form.vue'), meta: { mode: 'create', name: 'Shift Kerja' } },
      { path: '/shift-kerja/edit/:id', component: () => import('src/pages/settings/shift/Form.vue'), meta: { mode: 'edit', name: 'Shift Kerja' } }
    ]
  },
  {
    path: '/hak-akses',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/settings/Index.vue'), meta: { name: 'Hak Akses' } },
      { path: '/hak-akses/create', component: () => import('src/pages/settings/hak-akses/Form.vue'), meta: { mode: 'create', name: 'Hak Akses' } },
      { path: '/hak-akses/edit/:id', component: () => import('src/pages/settings/hak-akses/Form.vue'), meta: { mode: 'edit', name: 'Hak Akses' } }
    ]
  },
  {
    path: '/announcements',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/announcements/Index.vue'), meta: { name: 'Announcements' } },
      { path: '/announcements/create', component: () => import('src/pages/announcements/Form.vue'), meta: { mode: 'create', name: 'Announcements' } },
      { path: '/announcements/edit/:id', component: () => import('src/pages/announcements/Form.vue'), meta: { mode: 'edit', name: 'Announcements' } }
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
