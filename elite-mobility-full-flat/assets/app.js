
// Catálogo & reservas (localStorage)
const DEFAULT_VEHICLES=[
  { id:'hiace-2022', brand:'Toyota', model:'Hiace', year:2022, type:'Van', seats:12, transmission:'Automática', pricePerDay:1850, img:'https://images.unsplash.com/photo-1608897013039-887f21d8e2fe?q=80&w=1200&auto=format&fit=crop' },
  { id:'urvan-2020', brand:'Nissan', model:'Urvan', year:2020, type:'Van', seats:15, transmission:'Manual', pricePerDay:1950, img:'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1200&auto=format&fit=crop' },
  { id:'versa-2023', brand:'Nissan', model:'Versa', year:2023, type:'Sedán', seats:5, transmission:'Automática', pricePerDay:780, img:'https://images.unsplash.com/photo-1619767886558-efdc259cde1b?q=80&w=1200&auto=format&fit=crop' },
  { id:'xtrail-2023', brand:'Nissan', model:'X-Trail', year:2023, type:'SUV', seats:7, transmission:'Automática', pricePerDay:1490, img:'https://images.unsplash.com/photo-1619767886543-9a3a0ab9c169?q=80&w=1200&auto=format&fit=crop' },
  { id:'jetta-2021', brand:'Volkswagen', model:'Jetta', year:2021, type:'Sedán', seats:5, transmission:'Automática', pricePerDay:980, img:'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop' }
];
const EXTRA_CATALOG=[
  { id:'seguro-ampliado', name:'Seguro ampliado', pricePerDay:180 },
  { id:'silla-bebe', name:'Silla para bebé', pricePerDay:60 },
  { id:'entrega-domicilio', name:'Entrega a domicilio', priceFlat:250 }
];
const DEFAULT_SETTINGS={
  companyName:'Elite Mobility Rentas', logoUrl:'', rfc:'', address:'', phone:'', email:'',
  depositDefault:3000, fuelPolicy:'Tanque lleno / lleno',
  cancellationPolicy:'Cancelación sin costo 48h antes. Después: 1 día de renta.',
  terms:'Conductor mayor de 25 años, licencia vigente, identificación oficial.'
};
const currency=n=>new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(n||0);
const uid=()=>Math.random().toString(36).slice(2,10);
const diffDays=(a,b)=>{ if(!a||!b) return 0; const A=new Date(a),B=new Date(b); const ms=B.setHours(12,0,0,0)-A.setHours(12,0,0,0); return Math.max(0,Math.ceil(ms/86400000)); };
const getSettings=()=>JSON.parse(localStorage.getItem('renta.settings')||'null')||DEFAULT_SETTINGS;
const setSettings=s=>localStorage.setItem('renta.settings',JSON.stringify(s));
const getBookings=()=>JSON.parse(localStorage.getItem('renta.bookings')||'[]');
const setBookings=arr=>localStorage.setItem('renta.bookings',JSON.stringify(arr));
window.Renta={DEFAULT_VEHICLES,EXTRA_CATALOG,DEFAULT_SETTINGS,currency,uid,diffDays,getSettings,setSettings,getBookings,setBookings};
